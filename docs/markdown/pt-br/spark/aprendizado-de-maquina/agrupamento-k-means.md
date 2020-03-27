# K-Means
Método de clusterização k-means.

### Conectores
| Entrada | Saída |
| --- | --- |
| Dados utilizados para treinar o modelo | Dados de saída e Modelo do algoritmo de agrupamento |

### Tarefa
Nome da Tarefa

### Aba Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Quantidade de agrupamentos (K)** | Número de clusters a serem formados tal como a quantidade de centróides |
| **Tolerância** | Tolerância relativa para declarar convergência do algoritmo |
| **[Tipo]** | Tipo de k-means a ser utilizado |
| **[Geração dos centróides iniciais]** | Estratégia a ser utilizada para gerar os centróides iniciais |
| **Número máx. de iterações** | Quantidade máxima de iterações |
| **Atributo(s) previsor(es)** | Atributos a ser utilizado para clusterizar as amostras do conjunto de dados |
| **Atributos com a Predição (novo)** | Nome do novo atributo atribuído criado pelo algoritmo de agrupamento especificado |
| **Métrica para validação cruzada** |  |
| **Atributo com o número da partição (fold)** |  |

[Aba Aparência][1]

[Aba Resultados][2] 

## Definições
### Tipo
Tipos de k-means:
1. Tradicional: Frequentemente utilizado para agrupar amostras do conjunto de dados em uma quantidade pré-especificada de grupos.
2. Bisecting K-Means: Bisecting k-means difere-se do K-means tradicional por ser um agrupamento hierárquico. 

### Geração dos Centróides Iniciais
Tipos:
1. K-Means || K-Means ++ variant: Versão paralelizada do K-means++ para inicialização dos centróides iniciais. Os centróides iniciais gerados pelo K-means++ possuem uma garantia de aproximação da solução ótima.
2. Aleatório: Inicialização aleatória dos centróides.

## Exemplo de Utilização
**Objetivo:** Utilizar o k-means para agrupar as espécies da Íris.\
**Base de Dados:** [Íris][3]

![Fluxo de trabalho - Ler dados](/img/spark/aprendizado-de-maquina/agrupamento-k-means/image2.png)

1. Adicione uma base de dados por meio da operação [Ler dados][4].\
![Formulário Ler dados](/img/spark/aprendizado-de-maquina/agrupamento-k-means/image4.png)

2. Na operação **K-means**, preencha *3* no campo **Quantidade de agrupamentos(k)**, *0.0001* no campo **Tolerância**, *“k-Means tradicional”* no campo **Tipo**, *“K-Means || K-Means ++ variant”* no campo **Geração de centróides iniciais** e *50* no campo **Número max. de interações**. Selecione *“petal_length”*, *“petal_width”*, *“sepal_length”* e *“sepal_width”* como **Atributo(s) previsor(es)** e *“prediction”* como **Atributo com a predição (novo)**.\
![Formulário K-Means](/img/spark/aprendizado-de-maquina/agrupamento-k-means/image1.png)

3. Na operação [Tabela][5], não preencha nada. 

4. Execute o fluxo e visualize o resultado.
![Resultado](/img/spark/aprendizado-de-maquina/agrupamento-k-means/image3.png)\
Com a execução do modelo a predição de cada um dos três clusteres pode ser obtido visualizando o resultado apresentado pela tabela de visualização.

---
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[Geração dos Centróides Iniciais]: #geracao-dos-centroides-iniciais
[Tipo]: #tipo
[1]: /pt-br/spark/documentacao-geral/aba-aparencia.html
[2]: /pt-br/spark/documentacao-geral/aba-resultados.html
[3]: /pt-br/spark/base-de-dados#iris
[4]: /pt-br/spark/entrada-e-saida/ler-dados.html
[5]: /pt-br/spark/visualizacao-de-dados/tabela.html