# Filtrar por Função

Filtrar por função é uma operação que filtra os dados sendo trabalhados a partir dos critérios selecionados.

### Conectores
| Entrada | Saída |
| --- | --- |
| Uma fonte de dados | Uma ou mais  fontes com os dados modificados |

### Parâmetros da Tarefa
Nome

### Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Expressão para filtro** | Expressões usadas para a filtragem |

[Aba Aparência][1]

[Aba Resultados][2]


## Definições
### Expressão
Uma expressão deve conter as seguintes informações:

1. Atributos: Atributo(s) que será(ão) filtrado(s). 

2. Função: Função que receberá como entrada o(s) atributo(s) para realizar a filtragem. Dentre as opções de função, tem-se:\
	![Filtros](/docs/img/spark/manipulacao_de_dados/filtrar_por_funcao/image1.png)

3. Valor: O valor que definirá a filtragem. Pode ser numérico ou não numérico, mas deve refletir exatamente os valores que estão presentes na base.

### Expressões para Filtro
Recebe uma expressão para filtragem. Podem ser usadas expressões comparativas como as vistas no filtro comum (<, >, ==, !=, etc.), conjunções como ou (||) e e(&&), e funções da operação **Transformation** que retornam valores booleanos (isnull() e isnan()).\
![Expressões de filtros](/docs/img/spark/manipulacao_de_dados/filtrar_por_funcao/image3.png)


## Exemplo de Utilização
**Objetivo:** Separar as pessoas que sobreviveram ao desastre das pessoas que não sobreviveram, a fim de analisar as características de cada grupo separadamente.\
**Base de Dados:** [Titanic][3]

![Ler dados](/docs/img/spark/manipulacao_de_dados/filtrar_por_funcao/image4.png)

1. Adicione uma base de dados por meio da operação [Ler dados][4].

2. Adicione a operação **Filtrar por função** e altere o nome para *“Filtro Sobreviveram”*. Clique na opção *“Editar valor”*. Preencha o campo **expressão** com “Survived == 1” para selecionar os passageiros que sobreviveram. \
	![Filtrar por Função - Sobreviveram](/docs/img/spark/manipulacao_de_dados/filtrar_por_funcao/image5.png)

3. Adicione novamente a operação **Filtrar por função** e altere o nome para “Filtro Não Sobreviveram”. Clique na opção “Editar valor”. Preencha o campo **expressão** com “Survived == 0” para selecionar os passageiros que não sobreviveram.\
	![Filtrar por Função - Não Sobreviveram](/docs/img/spark/manipulacao_de_dados/filtrar_por_funcao/image2.png)

4. Execute o fluxo e visualize o resultado, conforme mostrado abaixo
	![Filtrar por Função - Não Sobreviveram](/docs/img/spark/manipulacao_de_dados/filtrar_por_funcao/image7.png)
	
	![Filtrar por Função - Não Sobreviveram](/docs/img/spark/manipulacao_de_dados/filtrar_por_funcao/image6.png)
	
-----

Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[1]: /pt-br/
[2]: /pt-br/
[3]: /pt-br/
[4]: /pt-br/