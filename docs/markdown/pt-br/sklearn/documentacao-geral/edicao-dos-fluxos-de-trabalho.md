# Edição de fluxos de trabalho *(Workflows)*
Após a importação da base de dados é possível criar um fluxo de trabalho (ou *workflow*). A aba de **Fluxos de trabalho**, mostrada na imagem a seguir, é onde serão criados os projetos da plataforma Lemonade.\
![Fluxos de Trabalho - Cabeçalho](/img/spark/documentacao_geral/utilizacao_basica_da_plataforma_lemonade/image57.png)\
Para entender o funcionamento básico de um workflow e a visualização dos resultados, é preciso entender os conceitos fundamentais por trás. Um fluxo de trabalho consiste em uma simples interface de arrastar e conectar blocos. Cada um desses blocos define operações de manipulação e extração de conhecimento sobre dados. Esses mesmos blocos possuem campos obrigatórios, os quais são indicados por um asterisco ao seu lado. Cada bloco também contém parâmetros para adaptá-los e, portanto, utilizá-los em diversas montagens diferentes.

Para começar com a criação clique na aba superior **Fluxos de trabalho**. Em seguida, clique **Adicionar**, que está presente no canto superior direito da tela.
![Tabela - Fluxos de Trabalho](/img/spark/documentacao_geral/utilizacao_basica_da_plataforma_lemonade/image86.png)

Em seguida, o usuário será redirecionado  a tela de criação de um novo fluxo de trabalho. Em **Para uma plataforma de processamento**, escreva o nome do fluxo de trabalho e selecione Spark como plataforma de processamento, que é uma plataforma para análise e extração de conhecimento de grandes bases de dados.  Por fim, clique no botão **Criar um novo fluxo de trabalho**.\
![Adicionar Novo Fluxos de Trabalho](/img/spark/documentacao_geral/utilizacao_basica_da_plataforma_lemonade/image5.png)

A aba **A partir de um modelo** cria um fluxo de trabalho a partir de um modelo, i.e., um fluxo de trabalho definido por um tópico elaborado por cientistas de dados do Lemonade (i.e., classificação, regressão, agrupamento, mineração de padrões frequentes e *deep learning*). Já a aba **A partir de um modelo criado por usuários** também cria um fluxo a partir de um tópico, mas o mesmo é elaborado pelos usuários, não pelos cientistas de dados do Lemonade. Caso você clique na aba **Fluxos de trabalho** no menu superior neste momento, você encontrará o seu fluxo de trabalho criado.\
![Tabela Fluxos de Trabalho](/img/spark/documentacao_geral/utilizacao_basica_da_plataforma_lemonade/image99.png)\
Da mesma forma que na aba base de dados, o fluxo de trabalho aparece na tela com algumas opções para seu gerenciamento e seus dados básicos - seu ID de identificação na plataforma, seu nome, sua descrição, seu formato, sua data de criação, o nome do usuário responsável pelo carregamento e sua versão.  Além disso, o botão ![Lixeira](/img/spark/documentacao_geral/utilizacao_basica_da_plataforma_lemonade/image7.png) exclui o fluxo da plataforma Lemonade.

Finalizada a criação do fluxo, você será automaticamente redirecionado para o editor de fluxos de trabalho. À esquerda do editor se encontram todas as operações suportadas. Inicialmente aparecem apenas as categorias e, ao clicar em uma categoria, subcategorias ou blocos que podem ser usados são expandidos.\
![Operações do Fluxo de Trabalho](/img/spark/documentacao_geral/utilizacao_basica_da_plataforma_lemonade/image91.png)

A seguir, uma breve explicação de cada uma das categorias definindo as operações da plataforma Lemonade:
- Entrada e saída: Operações para leitura e escrita de dados e modelos.
- Manipulação de dados: Operações para manipulação (tratamento ou transformação) direta dos dados.
- Pré-processamento dos dados: Operações que definem algoritmos para pré-processar os dados.
- Aprendizado de máquina: Operações que definem algoritmos que aprendem sobre os dados sem serem explicitamente programados para isso.
- Modelo e Avaliação:  Operações para processar e avaliar modelos criados por operações de aprendizado de máquina.
- Visualização de dados: Operações de visualização de dados e resultados em diferentes formatos, como gráficos e mapas.
- Avançado: Operações avançadas que dependem de um conhecimento a priori em programação (em Python), linguagem para manipulação de bases de dados e manipulação de bancos de dados geográficos.\
	Além disso, há também a barra superior à direita com as seguintes opções:\
	![Save](/img/spark/documentacao_geral/utilizacao_basica_da_plataforma_lemonade/image96.png): Salva as modificações realizadas no projeto;\
	![Copy](/img/spark/documentacao_geral/utilizacao_basica_da_plataforma_lemonade/image60.png): Realiza uma cópia do fluxo de tarefas;\
	![History](/img/spark/documentacao_geral/utilizacao_basica_da_plataforma_lemonade/image17.png): Exibe o histórico do fluxo de tarefas e permite restaurar o 	fluxo em relação a cada mudança salva anteriormente;\
	![Play](/img/spark/documentacao_geral/utilizacao_basica_da_plataforma_lemonade/image76.png): Executa o fluxo de tarefa criado.

