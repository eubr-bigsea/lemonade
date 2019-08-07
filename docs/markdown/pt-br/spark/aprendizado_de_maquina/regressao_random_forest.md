# Random Forest Regressor

Random Forest (floresta aleatória) é uma generalização da operação [Árvore de Decisão][1], em que se utiliza um conjunto de árvores de decisão (aleatórias) a fim de minimizar o sobreajuste (*overfitting*) de cada modelo individual de árvore gerado para os dados de entrada.

### Conectores
| Entrada | Saída |
| --- | --- |
| Dados utilizados para treinar o modelo | Dados de saída e modelo do algoritmo de regressão |

### Tarefa
Nome da Tarefa

### Aba Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Atributo(s) previsor(es)** | Atributo(s) que será(ão) usado(s) para treinamento |
| **Atributo com o rótulo** | Atributo a ser predito |
| **Atributos com a predição** | Atributo contendo a predição do modelo |
| **Profundidade máxima** | Profundidade máxima permitida nas árvores de decisão |
| **Número de árvores** | O número de árvores na floresta |
| **Máximo de bins** | Número de bins utilizados para discretizar uma variável contínua |
| **Estratégia para subconjunto de features** | Define o cálculo usado para definir a quantidade de atributos que será passado para cada árvore |
| **Ganho de informação (info gain) mínimo** | Define o mínimo de ganho de informação (*information gain*) para que haja a utilização de uma feature na divisão de um nó |
| **Iterações máximas** | Define o número máximos de iterações para a convergência do algoritmo. O seu valor padrão é 100 |
| **Regularização** | Define o valor para regularizar o ajuste da função de perda do algoritmo. O seu o valor padrão é 0 |
| **Mix. para ElasticNet (entre 0 e 1)** | Define o parâmetro de ajuste usado para a minimização da função objetivo usando uma combinação de L1 e L2. O seu valor por padrão é 0 |
| **Métrica para validação cruzada** | Define a métrica utilizada dentro da validação cruzada (se aplicável) para avaliar o modelo de classificação dentro das k partições |
| **Atributo com o número da partição (fold)** | Define o atributo a ter o número da partição para realizar uma validação cruzada (se aplicável) |

[Aba Aparência][2]

[Aba Resultados][3] 

## Exemplo de Utilização
**Objetivo:** Utilizar o modelo do Random Forest para predizer a qualidade de um vinho. \
**Base de Dados:** [Qualidade da Variante Vermelha do Vinho Verde Português][4]

![Ler dados](/docs/img/spark/aprendizado_de_maquina/regressao_random_forest/image3.png)

1. Leia a base de dados por meio da operação [Ler dados][5].

2. Utilize a operação [Divisão percentual][6] para dividir a base de dados em treino e teste. No parâmetro **Percentual**, calibre-o utilizando 50% dos dados para treinar (1.ª parte) e 50% para testar (2.ª parte).

3. Na operação **Random Forest Regressor**, selecione *“alcohol”*, *“chlorides”*, *“citric_acid”*, *“density”*, *“fixed_acidity”*, *“free_sulfur_dioxide”*, *“pH”*, *“residual_sugar”*, *“sulphates”*, *“total_sulfur_dioxide”* e *“volatile_acidity”* no campo **Atributo(s) previsor(es)**. Selecione “quality” no campo Atributo com o rótulo e preencha “resultado” no campo **Atributo com a predição (novo)**. Preencha 100 no campo **Iterações máximas,** 10 no campo **Profundidade máxima**, 50 no campo **Número de árvores**, e 0.1 no **Ganho de informação**. Deixe os demais parâmetros inalterados.\
![Random Forest Regressor - parte 1](/docs/img/spark/aprendizado_de_maquina/regressao_random_forest/image4.png)
![Random Forest Regressor - parte 2](/docs/img/spark/aprendizado_de_maquina/regressao_random_forest/image2.png)

4. Na operação [Aplicar Modelo][7], selecione *“alcohol”*, *“chlorides”*, *“citric_acid”*, *“density”*, *“fixed_acidity”*, *“free_sulfur_dioxide”*, *“pH”*, *“residual_sugar”*, *“sulphates”*, *“total_sulfur_dioxide”* e *“volatile_acidity”* no campo **Atributo(s) previsor(es)** e preencha *“resultado”* no campo **Nome do novo atributo (herdado do modelo)**. 

5. Na operação [Avaliar Modelo][8], selecione *“resultado”* no campo **Atributo usado para predição**. Selecione *“quality”* no campo **Atributo usado como label** e a métrica *“Raiz do erro quadrático médio”* como **Métrica para avaliação**.

6. Execute o fluxo e visualize o resultado, que neste caso está de acordo com a raiz do erro quadrático médio (**Root Mean Square Error** ou **RMSE**):\
![Resultado](/docs/img/spark/aprendizado_de_maquina/regressao_random_forest/image1.png)

---
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[1]: /pt-br/
[2]: /pt-br/
[3]: /pt-br/
[4]: /pt-br/
[5]: /pt-br/
[6]: /pt-br/
[7]: /pt-br/
[8]: /pt-br/