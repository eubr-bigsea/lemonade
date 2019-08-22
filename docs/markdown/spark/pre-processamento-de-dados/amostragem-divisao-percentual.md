# Divisão Percentual

A divisão percentual é uma operação de Pré-processamento de dados que divide um conjunto de dados em dois conjuntos distintos determinados por diferentes pesos (*weights*).

### Conectores
| Entrada | Saída |
| --- | --- |
| Dados a serem divididos | Os dois novos conjuntos criados |

### Tarefa
Nome da Tarefa

### Aba Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Pesos** | Os pesos definem a forma que os dados de entrada são divididos |
| **Semente (seed)** | Semente utilizada para inicializar o gerador de números pseudo aleatórios |
| **** |  |
| **** |  |

[Aba Aparência][1]

[Aba Resultados][2]

## Exemplo de Utilização
**Objetivo:** Dividir o conjunto inicial de dados em duas partes, treino e teste. Os dados de teste devem possuir 30% dos dados originais, enquanto os dados de treinamento deve possuir 70% dos mesmos.\
**Base de Dados:** [Íris][3]

![Fluxo de trabalho](/img/spark/pre-processamento-de-dados/amostragem-divisao-percentual/image1.png)

1. Adicione uma base de dados por meio da operação [Ler dados][4].\
![Operação Ler dados](/img/spark/pre-processamento-de-dados/amostragem-divisao-percentual/image2.png)

2. Utilize a operação **Divisão percentual**, selecione *30%-70%* no campo **Pesos**.\
![Operação Divisão percentual](/img/spark/pre-processamento-de-dados/amostragem-divisao-percentual/image3.png)\
Os *30%* de dados de teste são retornados na porta dados de saída *Parte 1*, e os *70%* de dados de treinamento pela porta de saída *Parte 2*. Não será utilizada uma semente para o gerador de números aleatórios, ela pode ser deixada vazia. Mas, seria possível utilizar, por exemplo, 12345, ABCD, etc.

3. Execute o fluxo e observe o resultado.\
![Resultado 1](/img/spark/pre-processamento-de-dados/amostragem-divisao-percentual/image4.png)\
![Resultado 2](/img/spark/pre-processamento-de-dados/amostragem-divisao-percentual/image5.png)\
Note que o conjunto de dados foi dividido em duas partes, denominadas *“splitted data 1”* e *“splitted data 2”*, possui todos os atributos do conjunto de dados original.
---
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[1]: /spark/
[2]: /spark/
[3]: /spark/
[4]: /spark/