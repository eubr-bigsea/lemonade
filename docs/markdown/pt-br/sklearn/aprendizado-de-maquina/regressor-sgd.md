# Regressor SGD
O regressor SGD (Stochastic Gradient Descent) é uma abordagem simples, mas muito eficiente, para ajustar modelos lineares. É particularmente útil quando o número de amostras (e o número de recursos) é muito grande.

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
| **Alpha** | Constante que multiplica o termo de regularização. |
| **Taxa L1** | O parâmetro de mistura Elastic Net, com 0<=l1_ratio<=1. l1_ratio=0 corresponde a penalidade L2, l1_ratio=1 a L1. |
| **Número máximo de iterações** | Número máximo de iterações. |
| **Tolerancia** | Tolerância para critérios de parada. |
| **Semente** | A semente do gerador de números pseudo-aleatórios a ser usada ao embaralhar os dados. |
| **Taxa de aprendizado** | The learning rate schedule. |
| **Expoente** | O expoente da taxa de aprendizado de escala inversa. |
| **Embaralhar** | Se os dados de treinamento devem ou não ser embaralhados após cada época. |
| **Parada antecipada** | Se a parada precoce deve ser usada para encerrar o treinamento quando a pontuação de validação não está melhorando. |
| **Fração de validação** | A proporção de dados de treinamento a serem retirados como validação definida para parada antecipada. |
| **Epsilon** | Epsilon nas funções de perda insensível ao epsilon. |
| **N iter no change** | Número de iterações sem melhoria a aguardar antes da parada precoce. |
| **Perda** | A função de perda a ser usada. |
| **Penalidade** | A penalidade (termo de regularização) a ser usada. |
| **Interceptação** | Se a interceptação deve ser estimada ou não. |
| **Verbosidade** | O nível de verbosidade. |
| **Eta** | A taxa de aprendizado inicial. |
| **Média** | Se definido como um int maior que 1, a média começará assim que o número total de amostras vistas atingir a média. Então a média = 10 começará a média depois de ver 10 amostras. |

[Aba Aparência][1]

[Aba Resultados][2] 

## Exemplo de Utilização
**Objetivo:** Utilizar o modelo construído pela operação Regressão Linear para predizer a qualidade de um vinho.\
**Base de Dados:** Qualidade da Variante Vermelha do Vinho Verde Português - [Wine Red Quality][3]

![Fluxo - Ler dados](/img/sklearn/aprendizado_de_maquina/regressor_linear/image3.png)

1. Leia a base de dados por meio da operação [Ler dados][4].

2. Utilize a operação [Divisão percentual][5] para dividir a base de dados em treino e teste. No parâmetro **Percentual**, calibre-o utilizando 50% dos dados para treinar (1.ª parte) e 50% para testar (2.ª parte).

3. Na Operação **Regressão Linear**, selecione *“alcohol”*, *“chlorides”*, *“citric_acid”*, *“density”*, *“fixed_acidity”*, *“free_sulfur_dioxide”*, *“pH”*, *“residual_sugar”*, *“sulphates”*, *“total_sulfur_dioxide”* e *“volatile_acidity”* no campo **Atributo(s) previsor(es)**. Selecione *“quality”* no campo  **Atributo com o rótulo** e preencha *“resultado”* no campo **Atributo com a predição (novo)**. Preencha 100 no campo **Iterações máximas**, 0.35 no campo **Regularização** e 0.8 no campo **Mix. para ElasticNet**. Deixe os demais parâmetros inalterados.\
	![Tabela - Regressão linear 1](/img/sklearn/aprendizado_de_maquina/regressor_linear/image4.png)
	![Tabela - Regressão linear 2](/img/sklearn/aprendizado_de_maquina/regressor_linear/image2.png)

4. Na operação [Aplicar Modelo][6], selecione *“alcohol”*, *“chlorides”*, *“citric_acid”*, *“density”*, *“fixed_acidity”*, *“free_sulfur_dioxide”*, *“pH”*, *“residual_sugar”*, *“sulphates”*, *“total_sulfur_dioxide”* e *“volatile_acidity”* no campo **Atributo(s) previsor(es)** e preencha *“resultado”* no campo **Nome do novo atributo (herdado do modelo)**. 

5. Na operação [Avaliar Modelo][7], selecione *“resultado”* no campo **Atributo usado para predição**. Selecione *“quality”* no campo **Atributo usado como label** e a métrica *“Raiz do erro quadrático médio”* como **Métrica para avaliação**.

6. Execute o fluxo e visualize o resultado, que neste caso está de acordo com a raiz do erro quadrático médio **(Root Mean Square Error ou RMSE)**:
	![Resultado](/img/sklearn/aprendizado_de_maquina/regressor_linear/image1.png)




---
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[resíduos]: #residuos
[1]: /pt-br/sklearn/documentacao-geral/aba-aparencia.html
[2]: /pt-br/sklearn/documentacao-geral/aba-resultados.html
[3]: /pt-br/sklearn/base-de-dados/#wine
[4]: /pt-br/sklearn/entrada-e-saida/ler-dados.html
[5]: /pt-br/sklearn/pre-processamento-de-dados/amostragem-divisao-percentual.html
[6]: /pt-br/sklearn/modelo-e-avaliacao/aplicar-modelo.html
[7]: /pt-br/sklearn/modelo-e-avaliacao/avaliar-modelo.html