# Por Quantis

Operação que mapeia uma coluna de valores (*features*) contínuos em uma coluna de recursos (features) categóricos.

### Conectores
| Entrada | Saída |
| --- | --- |
| Dados a serem tratados | Dados tratados e modelo |

### Tarefa
Nome da Tarefa

### Aba Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Atributos** | Uma ou mais colunas que contenham os valores a serem limpos, ou substituídos |
| **Nome do(s) novo(s) atributo(s)** | Nome dos novos atributos criados na operação\* |
| **Número de categorias (buckets)** | Número de categorias a serem criadas |
| **Erro relativo (entre [0.0 1.0])** | Precisão do alvo relativo para o algoritmo quantil utilizado para gerar as categorias |
**OBS:**: \*Se o nome dos novos atributos forem omitidos, o nome resultante terá um sufixo seguido pelo nome original.

[Aba Aparência][1]

[Aba Resultados][2]

## Exemplo de Utilização
**Objetivo:** determinar a quantidade de tripulantes sobreviventes do desastre do titanic por faixa etária, com o intervalo de 10 anos entre elas.\
**Base de Dados:** [Titanic][3]

![Fluxo de trabalho](/img/spark/pre-processamento-de-dados/discretizacao-por-quantis/image3.png)

1. Adicione uma base de dados por meio da operação [Ler dados][4] e selecione *“Converter dados inválidos para NULO”* na opção **O que fazer em caso de dados inválidos**.\
![Operação Ler dados](/img/spark/pre-processamento-de-dados/discretizacao-por-quantis/image6.png)

2. Adicione a operação [Tratar dados ausentes][5], selecione *“age”* como **Atributo(s)** e *“Substituir com a média”* como **Tipo de limpeza**.\
![Operação Tratar dados ausentes](/img/spark/pre-processamento-de-dados/discretizacao-por-quantis/image2.png)

3. Para tratar apenas dos sobreviventes do desastre, adicione a operação [Filtrar por função][6]. Utilizando o campo **Filtro**, selecione *“Survived == 1”* como **Expressão**, na opção **Editar valor**.\
![Operação Filtrar por função](/img/spark/pre-processamento-de-dados/discretizacao-por-quantis/image11.png)

4. Adicione a operação Por quantis e selecione *“age”* como **Atributos**. Preencha *“age_quantis”* no campo **Nome(s) do(s) novo(s) atributo(s)**, *8* em **Número de categorias (buckets)** e *0,02* em **Erro relativo**.\
![Operação Por quantis](/img/spark/pre-processamento-de-dados/discretizacao-por-quantis/image10.png)

5. Adicione a operação [Agrupar linhas por função][7] para visualizar os buckets gerados. Escolha *“Age_buckets”* no campo **Selecione o(s) atributos para agregação**. Utilizando o campo **Função de agregação**, selecione *“age_quantis”* como **Atributo**, *“Count”* como **Função** e *“mapped_age_quantis”* como **Nome novo**.\
![Operação Agrupar linhas por função](/img/spark/pre-processamento-de-dados/discretizacao-por-quantis/image1.png)

6. Para gerar o gráfico de barras é necessário ordenar os buckets, portanto, adicione a operação [Ordenar][8] novamente. Utilizando *“age_quantis”* como **Atributos** e *“Ascending”* como **Função**, na opção **Abrir o Editor**.\
![Operação Ordenar](/img/spark/pre-processamento-de-dados/discretizacao-por-quantis/image7.png)\
Execute e observe os resultados. Aqui podemos visualizar cada um dos quantis gerados na operação anterior.\
![Resultado de ordenação](/img/spark/pre-processamento-de-dados/discretizacao-por-quantis/image4.png)\
![Resultado de ordenação](/img/spark/pre-processamento-de-dados/discretizacao-por-quantis/image5.png)\

7. Adicione a operação [Gráfico de barras][9]. Selecione *“age_quantis”* no campo **Atributo para o eixo X** e *“mapped_age_quantis”* no campo **Atributos para o eixo Y**. Preencha *“Número de sobreviventes por idade”* no campo **Título**, *“Quantis de idades”* no campo **Título para o eixo X** e *“Número de sobreviventes”* no campo **Título para o eixo Y**.\
![Resultado Gráfico de barras](/img/spark/pre-processamento-de-dados/discretizacao-por-quantis/image9.png)\

8. Execute o fluxo e visualize o resultado.\
![Resultado Gráfico de barras](/img/spark/pre-processamento-de-dados/discretizacao-por-quantis/image12.png)\
Cada barra equivale ao um quantil de idade, composto pelo intervalo de 10 em 10 anos. Observamos que o intervalo de 30 a INF anos apresenta o maior número de sobreviventes.

---
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[1]: /pt-br/spark/documentacao-geral/aba-aparencia.html
[2]: /pt-br/spark/documentacao-geral/aba-resultados.html
[3]: /pt-br/spark/base-de-dados/#titanic
[4]: /pt-br/spark/entrada-e-saida/ler-dados.html
[5]: /pt-br/spark/manipulacao-de-dados/tratar-dados-ausentes.html
[6]: /pt-br/spark/manipulacao-de-dados/filtrar-por-funcao.html
[7]: /pt-br/spark/manipulacao-de-dados/linha-agrupar-por-funcao.html
[8]: /pt-br/spark/manipulacao-de-dados/coluna-ordenar.html
[9]: /pt-br/spark/visualizacao-de-dados/grafico-de-barra.html