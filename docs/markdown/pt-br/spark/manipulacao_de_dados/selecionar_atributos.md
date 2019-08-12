# Selecionar Atributos

A operação **Selecionar Atributos** permite ao usuário selecionar um subconjunto de colunas da base de dados (também conhecidas como atributos ou variáveis). Geralmente, utiliza-se essa operação quando quer-se fazer um estudo mais aprofundado com algumas colunas da base de dados ou simplesmente remover um atributo indesejado.

### Conectores
| Entrada | Saída |
| --- | --- |
| Uma fonte de dados | Múltiplas fontes com os dados modificados |

### Tarefa
Nome da Tarefa

### Aba Execução

| Parâmetro | Detalhe |
| --- | --- |
| **Atributo(s)** | Coluna(s) de atributo(s) da base de dados selecionada(s) pelo usuário |

[Aba Aparência][1]

[Aba Resultados][2]


## Exemplo de Utilização
**Objetivo:** Selecionar atributos da base de dados.

**Base de Dados:** [Titanic][3]
	
![Ler dados](/lemonade/img/spark/manipulacao_de_dados/selecionar_atributos/image3.png)

1. Adicione uma base de dados por meio da operação [Ler dados][4].
	
2. Adicione a operação **Selecionar Atributos**, selecione *“age”* e *“sex”* no campo **Atributo(s)**.
	![Selecionar atributo(s)](/lemonade/img/spark/manipulacao_de_dados/selecionar_atributos/image2.png)
	
3. Execute o fluxo e visualize o resultado.
	![Resultado](/lemonade/img/spark/manipulacao_de_dados/selecionar_atributos/image1.png)

-----

Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[1]: /pt-br/
[2]: /pt-br/
[3]: /pt-br/