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
| **Pesos** | Pesos do algoritmo em um ensemble |
| **Manter identificadores dos nós em cache** | Se selecionado, o algoritmo evita passar o modelo atual para os executores da próxima iteração |
| **Intervalo para checkpoint (cache)** | Frequência com a qual fazer checkpoints |
| **[Impureza]** | Medida para quantificar a impureza de cada nó |
| **No. máximo de bins** | Número de bins utilizados quando discretizando uma variável contínua |
| **Profundidade máxima** | Maior profundidade permitida da árvore de decisão |
| **Ganho mínimo de informação** | Mínimo de ganho de informação para que haja a utilização de um atributo na divisão de um nó |
| **Mínimo de instâncias por nó** | O número mínimo de instâncias (exemplos) que precisam estar em um nó folha de cada árvore. O seu Valor padrão é 1 |
| **Métrica para validação cruzada** | Define a métrica utilizada dentro da validação cruzada (se aplicável) para avaliar o modelo de classificação dentro das k partições |
| **Atributo com o número da partição (fold)** | Define o atributo a ter o número da partição para realizar uma validação cruzada (se aplicável |
| **Usar classificação um-contra-todos (one-vs-rest)** | Se selecionado, o algoritmo realizará classificação um-contra-todos ao invés de classificação tradicional (neste caso, binária ou multi-classe) |

[Aba Aparência][1]

[Aba Resultados][2] 

## Definições
### Impureza

Tipos de impureza:

1. Coeficiente Gini: É uma métrica de desigualdade que varia entre zero e um. O coeficiente Gini dita que se selecionarmos aleatoriamente uma amostra arbitrária da base de dados e essa amostra sempre conter exemplos da mesma classe, isso significa que a amostra de dados é dita como pura, resultando em um coeficiente de Gini igual a um. Caso contrário, a amostra de dados é dita como impura, resultando em um coeficiente de Gini igual a zero.

2. Entropia: É uma medida de teoria da informação que calcula o grau de desorganização em um sistema. Também é utilizada para caracterizar a (im)pureza de uma amostra de dados. Se a amostra for completamente homogênea/pura (i.e., todos os exemplos estiverem na mesma classe), então a entropia é zero. Se a amostra for dividida em partes iguais (por exemplo, classe positiva com 50% dos exemplos e classe negativa com os 50% restantes dos exemplos), então terá entropia de um, caracterizando uma amostra impura/não-homogênea.


## Exemplo de Utilização
**Objetivo:** Utilizar o modelo de Árvore de Decisão para classificar a espécie da planta Íris.\
**Base de Dados:** [Íris][3]

![Fluxo de trabalho- Ler dados](/img/spark/aprendizado_de_maquina/classificacao_arvore_de_decisao/image5.png)

1. Leia a base de dados Irís por meio da operação [Ler dados][4].

2. Utilize a operação [Converter categórico para numérico][5] para converter os valores do atributo classe em valores numéricos. Para isso, utilize *“class”* no campo **Atributos**, *String* como **Tipo de indexador** e *“class_index”* como **Nome para novo(s) atributos indexados**.

3. Utilize a operação [Divisão percentual][6] para dividir a base de dados em treino e teste. No parâmetro Percentual, calibre-o utilizando 50% dos dados para treinar (1.ª parte) e 50% para testar (2.ª parte).

4. Na operação Árvore de decisão, selecione *“petal_length”*, *“petal_width”*, *“sepal_length”* e *“sepal_width”* no campo **Atributo(s) previsor(es)**. Selecione *“class_index”* no campo **Atributo com o rótulo** e preencha *“resultado”* no campo **Atributo com a predição (novo)**. Deixe os demais parâmetros inalterados.\
![Formulário Arvore de Decisão - parte 1](/img/spark/aprendizado_de_maquina/classificacao_arvore_de_decisao/image1.png)
![Formulário Arvore de Decisão - parte 2](/img/spark/aprendizado_de_maquina/classificacao_arvore_de_decisao/image2.png)

5. Na operação [Aplicar Modelo][7], selecione *“petal_length”*, *“petal_width”*, *“sepal_length”* e *“sepal_width”* no campo **Atributo(s) previsor(es)** e preencha *“resultado”* no campo **Nome do novo atributo (herdado do modelo)**. 

6. Na operação [Avaliar Modelo][8], selecione *“resultado”* no campo **Atributo usado para predição**. Selecione *“class_index”* no campo **Atributo usado como label**. E selecione a métrica *“F1”* como **Métrica para avaliação**. 

7. Execute o fluxo e visualize o resultado, i.e., a matriz de confusão gerada para as predições do modelo de árvore de decisão e, consequentemente, a tabela representando as métricas de classificação (derivadas da matriz de confusão).\
![Resultado - Gráfico](/img/spark/aprendizado_de_maquina/classificacao_arvore_de_decisao/image4.png)\
![Resultado - Tabela](/img/spark/aprendizado_de_maquina/classificacao_arvore_de_decisao/image3.png)

---
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[Impureza]: #impureza
[1]: /pt-br/
[2]: /pt-br/
[3]: /pt-br/
[4]: /pt-br/
[5]: /pt-br/
[6]: /pt-br/
[7]: /pt-br/
[8]: /pt-br/