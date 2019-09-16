## Visão Global
# ![Logo](/img/logo.png) LEMONADE
**L**ive **E**xploration and **M**ining **O**f **N**on-trivial **A**mount of **D**ata from **E**verywhere


O LEMONADE é uma plataforma visual para computação distribuída, destinada a permitir a implementação, experimentação, teste e implantação de aplicações de processamento de dados e aprendizado de máquina. Ele fornece um nível mais alto de abstrações, chamado de operações, para os usuários criarem fluxos de processamento usando uma interface gráfica da Web. Usando tecnologias de alto desempenho e escalonáveis, como COMPSs, Ophidia e Spark, o Lemonade pode processar uma grande quantidade de dados, ocultando toda a complexidade do *backend* para os usuários e permitindo que eles se concentrem principalmente na construção da solução.

O LEMONADE é implementado como uma ferramenta de código aberto e está em desenvolvimento como um produto do projeto [EUBra-BIGSEA](http://www.eubra-bigsea.eu/)

### Projeto

O submódulo de cada projeto possui seu próprio repositório no Github:

* [Citron](https://github.com/eubr-bigsea/citron)
* [Tahiti](https://github.com/eubr-bigsea/tahiti)
* [Juicer](https://github.com/eubr-bigsea/juicer)
* [Stand](https://github.com/eubr-bigsea/stand)
* [Limonero](https://github.com/eubr-bigsea/limonero)
* [Caipirinha](https://github.com/eubr-bigsea/caipirinha)
* [Thorn](https://github.com/eubr-bigsea/thorn)


### Mais informações
* [Última versão](https://app.lemonade.org.br)
* [Uso Básico]()
* [Documentação técnica](https://github.com/eubr-bigsea/citron/wiki/API)

### Additional Support
* [Suporte]()
* [FAQ]()
* [Tutoriais]()

## Origem e motivações

As ferramentas de fluxos de trabalho visuais fornecem um nível mais alto de abstração do que as linguagens de programação de uso geral, mesmo aquelas criadas especificamente para o processamento de dados, como a [linguagem R](https://www.r-project.org/). 

Hoje, a capacidade e o preço atual de infraestrutura de processamento e a disponibilidade de grande quantidade de dados permitiram o desenvolvimento de novas aplicações, anteriormente restritas a grandes empresas e organizações. No entanto, para explorar totalmente essa oportunidade, uma equipe deve lidar com diferentes especialidades, como domínio do negócio, habilidades de programação e manutenção de infraestrutura. Algumas vezes, precisamos apenas testar uma hipótese sobre os dados, e não aprender detalhes técnicos.

As ferramentas de processamento de dados disponíveis têm uma gama muito grande de capacidade de processamento, variando entre ferramentas de planilha de computador até *clusters* de computadores. Além disso, o nível de abstração varia de linguagens de programação de baixo nível (por exemplo, processamento de GPU) a soluções completamente de caixa preta. A programação visual é uma abordagem em que o procedimento ou programa é construído a partir da organização de elementos gráficos em vez de programar utilizando uma linguagem de programação. Ela se tornou popular graças à proliferação de ferramentas, como [Knime](https://www.knime.com/), [Weka](https://www.cs.waikato.ac.nz/ml/weka/), [RapidMiner](https://www.cs.waikato.ac.nz/ml/weka/), [ClowdFlows](http://clowdflows.org) and [Microsoft Azure ML Studio](https://studio.azureml.net).

O *LEMONADE* compartilha muitas semelhanças com as tecnologias mencionadas acima. Acreditamos que ele é diferente em relação à sua integração com as tecnologias de processamento de *big data* incluídas no projeto (COMPSs. Spark, Ophidia) e com outros pacotes de trabalho do projeto. Ele se integra à infraestrutura, permitindo que os usuários especifiquem restrições de QoS para a execução. Tais restrições serão usadas para alocar estaticamente ou dinamicamente recursos para processar o fluxo de trabalho. Além disso, privacidade e segurança (em andamento) são configuráveis por restrições implementadas como parâmetros ou operadores. E todas as operações disponíveis na interface do usuário são mantidas como informações de metadados. Dessa forma, é fácil definir novas operações, é necessário apenas adicionar informações de metadados e alterar a implementação de back-end.   

#### Trabalhos Relatados

O KNIME [R2] é um *framework* que permite a execução visual e interativa de dados para mineração de dados. Esse ambiente foi desenvolvido para ser uma plataforma colaborativa de ensino e pesquisa. Os fluxos de trabalho foram desenvolvidos em alto nível para a análise de dados, portanto, não é necessário ter habilidades de programação. Além disso, ele possui três atrativos principais: *framework* interativo, modularidade e fácil extensibilidade.

O Weka [R3] é um projeto que visa fornecer algoritmos de aprendizado de máquina e ferramentas de pré-processamento de dados para muitos usuários (professores, alunos, pesquisadores, etc.). Sua vantagem é ser uma arquitetura modular e extensível. Ele possui uma ampla variedade de algoritmos para regressão, classificação, clustering, regras de associação e seleção de atributos. Os usuários podem criar processos sofisticados de mineração de dados para obter informações relevantes sobre os dados.

A plataforma ClowdFlows [R5] é uma aplicação Web baseada em nuvem para computação distribuída (com modo de processamento em lote (*batch*) ou em tempo real). Ela permite criar e executar fluxos de trabalho de mineração de dados por meio de programação visual. Uma aplicação usando programação visual é construída “arrastando e soltando” elementos gráficos em vez de escrever o código-fonte como texto. Para processamento em lote, ele usa o modelo de programação MapReduce através da biblioteca DiscoMLL. A programação do MapReduce simplifica a execução do processamento paralelo e distribuído em várias máquinas.

O Azure Machine Learning Studio [R6] é um serviço em nuvem que permite facilmente criar, implantar e compartilhar soluções de análise preditiva. Não é necessário utilizar código. Porém, todas as funções e ferramentas somente são liberadas a partir de uma licença comercial. Ele fornece fluxos de trabalho visuais com algoritmos de última geração, que podem ser executados em paralelo e na nuvem.


## Usuário Alvo
Em geral, tarefas de Ciência de Dados são complexas e exigem conhecimento em áreas muito específicas, como estatística, aprendizado de máquina e processamento maciço de dados. No entanto, alguns cientistas de dados não possuem conhecimentos profundos nessas áreas, mas sim nas áreas do domínio específico dos dados. O LEMONADE foi criado pensando especificamente nesses usuários. E também naqueles que possuem o conhecimento, mas precisam executar uma tarefa de forma rápida.

## Conceitos básicos

O LEMONADE utiliza uma terminologia comum, mas gostaríamos de reforçar algumas definições para explicar melhor a plataforma. O diagrama do modelo de domínio é mostrado na Figura L0.

### Fontes de dados e armazenamentos

Os metadados relacionados a fontes de dados e seus atributos são mantidos e usados durante o design e o tempo de execução. Os usuários configuram as tarefas que exigem informações sobre os atributos da fonte de dados, selecionando a partir de uma lista com as opções disponíveis. Essa lista é fornecida pelos serviços de metadados, descritos adiante, na seção Arquitetura do LEMONADE.

### Operações, portas e parâmetros

Uma operação é a menor unidade de execução definida no LEMONADE. Cada operação possui um conjunto de parâmetros (definidos como formulários) e um conjunto de portas. Uma operação é mapeada em um bloco de código a ser executado na plataforma de execução subjacente. Diferentes plataformas de execução podem ter operações diferentes, mas, em geral, há um conjunto de operações comuns disponíveis na maioria delas. Geralmente, são operações relacionadas a tarefas como extração, transformação e carregamento (ETL). No LEMONADE, existem diferentes categorias.

### Fluxos de trabalho, tarefas e fluxos

O fluxo de trabalho é um grupo de tarefas (instâncias de operações), organizado como um grafo acíclico direto (DAG). As tarefas se comunicam por meio de fluxos, conectando uma porta de origem a uma porta de destino. Cada porta tem uma direção (INPUT ou OUTPUT), uma cardinalidade (ONE, MANY) e uma ou mais interfaces definidas (por exemplo, IData, IModel). As interfaces são usadas para validar fluxos usando uma espécie de sistema de tipos. Os usuários não podem conectar duas portas se elas não compartilharem pelo menos uma interface em comum. Os formulários definidos nas operações são preenchidos pela interface (Citron) para cada tarefa associada a essas operações.

### jobs, ateps, resultados e clusters

Depois de enviar um fluxo de trabalho, um job (trabalho) é iniciado para processar o fluxo de trabalho. A DAG formada por tarefas e fluxos é avaliada e convertida em código para ser executado na plataforma de execução subjacente. A versão atual do LEMONADE permite apenas a execução de todo o fluxo de trabalho, mas temos planos para permitir a execução parcial e até incremental, dispensando a execução de tarefas já processadas e não alteradas na interface.

## Plataformas Suportadas

Lemonade atualmente suporta 3 plataformas de execução:

* [Apache Spark 2.2.0](http://spark.apache.org/docs/2.2.0/). Alguns fluxos de trabalho podem funcionar nas versões anteriores, mas pelo menos a versão 2.0.0 é necessária. Ele suporta geração de código e controle de execução de fluxos de trabalho. O código é compatível com o PySpark e pode ser executado fora do Lemonade. 
* [Keras](https://keras.io/). É uma API de redes neurais de alto nível, escrita em Python e capaz de executar em cima do TensorFlow, CNTK ou Theano. Ela foi desenvolvida com foco em permitir a experimentação rápida, ser capaz de ir da ideia ao resultado com o menor atraso possível é a chave para fazer uma boa pesquisa. Use o Keras se você precisar de uma biblioteca de aprendizado profunda que: Permite a criação fácil e rápida de protótipos (por meio da facilidade de uso, modularidade e extensibilidade). Suporta redes convolucionais e redes recorrentes, assim como combinações das duas. E, funciona perfeitamente com CPU e GPU.
* [Python Scikit Learn](https://scikit-learn.org/stable/) + [Pandas](https://pandas.pydata.org/). Em desenvolvimento. Geração de código preliminar, nem todas as operações são suportadas.
* [Barcelona Supercomputer Center - BSC COMPSs](https://www.bsc.es/research-and-development/software-and-apps/software-list/comp-superscalar). Suporta geração de código. O gerenciamento de execução está em desenvolvimento.

Novas plataformas podem ser desenvolvidas. Veja desenvolvimento para novas plataformas no Guia de Programação.

## Apoiadores

<div style="margin-top: 32px;width: 100%; text-align: center"><a style="" href="https://www.atmosphere-eubrazil.eu/" title="Atmosphere"><img src="/img/atmosphere.png" alt="Atmosphere"></a></div>

<div style="width: 100%; text-align: center">
	<a style="" href="http://www.eubra-bigsea.eu/" title="EUBRA BIGSEA"><img style="margin-top: 32px;max-width: 200px;" src="/img/bigsea.png" alt="EUBRA BIGSEA"></a>
	<a style="margin: 0 64px;" href="http://www.inweb.org.br/" title="Inweb"><img style="margin-top: 32px; max-width: 200px;" src="/img/inweb.png" alt="Inweb"></a>
	<a href="http://www.ctic.rnp.br"><img style="margin-top: 32px; max-width: 200px;" src="/img/ctic.png" alt="CTIC"></a>
</div>

<div style="width: 100%; text-align: center">
	<a style="" href="https://www.rnp.br/" title="RNP"><img style="margin-top: 32px;max-width: 200px;" src="/img/rnp.png" alt="RNP"></a>
	<a style="margin: 0 64px;" href="https://www.ceweb.br/" title="CEWEB"><img style="margin-top: 32px; max-width: 200px;" src="/img/ceweb.png" alt="CEWEB"></a>
	<a href="https://www.nic.br/" title="NICBR"><img style="margin-top: 32px; max-width: 200px;" src="/img/nic.png" alt="NICBR"></a>
</div>

<div style="width: 100%; text-align: center">
	<a href="http://www.cnpq.br/" title="CNPq"><img style="margin-top: 32px;max-width: 200px;" src="/img/cnpq.png" alt="CNPq"></a>
	<a style="margin: 0 64px;" href="http://www.capes.gov.br/" title="CAPES"><img style="margin-top: 32px; max-width: 200px;" src="/img/capes.png" alt="CAPES"></a>
	<a href="https://fapemig.br/pt/" title="FAPEMIG"><img style="margin-top: 32px; max-width: 200px;" src="/img/fapemig.png" alt="FAPEMIG"></a>
</div>