Por fim, temos as opções de alinhamento de fluxo de tarefa, habilitação/desabilitação de tarefas e de zoom:
- ![Alinhar à esquerda](/img/spark/documentacao_geral/utilizacao_basica_da_plataforma_lemonade/image102.png): Alinha o fluxo de tarefas à esquerda;
- ![Alinhar à direita](/img/spark/documentacao_geral/utilizacao_basica_da_plataforma_lemonade/image105.png): Alinha o fluxo de tarefas à direita;
- ![Alinhar superiormente](/img/spark/documentacao_geral/utilizacao_basica_da_plataforma_lemonade/image101.png): Alinha o fluxo de tarefas à parte superior;
- ![Alinhar inferiormente](/img/spark/documentacao_geral/utilizacao_basica_da_plataforma_lemonade/image27.png): Alinha o fluxo de tarefas à parte inferior;
- ![Seta Horizontal](/img/spark/documentacao_geral/utilizacao_basica_da_plataforma_lemonade/image54.png): Distribui o fluxo de tarefas horizontalmente.
- ![Seta Vertical](/img/spark/documentacao_geral/utilizacao_basica_da_plataforma_lemonade/image54.png): Distribui o fluxo de tarefas verticalmente.
- ![Habilita/Desabilita](/img/spark/documentacao_geral/utilizacao_basica_da_plataforma_lemonade/image85.png): Habilita/desabilita operações (tarefas) selecionadas.
- ![Indicador de Percentual](/img/spark/documentacao_geral/utilizacao_basica_da_plataforma_lemonade/image27.png): Indica a porcentagem de zoom do fluxo de tarefas.

Exemplificando, a seguir criaremos um fluxo que importa a base de dados Iris, que foi adicionada anteriormente. Clique na categoria **Entrada e saída** e, em seguida, arraste a operação **Ler dados** para a área de trabalho desse fluxo de tarefas, que é representado por uma malha *(grid)*. Para acessar as suas propriedades clique duas vezes sobre o “Leitor de dados 0”. Cada opção dentro das propriedades da operação **Ler dados** possui sua explicação  dentro de sua [documentação específica][7]. Por hora,  apenas clique em **Escolha uma opção** e selecione “Base de dados Iris” em **Fonte de dados**, como mostrado na imagem mais à direita a seguir.

![Ler Dados - Barra Lateral](/img/spark/documentacao_geral/utilizacao_basica_da_plataforma_lemonade/image52.png)
![Bloco Ler Dados](/img/spark/documentacao_geral/utilizacao_basica_da_plataforma_lemonade/image82.png)
![Tabela - Ler dados](/img/spark/documentacao_geral/utilizacao_basica_da_plataforma_lemonade/image44.png)

Ainda nas propriedades da operação, clique na aba **Resultados** e selecione **Exibir amostra(s) da(s) saída(s) (máx. 50 registros)** e também selecione **Exibir esquema/dicionário da(s) saída(s)**, como mostrado na imagem à direita a seguir. Elas são as duas primeiras duas opções desta aba. Isso permitirá a visualização dos 50 primeiros exemplos da base *Iris* e também a sua estrutura.\
![Tabela - Ler dados](/img/spark/documentacao_geral/utilizacao_basica_da_plataforma_lemonade/image4.png)
![Parâmetros - Ler dados](/img/spark/documentacao_geral/utilizacao_basica_da_plataforma_lemonade/image73.png)

