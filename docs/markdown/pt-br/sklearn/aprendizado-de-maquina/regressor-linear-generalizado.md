# Regressão Linear Generalizada
Regressão linear generalizada, é uma versão generalizada do modelo de regressão linear que estima uma função linear que minimiza a distância entre os pontos do modelo à função usando uma distribuição para a função de perda genérica, não assumindo uma distribuição normal assim como na regressão linear.

### Conectores
| Entrada | Saída |
| --- | --- |
| Dados utilizados para treinar o modelo | Dados de saída e Modelo do algoritmo de regressão |

### Tarefa
Nome da Tarefa

### Aba Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Atributo(s) previsor(es)** | Atributo que será usado para treinamento |
| **Atributo com o rótulo** | Atributo a ser predito |
| **Atributos com a predição** | Atributo contendo a predição do modelo |
| **Interceptar** | Se deve calcular a interceptação para este modelo. |
| **Normalizar** | Usado para normalizar os regressores antes da regressão. |

[Aba Aparência][1]

[Aba Resultados][2]

## Exemplo de Utilização
**Objetivo:** utilizar os dados *horsepower* (cavalos de potência de cada carro) e o *price* (preço do carro) para estimar o preço a partir da potência do veículo.\
**Base de Dados:** [mtcars][3]

![Fluxo de trabalho - Ler Dados](/img/sklearn/aprendizado_de_maquina/regressor_linear_generalizado/image5.png)

1. Adicione uma base de dados por meio da operação [Ler dados][4].\
	![Tabela Ler Dados](/img/sklearn/aprendizado_de_maquina/regressor_linear_generalizado/image2.png)

2. Usando a operação [Divisão Percentual][5] divida a base de dados em treino e teste utilizando uma distribuição de 70% para treino e 30% para teste.\
	![Dividir percentual](/img/sklearn/aprendizado_de_maquina/regressor_linear_generalizado/image1.png)

3. Na operação **Regressão Linear Generalizado** coloque o número de *Iterações Máximas* como 100, preencha 10 no campo *Profundidade Máxima*, deixe o valor de *Solver* como *Auto* e o parâmetro de regularização como 0.35. Use a função Gaussiana no campo *Family* como probabilidade de distribuição e a função de identidade no campo *Link Prediction*.\
	![Operação Regressão Linear](/img/sklearn/aprendizado_de_maquina/regressor_linear_generalizado/image9.png)
	![Operação Regressão Linear](/img/sklearn/aprendizado_de_maquina/regressor_linear_generalizado/image4.png)

4. Na operação [Aplicar Modelo][6], selecione **“Horse_Power”* no campo **Atributos com features** e preencha *“prediction”* no campo **Nome do novo atributo**.\
	![Operação Aplicar Modelo](/img/sklearn/aprendizado_de_maquina/regressor_linear_generalizado/image3.png)

5. Na operação [Avaliar Modelo][7], selecione *“Price”* no campo **Atributo usado para predição*. Selecione *“prediction”* no campo **Atributo usado como label**. E selecione a métrica *“Root Mean Square Error”* como **métrica para avaliação**.\
	![Operação Avaliar Modelo](/img/sklearn/aprendizado_de_maquina/regressor_linear_generalizado/image8.png)

6. Execute o Fluxo e visualize o resultado.\
	![Resultado](/img/sklearn/aprendizado_de_maquina/regressor_linear_generalizado/image7.png)\
	![Resultado Gráfico](/img/sklearn/aprendizado_de_maquina/regressor_linear_generalizado/image6.png)\
	O valor predito é de 5238.423. No primeiro gráfico residual da predição que investiga o uso da do modelo de predição, podemos ver que a distribuição apresentada se adequa às suposições para o uso da regressão linear generalizada. No segundo gráfico vemos a distribuição dos dados reais que era desejado prever e a reta vermelha que representa a predição feita pelo modelo, podemos ver que a regressão encaixa bem nos dados desejados.

---
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[1]: /pt-br/sklearn/documentacao-geral/aba-aparencia.html
[2]: /pt-br/sklearn/documentacao-geral/aba-resultados.html
[3]: /pt-br/sklearn/base-de-dados/#mtcars-com
[4]: /pt-br/sklearn/entrada-e-saida/ler-dados.html
[5]: /pt-br/sklearn/pre-processamento-de-dados/amostragem-divisao-percentual.html
[6]: /pt-br/sklearn/modelo-e-avaliacao/aplicar-modelo.html
[7]: /pt-br/sklearn/modelo-e-avaliacao/avaliar-modelo.html