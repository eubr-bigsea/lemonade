# Converter Categórico para Numérico

Realiza o processo de categorização de atributos. É um conversor de rótulos que mapeia uma coluna de rótulos em string para uma coluna de rótulos como índices. Se a coluna passada é numérica, ocorre uma conversão para string, cujos valores são então indexados. Os índices estão no intervalo [0, numRótulos), ordenados pela frequência dos rótulos. Assim, o rótulo mais frequente tem índice 0.


### Conectores
| Entrada | Saída |
| --- | --- |
| Dados a serem tratados | Dados tratados e modelo usado pelo conversor |

### Tarefa
Nome da Tarefa

### Aba Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Atributos** | Atributos a serem indexados pelo indexador |
| **Nome para novo(s) atributo(s) indexado(s)** | Nome para o conjunto gerado que conterá os atributos selecionados indexados |

[Aba Aparência][1]

[Aba Resultados][2] 

## Exemplo de Utilização
**Objetivo:** converter atributos da base de dados da Iris para o tipo *string*.\
**Base de Dados:** [Íris][3]

![Fluxo de Trabalho - Ler Dados](/img/spark/pre-processamento-de-dados/representacao-de-atributos-converter-categorico-para-numerico/image1.png)

1. Adicione uma base de dados por meio da operação [Ler dados][4].
![Fluxo de Trabalho - Ler Dados](/img/spark/pre-processamento-de-dados/representacao-de-atributos-converter-categorico-para-numerico/image5.png)


2. Na operação **Converter categórico para numérico**, selecione *“class”* como **Atributos** e preencha *“class_indexed”* no campo **Nome para novo atributo**. Na aba [Resultados][2], marque **Exibir amostra(s) da(s) saída(s)** e **Exibir esquema/dicionário da(s) saída(s)**.
![Fluxo de Trabalho - Ler Dados](/img/spark/pre-processamento-de-dados/representacao-de-atributos-converter-categorico-para-numerico/image2.png)

3. Execute o fluxo e visualize o resultado, observando as mudanças nos dados.
![Fluxo de Trabalho - Ler Dados](/img/spark/pre-processamento-de-dados/representacao-de-atributos-converter-categorico-para-numerico/image4.png)\
De fato, o atributo criado pelo indexador, *class_indexed*, está de acordo com o esperado. Olhando para o esquema de dicionário das saídas gerado, podemos verificar que o tipo da variável criada e da original diferem.\
![Fluxo de Trabalho - Ler Dados](/img/spark/pre-processamento-de-dados/representacao-de-atributos-converter-categorico-para-numerico/image3.png)

---
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[1]: /pt-br/spark/documentacao-geral/documentacao-geral.html#aba-aparencia
[2]: /pt-br/spark/documentacao-geral/documentacao-geral.html#aba-resultados
[3]: /pt-br/spark/base-de-dados/#iris
[4]: /pt-br/spark/entrada-e-saida/ler-dados.html