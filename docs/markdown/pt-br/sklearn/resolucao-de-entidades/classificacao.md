# Classificação
A operação Classificação tem como objetivo classificar conjuntos de registros como pares ou não.

Para mais informações, visite o site [Python Record Linkage Toolkit Documentation](https://recordlinkage.readthedocs.io/en/latest/index.html).
### Conectores
| Entrada | Saída |
| --- | --- |
| Dados de saída da Comparação e fonte de dados | Conjuntos de registros classificados como pares verdadeiros |

### Tarefa
Nome da Tarefa

### Aba Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Algoritmo** | Algoritmo utilizado para realizar a classificação |
| **Coeficientes (Logistic Regression)** | Os coeficientes da regressão logística |
| **Intercept (Logistic Regression)** | O valor de interceptação |
| **Binarize (Naive Bayes)** | Limite para binarização de atributos |
| **Alpha (Naive Bayes)** | Parâmetro de suavização aditiva |
| **Usar os nomes das colunas (Naive Bayes)** | Usar os nomes das colunas do DataFrame para identificar os parâmetros |


[Aba Aparência][1]

[Aba Resultados][2]


## Exemplo de Utilização
**Objetivo:** Comparar atributos de pares de registros.\
**Bases de Dados:**
1. [dataset3][3]
2. true_links_3

![Fluxo - Classificacao](/img/sklearn/resolucao_de_entidades/classificacao/imagem3.png)

1. Leia as bases de dados por meio de duas operações [Ler dados][4]. **Ler dados 0** deverá ler a base de dados 1 e **Ler dados 1** deverá ler a base de dados 2.

2. Na operação [1 - Blocagem][5], clique na opção "*Editar valor*". Preencha o campo **expressão** com "block('given_name','given_name')". Em seguida clique em "*Adicionar*" e preencha o campo **expressão** com "block('surname','surname')". Por fim, clique em "*Adicionar*" mais uma vez e preencha o campo **expressão** com "block('date_of_birth','date_of_birth')".\
   ![Blocagem](/img/sklearn/resolucao_de_entidades/blocagem/imagem2.png)

3. Na operação [2 - Comparação][6], clique na opção "*Editar valor*". E da mesma forma que na operação anterior, preencha as seguintes **expressões**: "exact('date_of_birth', 'date_of_birth', 1, 0, 0, 'date_of_birth')", "exact('suburb', 'suburb', 1, 0, 0, 'suburb')", "exact('state', 'state', 1, 0, 0, 'state')", "string('address_1', 'address_1', 'levenshtein', None, 0.0, 'address_1')", "string('surname', 'surname', 'levenshtein', None, 0.0, 'surname')", "exact('given_name', 'given_name', 1, 0, 0, 'given_name')", e, por último, "string('address_2', 'address_2', 'levenshtein', None, 0.0, 'address_2')".\
   ![Blocagem](/img/sklearn/resolucao_de_entidades/comparacao/imagem2.png)

4. Na operação [3 - Classificação][7], no campo "*Algoritmo*", selecione "Logistic Regression".\
   ![Classificacao](/img/sklearn/resolucao_de_entidades/classificacao/imagem2.png)

   Em seguida, na aba "*Resultados*" selecione "Exibir amostra(s) da(s) saida(s) (máx. 50 registros)".\
   ![Resultados - Classificacao](/img/sklearn/resolucao_de_entidades/classificacao/imagem1.png)

6. Execute o fluxo e visualize o resultado:\
   ![Resultado](/img/sklearn/resolucao_de_entidades/classificacao/imagem4.png)




---
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[1]: /pt-br/sklearn/documentacao-geral/aba-aparencia.html
[2]: /pt-br/sklearn/documentacao-geral/aba-resultados.html
[3]: /pt-br/sklearn/base-de-dados/#dataset3
[4]: /pt-br/sklearn/entrada-e-saida/ler-dados.html
[5]: /pt-br/sklearn/entrada-e-saida/blocagem.html
[6]: /pt-br/sklearn/entrada-e-saida/comparacao.html
[7]: /pt-br/sklearn/entrada-e-saida/classificacao.html