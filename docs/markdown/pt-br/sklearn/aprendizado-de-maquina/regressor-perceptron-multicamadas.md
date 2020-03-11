# Regressor Perceptron Multicamadas
O Perceptron Multicamadas (Multi-Layer perceptron) é um algoritmo de aprendizado supervisionado que  baseia-se em 
abstrações de redes neurais encontradas no cérebro. Esse classificador cria um modelo com camadas de neurônios conectadas, 
considerando que cada camada possui diversos neurônios conectores.

### Conectores
| Entrada | Saída |
| --- | --- |
| Dados utilizados para treinar o modelo | Dados de saída e modelo do algoritmo de regressão |

### Tarefa
Nome da Tarefa

### Aba Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Atributo(s) previsor(es)** | Atributo que será usado para treinamento |
| **Atributo com o rótulo** | Atributo a ser predito |
| **Atributos com a predição** | Atributo contendo a predição do modelo |
| **Tamanhos das [Camadas]** | O elemento de ordem i representa o número de neurônios. |
| **Ativação** | Função de ativação para a camada oculta. |
| **Solver** | O solucionador para otimização de peso. |
| **Alpha** | Parâmetro de penalidade L2 (termo de regularização). |
| **Número máximo de iterações** | O solucionador itera até a convergência ou esse número de iterações. |
| **Tolerância** | Tolerância para a otimização. |
| **Semente** | Semente usada pelo gerador de números aleatórios. |
| **Taxa de aprendizado** | Programação da taxa de aprendizado para atualizações de peso. |
| **Tamanho do batch** | Tamanho de mini batches para otimizadores estocásticos |
| **Taxa de aprendizado inicial** | A taxa de aprendizado inicial usada. Controla o tamanho da etapa na atualização dos pesos. |
| **Expoente** | O expoente da taxa de aprendizado de escala inversa. |
| **Shuffle** | Se as amostras devem ser embaralhadas em cada iteração. |
| **Número máximo de epochs** | Número máximo de epochs para não |
| **Momentum** | Momentum para atualização de descida de gradiente. |
| **Nesterov's momentum** | Se deve usar o Nesterov’s momentum . |
| **Parada antecipada** | Se a parada precoce deve ser usada para encerrar o treinamento quando a pontuação de validação não está melhorando. |
| **Fração de validação** | A proporção de dados de treinamento a serem retirados como validação definida para parada antecipada. |
| **Beta 1** | A taxa de decaimento exponencial para estimativas do vetor de primeiro momento em adam, deve estar em [0, 1). |
| **Beta 2** | A taxa de decaimento exponencial para estimativas do vetor de segundo momento em adam, deve estar em [0, 1). |
| **Epsilon** | Valor para a estabilidade numérica em adão. |

[Aba Aparência][1]

[Aba Resultados][2] 

## Definições
### Camadas
Esse regressor utiliza a função (de ativação) logística nos neurônios em camadas comuns (intermediárias) e a função softmax nos neurônios na camada de saída.

## Exemplo de Utilização
**Objetivo:** Utilizar o modelo construído pela operação Regressão Perceptron Multicamadas para predizer a qualidade de um vinho.\
**Base de Dados:** Qualidade da Variante Vermelha do Vinho Verde Português - [Wine Red Quality][3]

![Fluxo - Ler dados](/img/sklearn/aprendizado_de_maquina/regressor_linear/image3.png)

1. Leia a base de dados por meio da operação [Ler dados][4].

2. Utilize a operação [Divisão percentual][5] para dividir a base de dados em treino e teste. No parâmetro **Percentual**, calibre-o utilizando 50% dos dados para treinar (1.ª parte) e 50% para testar (2.ª parte).

3. Na Operação **Regressão Perceptron multicamadas**, selecione *“alcohol”*, *“chlorides”*, *“citric_acid”*, *“density”*, *“fixed_acidity”*, *“free_sulfur_dioxide”*, *“pH”*, *“residual_sugar”*, *“sulphates”*, *“total_sulfur_dioxide”* e *“volatile_acidity”* no campo **Atributo(s) previsor(es)**. Selecione *“quality”* no campo  **Atributo com o rótulo** e preencha *“resultado”* no campo **Atributo com a predição (novo)**. Preencha 100 no campo **Iterações máximas**, 0.35 no campo **Regularização** e 0.8 no campo **Mix. para ElasticNet**. Deixe os demais parâmetros inalterados.\
	![Tabela - Regressão perceptron_multicamadas 1](/img/sklearn/aprendizado_de_maquina/regressor_linear/image4.png)
	![Tabela - Regressão perceptron_multicamadas 2](/img/sklearn/aprendizado_de_maquina/regressor_linear/image2.png)

4. Na operação [Aplicar Modelo][6], selecione *“alcohol”*, *“chlorides”*, *“citric_acid”*, *“density”*, *“fixed_acidity”*, *“free_sulfur_dioxide”*, *“pH”*, *“residual_sugar”*, *“sulphates”*, *“total_sulfur_dioxide”* e *“volatile_acidity”* no campo **Atributo(s) previsor(es)** e preencha *“resultado”* no campo **Nome do novo atributo (herdado do modelo)**. 

5. Na operação [Avaliar Modelo][7], selecione *“resultado”* no campo **Atributo usado para predição**. Selecione *“quality”* no campo **Atributo usado como label** e a métrica *“Raiz do erro quadrático médio”* como **Métrica para avaliação**.

6. Execute o fluxo e visualize o resultado, que neste caso está de acordo com a raiz do erro quadrático médio **(Root Mean Square Error ou RMSE)**:
	![Resultado](/img/sklearn/aprendizado_de_maquina/regressor_linear/image1.png)




---
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[1]: /pt-br/sklearn/documentacao-geral/aba-aparencia.html
[2]: /pt-br/sklearn/documentacao-geral/aba-resultados.html
[3]: /pt-br/sklearn/base-de-dados/#wine
[4]: /pt-br/sklearn/entrada-e-saida/ler-dados.html
[5]: /pt-br/sklearn/pre-processamento-de-dados/amostragem-divisao-percentual.html
[6]: /pt-br/sklearn/modelo-e-avaliacao/aplicar-modelo.html
[7]: /pt-br/sklearn/modelo-e-avaliacao/avaliar-modelo.html