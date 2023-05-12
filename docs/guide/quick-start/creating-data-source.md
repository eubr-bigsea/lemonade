# Criando uma fonte de dados

Uma fonte de dados é o primeiro tipo de artefato que você vai criar no Lemonade. 
Neste caso, o conceito de fonte de dados do Lemonade é que é uma configuração que
inclui o nome da fonte de dados, como o Lemonade pode se conectar e se autenticar 
junto ao provedor de dados (sistema de arquivos, banco de dados, filas, etc), 
quais são os atributos (colunas) da fonte de dados e suas características 
(nome, tipo de dados, etc).

Por fim, para a fonte de dados, é necessário informar o que irá compor os dados. 
Por exemplo, para um sistema de arquivos, pode ser um único arquivo ou um conjunto 
de arquivos que estão em um diretório; para uma fila, podem ser os elementos enfileirados; 
para um banco de dados, pode ser uma tabela, uma vista (_view_) ou mesmo o resultado
de um comando de consulta compatível com a linguagem SQL.

Uma vez configurada uma fonte de dados, ela pode servir como entrada para diversos processos 
no Lemonade:

- Você pode criar uma análise estatística inicial, gerando um relatório com análises
  uni, bi e multidimensional dos atributos da fonte de dados. 
- Você pode solicitar uma amostra dos dados para o Lemonade. 
- Você pode usar a fonte de dados em um fluxo de trabalho, encadeando os dados 
  dessa fonte a outras operações. Tais operações poderão fazer transformações, análises,
  gerar visualizações ou modelos de dados a partir dos dados originais. 
- Você pode usar a funcionalidade de experimentos do Lemonade e assim visualizar os 
  dados, tratar e transformá-los usando o Data Explorer, gerar modelos com o Model Builder
  ou ainda criar visualizações usando o Visualization Builder.

Vamos criar uma fonte de dados a partir de um arquivo no formato CSV:

1. Faça o upload ...
2. Clique o botão "Inferir esquema"...
3. Clique o botão "Exibir amostra"...
