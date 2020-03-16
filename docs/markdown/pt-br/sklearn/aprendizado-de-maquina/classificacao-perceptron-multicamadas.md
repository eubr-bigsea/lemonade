# Perceptron multicamadas

O classificador Perceptron Multicamadas (Multi-Layer perceptron) baseia-se em abstrações de redes neurais encontradas no cérebro. Esse classificador cria um modelo com camadas de neurônios conectadas, considerando que cada camada possui diversos neurônios

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
| **[Camadas] (informe os tamanhos separados por vírgula)** | O elemento de ordem i representa o número de neurónios. |
| **Ativação** | Função de ativação para a camada oculta. |
| **Solucionador** | O solucionador para otimização de peso. |
| **Alpha** | Parâmetro de penalidade L2 (termo de regularização). |
| **Número máximo de iterações** | O solucionador itera até a convergência ou esse número de iterações. |
| **Tolerância** | Tolerância para a otimização. |
| **Semente** | Semente usada pelo gerador de números aleatórios. |
| **Tamanho do batch** | Tamanho de minibatches para otimizadores estocásticos. |
| **Taxa de Aprendizagem** | Programação da taxa de aprendizado para atualizações de peso. |
| **Taxa inicial de aprendizado** | A taxa de aprendizado inicial usada. |
| **Potência** | O expoente da taxa de aprendizado de escala inversa. |
| **Embaralhar** | Se as amostras devem ser embaralhadas em cada iteração. |
| **Momentum** | Momentum para atualização do gradiente descendente. |
| **Impulso de Nesterovs** | Se deve usar o impulso de Nesterov. |
| **Parada antecipada** | Se a parada precoce deve ser usada para encerrar o treinamento quando a pontuação de validação não está melhorando. |
| **Fração de validação** | A proporção de dados de treinamento a serem retirados como validação definida para a parada inicial. |
| **Beta1** | Taxa de decaimento exponencial para estimativas do segundo vetor de momento em adam. |
| **Beta2** | Taxa de decaimento exponencial para estimativas do segundo vetor de momento em adam. |
| **Epsilon** | Valor para a estabilidade numérica em adam. |
| **Número de iteração sem alteração** | Número máximo de épocas para não atender a melhorias.  |
| **Função máxima** | Número máximo de chamadas de função de perda. |

[Aba Aparência][1]

[Aba Resultados][2] 

## Definições
### Camadas
Esse classificador utiliza a função (de ativação) logística nos neurônios em camadas comuns (intermediárias) e a função softmax nos neurônios na camada de saída. 


## Exemplo de Utilização
**Objetivo:** Utilizar o modelo do Perceptron Multicamadas para classificar a espécie da planta Íris.\
**Base de Dados:** [Íris][3]

![FLuxo de trabalho - Ler dados](/img/sklearn/aprendizado_de_maquina/classificacao_perceptron_multicamadas/image4.png)

1. Leia a base de dados Irís por meio da operação [Ler dados][4].

2. Utilize a operação [Converter categórico para numérico][5] para converter os valores do atributo classe em valores numéricos. Para isso, utilize *“class”* no campo **Atributos**, *String* como **Tipo de indexador** e *“class_index”* como **Nome para novo(s) atributos indexados**.

3. Utilize a operação [Divisão percentual][6] para dividir a base de dados em treino e teste. No parâmetro **Pesos**, calibre-o utilizando 50% dos dados para treinar e 50% para testar.

4. Na operação **Perceptron Multicamadas**, selecione *“petal_length”*, *“petal_width”*, *“sepal_length”* e *“sepal_width”* no campo **Atributo(s) previsor(es)**. Selecione *“class_index”* no campo **Atributo com o rótulo** e preencha ‘resultado’ no campo **Atributo com a predição (novo)**. Além disso, indique que será utilizada uma camada de entrada, uma escondida e uma de saída, preenchendo **Camadas** com *“4,20,4”*. Isso indicará que irão existir quatro neurônios na primeira camada (iguais aos números de atributos da base Íris), 20 na camada escondida, e quatro na de saída (também iguais aos números de atributos da base Íris). Deixe os demais parâmetros inalterados.\
![Formulário Perceptron Multicamadas - parte 1](/img/sklearn/aprendizado_de_maquina/classificacao_perceptron_multicamadas/image3.png)
![Formulário Perceptron Multicamadas - parte 2](/img/sklearn/aprendizado_de_maquina/classificacao_perceptron_multicamadas/image2.png)

5. Na operação [Aplicar Modelo][7], selecione *“petal_length”*, *“petal_width”*, *“sepal_length”* e *“sepal_width”* no campo **Atributo(s) previsor(es)** e preencha *“resultado”* no campo **Nome do novo atributo**. 

6. Na operação [Avaliar Modelo][8], selecione *“resultado”* no campo **Atributo usado para predição**. Selecione *“class_index”* no campo **Atributo usado como label** e a métrica *“F1”* como **Métrica para avaliação**.

7. Execute o fluxo e visualize o resultado, i.e., a matriz de confusão gerada para as predições do modelo de árvore de decisão e, consequentemente, a tabela representando as métricas de classificação (derivadas da matriz de confusão).\
![Gráfico - resultado](/img/sklearn/aprendizado_de_maquina/classificacao_perceptron_multicamadas/image1.png)
![Tabela - resultado](/img/sklearn/aprendizado_de_maquina/classificacao_perceptron_multicamadas/image5.png)

---
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[Camada]: #camada
[1]: /pt-br/sklearn/documentacao-geral/aba-aparencia.html
[2]: /pt-br/sklearn/documentacao-geral/aba-resultados.html
[3]: /pt-br/sklearn/base-de-dados/#iris
[4]: /pt-br/sklearn/entrada-e-saida/ler-dados.html
[5]: /pt-br/sklearn/pre-processamento-de-dados/representacao-de-atributos-converter-categorico-para-numerico.html
[6]: /pt-br/sklearn/pre-processamento-de-dados/amostragem-divisao-percentual.html
[7]: /pt-br/sklearn/modelo-e-avaliacao/aplicar-modelo.html
[8]: /pt-br/sklearn/modelo-e-avaliacao/avaliar-modelo.html