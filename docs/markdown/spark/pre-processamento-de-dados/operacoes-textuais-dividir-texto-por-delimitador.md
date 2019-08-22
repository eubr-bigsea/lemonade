# Dividir Texto por Delimitador

Transforma o texto de um ou mais atributos em um vetor de texto, usando espaços ou uma expressão regular como delimitadores. Todas as aparições do delimitador são removidas e onde estavam ocorre a divisão do texto. 


### Conectores
| Entrada | Saída |
| --- | --- |
| Dados de entrada com atributo em texto para ser dividido | Dados de saída com o texto dividido em um vetor |

### Tarefa
Nome da Tarefa

### Aba Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Tipo** | Qual será o tipo de delimitador para dividir. (espaços ou expressão regular) |
| **Atributos** | Quais serão os campos que serão divididos |
| **Nome do novo atributo (alias)** | Nome do novo atributo. Pode-se adicionar mais de um nome separado por vírgula caso tenha sido selecionado mais de um atributo |
| **Expressão. (Sintaxe Java)** | Expressão regular para definir quais serão os delimitadores usados na divisão |
| **Tamanho mínimo das partes (tokens). Partes menores serão descartadas** | Define o tamanho mínimo de cada item do vetor final |

[Aba Aparência][1]

[Aba Resultados][2]

## Definições
### Tipos de Limpeza
- Simples: Usa espaços como delimitadores.
- Regular: Usa uma expressão regular como delimitador.

## Exemplos de Utilização
**Objetivo:** Mostrar os dois tipos de delimitadores em uma base de citações de autores famosos e uma lista de *stop words* para a língua inglesa descrita neste link: <https://github.com/igorbrigadir/stopwords/blob/master/en/ranksnl_oldgoogle.txt>
\
**Base de Dados:** [Quotes][3]
![Fluxo de trabalho](/img/spark/pre-processamento-de-dados/operacoes-textuais-dividir-texto-por-delimitador/image7.png)

### Exemplo 1

1. Use a operação [Ler dados][4] e selecione a base *“quotes”*.\
![Operação Ler dados](/img/spark/pre-processamento-de-dados/operacoes-textuais-dividir-texto-por-delimitador/image9.png)

2. Use a operação de [Dividir texto por delimitador][5]. Selecione *“Simples, use espaços como delimitadores”* para o campo **Tipo**. Selecione o atributo *“value”* para o campo **Atributos**. Preencha o valor *“2”* no campo **Tamanho mínimo das partes (tokens)**.\
![Operação Dividir texto por delimitador](/img/spark/pre-processamento-de-dados/operacoes-textuais-dividir-texto-por-delimitador/image10.png)

3. Use a operação [Ler dados][4] mais uma vez e selecione a base *“stopwords”*.\
![Operação Ler dados](/img/spark/pre-processamento-de-dados/operacoes-textuais-dividir-texto-por-delimitador/image3.png)

4. Adicione a operação [Remover palavras comuns (stopwords)][6]. Selecione o atributo *“value_tokenized”* para o campo **Atributos**. No campo **Segunda Fonte de Dados** selecione o atributo *“stop_words”*.\
![Operação Remover palavras comuns](/img/spark/pre-processamento-de-dados/operacoes-textuais-dividir-texto-por-delimitador/image6.png)

5. Execute o fluxo e observe os resultados.\
![Resultado](/img/spark/pre-processamento-de-dados/operacoes-textuais-dividir-texto-por-delimitador/image8.png)

### Exemplo 2

1. Utilize o mesmo fluxo do [Exemplo 1].\
2. Na operação [Dividir texto por delimitador][5], altere o valor do campo **Tipo** para *“Use uma expressão regular para determinar os delimitadores”*. No campo **Expressão (apenas se tipo for expressão regular)** digite “\\.\|,” (barra invertida, ponto, barra vertical e vírgula).\
![Operação Remover palavras comuns](/img/spark/pre-processamento-de-dados/operacoes-textuais-dividir-texto-por-delimitador/image1.png)

3.  Execute o fluxo e observe os resultados.\
![Resultado](/img/spark/pre-processamento-de-dados/operacoes-textuais-dividir-texto-por-delimitador/image4.png)\
Avaliando os resultados dessa vez é possível ver que as divisões foram realizadas de maneira diferente, sendo que não há mais os caracteres escolhidos nessa saída. Na tabela abaixo foram escolhidos o ponto final e a vírgula.


### Exemplo 3
1. Utilize o mesmo fluxo do [Exemplo 1].

2. Na operação [Dividir texto por delimitador][5], selecione novamente o atributo *“Simples, use espaços como delimitadores”* para o campo **Tipo**. Altere o valor do campo **Tamanho mínimo das partes (tokens)** para *“5”*.\
![Operação Dividit texto por delimitador](/img/spark/pre-processamento-de-dados/operacoes-textuais-dividir-texto-por-delimitador/image5.png)

3. Execute o fluxo e observe os resultados.\
![Resultado](/img/spark/pre-processamento-de-dados/operacoes-textuais-dividir-texto-por-delimitador/image2.png)\
É possível observar que todas as palavras com a quantidade de caracteres menor que o valor definido (5) foram descartadas.

---
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[Exemplo 1]: #exemplo-1
[1]: /spark/
[2]: /spark/
[3]: /spark/
[4]: /spark/
[5]: /spark/
[6]: /spark/