Agora que o fluxo está pronto para execução, clique no botão verde executar (![Play](/img/spark/documentacao_geral/utilizacao_basica_da_plataforma_lemonade/image76.png)) que está disposto no na parte superior à direita, acima da malha que representa o ambiente do fluxo de trabalho. Uma tela de execução será acionada, para executar, clique em Executar:\
![Executar Fluxos de Trabalho](/img/spark/documentacao_geral/utilizacao_basica_da_plataforma_lemonade/image24.png)

Será exibido à direita da tela o relatório *(log)* da execução do fluxo de trabalho, indicando cada passo da execução. O ícone verde ao lado de “Logs” indica o sucesso da execução. Caso contrário, aparecerá um ícone vermelho ao lado de “Logs”, indicando o erro. O *log* também indicará qual tipo de erro ocorreu, como mostrado na imagem abaixo.\
![Log Sucesso](/img/spark/documentacao_geral/utilizacao_basica_da_plataforma_lemonade/image93.png)
![Log Erro](/img/spark/documentacao_geral/utilizacao_basica_da_plataforma_lemonade/image55.png)

Caso tenha sido executado com sucesso, o fluxo de trabalho terá a indicação de um ícone positivo verde em seu interior. Caso contrário, o fluxo de trabalho terá a indicação de um ícone negativo vermelho em seu interior.\
![Ler dados sucesso](/img/spark/documentacao_geral/utilizacao_basica_da_plataforma_lemonade/image68.png)
![Ler dados erro](/img/spark/documentacao_geral/utilizacao_basica_da_plataforma_lemonade/image66.png)

Com a execução finalizada com sucesso, você pode ir na aba de **Resultados** após a execução para poder visualizar os resultados da execução da operação **Ler dados**:\
![Resultado do fluxo de trabalho](/img/spark/documentacao_geral/utilizacao_basica_da_plataforma_lemonade/image74.png)\
A aba exibirá os 50 primeiros resultados da leitura da base de dados Iris, como mostrado na imagem abaixo com os 17 primeiros registros (exemplos ou instâncias) dessa base.\
![Tabela Resultado do fluxo de trabalho](/img/spark/documentacao_geral/utilizacao_basica_da_plataforma_lemonade/image62.png)\
Note que existem outras duas abas que podem ser utilizadas após a execução, **Detalhes (execução)** e **Código-fonte**. Enquanto a primeira define informações relacionadas à execução (data, usuário e o cluster utilizado para execução), o segunda define o código fonte da operação.

-----
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br


[1]: https://www.lemonade.org.br/
[2]: https://icd.ctweb.inweb.org.br/
[3]: /pt-br/spark/base-de-dados/#iris
[4]: https://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data
[5]: https://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data
[6]: http://archive.ics.uci.edu/ml/datasets/Iris?ref=datanews.io
[7]: /pt-br/spark/entrada-e-saida/ler-dados.html
[8]: /pt-br/spark/documentacao-geral/aba-aparencia.html
[9]: /pt-br/spark/documentacao-geral/aba-resultados.html
[10]: /pt-br/spark/visualizacao-de-dados/sumario-estatistico.html
[11]: https://spark.apache.org/
[12]: /pt-br/spark/pre-processamento-de-dados/representacao-de-atributos-converter-categorico-para-numerico.html
[13]: /pt-br/spark/aprendizado-de-maquina/classificacao-arvore-de-decisao.html
[14]: /pt-br/spark/pre-processamento-de-dados/amostragem-divisao-percentual.html
[15]: /pt-br/spark/modelo-e-avaliacao/aplicar-modelo.html
[16]: /pt-br/spark/modelo-e-avaliacao/avaliar-modelo.html
[17]: /pt-br/spark/visualizacao-de-dados/grafico-de-area.html
[18]: /pt-br/spark/visualizacao-de-dados/grafico-de-barra.html
[19]: /pt-br/spark/visualizacao-de-dados/grafico-de-dispersao.html
[20]: /pt-br/spark/visualizacao-de-dados/grafico-de-linha.html
[21]: /pt-br/spark/visualizacao-de-dados/grafico-de-pizza.html
[22]: /pt-br/spark/visualizacao-de-dados/grafico-de-rosca.html
[23]: /pt-br/spark/visualizacao-de-dados/publicar-como-dashboard.html
[24]: /pt-br/spark/visualizacao-de-dados/sumario-estatistico.html
[25]: /pt-br/spark/visualizacao-de-dados/mapa.html
[26]: /pt-br/spark/visualizacao-de-dados/tabela.html
[27]: https://www.kaggle.com/c/titanic