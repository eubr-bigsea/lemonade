# Regressão Logística

O objetivo da operação Regressão Logística é similar ao da operação [Regressão Linear][1], i.e., produzir um modelo linear que permite estimar a probabilidade associada à ocorrência de um dado exemplo pertencer a uma classe (e.g., positiva ou negativa) dado um conjunto de atributos preditivos. Contudo, diferentemente do modelo produzido pela [Regressão Linear][1], o modelo logístico possui uma variável resposta (i.e., o atributo classe) categórica - usualmente binária - ao invés de uma variável resposta real.

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
| **Tolerância** | Tolerância para critérios de parada. |
| **C** | Força de regularização inversa. Como no SVM, valores menores especificam uma regularização mais forte. |
| **Semente** | A semente do gerador de números pseudo-aleatórios a ser usada ao embaralhar os dados. |
| **Solver** | A convergência rápida de sag e saga é garantida apenas em atributos com aproximadamente a mesma escala. |
| **Número máximo de iterações** | Apenas para solvers: newton-cg, sag e lbfgs. |
| **Penalidade** | Usado para especificar a norma da penalização. |
| **Dual** | Formulação dual ou primal. |
| **Considerar intercepto** | Especificar se uma constante (intecerpto ou viés) deve ser adicionada na função de decisão. |
| **Escala do intercepto** | Usado apenas se o Solver "liblinear" for utilizado com o atributo "Considerar intercepto" habilitado. |
| **[Mutiplas classes]** | Se a opção selecionada é "ovr", então um problema binário é moldado para cada label. Para o atributo "multinomial" a minização de perda é o ajuste de perda multinomial das funções de probabilidade, mesmo com atributos binários. |
| **L1 Ratio** | Parâmetro do Elastic-Net, o valor deve estar entre 0 e 1. |
| **Bootstrap** | Utilizar amostras de um bootstrap para gerar as árvores. |
| **Out of bag** | Usar amostras "out-of-bag" para estimar a acurácia do generalizador |


[Aba Aparência][2]

[Aba Resultados][3] 

## Definições
### Mutiplas classes
Existem as seguintes classes de algoritmos:

1. Ovr: Usa uma regressão logística binomial para realizar previsões binárias. É válida somente para problemas de classificação binária (i.e., com apenas duas classes).
2. Multinomial: Usa uma regressão logística multinomial para realizar predições em problemas de classificação multi-classe (i.e., com mais de duas classes).
3. Automático: A plataforma vai inferir qual das variantes acima será utilizada.

## Exemplo de Utilização
**Objetivo:** Utilizar o modelo de Regressão Logística para classificar a espécie da planta Íris\
**Base de Dados:** [Íris][4]

![Formulário - Ler dados](/img/sklearn/aprendizado_de_maquina/classificacao_regressao_logistica/image2.png)

1. Leia a base de dados Irís por meio da operação [Ler dados][5].

2. Utilize a operação [Converter categórico para numérico][6] para converter os valores do atributo classe em valores numéricos. Para isso, utilize *“class”* no campo **Atributos**, *String* como **Tipo de indexador** e *“class_index”* como **Nome para novo(s) atributos indexados**.

3. Utilize a operação [Divisão percentual][7] para dividir a base de dados em treino e teste. No parâmetro **Percentual**, calibre-o utilizando 50% dos dados para treinar (1ª parte) e 50% para testar (2ª parte).

4. Na operação **Regressão Logística**, selecione *“petal_length”*, *“petal_width”*, *“sepal_length”* e *“sepal_width”* no campo **Atributo(s) previsor(es)**. Selecione *“class_index”* no campo **Atributo com o rótulo** e preencha *“resultado”* no campo **Atributo com a predição (novo)**. Além disso, escolha a **Família** *“Automático”*, para selecionar o tipo de família (binomial ou multinomial) automaticamente. Deixe os demais parâmetros inalterados.\
![Formulário Regressão logística - parte 1](/img/sklearn/aprendizado_de_maquina/classificacao_regressao_logistica/image4.png)
![Formulário Regressão logística - parte 2](/img/sklearn/aprendizado_de_maquina/classificacao_regressao_logistica/image1.png)

5. Na operação [Aplicar Modelo][8], selecione *“petal_length”*, *“petal_width”*, *“sepal_length”* e *“sepal_width”* no campo **Atributo(s) previsor(es)** e preencha *“resultado”* no campo **Nome do novo atributo (herdado do modelo)**. 

6. Na operação [Avaliar Modelo][9], selecione *“resultado”* no campo **Atributo usado para predição**. Selecione *“class_index”* no campo **Atributo usado como label** e a métrica *“F1”* como **Métrica para avaliação**. 

7. Execute o fluxo e visualize o resultado, i.e., a matriz de confusão gerada para as predições do modelo de árvore de decisão e, consequentemente, a tabela representando as métricas de classificação (derivadas da matriz de confusão).\
![Gráfico - resultado](/img/sklearn/aprendizado_de_maquina/classificacao_regressao_logistica/image3.png)\
![Tabela - resultado](/img/sklearn/aprendizado_de_maquina/classificacao_regressao_logistica/image5.png)


---
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[Mútiplas classes]: #Mutiplasclasses
[1]: /pt-br/sklearn/aprendizado-de-maquina/regressor-linear.html
[2]: /pt-br/sklearn/documentacao-geral/aba-aparencia.html
[3]: /pt-br/sklearn/documentacao-geral/aba-resultados.html
[4]: /pt-br/sklearn/base-de-dados/#iris
[5]: /pt-br/sklearn/entrada-e-saida/ler-dados.html
[6]: /pt-br/sklearn/pre-processamento-de-dados/representacao-de-atributos-converter-categorico-para-numerico.html
[7]: /pt-br/sklearn/pre-processamento-de-dados/amostragem-divisao-percentual.html
[8]: /pt-br/sklearn/modelo-e-avaliacao/aplicar-modelo.html
[9]: /pt-br/sklearn/modelo-e-avaliacao/avaliar-modelo.html