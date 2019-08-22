# Vetorizar atributo(s)

Essa operação é um transformador de features que une múltiplos atributos em um único vetor de atributos. Geralmente, esse único vetor de atributos é utilizado pelos algoritmos de mineração de dados da plataforma Spark, sendo então necessária.


### Conectores
| Entrada | Saída |
| --- | --- |
| Dados a serem tratados | Dados tratados |

### Tarefa
Nome da Tarefa

### Aba Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Atributos a serem usados** | Exibe lista de atributos a serem escolhidos para fazerem parte do novo vetor de atributos |
| **Nome do novo atributo** | Nome do novo atributo a ser construído |

[Aba Aparência][1]

[Aba Resultados][2] 

\*\* **Atributos a serem usados - Apenas atributos numéricos podem ser utilizados nessa função. Se o seu atributo não é um atributo numérico, por favor, veja a descrição da operação Converter categórico para numérico.**

## Exemplo de Utilização
**Objetivo:** criar um único vetor com alguns atributos da base de dados do Titanic.\
**Base de Dados:** [Titanic][3]

![Fluxo de trabalho - Ler dados](/img/spark/pre-processamento-de-dados/representacao-de-atributos-vetorizar-atributos/image3.png)

1. Adicione uma base de dados por meio da operação [Ler dados][4].
![Formulário - Ler dados](/img/spark/pre-processamento-de-dados/representacao-de-atributos-vetorizar-atributos/image4.png)

2. Na operação **Vetorizar atributo(s)**, selecione *“Age”*, *“SibSp”*, *“Parch”*, e *“Fare”* como **Atributos a serem usados**, e preencha *“atr_selecionados”* como campo **Nome do novo**. Na aba [Resultados][2], marque **Exibir amostra(s) da(s) saída(s)**.
![Formulário - Vetorizar atributos](/img/spark/pre-processamento-de-dados/representacao-de-atributos-vetorizar-atributos/image2.png)

3. Execute o fluxo e visualize o resultado, observando as mudanças nos dados.
![Tabela Resultado](/img/spark/pre-processamento-de-dados/representacao-de-atributos-vetorizar-atributos/image1.png)\
Note que o novo conjunto de dados possui os mesmos atributos dos dados originais, mas no final observamos a nova coluna criada com o nome “atr_selecionados” contendo uma lista com os valores dos atributos selecionados.

---
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[1]: /spark/
[2]: /spark/
[3]: /spark/
[4]: /spark/