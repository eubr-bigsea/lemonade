# Adicionar Nova(s) Coluna(s)

**Remover linhas duplicadas** é uma operação que remove as linhas quando o(s) seu(s) campo(s) chave escolhido(s) conter(em) o mesmo valor.

Detalhes de funcionamento: (i) a linha mantida será a que ocorre a primeira aparição do valor; (ii) quando mais de um campo É ESCOLHIDO a remoção só é realizada se todos os atributos forem iguais; (iii) a ordem da base não é preservada.




### Conectores
| Entrada | Saída |
| --- | --- |
| Uma fonte de dados |  |

### Parâmetros da Tarefa
Nome

### Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Campos-chave** | Nome(s) da(s) coluna(s) em que deve-se procurar por valores repetidos |


[Propriedades da Aparência][1]

[Resultados][2]


## Exemplo de Utilização
**Objetivo:** Remover linhas duplicadas da base de dados.

**Base de Dados:** [Íris][3]
	
![Ler dados](/img/spark/manipulacao_de_dados/linha_remover_duplicadas/image3.png)

1. Adicione uma base de dados por meio da operação [Ler dados][4]. É importante marcar a caixa de seleção **Exibir amostra(s) da(s) saída(s) (máx. 50 registros)** na aba [Resultados][2] para efetuar uma comparação posterior com o resultado da operação **Remover linhas duplicadas**.
	
2. Adicione a operação **Remover linhas duplicadas**, selecione a coluna *“petal_width”* como **Campos-chave**, ou seja, a coluna de atributos em que deve-se procurar por valores repetidos. Também é importante marcar a caixa de seleção **Exibir amostra(s) da(s) saída(s) (máx. 50 registros)** na aba [Resultados][2] para uma comparação com a entrada. \
	![Ler dados](/img/spark/manipulacao_de_dados/linha_remover_duplicadas/image1.png)
	
	
3. Execute o fluxo e visualize o resultado.\
	Compare a base de entrada com aquela retornada por essa operação. A mesma é finalizada com sucesso se, e somente se, o(s) campo(s) chave selecionado(s) (neste caso, **petal_width**) não possuir(em) nenhuma repetição de valor(es). As duas imagens abaixo mostram um antes e um depois da execução desta operação com os parâmetros mencionados. Observe que anteriormente à execução de **Remover linhas duplicadas**, existiam muitas repetições do valor 0.2. Contudo, após a sua execução, só existe uma ocorrência. Como a ordem não é preservada, esse valor ocorreu somente na linha 12.

	Figura mostrando o retorno após a execução de Leitor de dados:\
	![Ler dados](/img/spark/manipulacao_de_dados/linha_remover_duplicadas/image4.png)

	Figura mostrando o retorno após a execução de **Remover linhas duplicadas**:\
	![Ler dados](/img/spark/manipulacao_de_dados/linha_remover_duplicadas/image2.png)

	Também é possível adicionar mais de um campo chave, i.e., várias colunas de atributos a serem verificadas e suas respectivas linhas (com valores dos campos duplicados) removidas. Contudo, quando se seleciona diversos campos chave, cada coluna pode individualmente conter valores repetidos. Isso ocorre pois, a remoção só é feita quando todos os campos chave selecionados possuírem o mesmo valor em mais de uma linha. 
	
-----

Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[1]: /pt-br/
[2]: /pt-br/
[3]: /pt-br/
[4]: /pt-br/