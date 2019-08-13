
# Agrupar Linhas por Função

Agrupar Linhas por Função é uma função de **Manipulação de dados** que agrupa os valores de múltiplas linhas em um conjunto. Após utilizar esta operação o conjunto de valores gerado pode ser utilizado em outras funções.

### Conectores
| Entrada | Saída |
| --- | --- |
| Uma Fonte de Dados | Múltiplas fontes com os dados modificados |

### Aba Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Seleção de Atributos** | Define os atributos a serem agregados |
| **[Função de Agregação]** | Define a função de agregação a ser usada |
| **Atributo Usado Como Pivô** | Atributo a ser usado como pivô |
| **Valores do Pivô** | Nomes dos atributos gerados pela operação de pivô |

[Aba Aparência][1]

[Aba Resultados][2]


## Definições
### Funções de Agregação
**[Exemplo 1]**\
**Average (AVG)**\
A função *Average* (avg) é utilizada para calcular a média do atributo (coluna) selecionada na operação de agregação.\
O atributo selecionado deve ser do tipo inteiro ou flutuante.

**Collect Set**\
A função *Collect Set* é utilizada para agregar um conjunto de atributos sem que existam duplicatas no conjunto final. Ao utilizar essa função sobre um atributo (coluna), uma lista de valores é criada sem que haja repetições de valores.\
O atributo selecionado deve ser do tipo *inteiro* ou *flutuante*.

**Collect List**\
A função *Collect List* é utilizada para gerar um conjunto de todos os atributos (possuindo duplicatas, se um valor aparece duas vezes na coluna do atributo).

**Count**\
A função *Count* retorna o número total de valores para o atributo (coluna) selecionado na função de agregação. Em bases de dados muito grandes, essa função pode ser útil para verificar a quantidade de dados existentes nela, se essa quantidade está de acordo com a quantidade de uma base de dados original (quando se conhece o conjunto de dados).\
O atributo selecionado deve ser do tipo *inteiro* ou *real (ponto flutuante)* ou *cadeias de caracteres (string)*.

**First**\
A função *First* retorna o primeiro elemento obtido da agregação do atributo (coluna) escolhido. O primeiro objeto do grupo gerado é retornado. É útil quando se quer saber qual o valor do atributo do primeiro objeto gerado pela agregação.\
O atributo selecionado deve ser do tipo *inteiro* ou *real (ponto flutuante)* ou *cadeias de caracteres (string)*.

**Last**\
A função *Last* retorna o último elemento obtido através do atributo utilizado para agregação. Ou seja, o último objeto do grupo gerado é retornado. É útil para saber o valor do atributo do último objeto gerado pela função de agregação.\
O atributo selecionado deve ser do tipo *inteiro* ou *real (ponto flutuante)* ou *cadeias de caracteres (string)*.

**Maximum (MAX)**\
A função *Maximum* retorna o maior valor do atributo (coluna) selecionado para a execução da função de agregação.\
O atributo selecionado deve ser do tipo *inteiro* ou *real (ponto flutuante)*.

**Minimum (MIN)**\
A função *Minimum* retorna o menor valor do atributo (coluna) selecionado para a execução da função de agregação. Retorna o menor valor do atributo de um grupo.\
O atributo selecionado deve ser do tipo *inteiro* ou *real (ponto flutuante)*.

**Sum**\
A função *Sum* retorna a soma de todos os valores do atributo (coluna) selecionado para cada um dos grupos gerados pelo(s) atributo(s) selecionado(s) para agregação.\
O atributo selecionado deve ser do tipo *inteiro* ou *real (ponto flutuante)*.

### Atributo Usado como Pivô
Um pivô é um agrupamento em que uma ou mais colunas têm seus valores transpostos em colunas individuais. Portanto, os dados da tabela são reorganizados em torno dos atributos selecionados.\
**[Exemplo 2]**

## Exemplo de Utilização
### Exemplo 1
**Objetivo:** Descobrir qual é a média dos atributos *“sepallength”*, *“sepalwidth”*, *“petallength”* e “petalwidth” para as 3 classes de flores existentes.\
**Base de Dados:** [Íris][1].

![Ler dados](/img/spark/manipulacao_de_dados/linha_agrupar_por_funcao/image7.png)

1. Adicione uma base de dados por meio da operação [Ler dados][3]. 

2. Na operação **Agrupar linhas por função** preencha *“class”* no atributo **Selecione o(s) atributo(s) para agregação**. \
	![Atributos para agregação](/img/spark/manipulacao_de_dados/linha_agrupar_por_funcao/image5.png)

3. Ainda na operação **Agrupar linhas por função**, no campo **Função de Agrupamento**, clique em *“Escolha uma opção”*.\
	![Atributos para agregação](/img/spark/manipulacao_de_dados/linha_agrupar_por_funcao/image2.png)

	### Teste com Função Average:
4. Defina a **função de agregação** a ser usada como a Average e para os atributos selecione *“sepallength”*, *“sepalwidth”*, *“petallength”* e *“petalwidth”*.\
	![Atributos para agregação](/img/spark/manipulacao_de_dados/linha_agrupar_por_funcao/image8.png)


5. Execute e visualize o fluxo.
	![Resultado](/img/spark/manipulacao_de_dados/linha_agrupar_por_funcao/image4.png)\
	Observe que ao utilizar essa função de agregação de acordo com o atributo “class”, temos 3 grupos diferentes Iris-virginica, Iris-setosa e Iris-versicolor, pois, no atributo “class” existiam apenas 3 classes diferentes. O restante mostra a média para cada uma dessas classes nos demais atributos *“sepallength”*, *“sepalwidth”*, *“petallength”*, *“petalwidth”*.

### Exemplo 2
**Objetivo:** Descobrir o valor pago pelos tripulantes do sexo masculino e feminino.\
**Base de Dados:** [Titanic][1].

![Ler dados](/img/spark/manipulacao_de_dados/linha_agrupar_por_funcao/image7.png)

1. Adicione uma base de dados por meio da operação [Ler dados][3]. 

2. Preencha na operação **Agrupar Linhas** por Função no campo **Atributos para Agregação** o atributo sex. No campo pivô utilize a classe do tripulante.\
	![Atributos para agregação](/img/spark/manipulacao_de_dados/linha_agrupar_por_funcao/image3.png)


3. Ainda na operação **Agrupar linhas por função**, no campo **Função de Agrupamento** clique em *“Escolha uma opção”*. Preencha o campo **Atributos** com o atributo *fare*. No campo **Função** selecione *Maximum* e no campo **Nome novo** preencha com *sex*.\
	![Agrupamento](/img/spark/manipulacao_de_dados/linha_agrupar_por_funcao/image6.png)

4. Execute e visualize o fluxo.\
	![Resultado](/img/spark/manipulacao_de_dados/linha_agrupar_por_funcao/image1.png)\
	O resultado da operação de agregação nos mostra o valor máximo pago pela tarifa de embarque em cada uma das classes do navio Titanic. Observe que a segunda classe (2nd), mulheres pagam menos que os homens.

-----

Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[Exemplo 1]: #exemplo-1
[Exemplo 2]: #exemplo-2
[Função de Agregação]: #funcoes-de-agregacao
[1]: /pt-br/
[2]: /pt-br/
[3]: /pt-br/