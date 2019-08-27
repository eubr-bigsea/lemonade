# Executar Comandos SQL
Executa uma consulta SQL.\
Obs.: Nem todas as possíveis consultas estão disponíveis na plataforma Spark. As operações de consulta SQL da plataforma Spark atuam apenas sobre a linguagem de consulta de dados (DQL).


### Conectores
| Entrada | Saída |
| --- | --- |
| Base de Dado(s) em que o SQL será executado | Dados retornados pela consulta SQL |

### Tarefa
Nome da Tarefa

### Aba Execução
| Parâmetro | Detalhe |
| --- | --- |
| **[Consulta (entradas estão disponíveis como tabelas chamadas ds1 e ds2)]** | Consulta SQL |
| **Tratar esses valores como nulos (separe por vírgula)** | Valores que serão considerados como nulos quando o arquivo estiver sendo lido |
| **Nome dos novos atributos após a consulta** |  |

[Aba Aparência][1]

[Aba Resultados][2]

## Definições
### Consulta
1. Consulta SQL (entradas disponíveis como tabelas nomeadas ds1 e ds2):\
	Consulta que seja compatível com a plataforma Apache Spark. Mais informações sobre consultas disponíveis, acessar:
	- <https://docs.databricks.com/spark/latest/spark-sql/language-manual/select.html>
	- <https://spark.apache.org/docs/latest/sql-programming-guide.html>

## Exemplo de Utilização
**Objetivo:** criar uma base de dados com os atributos dos dois conjunto de dados.\
**Base de Dados:** [Artificial 1][3]
	
![Ler dados](/img/spark/avancado/executar_comandos_sql/image3.png)\
As duas entradas **(Ler Dados)** serão referenciadas como “ds1” e “ds2”. 

1. Adicione uma base de dados por meio da operação [Ler dados][4]. 

2. Utilize operação **Executar Consulta SQL** para juntar as duas bases e preencha o campo com a consulta desejada.

    **Consulta: Selecionar os atributos A, B e key**.\
	Os atributos A e B são selecionados, quando o “key” é o mesmo. É feito uma união dos dois conjuntos de dados, através do único atributo em comum (atributo “key”). Isto é realizado com a operação de banco de dados relacional denominada união ou join.\
	![Consultar](/img/spark/avancado/executar_comandos_sql/image1.png)

	Obs.: O segundo parâmetro dessa operação deve ser utilizado de forma cuidadosa, pois, nesse exemplo sabe-se que no resultado existirá 3 atributos, então é possível renomeá-lo. Mas quando utilizar esse parâmetro em uma seleção de todos os atributos, ou seja, uma consulta assim “SELECT * from ds1”. Se não conhecer os atributos presentes no conjunto de dados, não é possível renomear as colunas.

3. Execute e visualize o resultado obtido.\\
	Observe que os atributos foram renomeados e que existe um novo conjunto de dados com os atributos desejados. \
	![Resultado](/img/spark/avancado/executar_comandos_sql/image2.png)

-----

Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[Consulta (entradas estão disponíveis como tabelas chamadas ds1 e ds2)]: #consulta
[Inferir esquema da fonte de dados]: #inferir-esquema-da-fonte-de-dados
[O que fazer em caso de dados inválidos]: #o-que-fazer-em-caso-de-dados-invalidos
[1]: /pt-br/spark/documentacao-geral/documentacao-geral.html#aba-aparencia
[2]: /pt-br/spark/documentacao-geral/documentacao-geral.html#aba-resultados
[3]: /pt-br/spark/base-de-dados/#artificial-1
[4]: /pt-br/spark/entrada-e-saida/ler-dados.html