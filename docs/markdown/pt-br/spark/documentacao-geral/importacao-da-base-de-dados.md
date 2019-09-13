# Importação de bases de dados
Após a criação do usuário e reconhecimento do layout básico da plataforma, você poderá prosseguir para a importação de bases de dados, que podem ser utilizadas como entrada em processos de fluxos de trabalhos. Para iniciar a importação de uma base, clique na primeira aba na parte superior da página, chamada **Base de dados**:
![Bases de Dados](/img/spark/documentacao_geral/utilizacao_basica_da_plataforma_lemonade/image51.png)\
A tela de importação de bases de dados aparecerá, e é nela que será feito o gerenciamento das bases de dados que você escolher utilizar. Para carregar uma base de dados clique no botão **Adicionar**:\
![Tabela - Bases de Dados](/img/spark/documentacao_geral/utilizacao_basica_da_plataforma_lemonade/image42.png)\
A seguir, clique em **Escolha** na seção chamada “Sistema de arquivos distribuído (HDFS)”:\
![Sistema de arquivos distribuídos](/img/spark/documentacao_geral/utilizacao_basica_da_plataforma_lemonade/image37.png)\
Você poderá arrastar o arquivo do seu gerenciador de arquivos ou selecioná-lo manualmente:\
![Importar - Sistema de arquivos distribuídos](/img/spark/documentacao_geral/utilizacao_basica_da_plataforma_lemonade/image72.png)\
Para este tutorial, utilizaremos a [base de dados Iris][3], uma das mais reconhecidas na literatura de reconhecimento de padrões.  Faça o [download dessa base de dados][4] para seu computador para um arquivo chamado “iris.csv”. Uma outra opção é criar um arquivo no seu computador chamado “iris.csv” e copiar manualmente os dados presentes no [link indicado][5] para o esse arquivo. A seguir, selecione ou arraste esse arquivo para a plataforma Lemonade e, a sua base de dados estará disponível quando você clicar novamente na aba **Base de dados** na parte superior da página.\
![Tabela - Bases de Dados](/img/spark/documentacao_geral/utilizacao_basica_da_plataforma_lemonade/image67.png)\
Com o arquivo carregado, a base de dados aparece na tela com algumas opções de gerenciamento e informações básicas, como seu ID de identificação na plataforma, nome, descrição, formato, data de criação, o nome do usuário responsável pelo carregamento e suas tags. Além disso, outras opções de gerenciamento são:\
![Lixeira - Excluir](/img/spark/documentacao_geral/utilizacao_basica_da_plataforma_lemonade/image29.png): Exclui a base de dados da plataforma.\
![Seta - Baixar](/img/spark/documentacao_geral/utilizacao_basica_da_plataforma_lemonade/image31.png): Efetua o download da base de dados que foi carregada para a plataforma.

Ao clicar no nome nome da base de dados, prosseguimos para a aba de **Informações básicas**. Informações como nome da base de dados e descrição da mesma podem ser alteradas nessa aba.\
![Informações da Base de Dados](/img/spark/documentacao_geral/utilizacao_basica_da_plataforma_lemonade/image61.png)

- Na tela de edição, alguns campos de destaque são:
Formato: Explicita o formato em que o arquivo da base de dados está. No exemplo, a base está no formato CSV.
	- **Tags**: Define rótulos pré-existentes para essa base dados. Por exemplo, “Base de classificação”, “Base de regressão”, “Base do experimento X”, etc.
	- **Armazenamento**: Indica onde a base de dados está armazenada e qual sistema de arquivos está sendo utilizado para armazená-la. Essa opção não pode ser modificada.
	- **Tratar esses valores como valores nulos (opcional)**: Define um valor (ou uma expressão) a ser tratado como nulo ou ausente na base de dados. Caso esse valor apareça, o mesmo será convertido para **null** na plataforma Lemonade. Exemplos de possíveis opções:  “n/a”, “none”, “NA” ou “?”.
	- **Usar a primeira linha como cabeçalho**: Se marcado, define que a primeira linha da base de dados como cabeçalho. 
	- Multilinhas (atributo com quebra de linha): Se marcado, define que existirá um atributo explícito indicando a quebra de linha.
	- **Delimitador de atributos (apenas CSV)**: Indica o delimitador de atributos (ou variáveis) utilizado pela plataforma para arquivos no formato CSV. Possíveis opções: “,” (vírgula), “;” (ponto-e-vírgula), “.” (ponto), “{tab}”, “{new_line \n}” ou “{new_line \r\n}”.
	- **Delimitador de registro (apenas CSV)**: Indica o delimitador de registros (exemplos ou instâncias) utilizado pela plataforma para arquivos no formato CSV. Possíveis opções: “,” (vírgula), “;” (ponto-e-vírgula), “.” (ponto), “{tab}”, “{new_line \n}” ou “{new_line \r\n}”.
	- **Delimitador de texto (apenas CSV)**: Indica o delimitador de texto (String) utilizado pela plataforma para arquivos no formato CSV. Possíveis opções:  “ '' ” (aspas duplas) ou “ ‘  ” (aspas simples).
	- **Codificação (opcional)**: Indica o tratamento de codificação de caracteres a ser usado na base de dados. Possíveis opções: “ISO-8859-1”, “UTF-8” ou “UTF-16”.

- Em relação às opções de botões, têm-se:
	- **Salvar**: Salva a base de dados com as modificações realizadas pelo usuário.
	- **Cancelar**: Cancela a edição da base e volta para a aba de bases de dados. 
	- **Inferir** esquema: Infere o esquema de atributos da base de dados, sem necessitar da adição manual. Para isso, é obrigatoriamente necessário especificar o delimitador de texto no caso do CSV. Caso a base tenha cabeçalho, o usuário deverá a marcar a opção Usar a primeira linha como cabeçalho. No caso da base Iris, o delimitador de texto é a o caractere de vírgula (“ , “)  e a mesma não possui cabeçalho predefinido.
	- **Pré-visualização**: Pré-visualiza a base de dados no formato atualmente definido, seja ele o formato padrão da plataforma ou no formato alterado pelo usuário.

	![Pré Visualização](/img/spark/documentacao_geral/utilizacao_basica_da_plataforma_lemonade/image83.png)

Para editar os atributos da base de dados, clique na aba **Atributos** dentro da seção **Base de dados**. É possível editar os nomes dos atributos (mesmo quando existe cabeçalho predefinido), alterar o tipo desses atributos (decimal, data, caractere, texto, etc), alterar o seu formato e sua representação em relação a dados ausentes ou nulos (por exemplo,  “n/a”, “none”, “NA” ou “?”) . Neste tutorial, apenas iremos renomear os nomes dos atributos inferidos da base Iris para os seus [verdadeiros nomes][6] (*sepal length*, *sepal width*, *petal length*, *petal width* e *class*),  Portanto, o esquema da base de dados Iris ficará da seguinte forma:\
![Editar atributos](/img/spark/documentacao_geral/utilizacao_basica_da_plataforma_lemonade/image110.png)

Para salvar as mudanças feitas nos atributos, clique em **Salvar**, e para pré-visualizar a base formatada, clique em **Pré-visualização**. A imagem a seguir será mostrada para o usuário, como pré-visualização da base editada.\
![Pré Visualização](/img/spark/documentacao_geral/utilizacao_basica_da_plataforma_lemonade/image78.png)

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