# Architecture

## Organização em micro-services

![Micro-services architecture](/img/image2.jpg "Micro-services")

### Citrus

O Citrus é uma interface de usuário baseada na web que é usada no LEMONADE para criar fluxos de trabalho. Os usuários podem escolher entre um conjunto de operações predefinidas que integrarão o fluxo de trabalho, arrastando-as e soltando-as na área indicada. Entre as operações, há tarefas para ler e gravar dados em diferentes formas de armazenamento, como sistemas de arquivos (inclusive distribuídos, como HDFS) e banco de dados.

Cada operação é agrupada por categoria e configurada por meio de formulários, incluindo parâmetros para execução, aparência, qualidade de serviço (QoS) e configurações de segurança e privacidade. O Citrus interage com o componente Tahiti para recuperar metadados de operações e persistir fluxos de trabalho, e também com o componente Limonero para recuperar e salvar metadados de fontes de dados.

O status de execução do fluxo de trabalho é fornecido pelo LEMONADE Stand e é integrado com o Citrus usando *web sockets*.


### Tahiti

O Tahiti gerencia os metadados associados às operações. As operações são a menor unidade de processamento e representam uma tarefa de granularidade alta executada em um dos *backends* suportados. Atualmente, a LEMONADE suporta  extração, transformação, carregamento (ETL) e algumas operações de aprendizagem de máquina. Novas operações podem ser implementadas se o *framework* de processamento subjacente às suportar. Metadados incluem nome da operação, descrição, parâmetros e portas. Portas são pontos de comunicação que possuem direção (entrada e saída), multiplicidade (quantas conexões suportadas) e devem “implementar” interfaces para garantir a compatibilidade entre as operações. Cada operação tem um conjunto de parâmetros agrupados como formulários. Os formulários são organizados em classes diferentes, por exemplo, execução, segurança e privacidade, qualidade de serviço, aparência, relatório e registro.

Para fornecer extensibilidade, todas as operações do LEMONADE são definidas em dois componentes: Tahiti e Juicer. O Tahiti mantém todos os metadados da operação, incluindo os seus nomes, portas e formulários relacionados, e também disponibiliza essas informações por meio de uma API, que é utilizada pelo Citrus quando se inicia o processo de renderização da interface do usuário. Embora o Tahiti seja utilizado com o Citrus, eliminamos a dependência entre a interface e as abstrações disponíveis. Ainda há uma forte dependência entre os metadados gerenciados pelo Tahiti e o componente de execução, o Juicer. Para criar ou modificar uma nova operação, o desenvolvedor deve inserir ou atualizar as informações no Tahiti e implementar as mudanças diretamente no código-fonte do Juicer.


Existe outra classe de metadados relacionada com as fontes de dados. Em uma decisão de *design*, escolhemos manter, para cada fonte de dados disponível no LEMONADE, metadados sobre permissões de acesso do usuário, atributos (incluindo nome, tipo de dados, precisão, tamanho, capacidade de anulação, se eles são rótulos (labels) ou *features* e seus dados estatísticos, distribuição, quantos erros, média, valores máximos e mínimos, etc.) e o formato dos dados (CSV, JSON, Parquet, etc). Essas informações são utilizadas na leitura de dados para evitar interpretações errôneas de formatos, validar a entrada e o fluxo de trabalho, otimizar a leitura e, finalmente, integrar mais facilmente com o componente de visualização, Caipirinha (mais detalhes adiante).


### Limonero

O Limonero é semelhante ao Tahiti, mas em vez de manter metadados sobre as operações, ele mantém informações de metadados sobre as fontes de dados. As fontes de dados podem ser entradas para os fluxos de trabalho e também criadas por eles como saída. Os metadados de uma fonte de dados incluem: Localidade: onde os dados estão localizados e em qual tecnologia de armazenamento (por exemplo, HDFS). Formato e estrutura de dados: se os dados estiverem no formato JSON, quais são as colunas e seus tipos de dados, e se qualquer coluna é opcional, se for uma *feature* ou um rótulo (label). Restrições de acesso: propriedade de conjuntos de dados, autorização e privacidade. Estatísticas sobre os dados: número de registros, tamanho em MB, informações específicas da coluna como número de registros perdidos, valores de mín/máx/média/mediana, decil da distribuição, etc. Metadados são usados pela interface web para habilitar ou desabilitar visualizações de dados e operações, de acordo com dados/visualização e compatibilidade de dados/operação. Atualmente: *upload* de fonte de dados, em breve download da fonte de dados.

### Juicer

O Juicer tem quatro responsabilidades principais: Receber uma especificação de fluxo de trabalho (JSON) do Stand e convertê-la em código executável (transpilar operações para o respectivo código de tecnologia subjacente). Executar o código gerado, controlando o fluxo de execução. Reportar status de execução para o Stand. Interagir com a API do Limonero para criar novos conjuntos de dados e registrar os seus metadados. O Juicer irá gerar o código direcionado a uma plataforma de processamento distribuída, tal como o Spark e o BSC COMPSssão executados no modo batch. Versões futuras podem implementar suporte para execução interativa. Sendo uma abstração de nível superior, o LEMONADE não mapeia todas as operações existentes na tecnologia subjacente. Mas as operações de “caixa preta” que executam código de baixo nível podem ser registradas e usadas em um fluxo de trabalho.

