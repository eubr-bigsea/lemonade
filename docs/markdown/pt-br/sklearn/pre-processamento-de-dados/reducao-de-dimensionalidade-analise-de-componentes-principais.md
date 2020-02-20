# Análise de Componentes Principais (PCA)

A operação Análise de Componentes Principais (*Principal component analysis* ou PCA) tem como objetivo reduzir a dimensionalidade (em relação ao número de atributos) de uma base de dados. PCA é um procedimento estatístico que usa uma transformação ortogonal para converter um conjunto de observações com atributos possivelmente correlacionados em um conjunto de observações de atributos linearmente não-correlacionados, chamadas de componentes principais.

### Conectores
| Entrada | Saída |
| --- | --- |
| Dados a serem tratados | Dados tratados |

### Tarefa
Nome da Tarefa

### Aba Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Número de componentes principais** | O número de componentes principais final, i.e., os números de atributos a serem construídos pelo PCA |
| **Atributo(s) previsor(es)** | Atributos da base de dados que sofrerão pré-processamento |
| **Atributo de saída** | Atributo que terá a saída da operação |

[Aba Aparência][1]

[Aba Resultados][2] 

## Exemplo de Utilização
**Objetivo:** Utilizar a operação Análise de Componentes Principais para reduzir a dimensionalidade da base de dados Íris.\
**Base de Dados:** [Íris][3]

![Fluxo de trabalho](/img/spark/pre-processamento-de-dados/reducao-de-dimensionalidade-analise-de-componentes-principais/image2.png)

1. Leia a base de dados Irís por meio da operação [Ler dados][4].

2. Na operação **Análise de Componentes Principais (PCA)**, preencha *“PCA 2”* no campo **Nome da tarefa (opcional)**. Preencha *2* no campo Número de componentes principais. Selecione *“petal_length”*, *“petalwidth”*, *“sepallength”* e *“sepalwidth”* no campo **Atributo(s) previsor(es)**. Preencha *“atributo_final”* no campo **Atributo de saída**.\
![Operação Análise de Componentes Principais](/img/spark/pre-processamento-de-dados/reducao-de-dimensionalidade-analise-de-componentes-principais/image3.png)

3. Execute o fluxo e visualize uma amostra dos resultados do PCA. Abaixo é mostrada as 10 primeiras instâncias da base de dados com os atributos originais (*“petal_length”*, “*petalwidth”*, *“sepallength”* e *“sepalwidth”*) e o atributo de saída do PCA, i.e., o *“atributo final”*. Observe que os 4 atributos originais da base de dados foram transformados em um atributo que é uma estrutura vetorial com 2 posições correspondendo cada componente principal.\
![Resultado](/img/spark/pre-processamento-de-dados/reducao-de-dimensionalidade-analise-de-componentes-principais/image1.png)

---
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[1]: /pt-br/spark/documentacao-geral/aba-aparencia.html
[2]: /pt-br/spark/documentacao-geral/aba-resultados.html
[3]: /pt-br/spark/base-de-dados/#iris
[4]: /pt-br/spark/entrada-e-saida/ler-dados.html