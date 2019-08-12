# Adicionar Nova(s) Coluna(s)

A operação **Adicionar Nova(s) Coluna(s)** adiciona uma ou mais colunas a uma única saída de dados. Geralmente é utilizado quando é necessário agrupar em uma mesma saída de dados, diversos atributos de diferentes bases de dados. Um caso de uso comum para essa operação poderia ser o pareamento de um conjunto de atributos em duas bases de dados distintas. Supondo que fosse preciso parear o nome de pessoas em diferentes bases de dados, é possível reunir esses atributos em uma única base para facilitar o trabalho.\
**É importante que as duas bases de dados apresentem atributos de uma mesma natureza, isto é, que possam ser comparados.**



### Conectores
| Entrada | Saída |
| --- | --- |
| Até duas fontes de dados. | Uma ou mais fontes com os dados modificados. |


### Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Prefixo para os atributos** | Os prefixos dos nomes das novas colunas na saída de dados da operação. (2 valores separados por vírgula) |

### Tarefa
Nome da Tarefa

[Aba Aparência][1]

[Aba Resultados][2]


## Exemplo de Utilização
**Objetivo:** Combinar (parear) duas bases de dados usando o nome das pessoas presentes nas duas bases. Como saída, os atributos das duas bases serão combinados em uma mesma base.

**Base de Dados:** [Titanic e US Baby Names][3]
	
![Ler dados](/lemonade/img/spark/manipulacao_de_dados/coluna_adicionar_nova/image2.png)

1. Adicione ao fluxo sendo criado a base de dados Titanic por meio da operação [Ler dados][4].\
	![Ler dados - Titanic](/lemonade/img/spark/manipulacao_de_dados/coluna_adicionar_nova/image3.png)
	
2. Adicione a base de dados US Baby Names por meio da operação [Ler dados][4]. \
	![Ler dados - US Baby Names](/lemonade/img/spark/manipulacao_de_dados/coluna_adicionar_nova/image1.png)\
	Antes de ser adicionada, a base foi reduzida para conter a mesma quantidade de instâncias (linhas) da base de dados Titanic.
	
	
3. Como as duas bases possuem muitos atributos além dos escolhidos, adicione a operação [Selecionar Atributos][5] para separar uma única saída de dados com os atributos que serão utilizados.\
	![Selecionar Atributos](/lemonade/img/spark/manipulacao_de_dados/coluna_adicionar_nova/image6.png)

4. Para unir os atributos selecionados em cada uma das entradas de dados em uma única saída, adicione a operação **Adicionar Nova(s) Coluna(s)**. No campo **Prefixo para os atributos** preencha base01 e base02, isto auxilia a diferenciar a qual fonte aquele atributo pertence.\
	![Operação Adicionar Coluna](/lemonade/img/spark/manipulacao_de_dados/coluna_adicionar_nova/image4.png)
	
5. Execute o fluxo e visualize o resultado.\
	![Resultado](/lemonade/img/spark/manipulacao_de_dados/coluna_adicionar_nova/image5.png)

-----

Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[1]: /pt-br/
[2]: /pt-br/
[3]: /pt-br/
[4]: /pt-br/
[5]: /pt-br/