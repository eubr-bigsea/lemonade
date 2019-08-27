# Ordenar

Ordena os dados pelo atributo escolhido.

### Conectores
| Entrada | Saída |
| --- | --- |
| Dados a serem ordenados | Dados ordenados |

### Tarefa
Nome da Tarefa

### Execução
| Parâmetro | Detalhe |
| --- | --- |
| **[Atributos]** | Parâmetros de configuração da ordenação |

[Aba Aparência][1]

[Aba Resultados][2]


## Definições
### Atributos
Ao clicar em “Abrir Editor” é apresentado:
- Atributos: são os atributos a serem usados na ordenação.
- Função: função a ser usada para ordenar o atributo desejado: crescente ou decrescente.

## Exemplo de Utilização
**Objetivo:** Ordenar de Forma Decrescente.\
**Base de Dados:** [Íris][3]

![Ler dados](/img/spark/manipulacao_de_dados/coluna_ordenar/image4.png)

1. Adicione uma base de dados por meio da operação [Ler dados][4].

2.  Selecione a operação **Ordenar** e clique em **Abrir o Editor**, em seguida em **Adicionar**.\
	![Tabela - Ler dados](/img/spark/manipulacao_de_dados/coluna_ordenar/image3.png)

3. Escolha *“Sepal_width”* como **Atributo** e *“decrescente”* como **Função** para realizar a ordenação.\
	![Ler dados - Escolha de atrributos](/img/spark/manipulacao_de_dados/coluna_ordenar/image2.png)\
	**Importante:** Mais de uma ordenação podem ser feitas, a ordem será sempre dos atributos colocados na parte inferior para os colocados superiormente. 


4. Visualize a base para verifique que os atributos foram ordenados.\
	![Resultado](/img/spark/manipulacao_de_dados/coluna_ordenar/image1.png)
	
-----

Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[1]: /pt-br/spark/documentacao-geral/documentacao-geral.html#aba-aparencia
[2]: /pt-br/spark/documentacao-geral/documentacao-geral.html#aba-resultados
[3]: /pt-br/spark/base-de-dados/#iris
[4]: /pt-br/spark/entrada-e-saida/ler-dados.html
[Atributos]: #atributos