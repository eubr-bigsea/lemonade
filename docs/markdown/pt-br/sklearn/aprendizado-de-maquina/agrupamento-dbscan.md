# DBSCAN
Método de clusterização DBSCAN.

### Conectores
| Entrada | Saída |
| --- | --- |
| Dados utilizados para treinar o modelo | Dados de saída e Modelo do algoritmo de agrupamento |

### Tarefa
Nome da Tarefa

### Aba Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Métrica** | A métrica a ser usada ao calcular a distância entre instâncias em uma matriz de features. |
| **Número de amostras** | O número de amostras (ou peso total) em uma vizinhança para um ponto a ser considerado como um ponto central. |
| **Distância máxima** | A distância máxima entre duas amostras para uma ser considerada como na vizinhança da outra. |
| **Atributo(s) previsor(es)** | Atributos a ser utilizado para clusterizar as amostras do conjunto de dados |
| **Atributos com a Predição (novo)** | Nome do novo atributo atribuído criado pelo algoritmo de agrupamento especificado |

[Aba Aparência][1]

[Aba Resultados][2] 

## Exemplo de Utilização
**Objetivo:** Utilizar o DBSCAN para agrupar as espécies da Íris.\
**Base de Dados:** [Íris][3]

![Fluxo de trabalho - Ler dados](/img/sklearn/aprendizado_de_maquina/agrupamento_dbscan/image2.png)

1. Adicione uma base de dados por meio da operação [Ler dados][4].\
![Formulário Ler dados](/img/sklearn/aprendizado_de_maquina/agrupamento_dbscan/image4.png)

2. Na operação **dbscan**, , selecione *“petal_length”*, *“petal_width”*, *“sepal_length”* e *“sepal_width”* como **Atributo(s) previsor(es)** e *“clusters”* como **Atributo com a predição (novo)**.\
![Formulário dbscan](/img/sklearn/aprendizado_de_maquina/agrupamento_dbscan/image1.png)

3. Na operação [Tabela][5], não preencha nada. 

4. Execute o fluxo e visualize o resultado.
![Resultado](/img/sklearn/aprendizado_de_maquina/agrupamento_dbscan/image3.png)\
Com a execução do modelo a predição de cada um dos três clusteres pode ser obtido visualizando o resultado apresentado pela tabela de visualização.

---
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[1]: /pt-br/sklearn/documentacao-geral/aba-aparencia.html
[2]: /pt-br/sklearn/documentacao-geral/aba-resultados.html
[3]: /pt-br/sklearn/base-de-dados#iris
[4]: /pt-br/sklearn/entrada-e-saida/ler-dados.html
[5]: /pt-br/sklearn/visualizacao-de-dados/tabela.html