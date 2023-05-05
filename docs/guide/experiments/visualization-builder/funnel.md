# Gráfico de Funil

## Definição
O Funil é um gráfico que representa a progressão de um processo de forma visual 
e fácil de entender. Ele é composto por um conjunto de etapas que são conectadas 
por uma linha e que possuem diferentes larguras, onde cada largura representa o 
número de ocorrências na etapa anterior que avançaram para a próxima etapa. É 
comumente usado em análises de conversão de funis de vendas, de marketing ou de 
usuários em aplicativos.

## Utilização
O Funil é usado para identificar gargalos e pontos de atrito em um processo. 
Ele permite que sejam feitas análises de taxa de conversão em cada etapa do 
funil, ajudando a identificar onde os usuários podem estar abandonando um 
processo ou onde o processo pode ser melhorado. Por exemplo, em um funil de 
vendas, pode-se analisar a taxa de conversão de visitantes para leads, de leads 
para oportunidades de vendas, e assim por diante, a fim de identificar onde 
ocorrem as maiores perdas de conversão.

## Formato dos dados de entrada
O formato de entrada do Funil consiste em uma lista de etapas, onde cada etapa 
tem um nome e um número que representa a quantidade de ocorrências na etapa 
anterior que avançaram para a etapa atual. Por exemplo:

```
Etapa 1: 1000
Etapa 2: 500
Etapa 3: 250
Etapa 4: 100
```

## Observações
É importante lembrar que o Funil representa uma progressão linear em um processo, 
onde cada etapa está diretamente ligada à etapa anterior. Ele não é indicado 
para representar processos em que as etapas não estão diretamente relacionadas 
entre si ou em que ocorrem loops.