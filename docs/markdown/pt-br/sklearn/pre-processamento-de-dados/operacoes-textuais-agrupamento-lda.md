# Latent Dirichlet Allocation (LDA)

Método de clusterização não supervisionada de documentos em tópicos. 


### Conectores
| Entrada | Saída |
| --- | --- |
| Dados utilizados para treinar o modelo | Dados de saída e Modelo do algoritmo de agrupamento |

### Tarefa
Nome da Tarefa

### Aba Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Atributo(s) previsor(es)** | Atributo que será usado para treinamento |
| **Atributos com a Predição (novo)** |  |
| **[Otimizador]** | Otimizador a ser utilizado para aprender o modelo. |
| **Número de Tópicos (K)** |  |
| **Número máximo de iterações** |  |
| **Concentração de documentos (alfa)** | Parâmetro alpha da distribuição de Dirichlet, o qual controla a priori a distribuição de documentos sobre os tópicos |
| **Concentração de tópicos (beta)** | Parâmetro beta da distribuição de Dirichlet, o qual controla a priori a distribuição de tópicos sobre os termos |
| **Métrica para validação cruzada** |  |
| **Atributo com o número da partição (fold)** |  |

[Aba Aparência][1]

[Aba Resultados][2]

## Definições
### Tipos de Optimizer

1. **Otimizador EM (Expectation Maximization)**: utiliza o método Expectation Maximization na função de verossimilhança para estimar os parâmetros. 

2. **Otimizador Online**: utiliza inferência variacional online para a estimativa dos parâmetros. A cada iteração um subconjunto do corpus é processado e a distribuição de termos por tópicos são atualizadas. 


## Exemplo de Utilização
**Objetivo:** utilizar o método de clusterização LDA para encontrar tópicos em comentários de filmes.\
**Base de Dados:** [Sentiment Labelled Sentences][3]

![Fluxo de trabalho](/img/spark/pre-processamento-de-dados/operacoes-textuais-agrupamento-lda/image7.png)

1. Adicione uma base de dados por meio da operação [Ler dados][4].\
![Operação Ler dados](/img/spark/pre-processamento-de-dados/operacoes-textuais-agrupamento-lda/image3.png)

2. Na operação [Amostrar][5], selecione *“Extrair os primeiros N registros dos dados”* como **Tipo de amostragem ou partição** e digite o valor *“200”* para o campo **Total de registros**.\
![Operação Amostrar](/img/spark/pre-processamento-de-dados/operacoes-textuais-agrupamento-lda/image8.png)

3. Utilize a operação [Dividir texto por delimitador][6]. Selecione a opção *“Simples, use espaços como delimitador”* para o campo **Tipo**. Preencha *“value”* no campo **Atributos**, *“text_tokens”* no campo **Nome do novo atributo** e o valor *“2”* no campo **Tamanho mínimo das partes**. \
![Operação Amostrar](/img/spark/pre-processamento-de-dados/operacoes-textuais-agrupamento-lda/image1.png)

4. Utilize a operação [Remover palavras comuns][7]. Preencha *“text_tokens”* no campo **Atributos** e selecione *“inglês”* no campo **Idioma (opcional)**.\
![Operação Remover Palavras comuns](/img/spark/pre-processamento-de-dados/operacoes-textuais-agrupamento-lda/image1.png)

5. Utilize a operação [Contar frequência dos termos][8]. Selecione *“text_tokens2”* para o campo **Atributo**. Preencha *“text_vector”* no campo **Nome do novo atributo**. Selecione a opção *“Contar a frequência do termo”* no campo **Tipo**. Preencha o valor *“10000”* no campo **Tamanho do vocabulário**. Preencha o valor *“1”* para ambos os cambpos **Frequência mínima de documento** e **Frequência Mínima do Termo**.\
![Operação Remover Palavras comuns](/img/spark/pre-processamento-de-dados/operacoes-textuais-agrupamento-lda/image1.png)

6. Utilize a operação [Latent Dirichlet Allocation (LDA)][9]. Selecione *“text_vector”* para o campo **Atributo(s) previsor(es)**. Preencha *“prediction”* no campo **Atributo com a predição (novo)**. Selecione a opção *“Otimizador EM (Expectation Maximization)”* para o campo **Otimizador**. Preencha o valor *“10”* no campo **Número de tópicos (K)**. Preencha o valor *“200”* para o campo **Número máximo de iterações**.\
![Operação Latent Dirichlet Allocation (LDA)](/img/spark/pre-processamento-de-dados/operacoes-textuais-agrupamento-lda/image2.png)

7. Execute o fluxo e visualize os resultados.\
![Resultado (LDA)](/img/spark/pre-processamento-de-dados/operacoes-textuais-agrupamento-lda/image5.png)

---
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[Otimizador]: #tipos-de-optimizer
[1]: /pt-br/spark/documentacao-geral/aba-aparencia.html
[2]: /pt-br/spark/documentacao-geral/aba-resultados.html
[3]: /pt-br/spark/base-de-dados/#sentiment-labelled-sentences
[4]: /pt-br/spark/entrada-e-saida/ler-dados.html
[5]: /pt-br/spark/pre-processamento-de-dados/amostragem-amostrar-exemplos.html
[6]: /pt-br/spark/pre-processamento-de-dados/operacoes-textuais-dividir-texto-por-delimitador.html
[7]: /pt-br/spark/pre-processamento-de-dados/operacoes-textuais-remover-palavras-comuns.html
[8]: /pt-br//spark/pre-processamento-de-dados/operacoes-textuais-contar-frequencia-dos-termos.html
[9]: /pt-br/spark/pre-processamento-de-dados/operacoes-textuais-agrupamento-lda.html