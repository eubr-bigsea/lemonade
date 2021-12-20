# **Função de Densidade de Probabilidade**
A função de densidade de probabilidade (PDF) é a probabilidade de que uma variável aleatória, digamos X, tenha um valor exatamente igual a x. É uma expressão estatística que define uma distribuição de probabilidade (a probabilidade de um resultado) para uma variável aleatória discreta.
## **Conectores**

**Entrada**
**Saída**
Dados a serem tratados
Dados tratados e modelo de transformação

| **Entrada** | **Saída** |
|--- |--- |
| Dados a serem tratados | Dados tratados e modelo de transformação|

## **Tarefa**

Nome da Tarefa
## **Aba Execução**

| **Parâmetro** | **Detalhe** |
|--- |--- |
| **Atributo com as características (features)** | Atributo que será transformado pela função |
| **Nome do novo atributo**| Nome que o atributo escalado receberá|

[Aba Aparência](https://docs.lemonade.org.br/pt-br/spark/documentacao-geral/aba-aparencia.html)

[Aba Resultados](https://docs.lemonade.org.br/pt-br/spark/documentacao-geral/aba-resultados.html)
## **Exemplos de Utilização**
### **Exemplo 1**

**Objetivo:** Utilizar o máximo-absoluto para escalonar um atributo.
**Base de Dados:** [íris](https://docs.lemonade.org.br/pt-br/spark/base-de-dados/#iris)

![imagem 1](/img/spark/estatistica/funcao_de_densidade_de_probabilidade/image1.png)

1. Adicione uma base de dados por meio da operação [Ler dados.](https://docs.lemonade.org.br/pt-br/spark/entrada-e-saida/ler-dados.html)

![imagem 2](/img/spark/estatistica/funcao_de_densidade_de_probabilidade/image2.png) ![imagem 3](/img/spark/estatistica/funcao_de_densidade_de_probabilidade/image3.png)

2. Utilize a operação **Função de densidade de probabilidade** para escalar os atributos. Selecione “*sepal_length*”, "*petal length*"  no campo **Atributo(s)**. Os nomes dos **novos atributos** serão gerados automaticamente.

![imagem 4](/img/spark/estatistica/funcao_de_densidade_de_probabilidade/image4.png) ![imagem 5](/img/spark/estatistica/funcao_de_densidade_de_probabilidade/image5.png) ![imagem 6](/img/spark/estatistica/funcao_de_densidade_de_probabilidade/image6.png)

3. Execute o fluxo e visualize o resultado. O resultado possui duas novas colunas de  atributos“ *petal_length_pdf*” e “*sepal_length_pdf*”, que são correspondente aos atributos numéricos da base processados.

![imagem 7](/img/spark/estatistica/funcao_de_densidade_de_probabilidade/image7.png)

Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br


