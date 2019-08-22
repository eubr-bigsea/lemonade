# Remover palavras comuns (stopwords)

Remove todas as aparições das *stop words* em um vetor de texto. As stop words são definidas por uma lista de palavras que pode variar de acordo com o objetivo.

### Conectores
| Entrada | Saída |
| --- | --- |
| Dados de entrada com texto para remover stop words e dados contendo um atributo com stop words | Dados de saída com um campo de texto sem as stop words |

### Tarefa
Nome da Tarefa

### Aba Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Atributos** | Quais atributos terão as ‘stop words’ removidas |
| **Nome do novo atributo (alias)** | Nome do novo atributo. Pode-se adicionar mais de um nome separado por vírgula caso tenha sido selecionado mais de um atributo |
| **Lista de stop words** | Palavras a serem removidas |
| **Atributo da segunda fonte de dados com as stop words** | Atributo da segunda entrada contendo as palavras a serem removidas |
| **Diferenciar maiúsculas/minúsculas** | Diferencia maiúsculas de minúsculas para encontrar as ‘stop words’ |
| **Idioma (opcional)** | Se informado, será usada a lista padrão da língua |

[Aba Aparência][1]

[Aba Resultados][2] 

## Exemplos de Utilização
**Objetivo:** Demonstrar as três formas diferentes de utilizar a operação **Remover palavras comuns (stopwords)**.\
**Base de Dados:** [Quotes][3] e [Base de stop words][6]

### Exemplo 1
![Fluxo de trabaho](/img/spark/pre-processamento-de-dados/operacoes-textuais-remover-palavras-comuns/image7.png)

1. Use a operação [Ler dados][4] e selecione a base *“quotes”*.\
![Operação Ler dados](/img/spark/pre-processamento-de-dados/operacoes-textuais-remover-palavras-comuns/image4.png)

2. Use a operação de [Dividir texto por delimitador][5]. Selecione *“Simples, use espaços como delimitadores”* para o campo **Tipo**. Selecione o atributo *“value”* para o campo **Atributos**. Preencha o valor *“2”* no campo **Tamanho mínimo das partes (tokens)**.\
![Operação Dividir texto por delimitador](/img/spark/pre-processamento-de-dados/operacoes-textuais-remover-palavras-comuns/image11.png)

3. Use a operação [Ler dados][4] mais uma vez e selecione a base *“stopwords”*.
![Operação Ler dados](/img/spark/pre-processamento-de-dados/operacoes-textuais-remover-palavras-comuns/image10.png)

4. Adicione a operação [Remover palavras comuns (stopwords)][7]. Selecione o atributo *“value_tokenized”* para o campo **Atributos**. No campo **Segunda Fonte de Dados** selecione o atributo *“stop_words”*.\
![Operação Remover palavras comuns](/img/spark/pre-processamento-de-dados/operacoes-textuais-remover-palavras-comuns/image5.png)

5. Execute o fluxo e visualize os resultados.\
![Resultado](/img/spark/pre-processamento-de-dados/operacoes-textuais-remover-palavras-comuns/image2.png)


### Exemplo 2
![Fluxo de trabalho](/img/spark/pre-processamento-de-dados/operacoes-textuais-remover-palavras-comuns/image1.png)

1. Repita os passos **1** e **2** do [Exemplo 1].

2. Na operação [Remover palavras comuns (stopwords)][7], adicione uma lista de palavras separadas por vírgula no campo **Lista de stop words**.\
![Operação Remover palavras comuns](/img/spark/pre-processamento-de-dados/operacoes-textuais-remover-palavras-comuns/image3.png)

3. Execute o fluxo e observe os resultados
![Resultado](/img/spark/pre-processamento-de-dados/operacoes-textuais-remover-palavras-comuns/image8.png)

### Exemplo 3
![Fluxo de trabalho](/img/spark/pre-processamento-de-dados/operacoes-textuais-remover-palavras-comuns/image1.png)

1. Repita os passos **1** e **2** do [Exemplo 1].

2. Na operação [Remover palavras comuns (stopwords)][7], selecione o idioma *“inglês”* no campo **Idioma (opcional)**.\
![Operação Remover palavras comuns](/img/spark/pre-processamento-de-dados/operacoes-textuais-remover-palavras-comuns/image9.png)

3. Execute o fluxo e observe os resultados.\
![Resultado](/img/spark/pre-processamento-de-dados/operacoes-textuais-remover-palavras-comuns/image6.png)\
Na base de dados usada como exemplo houve a remoção das mesmas palavras usando a lista padrão e a outra. Isso ocorreu, pois as palavras mais comuns, como conectores e artigos, costumam estar na maioria das listas.

---
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[Exemplo 1]: #exemplo-1
[1]: /spark/
[2]: /spark/
[3]: /spark/
[4]: /spark/
[5]: /spark/
[6]: /spark/
[7]: /spark/