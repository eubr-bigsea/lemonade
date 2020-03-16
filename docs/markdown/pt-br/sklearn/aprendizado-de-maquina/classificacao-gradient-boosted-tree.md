# Gradient Boosted Tree

A operação Gradient-Boosted Trees (GBT) possui como objetivo criar um modelo baseado em *ensembles* de [Árvores de decisão][1]. Para isso, o GBT iterativamente treina (a partir de uma base de dados de entrada) um conjunto de árvores de decisão minimizando uma dada função de perda. A ideia do GBT é criar vários modelos (de árvore de decisão) considerados mais simples (ou fracos) a fim de criar um modelo mais poderoso e robusto, por combinar resultados desses vários modelos fracos. Atualmente, somente suporta problemas de classificação multi-classe (i.e., com mais de duas classes) caso seja realizada classificação um-contra-todos.

### Conectores
| Entrada | Saída |
| --- | --- |
| Dados utilizados para treinar o modelo | Dados de saída e Modelo do algoritmo de classificação |

### Tarefa
Nome da Tarefa

### Aba Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Atributo(s) previsor(es)** | Atributo(s) que será(ão) usado(s) para treinamento |
| **Atributo com o rótulo** | Atributo a ser classificado |
| **Atributos com a predição** | Atributo contendo a predição do modelo |
| **Função de perda a ser otimizada** | Desvio refere-se a desvio (= regressão logística) para classificação com saídas probabilísticas. Para aumento de gradiente exponencial de perda recupera o algoritmo AdaBoost. |
| **Taxa de aprendizado** | A taxa de aprendizado reduz a contribuição de cada árvore pela taxa de aprendizado. Existe um trade-off entre taxa de aprendizado e número de estimadores. |
| **Número de estágios de boosting** | O aumento de gradiente é bastante robusto para o ajuste excessivo, portanto, um grande número geralmente resulta em melhor desempenho. |
| **Nó interno mínimo** | Porcentagem do número mínimo de amostras necessárias para dividir um nó interno. |
| **Nó de folha mínima** | Porcentagem do número mínimo de amostras necessárias para estar em um nó folha. |
| **Semente** | A semente do gerador de números pseudo-aleatórios a ser usada ao embaralhar os dados. |
| **Subamostra** | A fração de amostras a serem usadas para ajustar os aprendizes da base individual. |
| **Critério** | A função para medir a qualidade de uma divisão. |
| **Folha de fração ponderada mínima** | A fração ponderada mínima da soma total de pesos (de todas as amostras de entrada) necessária para estar em um nó folha. |
| **Profundidade máxima** | Profundidade máxima dos estimadores de regressão individuais. A profundidade máxima limita o número de nós na árvore. |
| **Diminuição mínima da impureza** | Um nó será dividido se essa divisão induzir uma diminuição da impureza maior ou igual a esse valor. |
| **Previsões iniciais** | Um objeto estimador usado para calcular as previsões iniciais. Se "zero", as previsões brutas iniciais são definidas como zero. Por padrão, um DummyEstimator que prevê as classes anteriores é usado. |
| **Recursos máximos** | O número de recursos a serem considerados ao procurar a melhor divisão. |
| **Número máximo de nós foliares** | Cultive árvores com max_leaf_nodes da melhor maneira possível. |
| **Fração de validação** | A proporção de dados de treinamento a serem retirados como validação definida para parada antecipada. |
| **Número de iterações sem alteração** | Usado para decidir se a parada precoce será usada para encerrar o treinamento quando a pontuação da validação não estiver melhorando. |
| **Tolerância** | Tolerância à parada antecipada. |

[Aba Aparência][2]

[Aba Resultados][3] 

## Exemplo de Utilização
**Objetivo:** Utilizar o modelo do Gradient Boosted Tree (GBT) para classificar se uma pessoa possui ou não a doença diabetes.\
**Base de Dados:** [Pima Indians Diabetes][4]

![Fluxo de trabalho - Ler dados](/img/sklearn/aprendizado_de_maquina/classificacao_gradient_boosted_tree/image5.png)

1. Leia a base de dados por meio da operação [Ler dados][5].

2. Utilize a operação [Divisão percentual][6] para dividir a base de dados em treino e teste. No parâmetro **Percentual**, calibre-o utilizando 50% dos dados para treinar (1.ª parte) e 50% para testar (2.ª parte).

3. Na operação **Gradient Boosted Tree**, selecione *“Age”*, *“BMI*”, *“BloodPressure”*, *“DiabetesPedigreeFunction”*, *“Glucose”*, *“Insulin”*, *“Pregnancies”* e *“SkinThickness”* no campo **Atributo(s) previsor(es)**. Selecione *“class”* no campo **Atributo com o rótulo** e preencha *“resultado”* no campo **Atributo com a predição (novo)**. Deixe os demais parâmetros inalterados.\
![Formulário Gradient Boosted Tree - parte 1](/img/sklearn/aprendizado_de_maquina/classificacao_gradient_boosted_tree/image4.png)
![Formulário Gradient Boosted Tree - parte 2](/img/sklearn/aprendizado_de_maquina/classificacao_gradient_boosted_tree/image2.png)

4. Na operação [Aplicar Modelo][7], selecione *“Age”*, *“BMI*”, *“BloodPressure”*, *“DiabetesPedigreeFunction”*, *“Glucose”*, *“Insulin”*, *“Pregnancies”* e *“SkinThickness”* no campo **Atributo(s) previsor(es)** e preencha *“resultado”* no campo **Nome do novo atributo (herdado do modelo)**. 

5. Na operação [Avaliar Modelo][8], selecione *“resultado”* no campo **Atributo usado para predição**. Selecione *“class”* no campo **Atributo usado como label** e a métrica *“F1”* como **Métrica para avaliação**. 

6. Execute o fluxo e visualize o resultado, i.e., a matriz de confusão gerada para as predições do modelo de árvore de decisão e, consequentemente, a tabela representando as métricas de classificação (derivadas da matriz de confusão).\
![Resultado - Gŕafico](/img/sklearn/aprendizado_de_maquina/classificacao_gradient_boosted_tree/image3.png)\
![Resultado - Tabela](/img/sklearn/aprendizado_de_maquina/classificacao_gradient_boosted_tree/image1.png)


---
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[1]: /pt-br/sklearn/aprendizado-de-maquina/classificacao-arvore-de-decisao.html
[2]: /pt-br/sklearn/documentacao-geral/aba-aparencia.html
[3]: /pt-br/sklearn/documentacao-geral/aba-resultados.html
[4]: /pt-br/sklearn/base-de-dados/#pima-indians-diabetes
[5]: /pt-br/sklearn/entrada-e-saida/ler-dados.html
[6]: /pt-br/sklearn/pre-processamento-de-dados/amostragem-divisao-percentual.html
[7]: /pt-br/sklearn/modelo-e-avaliacao/aplicar-modelo.html
[8]: /pt-br/sklearn/modelo-e-avaliacao/avaliar-modelo.html