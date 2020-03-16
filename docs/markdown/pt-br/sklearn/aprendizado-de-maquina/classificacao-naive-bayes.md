# Naïve Bayes

A operação Naïve Bayes cria um modelo baseado na aplicação do teorema de Bayes com uma suposição ingênua de independência condicional entre cada par de atributos dado o atributo classe. Nesse caso, o modelo do Naïve Bayes define que todos os atributos sejam condicionados ao atributo classe, mas sendo independentes entre si.


### Conectores
| Entrada | Saída |
| --- | --- |
| Dados utilizados para treinar o modelo | Dados de saída e modelo do algoritmo de classificação |

### Tarefa
Nome da Tarefa

### Aba Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Atributo(s) previsor(es)** | Atributo(s) que será(ão) usado(s) para treinamento |
| **Atributo com o rótulo** | Atributo a ser classificado |
| **Atributos com a predição** | Atributo contendo a predição do modelo |
| **Tipo de modelo** | O Gaussiano assume que a probabilidade das características é Gaussiana; O multinomial é adequado para características discretas; Bernoulli é projetado para campos binários/booleanos (campos não binários serão convertidos). |
| **Suavização** | Parâmetro de suavização Aditivo (Laplace / Lidstone) (0 para não suavização). Apenas para os tipos Multinomial e Bernoulli. |
| **Pesos (separados por vírgula, usados em ensembles)** | Peso probabilistico das classes. Se especificado, os pesos não são ajustados de acordo com os dados. |
| **Anteriores** | Probabilidades anteriores das classes. |
| **Variação** | Parte da maior variação de todos os recursos adicionados às variações de estabilidade de cálculo. |
| **Probabilidades anteriores da classe** | Se deve aprender as probabilidades anteriores da aula ou não. |
| **Binarização** | Limite para binarização (mapeamento para booleanos) de recursos de amostra. |

[Aba Aparência][1]

[Aba Resultados][2] 

## Exemplo de Utilização
**Objetivo:** Utilizar o modelo do Naïve Bayes para classificar a espécie da planta Íris.\
**Base de Dados:** [Íris][3]

![Fluxo de trabalho - Ler dados](/img/sklearn/aprendizado_de_maquina/classificacao_naive_bayes/image4.png)

1. Leia a base de dados Irís por meio da operação [Ler dados][4].

2. Utilize a operação [Converter categórico para numérico][5] para converter os valores do atributo classe em valores numéricos. Para isso, utilize *“class”* no campo **Atributos**, *String* como **Tipo de indexador** e *“class_index”* como **Nome para novo(s) atributos indexados**.

3. Utilize a operação [Divisão percentual][6] para dividir a base de dados em treino e teste. No parâmetro **Percentual**, calibre-o utilizando 50% dos dados para treinar (1.ª parte) e 50% para testar (2.ª parte).

4. Na operação **Naïve Bayes**, selecione *“petal_length”*, *“petal_width”*, *“sepal_length”* e *“sepal_width”* no campo **Atributo(s) previsor(es)**. Selecione *“class_index”* no campo **Atributo com o rótulo** e preencha *“resultado”* no campo **Atributo com a predição (novo)**. Deixe os demais parâmetros inalterados.\
![Formulário Naïve Bayes - parte 1](/img/sklearn/aprendizado_de_maquina/classificacao_naive_bayes/image1.png)
![Formulário Naïve Bayes - parte 1](/img/sklearn/aprendizado_de_maquina/classificacao_naive_bayes/image2.png)

5. Na operação [Aplicar Modelo][7], selecione *“petal_length”*, *“petal_width”*, *“sepal_length”* e *“sepal_width”* no campo **Atributo(s) previsor(es)** e preencha *“resultado”* no campo **Nome do novo atributo (herdado do modelo)**. 

6. Na operação [Avaliar Modelo][8], selecione *“resultado”* no campo **Atributo usado para predição**. Selecione *“class_index”* no campo **Atributo usado como label** e a métrica *“F1”* como **Métrica para avaliação**. 

7. Execute o fluxo e visualize o resultado, i.e., a matriz de confusão gerada para as predições do modelo de árvore de decisão e, consequentemente, a tabela representando as métricas de classificação (derivadas da matriz de confusão).\
![Resultado - Gráfico](/img/sklearn/aprendizado_de_maquina/classificacao_naive_bayes/image3.png)
![Resultado - Tabela](/img/sklearn/aprendizado_de_maquina/classificacao_naive_bayes/image5.png)


---
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[1]: /pt-br/sklearn/documentacao-geral/aba-aparencia.html
[2]: /pt-br/sklearn/documentacao-geral/aba-resultados.html
[3]: /pt-br/sklearn/base-de-dados/#iris
[4]: /pt-br/sklearn/entrada-e-saida/ler-dados.html
[5]: /pt-br/sklearn/pre-processamento-de-dados/representacao-de-atributos-converter-categorico-para-numerico.html
[6]: /pt-br/sklearn/pre-processamento-de-dados/amostragem-divisao-percentual.html
[7]: /pt-br/sklearn/modelo-e-avaliacao/aplicar-modelo.html
[8]: /pt-br/sklearn/modelo-e-avaliacao/avaliar-modelo.html