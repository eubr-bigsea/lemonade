
# Sumário Estatístico

Gera um resumo estatístico dos atributos selecionados em forma de tabela.

### Conectores
| Entrada | Saída |
| --- | --- |
|Dados | Sumário Estatístico |

### Tarefa
Nome da Tarefa

### Aba Execução
| Parâmetro | Detalhe |
| --- | --- |
| Atributos | Atributos para gerar o sumário estatístico. Caso este campo esteja vazio, todos os atributos são selecionados |
| Título | Título dessa visualização. É mostrado com a visualização |

[Aba Aparência][1]

[Aba Resultados][2]


## Definições
### Sumário Estatístico - Funções
As funções calculadas no sumário estatístico são:

1. Valor máximo/mínimo: \
	Dado uma coluna de valores numéricos, este campo retorna o valor máximo e o mínimo desta coluna.

2. Média

3. Desvio padrão:\
	Indica uma medida de dispersão dos dados em torno da média.

4. Contagem:\
	A quantidade de vezes que o atributo selecionado aparece na base de dados.

5. Quantidade de valores distintos

6. Quantidade de valores ausentes

7. Assimetria
	O coeficiente de assimetria permite distinguir as distribuições assimétricas. \
	Um valor negativo indica que a cauda do lado esquerdo da função densidade de probabilidade é maior que a do lado direito. Um valor positivo para a assimetria indica que a cauda do lado direito é maior que a do lado esquerdo. Um valor nulo indica que os valores são distribuídos de maneira relativamente igual em ambos os lados da média, mas não implica necessariamente, uma distribuição simétrica.
	![Tipos de Simetria](/docs/img/spark/visualizacao_de_dados/sumario_estatistico/image2.png)

8. Curtose:\
	Curtose é uma medida de dispersão que caracteriza o "achatamento" da curva da função de distribuição. Quanto menor a curtose, mais achatada é a curva. Se a curtose for igual a 0, então a distribuição é normal e são chamadas mesocúrticas. Curvas com curtose maior do que 0 são denominadas leptocúrticas e possuem a curva da função de distribuição mais afunilada. Neste caso dizemos que essa distribuição possui caudas pesadas. Curvas com curtose menor do que 0 são denominadas platicúrticas e são mais achatadas do que uma distribuição normal.
	![Curtose](/docs/img/spark/visualizacao_de_dados/sumario_estatistico/image4.png)\
	Fonte: <https://www.biologyforlife.com/standard-deviation.html> \
	![Tipos de Curtose](/docs/img/spark/visualizacao_de_dados/sumario_estatistico/image3.png)\
	Fonte: <http://www.portalaction.com.br/estatistica-basica/26-curtose>

9. Correlação de Pearson
	É um coeficiente (P) que mede o grau da correlação entre duas variáveis. Normalmente representado por valores entre -1 e 1. \
	P = 1: correlação perfeita entre duas variáveis. Se uma aumenta/diminui, a outra também segue este comportamento.\
	P = -1: correlação negativa perfeita entre as duas variáveis. Ou seja, se uma aumenta, a outra sempre diminui.\
	P = 0: significa que as duas variáveis não dependem linearmente uma da outra. No entanto, pode existir uma dependência não linear. Assim, o resultado deve ser investigado por outros meios.\




## Exemplo de Utilização
**Objetivo:** aplicar sumário estatístico em uma base de dados.

**Base de Dados:** [Iris][3]
	
![Ler dados](/docs/img/spark/visualizacao_de_dados/sumario_estatistico/image1.png)

1. Adicione uma base de dados por meio da operação [Ler dados][4]. 

2. Adicione a operação **Sumário Estatístico** e não preencha nenhum atributo. Preencha o título com *"Sumário"*
	
	![Sumario Estatístico](/docs/img/spark/visualizacao_de_dados/sumario_estatistico/image6.png)

3. Observe o resultado final após cada execução do fluxo;
	
	![Resultados](/docs/img/spark/visualizacao_de_dados/sumario_estatistico/image5.png)
-----

Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[1]: /pt-br/
[2]: /pt-br/
[3]: /pt-br/
[4]: /pt-br/