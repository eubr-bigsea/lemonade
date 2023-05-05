# Renomeia Atributo(s)

**Renomeia atributo(s)** é uma operação que designa um novo nome a um ou mais atributos.

### Conectores
| Entrada | Saída |
| --- | --- |
| Uma fonte de dados | Fonte de dados com as colunas renomeadas |

### Parâmetros da Tarefa
Nome

### Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Campos-chave** | Nome(s) da(s) coluna(s) em que se deseja renomear |


[Propriedades da Aparência][1]

[Resultados][2]


## Exemplo de Utilização
**Objetivo:** Renomear duas colunas da base Iris.

**Base de Dados:** [Íris][3]

1. Adicione uma base de dados por meio da operação [Ler dados][4]. É importante marcar a caixa de seleção **Exibir amostra(s) da(s) saída(s) (máx. 50 registros)** na aba [Resultados][2] para efetuar uma comparação posterior com o resultado da operação **Remover linhas duplicadas**.\
![Ler dado(s)](/img/spark/manipulacao_de_dados/renomeia_atributos/image1.png)
2. Adicione a operação **Renomeia atributo(s)**, selecione a coluna *“petal_length”* e *"sepal_length"* como **Campos-chave**, ou seja, a coluna de atributos em que deve-se procurar por valores repetidos. Designe os novos nomes *“petal_length_1”* e *"sepal_length_1"* Também é importante marcar a caixa de seleção **Exibir amostra(s) da(s) saída(s) (máx. 50 registros)** na aba [Resultados][2] para uma comparação com a entrada. \
![Renomeia atributo(s)](/img/spark/manipulacao_de_dados/renomeia_atributos/image2.png)
	
3. Execute o fluxo e visualize o resultado. \
![Resultado](/img/spark/manipulacao_de_dados/renomeia_atributos/image3.png)
-----

Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[1]: /pt-br/spark/documentacao-geral/aba-aparencia.html
[2]: /pt-br/spark/documentacao-geral/aba-resultados.html
[3]: /pt-br/spark/base-de-dados/#iris
[4]: /pt-br/spark/entrada-e-saida/ler-dados.html