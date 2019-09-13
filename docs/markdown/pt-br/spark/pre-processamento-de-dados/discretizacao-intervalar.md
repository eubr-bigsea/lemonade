# Discretização intervalar

Operação que mapeia uma coluna de valores contínuos em uma coluna de buckets (blocos, faixas) definidos(as) pelo usuário.

### Conectores
| Entrada | Saída |
| --- | --- |
| Dados a serem tratados | Dados tratados e modelo |

### Tarefa
Nome da Tarefa

### Aba Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Atributos** | Uma ou mais colunas que contenham os valores a serem limpos, ou substituídos |
| **Nome do(s) novo(s) atributo(s)** | Nome dos novos atributos criados na operação\* |
| **Divisores (lista de valores com no mínimo de 3 elementos, usado para definir as faixas, separados por vírgula, -INF e INF são valores válidos)\*** | Lista de valores com no mínimo 3 elementos utilizados para definir as faixas, separados por vírgulas |
| **[Como tratar dados inválidos?]** | Como devem ser tratados os dados inválidos |

**OBS:** \*Se o nome dos novos atributos forem omitidos, o nome resultante terá um sufixo seguido pelo nome original.

[Aba Aparência][1]

[Aba Resultados][2]

## Definições
### Como tratar dados inválidos?

Existem as seguintes opções:

1. Ignorar: Os dados inválidos são ignorados no mapeamento em buckets.
2. Manter: Os dados inválidos serão mapeados em um bucket especial.
3. Gerar erro: O programa lança uma exceção.

## Exemplo de Utilização
**Objetivo:** determinar a quantidade de tripulantes sobreviventes do desastre do titanic por faixa etária, com o intervalo de 10 anos entre elas.\
**Base de Dados:** [Titanic][3]

![Fluxo de trabalho](/img/spark/pre-processamento-de-dados/discretizacao-intervalar/image12.md)

1. Adicione uma base de dados por meio da operação [Ler de dados][4] e selecione *“Converter dados inválidos para NULO”* na opção O que fazer em caso de dados inválidos.\
![Operação Ler dados](/img/spark/pre-processamento-de-dados/discretizacao-intervalar/image3.md)

2. Adicione a operação [Limpar dados ausentes][5], selecione *“age”* como **Atributo(s)** e *“Substituir com a média”* como **Tipo de limpeza**.\
![Operação Limpar dados ausentes](/img/spark/pre-processamento-de-dados/discretizacao-intervalar/image13.md)

3. Para tratar apenas dos sobreviventes do desastre, adicione a operação [Filtrar por função][6]. Utilizando o campo **Filtro**, selecione *“Survived == 1”* como **Expressão**, na opção **Editar valor**.\
![Operação Filtrar por função](/img/spark/pre-processamento-de-dados/discretizacao-intervalar/image5.md)

4. Esta operação é opcional, o objetivo dela é determinar o infinito inferior da coluna *Age*. Ao ordenar os valores, é possível visualizar um *preview* dos dados e identificar o menor valor. Desta forma temos o limite inferior dos nossos intervalos. Portanto, adicione a operação **Ordenar**. Abra o editor do campo **Atributo(s)**, selecione *“age”* como **Atributos** e *“Ascending”* como **Função**.\
![Preview de ordenação](/img/spark/pre-processamento-de-dados/discretizacao-intervalar/image2.md)\
Execute o fluxo:
![Resultado do preview de ordenação](/img/spark/pre-processamento-de-dados/discretizacao-intervalar/image1.md)\
Agora é possível visualizar o menor valor inferior.

5. Adicione a operação **Intervalar** e selecione *“Age”* como **Atributos**. Preencha *“Age_buckets”* no campo **Nome(s) do(s) novo(s) atributo(s)**, *“0,10,20,30,40,50,60,INF”* em **Divisores** e “Ignorar” em **Como tratar dados inválidos?**.\
![Operação Intervalar](/img/spark/pre-processamento-de-dados/discretizacao-intervalar/image11.md)\
Execute e observe as categorias geradas após a execução da operação:
![Resultado de operação Intervalar](/img/spark/pre-processamento-de-dados/discretizacao-intervalar/image10.md)\
Como o limite superior é desconhecido, foi utilizado o valor INF e optado por ignorar quaisquer valores que não estejam mapeados.

6. Adicione a operação [Agrupar linhas por função][7] para visualizar os buckets gerados. Escolha *“Age_buckets”* no campo **Selecione o(s) atributos para agregação**. Utilizando o campo **Função de agregação**, selecione *“Age_buckets”* como **Atributo**, *“Count”* como **Função** e *“Mapped_Age”* como **Alias**.\
![Operação Agrupar linhas por função](/img/spark/pre-processamento-de-dados/discretizacao-intervalar/image4.md)

7. Para gerar o gráfico de barras é necessário ordenar os buckets, portanto, adicione a operação [Ordenar][8] novamente. Utilizando *“Age_buckets”* como **Atributo** e “Ascending” como **Função**, na opção **Abrir o Editor**.\
![Operação Ordenar - buckets](/img/spark/pre-processamento-de-dados/discretizacao-intervalar/image7.md)\
Executando a operação, é possível visualizar cada um dos buckets gerados na operação anterior.\
![Resultado de operação Ordenar - buckets](/img/spark/pre-processamento-de-dados/discretizacao-intervalar/image6.md)

8. Adicione a operação [Gráfico de barras][9]. Selecione *“Age_bucktes”* no campo **Atributo** para o eixo X e “*Mapped_age”* no campo **Atributos para o eixo Y**. Preencha *“Sobreviventes do desastre no Titanic”* no campo **Título**, *“Buckets de Idade (10 em 10 anos)”* no campo **Título para o eixo X** e *“Número de sobreviventes”* no campo **Título para o eixo Y**.\
![Operação Gráfico de barras](/img/spark/pre-processamento-de-dados/discretizacao-intervalar/image9.md)

9. Execute o fluxo e visualize o resultado.\
![Resultado Gráfico de barras](/img/spark/pre-processamento-de-dados/discretizacao-intervalar/image8.md)\
Cada barra equivale ao um bucket de idade, composto pelo intervalo de 10 em 10 anos. Observamos que o intervalo de 20 a 30 anos apresenta o maior número de sobreviventes. 

---
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[Como tratar dados inválidos?]: #como-tratar-dados-invalidos
[1]: /pt-br/spark/documentacao-geral/aba-aparencia.html
[2]: /pt-br/spark/documentacao-geral/aba-resultados.html
[3]: /pt-br/spark/base-de-dados/#titanic
[4]: /pt-br/spark/entrada-e-saida/ler-dados.html
[5]: /pt-br/spark/manipulacao-de-dados/tratar-dados-ausentes.html#tipos-de-limpeza
[6]: /pt-br/spark/manipulacao-de-dados/filtrar-por-funcao.html
[7]: /pt-br/spark/manipulacao-de-dados/linha-agrupar-por-funcao.html
[8]: /pt-br/spark/manipulacao-de-dados/coluna-ordenar.html
[9]: /pt-br/spark/visualizacao-de-dados/grafico-de-barra.html