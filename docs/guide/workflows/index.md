# Fluxos de trabalho

Os fluxos de trabalho (ou _workflows_, em inglês) do Lemonade permitem representar 
graficamente a sequência de tarefas necessárias para a realização de 
um determinado projeto ou processo. São compostos por símbolos gráficos que 
representam as diferentes tarefas do processo, interligados por setas que 
indicam a ordem em que essas tarefas devem ser realizadas. 

Os fluxos de trabalho podem ser executados pelo Lemonade, tarefa a tarefa ou mesmo
paralelizando tarefas que não tenham dependências. Cada tarefa, por sua 
vez, tem um conjunto de propriedades (parâmetros) que determinam o que fazer durante
a execução e como tratar as entradas, saídas e erros. Especificamente no Lemonade,
cada tarefa pode ser vista como uma _caixa_ por onde entram e saem dados e é 
parametrizável. 

::: info Nota
Mais recentemente, o Lemonade tem disponibilizado outras formas de executar processos 
de ciência de dados, através de telas especializadas, como por exemplo, as opções
vistas na parte de experimentos e na análise de fonte de dados. Anteriormente, era
necessário criar um fluxo para essas atividades, mas hoje, há funcionalidades 
mais simples e mais no próprio Lemonade. Fluxos de trabalho são mais indicados
para aqueles que precisam de controle maior sobre a execução.
:::

Em resumo, os fluxos de trabalho do Lemonade são uma ferramenta útil para organizar, 
visualizar e gerenciar seus processos de ciência de dados, ajudando a otimizar 
a eficiência e a produtividade.

::: info Detalhes internos
Mesmo não sendo mais a funcionalidade recomendada para alguns tipos de atividades
no Lemonade, tudo que é executado, internamente, ainda usa fluxos de trabalho. As
novas funcionalidades simplesmente simplificam, para o usuário, a construção dos 
fluxos. 
:::

## Utilizando fluxos de trabalho

## Alternativas aos fluxos de trabalho no Lemonade
Conforme mencionado anteriormente, há alternativas para algumas atividades 
anteriormente feitas somente no fluxo de trabalho, mas que agora têm telas 
específicas no Lemonade:

- Sumário estatístico, análises uni, bi e multidimensional dos dados: Agora podem
ser feitos pela tela de detalhe de [Fonte de Dados](../data-sources/index.md). 
O resultado provê novas análises
e resultados mais detalhados e podem ser obtidos sem a necessidade de se construir 
um fluxo para tal.
- Tratamento de dados e atributos: Pode ser usada a funcionalidade de 
[Experimentos](../experiments/data-explorer/index.md), onde cada etapa já é executada e o 
usuário tem o resultado apresendado para si em poucos segundos. 
Anteriormente, com fluxos de trabalho, o usuário tinha que criar o fluxo, 
salvá-lo, executá-lo e somente então poder ver o resultado (que 
ainda era limitado a uma pequena amostra). Esse dinamismo, associado ao fato de 
que no fluxo de trabalho, a tela de construção e de resultados não apareciam ao 
mesmo tempo, fizeram com que o recomendo hoje seja a utilização da parte de 
Experimentos.
- Criação de visualizações: 
- Criação de modelos de aprendizado de máquina:

::: danger Importante
Para a criação de [paineis interativos (trilhas)](../apps/index.md), você ainda 
deve usar os fluxos de trabalho.
:::

## Interação entre Experimentos e fluxos de trabalho

