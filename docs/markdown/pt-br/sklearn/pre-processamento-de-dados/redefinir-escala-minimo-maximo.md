# Mínimo-Máximo

Transforma um atributo do conjunto de dados, escalando esse atributo para que ele fique dentro de determinado intervalo [*min_range*, *max_range*]. Sejam *min_value* o valor mínimo encontrado nos dados de entrada para o atributo, *max_value* o valor máximo e *atr* o valor corrente a ser transformado. A transformação se dá de acordo com a operação:\
*(atr - min_value) / (max_value - min_value) * (max_range - min_range) + min_range*

### Conectores
| Entrada | Saída |
| --- | --- |
| Dados tratados e modelo gerado | Dados a serem tratados |

### Tarefa
Nome da Tarefa

### Aba Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Atributo(s) previsor(es)** | Atributo que será transformado pelo escalador |
| **Nome do novo atributo** | Nome que o atributo escalado receberá |
| **Limite inferior para a faixa** | Valor mínimo que o atributo transformado assumirá |
| **Limite superior para a faixa** | Valor máximo que o atributo transformado assumirá |

[Aba Aparência][1]

[Aba Resultados][2] 

## Exemplos de Utilização
### Exemplo 1
**Objetivo:** utilizar o mínimo-máximo para escalonar um atributo.\
**Base de Dados:** [Íris][3]

![Fluxo de trabalho](/img/spark/pre-processamento-de-dados/redefinir-escala-minimo-maximo/image4.png)

1. Adicione uma base de dados por meio da operação [Ler dados][4].\
![Opereação Ler Dados](/img/spark/pre-processamento-de-dados/redefinir-escala-minimo-maximo/image1.png)

2. Utilize a operação **Mínimo-Máximo** para escalar os atributos. Selecione *“sepallength”* e *“sepalwidth”* no campo **Atributo(s) previsor(es)**. Preencha *“scaled_length_width”* no campo **Nome do novo atributo**, *1* para o **Limite inferior para a faixa** e *2* para o **superior**.\
![Opereação Mínimo Máximo](/img/spark/pre-processamento-de-dados/redefinir-escala-minimo-maximo/image8.png)

3. Execute o fluxo e visualize o resultado.\
![Resultado](/img/spark/pre-processamento-de-dados/redefinir-escala-minimo-maximo/image7.png)\
O resultado possui o atributo *“scaled_length_width”*, que é um vetor de dois elementos, correspondente aos atributos *“sepal length”* e *“sepal width”* já escalados. O grande número de casas decimais se deve apenas à representação binária de números ponto flutuante.

### Exemplo 2

**Objetivo:** A reutilização do modelo aprendido pelo escalador pode ser útil, por exemplo, ao processar o dado em batches. O segundo batch pode ser escalado de acordo com o primeiro, o que pode acontecer com a divisão de dados entre treino e teste numa tarefa de aprendizado supervisionado. Abaixo, é exibido um exemplo do uso do Escalador min-máx com a reutilização do modelo.\
![Fluxo de trabalho](/img/spark/pre-processamento-de-dados/redefinir-escala-minimo-maximo/image2.png)\

1. Adicione uma base de dados por meio da operação [Ler dados][4], assim como o **Exemplo 1**.

2. Adicione e utilize a operação **Mínimo-Máximo** para escalar os atributos. Selecione *“petallength”* e *“petalwidth”* no campo **Atributo(s) previsor(es)**. Preencha *“scaled_length_width”* no campo **Nome do novo atributo**, 1 para o **Limite inferior para a faixa** e 2 para o **superior**.\
![Operação Mínimo Máximo](/img/spark/pre-processamento-de-dados/redefinir-escala-minimo-maximo/image3.png)

3. Utilize a operação [Aplicar modelo][5]. Selecione *“sepallength”* e *“sepalwidth”* no campo **Atributo(s) previsor(es)**. Preencha *“scaled_length_with”* no campo **Nome do novo atributo**.\
![Operação Aplicar Modelo](/img/spark/pre-processamento-de-dados/redefinir-escala-minimo-maximo/image5.png)

4. Execute o fluxo e observe o resultado.\
![Resultado](/img/spark/pre-processamento-de-dados/redefinir-escala-minimo-maximo/image6.png)\
O resultado possui o atributo *“scaled_length_width”*, que é um vetor de dois elementos, correspondente aos atributos *“sepallength”* e *“sepalwidth”* escalados de acordo com o modelo aprendido com os atributos *“petallength”* e *“petalwidth”*. É possível notar a diferença entre ajustar e aplicar o modelo nos mesmos dados, o que foi feito no caso de uso anterior, e ajustar o modelo e aplicar em dados diferentes. Por exemplo, na amostra de dados, o valor do segundo elemento do vetor *“scaled_length_width”* é maior que 2 (o valor máximo configurado para o intervalo) para as instâncias visíveis. 

---
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[Link na propria pagina]: #link-vem-pra-ca
[1]: /pt-br/spark/documentacao-geral/aba-aparencia.html
[2]: /pt-br/spark/documentacao-geral/aba-resultados.html
[3]: /pt-br/spark/base-de-dados/#iris
[4]: /pt-br/spark/entrada-e-saida/ler-dados.html
[5]: /pt-br/spark/modelo-e-avaliacao/aplicar-modelo.html