### Thorn


O Thorn controla a autenticação e a autorização. A versão atual usa um esquema de banco de dados personalizado. Versões futuras podem ser integradas com as tecnologias existentes, como o *OpenStack Keystone*. e integração com o LDAP (autenticação). O Thorn não é usado quando os componentes estão se comunicando: a autenticação é baseada em tokens estáticos que estão definidos nos arquivos de configuração.

Este é o módulo responsável por fornecer restrições de segurança e privacidade no LEMONADE.

![Micro-services interaction](/img/image3.jpg "Micro-services interaction")


### Stand

O Stand é um façade (facade) entre a interface do usuário (Citrus) e o *back-end* de execução (Juicer). Ele recebe solicitações de execução do fluxo de trabalho e as coloca em uma fila (esta*mos usando uma fila implementada no Redis). O Juicer consome a fila de execução e, para cada fluxo de trabalho e tarefa em execução, relata os seus status em um banco de dados persistente (MySQL) e em um tópico *publisher-subscriber* no Redis. O Stand subscreve cada tópico e relata o status de execução para o Citrus usando *web sockets*.

O Citrus permite que os usuários iniciem uma execução do fluxo de trabalho e o Juicer é responsável por recuperar as informações sobre a execução a partir da plataforma de execução subjacente. Para manter os dois componentes desacoplados, é necessário um terceiro, o Stand.

A interface do usuário deve ser responsiva, enquanto o *back-end* é o processamento em lote do fluxo de trabalho. O Stand separa os dois componentes usando a comunicação assíncrona, implementada como uma fila produtor-consumidor no Redis. Quando um usuário aciona a execução de um fluxo de trabalho, o Citrus invoca o Stand para executar o trabalho (1a) e também se conecta a um websocket que fornece feedback para a interface do usuário (1b). O Stand recebe a solicitação e a coloca em uma fila (2a) e começa a consumir o status da fila (2b) que alimenta o *websocket*. O Juicer consome a fila de execução (3a) e, novamente, relata o status de execução, enviando-a para um tópico publisher-subscriber no Redis (volátil) e atualizando as linhas no MySQL (persistente) (5). Em seguida, o Citrus recebe as notificações sobre o *status* da execução das tarefas (6) e atualiza a interface.

![Micro-services interaction](/img/image4.jpg "Micro-services interaction")

### Caipirinha

O Caipirinha é o serviço de LEMONADE responsável por fornecer as configurações para a visualização de dados. Ele usa as informações de metadados sobre os conjuntos de dados fornecidas pelo Limonero. Ainda está sendo projetado: Identificação de requisitos,  Modelagem de domínio, Desafios em usabilidade e experiência do usuário em aplicações web. A versão final será “centrada em exploração de dados”: em vez de iniciar a partir de um fluxo de trabalho e gerar uma visualização, a versão final permitirá que os usuários iniciem a partir dos dados, criem visualizações, definam parâmetros e, em seguida, o fluxo de trabalho é gerado (e processado).
Um requisito importante do LEMONADE é fornecer *feedback* aos usuários sobre a execução das tarefas e os resultados. Quando uma tarefa modifica um dado de entrada, o usuário deve poder analisar os dados resultantes inspecionando-os diretamente (por exemplo, usando uma tabela) ou visualizando-os por meio de uma metáfora visual (mapas, gráficos, visualizações personalizadas, etc.). O Caipirinha é um *framework* que se integra com dados e metadados do LEMONADE para fornecer às visualização de dados. A ideia é fornecer ao usuário um conjunto de visualizações comuns, como tabelas, gráficos de pizza, linha e barras, com pouco esforço na customização. Para visualizações mais sofisticadas, o usuário pode configurar uma operação de geração de visualização com o tipo de visualização e seus parâmetros, algo como o assistente de geração de gráficos presentes nos *softwares* de planilhas. As visualizações serão ativadas/desativadas de acordo com os requisitos predefinidos. Tais requisitos fazem parte dos metadados de visualização e serão armazenados no Caipirinha.

## Geração de código fonte

O fluxo de trabalho é representado internamente pelo formato JSON. Quando uma nova tarefa é criada para executar um fluxo de trabalho, o Juicer converte código em código (transpilado), transformando o formato JSON em um script Python que é compatível com a plataforma de processamento subjacente. A utilização da linguagem Python restringe as plataformas de direcionamento, mas agora o COMPSs, o Ophidia,o Spark e o Keras/Tensorflow o suportam. Nós não prevemos a necessidade de usar um compilador real, mas talvez no futuro possamos estender o Juicer para suportá-lo.