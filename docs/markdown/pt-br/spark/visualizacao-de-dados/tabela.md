
# Tabela

Visualizações de tabela são úteis para a visualização tabular dos dados.

### Conectores
| Entrada | Saída |
| --- | --- |
|Dados de entradas | Uma visualização |

### Tarefa
Nome da Tarefa

### Aba Execução

| Atributos | Título |
| --- | --- |
| Atributos escolhidos para aparecerem na tabela. Caso não definido, todos os atributos serão selecionados | Título da visualização. É apresentado no resultado |

[Aba Aparência][1]

[Aba Resultados][2]


## Exemplo de Utilização
**Objetivo:** visualizar informações sobre diferentes tipos de Íris (uma espécie de flor).

**Base de Dados:** [Iris][3]
	
![Ler dados](/img/spark/visualizacao_de_dados/tabela/image1.png)

1. Adicione uma base de dados por meio da operação [Ler dados][4]. 

2. Na operação **Tabela**, adicione um título. Deixe o campo **Atributos** vazio ou selecione todos os existentes.
	
	![Tabela](/img/spark/visualizacao_de_dados/tabela/image3.png)

3. Execute o fluxo e visualize o resultado
	
	![Resultados](/img/spark/visualizacao_de_dados/tabela/image4.png)

4. Selecione apenas os valores *“sepallength”* e *“sepalwidth”* para o parâmetro **Atributos**.
	
	![Valores de parâmetros](/img/spark/visualizacao_de_dados/tabela/image5.png)

5. Execute o fluxo novamente e visualize o resultado
	
	![Novos resultados](/img/spark/visualizacao_de_dados/tabela/image2.png)

-----

Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[1]: /pt-br/spark/documentacao-geral/documentacao-geral.html#aba-aparencia
[2]: /pt-br/spark/documentacao-geral/documentacao-geral.html#aba-resultados
[3]: /pt-br/spark/base-de-dados/#iris
[4]: /pt-br/spark/entrada-e-saida/ler-dados.html