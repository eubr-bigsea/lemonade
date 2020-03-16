# Árvore de Decisão
O objetivo da operação Árvore de Decisão é criar um modelo representado por uma árvore, a qual é composta por nós e folhas. Os nós são utilizados para decidir (de acordo com os atributos de entrada da base de dados) qual caminho tomar para separar os exemplos em classes e as folhas agrupam esses exemplos de acordo com as suas respectivas classes.

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
| **Profundidade máxima** | Profundidade máxima na árvore. |
| **Nó interno mínimo** | Porcentagem do número mínimo de amostras necessárias para dividir um nó interno. |
| **Nó de folha mínima** | Porcentagem do número mínimo de amostras necessárias para estar em um nó folha. |
| **Soma total de pesos** | A fração ponderada mínima da soma total de pesos (de todas as amostras de entrada) necessária para estar em um nó folha. As amostras têm peso igual quando não é fornecido. |
| **Semente** | A semente do gerador de números pseudo-aleatórios a ser usada ao embaralhar os dados. |
| **Critério** | A função para medir a qualidade de uma divisão. |
| **Splitter** | A estratégia usada para escolher a divisão em cada nó. |
| **Recursos máximos** | O número de recursos a serem considerados ao procurar a melhor divisão. |
| **Número máximo de nós folha** | Cresça uma árvore com o número máximo de nós folha da melhor maneira possível. Os melhores nós são definidos como redução relativa na impureza. Se nenhum, número ilimitado de nós de folha. |
| **Diminuição mínima da impureza** | Um nó será dividido se essa divisão induzir uma diminuição da impureza maior ou igual a esse valor. |
| **Peso da classe** | Pesos associados a classes no formato {class_label: weight}. |

[Aba Aparência][1]

[Aba Resultados][2] 


## Exemplo de Utilização
**Objetivo:** Utilizar o modelo de Árvore de Decisão para classificar a espécie da planta Íris.\
**Base de Dados:** [Íris][3]

![Fluxo de trabalho- Ler dados](/img/sklearn/aprendizado_de_maquina/classificacao_arvore_de_decisao/image5.png)

1. Leia a base de dados Irís por meio da operação [Ler dados][4].

2. Utilize a operação [Converter categórico para numérico][5] para converter os valores do atributo classe em valores numéricos. Para isso, utilize *“class”* no campo **Atributos**, *String* como **Tipo de indexador** e *“class_index”* como **Nome para novo(s) atributos indexados**.

3. Utilize a operação [Divisão percentual][6] para dividir a base de dados em treino e teste. No parâmetro Percentual, calibre-o utilizando 50% dos dados para treinar (1.ª parte) e 50% para testar (2.ª parte).

4. Na operação Árvore de decisão, selecione *“petal_length”*, *“petal_width”*, *“sepal_length”* e *“sepal_width”* no campo **Atributo(s) previsor(es)**. Selecione *“class_index”* no campo **Atributo com o rótulo** e preencha *“resultado”* no campo **Atributo com a predição (novo)**. Deixe os demais parâmetros inalterados.\
![Formulário Arvore de Decisão - parte 1](/img/sklearn/aprendizado_de_maquina/classificacao_arvore_de_decisao/image1.png)
![Formulário Arvore de Decisão - parte 2](/img/sklearn/aprendizado_de_maquina/classificacao_arvore_de_decisao/image2.png)

5. Na operação [Aplicar Modelo][7], selecione *“petal_length”*, *“petal_width”*, *“sepal_length”* e *“sepal_width”* no campo **Atributo(s) previsor(es)** e preencha *“resultado”* no campo **Nome do novo atributo (herdado do modelo)**. 

6. Na operação [Avaliar Modelo][8], selecione *“resultado”* no campo **Atributo usado para predição**. Selecione *“class_index”* no campo **Atributo usado como label**. E selecione a métrica *“F1”* como **Métrica para avaliação**. 

7. Execute o fluxo e visualize o resultado, i.e., a matriz de confusão gerada para as predições do modelo de árvore de decisão e, consequentemente, a tabela representando as métricas de classificação (derivadas da matriz de confusão).\
![Resultado - Gráfico](/img/sklearn/aprendizado_de_maquina/classificacao_arvore_de_decisao/image4.png)\
![Resultado - Tabela](/img/sklearn/aprendizado_de_maquina/classificacao_arvore_de_decisao/image3.png)

---
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[Impureza]: #impureza
[1]: /pt-br/sklearn/documentacao-geral/aba-aparencia.html
[2]: /pt-br/sklearn/documentacao-geral/aba-resultados.html
[3]: /pt-br/sklearn/base-de-dados/#iris
[4]: /pt-br/sklearn/entrada-e-saida/ler-dados.html
[5]: /pt-br/sklearn/pre-processamento-de-dados/representacao-de-atributos-converter-categorico-para-numerico.html
[6]: /pt-br/sklearn/pre-processamento-de-dados/amostragem-divisao-percentual.html
[7]: /pt-br/sklearn/modelo-e-avaliacao/aplicar-modelo.html
[8]: /pt-br/sklearn/modelo-e-avaliacao/avaliar-modelo.html