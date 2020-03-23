# Random Forest Regressor

Random Forest (floresta aleatória) é uma generalização da operação [Árvore de Decisão][1], em que se utiliza um conjunto de árvores de decisão (aleatórias) a fim de minimizar o sobreajuste (*overfitting*) de cada modelo individual de árvore gerado para os dados de entrada.

### Conectores
| Entrada | Saída |
| --- | --- |
| Dados utilizados para treinar o modelo | Dados de saída e modelo do algoritmo de regressão |

### Tarefa
Nome da Tarefa

### Aba Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Atributo(s) previsor(es)** | Atributo(s) que será(ão) usado(s) para treinamento |
| **Atributo com o rótulo** | Atributo a ser predito |
| **Atributos com a predição** | Atributo contendo a predição do modelo |
| **Profundidade máxima** | Profundidade máxima na árvore. |
| **Número de árvores** | Número de árvores na floresta. |
| **Nó interno mínimo** | Porcentagem do número mínimo de amostras necessárias para dividir um nó interno. |
| **Nó de folha mínima** | Porcentagem do número mínimo de amostras necessárias para estar em um nó folha. |
| **Fração ponderada mínima** | A fração ponderada mínima da soma total de pesos (de todas as amostras de entrada) necessária para estar em um nó folha. |
| **Max. nós folha** | Cresça árvores com max_leaf_nodes da melhor maneira possível. |
| **Redução mínima da impureza** | Um nó será dividido se essa divisão induzir uma redução da impureza maior ou igual a esse valor. |
| **Amostras de autoinicialização** | Se as amostras de autoinicialização são usadas na construção de árvores. |
| **Amostras prontas** | Se é necessário usar amostras prontas para estimar o R² em dados não vistos. |
| **Estado aleatório** | É a semente usada pelo gerador de números aleatórios. |
| **Critério** | A função para medir a qualidade de um split. |

[Aba Aparência][2]

[Aba Resultados][3] 

## Exemplo de Utilização
**Objetivo:** Utilizar o modelo do Random Forest para predizer a qualidade de um vinho. \
**Base de Dados:** [Qualidade da Variante Vermelha do Vinho Verde Português][4]

![Ler dados](/img/sklearn/aprendizado_de_maquina/regressao_random_forest/image3.png)

1. Leia a base de dados por meio da operação [Ler dados][5].

2. Utilize a operação [Divisão percentual][6] para dividir a base de dados em treino e teste. No parâmetro **Percentual**, calibre-o utilizando 50% dos dados para treinar (1.ª parte) e 50% para testar (2.ª parte).

3. Na operação **Random Forest Regressor**, selecione *“alcohol”*, *“chlorides”*, *“citric_acid”*, *“density”*, *“fixed_acidity”*, *“free_sulfur_dioxide”*, *“pH”*, *“residual_sugar”*, *“sulphates”*, *“total_sulfur_dioxide”* e *“volatile_acidity”* no campo **Atributo(s) previsor(es)**. Selecione “quality” no campo Atributo com o rótulo e preencha “resultado” no campo **Atributo com a predição (novo)**. Preencha 100 no campo **Iterações máximas,** 10 no campo **Profundidade máxima**, 50 no campo **Número de árvores**, e 0.1 no **Ganho de informação**. Deixe os demais parâmetros inalterados.\
![Random Forest Regressor - parte 1](/img/sklearn/aprendizado_de_maquina/regressao_random_forest/image4.png)
![Random Forest Regressor - parte 2](/img/sklearn/aprendizado_de_maquina/regressao_random_forest/image2.png)

4. Na operação [Aplicar Modelo][7], selecione *“alcohol”*, *“chlorides”*, *“citric_acid”*, *“density”*, *“fixed_acidity”*, *“free_sulfur_dioxide”*, *“pH”*, *“residual_sugar”*, *“sulphates”*, *“total_sulfur_dioxide”* e *“volatile_acidity”* no campo **Atributo(s) previsor(es)** e preencha *“resultado”* no campo **Nome do novo atributo (herdado do modelo)**. 

5. Na operação [Avaliar Modelo][8], selecione *“resultado”* no campo **Atributo usado para predição**. Selecione *“quality”* no campo **Atributo usado como label** e a métrica *“Raiz do erro quadrático médio”* como **Métrica para avaliação**.

6. Execute o fluxo e visualize o resultado, que neste caso está de acordo com a raiz do erro quadrático médio (**Root Mean Square Error** ou **RMSE**):\
![Resultado](/img/sklearn/aprendizado_de_maquina/regressao_random_forest/image1.png)

---
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[1]: /pt-br/sklearn/aprendizado-de-maquina/classificacao-arvore-de-decisao.html
[2]: /pt-br/sklearn/documentacao-geral/aba-aparencia.html
[3]: /pt-br/sklearn/documentacao-geral/aba-resultados.html
[4]: /pt-br/sklearn/base-de-dados/#msnbc-com
[5]: /pt-br/sklearn/entrada-e-saida/ler-dados.html
[6]: /pt-br/sklearn/pre-processamento-de-dados/amostragem-divisao-percentual.html
[7]: /pt-br/sklearn/modelo-e-avaliacao/aplicar-modelo.html
[8]: /pt-br/sklearn/modelo-e-avaliacao/avaliar-modelo.html