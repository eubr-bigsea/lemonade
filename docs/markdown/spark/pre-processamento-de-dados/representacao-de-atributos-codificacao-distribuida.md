# Codificação Distribuída (One-hot encoder)

Transforma um ou mais atributos do conjunto de dados em um, ou mais vetores binários esparsos. O One Hot Encoder é usado para transformar atributos categóricos representados como números, porém, cuja ordem não é relevante. Para evitar que os modelos interpretem esses atributos como sendo numéricos, são criadas variáveis binárias, cada uma para um valor possível que o atributo pode assumir. Dessas novas variáveis binárias, a única que terá valor 1 será correspondente à categoria do atributo na instância


### Conectores
| Entrada | Saída |
| --- | --- |
| Entrada de dados número 1 | Um ou mais vetores binários esparsos |

### Tarefa
Nome da Tarefa

### Aba Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Atributos** | Atributo(s) que será(ão) transformado(s) pelo Encoder |
| **Alias** | Nome(s) que o(s) novo(s) atributo(s) transformado(s) receberá(ão) |

[Aba Aparência][1]

[Aba Resultados][2] 

## Exemplo de Utilização
**Objetivo:** A partir da base de dados, transformar os campos em vetores binários.\
**Base de Dados:** [Airplane Crashes Since 1908][3]

![Fluxo de Trabalho - ler dados](/img/spark/pre-processamento-de-dados//representacao-de-atributos-codificacao-distribuida/image5.png)

1. Adicione uma base de dados por meio da operação [Ler dados][4].\
![Formulario - ler dados](/img/spark/pre-processamento-de-dados//representacao-de-atributos-codificacao-distribuida/image3.png)

2. Na operação [Converter categórico para numérico][5] no campo **Atributos** selecione *“Operator”*, *“Route”* e *“Type”*. No campo **Nome para novo(s) atributo(s) indexado(s)** coloque *“Operator_num”*, “*Route_num”* e *“Type_num”*.\
![Formulario - Converter categórico para numérico](/img/spark/pre-processamento-de-dados//representacao-de-atributos-codificacao-distribuida/image2.png)

3. Na operação **Codificação distribuída (One-hot encoder)** coloque no campo **Atributos** os atributos gerados no passo anterior: *“Operator_num”*, *“Route_num”* e *“Type_num”*. No campo **Alias** coloque os novos nomes dos atributos transformados: *“Operator_bin”*, *“Route_bin”* e *“Type_bin”*.\
![Formulario -= Codificação distribuída](/img/spark/pre-processamento-de-dados//representacao-de-atributos-codificacao-distribuida/image4.png)

4. Execute o fluxo e visualize o resultado.\
![Resultado](/img/spark/pre-processamento-de-dados//representacao-de-atributos-codificacao-distribuida/image1.png)\
Nas imagens acima, a primeira exibe os atributos originais da base, e na segunda é possível ver os atributos criados como resultado das operações. Os atributos criados pelo One Hot Encoder, de sufixo “-bin”, estão representados como vetor esparso. Por exemplo, no campo Operator_bin, onde se lê “(2476, [23], [1.0])”, há um vetor de 2476 posições (ou seja, há 2476 valores distintos de Operator), em que a posição 23 é 1. É também exibido o Schema para output data, que contém metadados da operação realizada. 
---
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[Link na propria pagina]: #link-vem-pra-ca
[1]: /spark/
[2]: /spark/
[3]: /spark/