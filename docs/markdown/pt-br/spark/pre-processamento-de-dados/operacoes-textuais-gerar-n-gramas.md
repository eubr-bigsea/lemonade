# Gerar N-Gramas

Gera N-gramas a partir de um vetor de texto. Sendo que N-gramas são todas as combinações possíveis de palavras adjacentes e N representa o número de palavras a serem agrupadas. Veja no exemplo abaixo um 3-grama da frase “Ser ou não ser eis a questão”.

“Ser ou não”, “ou não ser”, “não ser eis”, “ser eis a”, “eis a questão”.


### Conectores
| Entrada | Saída |
| --- | --- |
| Dados a serem ordenados | Dados ordenados |

### Tarefa
Nome da Tarefa

### Aba Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Número de elementos por n-grama** |  |
| **Atributos** | Atributos contendo vetores de texto para gerar os n-gramas |
| **Nome(s) do(s) novo(s) atributo(s)** | Nome do novo atributo. Pode-se adicionar mais de um nome separado por vírgula caso tenha sido selecionado mais de um atributo |

[Aba Aparência][1]

[Aba Resultados][2]

## Exemplo de Utilização
**Objetivo:** Gerar N-gramas a partir de um vetor de texto.\
**Base de Dados:** [Quotes][3]

![Fluxo de trabalho](/img/spark/pre-processamento-de-dados/operacoes-textuais-gerar-n-gramas/image3.png)

1. Use a função [Ler dados][4] e selecione a base *"quotes"*.\
![Operação Ler dados](/img/spark/pre-processamento-de-dados/operacoes-textuais-gerar-n-gramas/image5.png)

2. Use a operação de [Dividir texto por delimitador][5]. Selecione *“Simples, usando espaços como delimitadores”* para o campo **Tipo**. Preencha *“value”* no campo **Atributos**. No campo **Tamanho mínimo das partes (tokens)** preencha o valor *“2”*.\
![Operação Dividir texto por delimitador](/img/spark/pre-processamento-de-dados/operacoes-textuais-gerar-n-gramas/image1.png)

3. Adicione a operação [Gerar N-Gramas][6]. Preencha *2* no campo **Número de Elementos por n-grama**. Selecione o atributo *“value_tokenized”* para o campo **Atributos**.\
![Operação Gerar N-Gramas](/img/spark/pre-processamento-de-dados/operacoes-textuais-gerar-n-gramas/image2.png)

4. Execute o fluxo e observe os resultados.\
![Resultado](/img/spark/pre-processamento-de-dados/operacoes-textuais-gerar-n-gramas/image4.png)

---
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[1]: /pt-br/spark/documentacao-geral/documentacao-geral.html#aba-aparencia
[2]: /pt-br/spark/documentacao-geral/documentacao-geral.html#aba-resultados
[3]: /pt-br/spark/base-de-dados/#quotes
[4]: /pt-br/spark/entrada-e-saida/ler-dados.html
[5]: /pt-br/spark/pre-processamento-de-dados/operacoes-textuais-dividir-texto-por-delimitador.html
[6]: /pt-br/spark/pre-processamento-de-dados/operacoes-textuais-gerar-n-gramas.html