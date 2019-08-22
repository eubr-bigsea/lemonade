# Máximo Absoluto

Transforma um atributo do conjunto de dados, escalando esse atributo pelo valor máximo absoluto encontrado. Assim, os valores resultantes ficam contidos no intervalo [-1, 1].


### Conectores
| Entrada | Saída |
| --- | --- |
| Dados a serem tratados | Dados tratados e modelo de transformação |

### Tarefa
Nome da Tarefa

### Aba Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Atributo com as características (features)** | Atributo que será transformado pelo escalador |
| **Nome do novo atributo** | Nome que o atributo escalado receberá |

[Aba Aparência][1]

[Aba Resultados][2] 

## Exemplos de Utilização
### Exemplo 1
**Objetivo:** Utilizar o máximo-absoluto para escalonar um atributo.\
**Base de Dados:** [Íris][3]

![Fluxo de trabalho](/img/spark/pre-processamento-de-dados/redefinir-escala-maximo-absoluto/image5.png)

1. Adicione uma base de dados por meio da operação [Ler dados][4].\
![Operação Ler Dados](/img/spark/pre-processamento-de-dados/redefinir-escala-maximo-absoluto/image1.png)

2. Utilize a operação **Máximo Absoluto** para escalar os atributos. Selecione *“sepallength”*, *“sepalwidth”*, *“petallength”* e *“petalwidth”* no campo **Atributo(s) previsor(es)**. Preencha *“scaled_measures”* no campo **Nome do novo atributo**.\
![Operação Máximo Absoluto](/img/spark/pre-processamento-de-dados/redefinir-escala-maximo-absoluto/image7.png)

3. Execute o fluxo e visualize o resultado. O resultado possui o atributo *“scaled_measures”*, que é um vetor de quatro elementos, correspondente aos atributos numéricos da base já escalados.\
![Operação Máximo Absoluto](/img/spark/pre-processamento-de-dados/redefinir-escala-maximo-absoluto/image4.png)


### Exemplo 2 - Reutilização do Modelo
**Objetivo:** A reutilização do modelo aprendido pelo escalador pode ser útil, por exemplo, ao processar o dado em batches. O segundo batch pode ser escalado de acordo com o primeiro, o que pode acontecer com a divisão de dados entre treino e teste numa tarefa de aprendizado supervisionado. Abaixo, é apresentado um exemplo do uso do Máximo-absoluto com a reutilização do modelo.\
**Base de Dados:** [Íris][3]

![Fluxo de Trabalho](/img/spark/pre-processamento-de-dados/redefinir-escala-maximo-absoluto/image8.png)

1. Adicione uma base de dados por meio da operação [Ler dados][4], assim como o **Exemplo 1**. 

2. Adicione e utilize a operação **Máximo Absoluto** para escalar os atributos. Selecione *“petallength”* e *“petalwidth”* no campo **Atributo(s) previsor(es)**. Preencha *“scaled_measures”* no campo **Nome do novo atributo**.\
![Operação Máximo Absoluto](/img/spark/pre-processamento-de-dados/redefinir-escala-maximo-absoluto/image6.png)

3. Utilize a operação [Aplicar modelo][5]. Selecione *“sepallength”* e *“sepalwidth”* no campo **Atributos com as features**. Preencha *“scaled_length_with”* no campo **Nome do novo atributo**.\
![Operação Aplicar Modelo](/img/spark/pre-processamento-de-dados/redefinir-escala-maximo-absoluto/image3.png)

4. Execute o fluxo e observe o resultado. O resultado possui o atributo *“scaled_length_width”*, que é um vetor de dois elementos, correspondente aos atributos *“sepal length”* e *“sepal width”* escalados de acordo com o modelo aprendido com os atributos *“petal length”* e *“petal width”*. É possível notar que na amostra de dados, o valor do segundo elemento do vetor *“scaled_length_width”* é maior que 1 para as instâncias visíveis. Isso se ocorre porque os valores correspondentes de *“sepal width”* são maiores que o valor máximo absoluto encontrado para *“petal width”*, com o qual o modelo foi obtido.
![Resultado](/img/spark/pre-processamento-de-dados/redefinir-escala-maximo-absoluto/image2.png)

---
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[Link na propria pagina]: #link-vem-pra-ca
[1]: /spark/
[2]: /spark/
[3]: /spark/
[4]: /spark/
[5]: /spark/