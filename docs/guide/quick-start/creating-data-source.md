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

- Fazer o _download_ dos dados em formato CSV ou no formato original (se compatível).
- Você pode criar uma análise estatística inicial, gerando um relatório com análises
uni, bi e multidimensional dos atributos da fonte de dados. 
- Você pode solicitar uma amostra dos dados para o Lemonade. 
- Você pode usar a fonte de dados em um fluxo de trabalho, encadeando os dados 
dessa fonte a outras operações. Tais operações poderão fazer transformações, análises,
gerar visualizações ou modelos de dados a partir dos dados originais. 
- Você pode usar a funcionalidade de experimentos do Lemonade e assim visualizar os 
dados, tratar e transformá-los usando o Data Explorer, gerar modelos com o Model Builder
ou ainda criar visualizações usando o Visualization Builder.

Vamos criar uma fonte de dados a partir de um arquivo no formato CSV. Essa fonte 
de dados conterá registros dos passageiros do Titanic (sim, o exemplo mais usado
em tutoriais e cursos de ciência de dados). 

1. Faça o upload ...

## Tipos de dados

## Inferindo o tipo dos atributos

Um arquivo CSV é um arquivo texto, isto é, contém apenas letras, números, símbolos e demais caracteres que não são usados
pelos computadores para alguns tipos de controle. Sendo um arquivo texto, o arquivo CSV pode ser aberto em qualquer 
editor de textos. Pode-se imaginar que ao usar um arquivo CSV, todos os atributos sejam considerados do tipo `CHARACTER`, 
mas isso não é necessariamente verdade. O Lemonade, ao executar o comando "Inferir esquema", lê uma parte dos dados (em 
geral, 100 registros) e realiza vários testes para cada um dos tipos de dados principais. Por exemplo, se todos os valores
de um atributo podem ser convertidos para `INTEGER`, ele será registrado como tal. Se algum ou mesmo todos os valores
tiverem um ponto-final (separador de decimais no idioma inglês) e somente números, é possível que o Lemonade considere que 
o atributo é do tipo `DECIMAL`. Se todos os testes falharem, então finalmente o atributo é considerado do tipo `CHARACTER`. 

Para inferir o tipo dos atributos, clique o botão "Inferir esquema". Após alguns segundos, o Lemonade mostra uma mensagem
indicando o sucesso da ação. Na aba "Atributos" no detalhe da fonte de dados Titanic, você verá quais foram os atributos
inferidos, bem como o tipo de dado de cada um deles.

## Visão geral dos dados do Titanic

Com a fonte de dados que você acabou de enviar para o Lemonade selecionada (ou mesmo na página de listagem), você pode 
visualizar uma amostra dos dados clicando no botão "Exibir amostra" (ícone do olho).

| atributo  | tipo        | descrição  |
|-----------|-------------|------------|
| seq       | INTEGER     | Identificador único do registro. É um número sequencial gerado, sem efeito no atributo alvo. |
| pclass    | CHARACTER   | Classe do passageiro (1st, 2nd, 3rd). Pode ser convertido para categórico.  |
| survived  | INTEGER     | É o atributo alvo (aquele que se quer prever). Valores: 1 = sobreviveu, 0 = faleceu. Pode ser convertido para categórico. |
| name      | CHARACTER   | Nome do passageiro, podendo incluir o título (Mr., Mrs., Miss, etc.).   |
| sexo      | CHARACTER   | Gênero do passageiro. Valores: M = Masculino e F = Feminino.   |
| age       | DECIMAL     | Idade do passageiro.|
| sibsp     | INTEGER     | Total de irmãos e esposa/esposo do passageiro.      |
| parch     | INTEGER     | Total de pais e filhos do passageiro.      |
| ticket    | CHARACTER   | Número do tíquete (passagem).      |
| fare      | DECIMAL     | Tarifa/preço da passagem.      |
| cabin     | CHARACTER   | Cabine do passageiro.      |
| embarked  | CHARACTER   | Porto de embarque do passageiro. Valores válidos: Southampton, Cherbourg e Queenstown. Pode ser convertido para categórico.  |
| boat      | CHARACTER   | Barco usado para o resgate do passageiro.      |
| body      | CHARACTER   | Número de identificação do corpo (se o passageiro veio a falecer e teve seu corpo resgatado).|
| boat      | CHARACTER   | Destino do passageiro. Vários valores, com algumas variações do mesmo destino, escritos de forma diferente.   |

Na próxima seção, você irá tratar os problemas existentes na fonte de dados Titanic,
bem como criará novos atributos, criando uma nova fonte de dados e preparando-a 
para ser usada na criação de visualizações e modelos de aprendizado de máquina.

