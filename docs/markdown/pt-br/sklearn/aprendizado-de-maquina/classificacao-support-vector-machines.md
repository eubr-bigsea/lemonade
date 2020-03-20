# Support Vector Machines

O Support Vector Machines (SVM) é um algoritmo de aprendizado de máquina supervisionado baseado em kernels que é utilizado para problemas de classificação. Basicamente, o SVM encontra uma linha de separação, usualmente conhecida como hiperplano entre dados pertencentes de duas classes arbitrárias. Essa linha tenta maximizar 
a distância entre os pontos mais próximos em relação a cada uma das classes. Nesta versão, implementa somente uma versão específica do SVM linear. Por esse motivo, somente suporta problemas de classificação multi-classe (i.e., com mais de duas classes) caso seja realizada classificação um-contra-todos.


### Conectores
| Entrada | Saída |
| --- | --- |
| Dados utilizados para treinar o modelo | Dados de saída e Modelo do algoritmo de classificação |

### Tarefa
Nome da Tarefa

### Aba Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Atributo com Features** | Atributo(s) que será(ão) usado(s) para treinamento |
| **Atributo com o rótulo** | Atributo a ser classificado |
| **Atributos com a predição (novo)** | Atributo contendo a predição do modelo |
| **C** | Parâmetro de penalidade C do termo de erro. |
| **Kernel** | Especifica o tipo de kernel a ser usado no algoritmo. |
| **Grau do Polinômio** | Grau da função do kernel polinomial. Ignorado por todos os outros kernels. |
| **Tolerância** | Tolerância para critérios de parada. |
| **Número máximo de iterações** | Número máximo de iterações. |
| **Coeficiente do kernel** | Coeficiente do kernel para as métricas "rbf", "poly" e "sigmoid. |
| **Termo independente da função do kernel.** | Termp independente da função do kernel. É significativo apenas nas métricas "poly" e "sigmoid". |
| **Usar a heurística shrinking.** | Necessidade de usar a heurística shrinking |
| **Habilitar estimativas probailísticas.** | Habilitar estimativas probailísticas. |
| **Decisão de retorno.** | Decisão de retorno "ovr" (one-vs-rest : um por todos) ou "ovo" (one-vs-one: um por um). |
| **Semente** | A semente do gerador de números pseudo-aleatórios a ser usada ao embaralhar os dados. |


[Aba Aparência][1]

[Aba Resultados][2] 

## Exemplo de Utilização
**Objetivo:** Utilizar o modelo do Support Vector Machines (*SVM*) para classificar se uma pessoa possui ou não a doença diabetes\
**Base de Dados:** [Pima Indians Diabetes][3]

![Fluxo de trabalho - Ler dados](/img/sklearn/aprendizado_de_maquina/classificacao_support_vector_machines/image4.png)

1. Leia a base de dados por meio da operação [Ler dados][4].

2. Utilize a operação [Divisão percentual][5] para dividir a base de dados em treino e teste. No parâmetro **Percentual**, calibre-o utilizando 50% dos dados para treinar (1.ª parte) e 50% para testar (2.ª parte).

3. Na operação **Support Vector Machines (SVM)**, selecione *“Age”*, *“BMI”*, *“BloodPressure”*, *“DiabetesPedigreeFunction”*, *“Glucose”*, *“Insulin”*, *“Pregnancies”* e *“SkinThickness”* no campo **Atributos com features**. Selecione *“class”* no campo **Atributo com o rótulo** e preencha *“resultado”* no campo Atributo com a predição (novo). Deixe os demais parâmetros inalterados.\
![Formulario Support Vector Machines - parte 1](/img/sklearn/aprendizado_de_maquina/classificacao_support_vector_machines/image3.png)
![Formulario Support Vector Machines - parte 2](/img/sklearn/aprendizado_de_maquina/classificacao_support_vector_machines/image1.png)

4. Na operação [Aplicar Modelo][6], selecione *“Age”*, *“BMI”*, *“BloodPressure”*, *“DiabetesPedigreeFunction”*, *“Glucose”*, *“Insulin”*, *“Pregnancies”* e *“SkinThickness”* no campo **Atributos com features** e preencha *“resultado”* no campo **Nome do novo atributo (herdado do modelo)**. 

5. Na operação [Avaliar Modelo][7], selecione *“resultado”* no campo **Atributo usado para predição**. Selecione *“class”* no campo **Atributo usado como label** e a métrica *“F1”* como **Métrica para avaliação**. 

6. Execute o fluxo e visualize o resultado, i.e., a matriz de confusão gerada para as predições do modelo de árvore de decisão e, consequentemente, a tabela representando as métricas de classificação (derivadas da matriz de confusão).\
![Gráfico - resultado](/img/sklearn/aprendizado_de_maquina/classificacao_support_vector_machines/image2.png)\
![Tabela - resultado](/img/sklearn/aprendizado_de_maquina/classificacao_support_vector_machines/image5.png)


---
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[1]: /pt-br/sklearn/documentacao-geral/aba-aparencia.html
[2]: /pt-br/sklearn/documentacao-geral/aba-resultados.html
[3]: /pt-br/sklearn/base-de-dados/#pima-indians-diabetes
[4]: /pt-br/sklearn/entrada-e-saida/ler-dados.html
[5]: /pt-br/sklearn/pre-processamento-de-dados/amostragem-divisao-percentual.html
[6]: /pt-br/sklearn/modelo-e-avaliacao/aplicar-modelo.html
[7]: /pt-br/sklearn/modelo-e-avaliacao/avaliar-modelo.html