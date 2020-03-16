# Random Forest

Random Forest (floresta aleatória) é uma generalização da operação [Árvore de Decisão][1], em que se utiliza um conjunto de árvores de decisão (aleatórias) a fim de minimizar o sobreajuste (*overfitting*) de cada modelo individual de árvore gerado para os dados de entrada.

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
| **Atributos com a predição (novo)** | Atributo contendo a predição do modelo |
| **Número de árvores** | Número de árvores na floresta. |
| **Profundidade máxima** | Profundidade máxima na árvore. |
| **Nó interno mínimo** | Porcentagem do número mínimo de amostras necessárias para dividir um nó interno. |
| **Nó de folha mínima** | Porcentagem do número mínimo de amostras necessárias para estar em um nó folha. |
| **Semente** | A semente do gerador de números pseudo-aleatórios a ser usada ao embaralhar os dados. |
| **[Critério]** | Função utilizada na medição da qualidade do particionamento. |
| **Fração ponderada mínima de folhas** | A fração ponderada mínima da soma total de pesos (de todas as amostras de entrada) necessária para estar em um nó folha. |
| **Quantidade máxima de atributos** | Quantidade máxima de atributos a se considerar no particionamento. |
| **Quantidade máxima de nós folha** | Controle de crescimento da árvore. |
| **Diminuição mínima de impureza** | Um nó será particionado caso isso resulte na diminuição da impureza maior ou igual o valor do atributo. |
| **Parâmetro de complexidade alpha** | Parâmetro de complexidade usado para a poda mínima de complexidade de custo. |
| **Percentual máximo de amostras** | Quando o parâmetro "Bootstrap" estiver habilitado, utilize esse número para obter um conjunto X de treinamento para cada base. |

[Aba Aparência][2]

[Aba Resultados][3] 

## Definições
### Critério
Tipos de critérios:

1. Coeficiente Gini: É uma métrica de desigualdade que varia entre zero e um. O coeficiente Gini dita que se selecionarmos aleatoriamente uma amostra arbitrária da base de dados e essa amostra sempre conter exemplos da mesma classe, isso significa que a amostra de dados é dita como pura, resultando em um coeficiente de Gini igual a um. Caso contrário, a amostra de dados é dita como impura, resultando em um coeficiente de Gini igual a zero.

2. Entropia: É uma medida de teoria da informação que calcula o grau de desorganização em um sistema. Também é utilizada para caracterizar a (im)pureza de uma amostra de dados. Se a amostra for completamente homogênea/pura (i.e., todos os exemplos estiverem na mesma classe), então a entropia é zero. Se a amostra for dividida em partes iguais (por exemplo, classe positiva com 50% dos exemplos e classe negativa com os 50% restantes dos exemplos), então terá entropia de um, caracterizando uma amostra impura/não-homogênea.


## Exemplo de Utilização
**Objetivo:** Utilizar o modelo do Random Forest para classificar a espécie da planta Íris.\
**Base de Dados:** [Íris][4]

![Ler dados](/img/sklearn/aprendizado_de_maquina/classificacao_random_forest/image2.png)

1. Leia a base de dados Irís por meio da operação [Ler dados][5].

2. Utilize a operação [Converter categórico para numérico][6] para converter os valores do atributo classe em valores numéricos. Para isso, utilize “class” no campo **Atributos**, *String* como **Tipo de indexador** e *“class_index”* como **Nome para novo(s) atributos indexados**.

3. Utilize a operação [Divisão percentual][7] para dividir a base de dados em treino e teste. No parâmetro **Percentual**, calibre-o utilizando 50% dos dados para treinar (1.ª parte) e 50% para testar (2.ª parte).

4. Na operação **Random Forest**, selecione *“petal_length”*, *“petal_width”*, *“sepal_length”* e *“sepal_width”* no campo **Atributo(s) previsor(es)**. Selecione *“class_index”* no campo **Atributo com o rótulo** e preencha *“resultado”* no campo **Atributo com a predição (novo)**. Deixe os demais parâmetros inalterados.\
![Forumlário Random Forest - parte 1](/img/sklearn/aprendizado_de_maquina/classificacao_random_forest/image6.png)
![Forumlário Random Forest - parte 2](/img/sklearn/aprendizado_de_maquina/classificacao_random_forest/image5.png)

5. Na operação [Aplicar Modelo][8], selecione *“petal_length”*, *“petal_width”*, *“sepal_length”* e *“sepal_width”* no campo **Atributo(s) previsor(es)** e preencha *“resultado”* no campo **Nome do novo atributo (herdado do modelo)**. 

6. Na operação [Avaliar Modelo][9], selecione *“resultado”* no campo **Atributo usado para predição**. Selecione *“class_index”* no campo **Atributo usado como label** e a métrica *“F1”* como **Métrica para avaliação**. 

7. Execute o fluxo e visualize o resultado, i.e., a matriz de confusão gerada para as predições do modelo de árvore de decisão e, consequentemente, a tabela representando as métricas de classificação (derivadas da matriz de confusão).\
![Gráfico - resultado](/img/sklearn/aprendizado_de_maquina/classificacao_random_forest/image4.png)\
![Tabela - resultado](/img/sklearn/aprendizado_de_maquina/classificacao_random_forest/image3.png)


---
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[Impureza]: #impureza
[Estratégia para subconjunto de features]: #estrategia-para-subconjunto-de-features
[1]: /pt-br/sklearn/aprendizado-de-maquina/classificacao-arvore-de-decisao.html
[2]: /pt-br/sklearn/documentacao-geral/aba-aparencia.html
[3]: /pt-br/sklearn/documentacao-geral/aba-resultados.html
[4]: /pt-br/sklearn/base-de-dados/#iris
[5]: /pt-br/sklearn/entrada-e-saida/ler-dados.html
[6]: /pt-br/sklearn/pre-processamento-de-dados/representacao-de-atributos-converter-categorico-para-numerico.html
[7]: /pt-br/sklearn/pre-processamento-de-dados/amostragem-divisao-percentual.html
[8]: /pt-br/sklearn/modelo-e-avaliacao/aplicar-modelo.html
[9]: /pt-br/sklearn/modelo-e-avaliacao/avaliar-modelo.html