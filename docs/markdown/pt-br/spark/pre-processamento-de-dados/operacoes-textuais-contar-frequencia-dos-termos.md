# Contar frequência dos termos
É uma operação de **processamento de texto** que conta a quantidade de ocorrências dos termos do texto.

### Conectores
| Entrada | Saída |
| --- | --- |
| Uma base de dados | Múltiplas fontes com os dados modificados |

### Tarefa
Nome da Tarefa

### Aba Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Atributo** | Atributo de entrada |
| **Nome do novo atributo** | Nome para a nova coluna criada |
| **[Tipo]** | Tipo de transformação |
| **Tamanho do vocabulário** | Tamanho do vocabulário a ser avaliado |
| **Frequência mínima de documentos** | Frequência mínima de documentos |
| **Frequência mínima do termo** | Frequência mínima do termo |

[Aba Resultados][1]

## Definições
### Tipos
- **Frequência das palavras**: Contabiliza a frequência dos termos dentro do conjunto avaliado.
- **Tabela hash de termos por frequência**: Mapeia a sequência de palavras para suas frequências de termos, gerando uma tabela hash.
- **word2vec**: O Word2vec produz como saída um espaço vetorial, em que cada palavra da base é atribuída a um vetor correspondente no espaço, de modo que as palavras que compartilham contextos comuns na base fiquem localizadas próximas umas das outras no espaço.


## Exemplo de Utilização
**Objetivo:** Contar a frequência dos termos.\
**Base de Dados:** [Sentiment Labelled Sentences][2]

![Fluxo de trabalho](/img/spark/pre-processamento-de-dados/operacoes-textuais-contar-frequencia-dos-termos/image1.png)

1. Use a operação [Ler dados][3] para que seja feita a leitura da base. Selecione a fonte de dados *“imdb_labelled.txt”*.\
![Operação Ler dados](/img/spark/pre-processamento-de-dados/operacoes-textuais-contar-frequencia-dos-termos/image6.png)

2. Use a operação de [Dividir texto por delimitador][4]. Selecione *“Simples, use espaços como delimitadores”* para o campo **Tipo**. Selecione *“value”* para o campo **Atributo** e *“1”* para o campo **Tamanho Mínimo das Partes**.\
![Operação Dividir texto por delimitador](/img/spark/pre-processamento-de-dados/operacoes-textuais-contar-frequencia-dos-termos/image5.png)

3. Na operação [Contar frequência dos termos][5], defina *“value_tokenized”* para o campo **Atributo**, no campo Tipo coloque *“Contar a frequência do termo”*, no campo **Tamanho do Vocabulário** coloque o valor *“100000”* e no campo **Frequência Mínima do Termo (TF)** coloque *“1”*.\
![Operação Contar frequência dos termos](/img/spark/pre-processamento-de-dados/operacoes-textuais-contar-frequencia-dos-termos/image2.png)

4. Execute o Fluxo e observe os resultados.\
![Resultado](/img/spark/pre-processamento-de-dados/operacoes-textuais-contar-frequencia-dos-termos/image4.png)
![Resultado](/img/spark/pre-processamento-de-dados/operacoes-textuais-contar-frequencia-dos-termos/image3.png)

---
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[Tipo]: #tipos
[1]: /spark/
[2]: /spark/
[3]: /spark/
[4]: /spark/