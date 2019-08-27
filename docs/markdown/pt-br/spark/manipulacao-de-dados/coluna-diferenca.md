# Diferença entre colunas

A diferença é uma operação que exibe a diferença entre duas fontes de dados. O resultado contém os objetos da primeira fonte de dados que não estão na segunda fonte de dados.



### Conectores
| Entrada | Saída |
| --- | --- |
| Até duas fontes de dados. | Dados tratados |


### Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Prefixo para os atributos** | Os prefixos dos nomes das novas colunas na saída de dados da operação. (2 valores separados por vírgula) |

[Aba Aparência][1]

[Aba Resultados][2]


## Exemplo de Utilização
**Objetivo:** Encontrar a diferença entre dois conjuntos de dados através da operação Diferença. \
**Base de Dados:** [Íris][3]
	
![Ler dados](/img/spark/manipulacao_de_dados/coluna_diferenca/image2.png)

1. Adicione uma base de dados por meio da operação [Ler dados][4].\
	![Tabela - Ler dados](/img/spark/manipulacao_de_dados/coluna_diferenca/image4.png)
	
2. Adicione a operação **Diferença entre colunas**.
	
	
3. Execute o fluxo e visualize o resultado.\
	![Resultado](/img/spark/manipulacao_de_dados/coluna_diferenca/image3.png)\
	Como se trata de duas fontes de dados idênticas, o resultado gerado é vazio. Portanto, não há diferença entre as duas fontes de dados.

-----

Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[1]: /pt-br/spark/documentacao-geral/documentacao-geral.html#aba-aparencia
[2]: /pt-br/spark/documentacao-geral/documentacao-geral.html#aba-resultados
[3]: /pt-br/spark/base-de-dados/#iris
[4]: /pt-br/spark/entrada-e-saida/ler-dados.html