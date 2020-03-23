# Gradient Boosted Tree Regressor

A operação Gradient-Boosted Trees (GBT) para regressão possui como objetivo criar um modelo baseado em ensembles de [Árvores de decisão][1]. Para isso, GBT iterativamente treina (a partir de uma base de dados de entrada) um conjunto de árvores de decisão minimizando uma dada função de perda. A ideia do GBT é criar vários modelos (de árvore de decisão) considerados mais simples (ou fracos) a fim de criar um modelo mais poderoso e robusto, por combinar resultados desses vários modelos fracos. 

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
| **Custo de Complexidade Alpha** | Parâmetro de complexidade usado na poda mínima de custo de complexidade. |
| **Fração de validação** | A proporção de dados de treinamento a serem retirados como validação definida para parada antecipada. |
| **Taxa de aprendizado** | A taxa de aprendizado reduz a contribuição de cada árvore. Existe um trade-off entre taxa de aprendizado e número de árvores. |
| **Número de árvores** | Número de árvores na floresta. |
| **Profundidade máxima** | Profundidade máxima na árvore. |
| **Nó interno mínimo** | Porcentagem do número mínimo de amostras necessárias para dividir um nó interno. |
| **Nó de folha mínima** | Porcentagem do número mínimo de amostras necessárias para estar em um nó folha. |
| **Parada antecipada** | Usada para decidir se a parada antecipada vai ser usada para terminar treino quando a pontuação de validação não está melhorando. |
| **Tolerância** | Tolerância para a parada antecipada. |
| **Critério** | A função para medir a qualidade de um split.. |
| **Perda** | Função de perda a ser otimizada. |
| **Subamostra** | A fração de amostras para serem usadas para fazer o fitting em learners de base individual. |
| **Alfa** | O alfa-quantil da função huber loss e a função de perda de quantis. |
| **Fração ponderada mínima** | A fração ponderada mínima da soma total de pesos (de todas as amostras de entrada) necessária para estar em um nó folha. |
| **Max. nós folha** | Cresça árvores com max_leaf_nodes da melhor maneira possível. |
| **Redução mínima da impureza** | Um nó será dividido se essa divisão induzir uma redução da impureza maior ou igual a esse valor. |
| **Estado aleatório** | É a semente usada pelo gerador de números aleatórios. |
| **Verbose** | Controla a verbosidade ao ajustar e prever. |
| **Número máximo de atributos** | Número de atributos a serem considerados ao procurar a melhor divisão. |

[Aba Aparência][2]

[Aba Resultados][3] 

## Exemplo de Utilização
**Objetivo:** Utilizar o modelo do *Gradient Boosted Tree Regressor* para predizer a qualidade de um vinho.\
**Base de Dados:** [Qualidade da Variante Vermelha do Vinho Verde Português][4]

![Ler dados](/img/sklearn/aprendizado_de_maquina/regressao_gradient_boosted_tree/image2.png)

1. Leia a base de dados por meio da operação [Ler dados][4].

2. Utilize a operação [Divisão percentual][5] para dividir a base de dados em treino e teste. No parâmetro **Percentual**, calibre-o utilizando 50% dos dados para treinar (1.ª parte) e 50% para testar (2.ª parte).

3. Na Operação **Gradient Boosted Tree Regressor**, selecione “alcohol”, “chlorides”, “citric_acid”, “density”, “fixed_acidity”, “free_sulfur_dioxide”, “pH”, “residual_sugar”, “sulphates”, “total_sulfur_dioxide” e “volatile_acidity” no campo **Atributo(s) previsor(es)**. Selecione *“quality”* no campo **Atributo com o rótulo** e preencha “resultado” no campo **Atributo com a predição (novo)**. Preencha 100 no campo **Iterações máximas**, 10 no campo **Profundidade máxima**, 20 no campo **Número de instâncias** e 0.1 no **Ganho de informação**. Deixe os demais parâmetros inalterados.\
![Formulário Gradient Boosted Tree Regressor - parte 1](/img/sklearn/aprendizado_de_maquina/regressao_gradient_boosted_tree/image3.png)
![Formulário Gradient Boosted Tree Regressor - parte 1](/img/sklearn/aprendizado_de_maquina/regressao_gradient_boosted_tree/image1.png)

4. Na operação [Aplicar Modelo][6], selecione  “alcohol”, “chlorides”,  “citric_acid”, “density”, “fixed_acidity”, “free_sulfur_dioxide”, “pH”, “residual_sugar”, “sulphates”, “total_sulfur_dioxide” e “volatile_acidity” no campo **Atributo(s) previsor(es)** e preencha “resultado” no campo **Nome do novo atributo (herdado do modelo)**. 

5. Na operação [Avaliar Modelo][7], selecione *“resultado”* no campo **Atributo usado para predição**. Selecione “quality” no campo **Atributo usado como label** e a métrica *“Raiz do erro quadrático médio”* como **Métrica para avaliação**. 

6. Execute o fluxo e visualize o resultado, que neste caso está de acordo com a raiz do erro quadrático médio (**Root Mean Square Error** ou **RMSE**):\
![Formulário Gradient Boosted Tree Regressor - parte 1](/img/sklearn/aprendizado_de_maquina/regressao_gradient_boosted_tree/image4.png)


---
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[1]: /pt-br/sklearn/aprendizado-de-maquina/classificacao-arvore-de-decisao.html
[2]: /pt-br/sklearn/documentacao-geral/aba-aparencia.html
[3]: /pt-br/sklearn/documentacao-geral/aba-resultados.html
[4]: /pt-br/sklearn/base-de-dados/#wine
[5]: /pt-br/sklearn/entrada-e-saida/ler-dados.html
[6]: /pt-br/sklearn/modelo-e-avaliacao/aplicar-modelo.html
[7]: /pt-br/sklearn/modelo-e-avaliacao/avaliar-modelo.html