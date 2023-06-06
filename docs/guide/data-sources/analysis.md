# Análises estatísticas

O Lemonade suporta algunas análises estatísticas uni, bi e multivariadas, aplicadas
a uma Fonte de Dados. Essas análises estatísticas são úteis para extrair informações 
dos dados, permitindo uma compreensão mais profunda dos fenômenos estudados e 
embasando tomadas de decisão. Cada tipo de análise possui suas técnicas e 
abordagens específicas, adequadas para diferentes questões e objetivos de pesquisa.

## Análise Univariada
A análise univariada envolve o estudo de uma única variável em um conjunto de 
dados. Ela se concentra em examinar as propriedades e características dessa 
variável isoladamente, sem considerar outras variáveis. A análise univariada
usa medidas estatísticas descritivas, como média, mediana, moda, desvio padrão e 
gráficos, como histogramas e gráficos de caixa (_box plot_), para descrever e 
compreender a distribuição e os padrões dessa variável, tendo como propósito
ser mais descritiva do que explicativa.

__Exemplo__: Ao analisar a altura de um grupo de pessoas, a análise univariada se 
concentraria apenas na altura, fornecendo estatísticas descritivas sobre a 
média, o desvio padrão e a faixa de alturas. 

Atualmente, o Lemonade suporta as seguintes análises univariadas:
- Sumário estatístico (média, mediana, quartis, desvio padrão, etc)
- Histograma
- Tabela de frequência
- Tabela de quantis
- Gráfico de caixa (_box plot_)
- Função de distribuição cumulativa (CDF - _Cummulative Distribution Function_)

::: info Nota
Algumas dessas análises não são suportadas para dados categóricos. O histograma
é suportado apenas para dados numéricos, ao passo que a tabela de frequência é 
suportado apenas para dados categóricos.
:::

## Análise Bivariada
A análise bivariada envolve o estudo da relação entre duas variáveis em um 
conjunto de dados. Ela busca examinar se há alguma associação, correlação ou 
diferença entre as duas variáveis. Essa análise utiliza técnicas estatísticas 
específicas, como testes de correlação, teste t de Student ou análise de 
variância (ANOVA), para avaliar a relação entre as variáveis.

__Exemplo__: Ao analisar a relação entre a altura e o peso de um grupo de pessoas, 
a análise bivariada investigaria se há uma correlação entre essas duas variáveis, 
usando um coeficiente de correlação ou um gráfico de dispersão. Análises suportadas:

- mosaic_plot
- Gráfico de dispersão (_scatter plot_)
- Histograma
- Tabela de frequência
- Gráfico de caixa (_box plot_)
- Sumário de testes

## Análise Multivariada
A análise multivariada envolve o estudo simultâneo de três ou mais variáveis em 
um conjunto de dados. Ela busca compreender as relações complexas entre várias 
variáveis e identificar padrões e tendências mais abrangentes. A análise 
multivariada utiliza técnicas estatísticas avançadas, como análise de componentes 
principais (PCA - _Principal Component Analysis_), análise de _cluster_, 
regressão multivariada e análise fatorial, para explorar as relações entre as 
variáveis e fazer previsões ou inferências mais sofisticadas.

__Exemplo__: Ao analisar dados socioeconômicos de um conjunto de países, a análise 
multivariada pode explorar as relações entre variáveis como PIB per capita, 
taxa de desemprego, índice de desenvolvimento humano e expectativa de vida, 
buscando identificar agrupamentos de países com características semelhantes ou 
fatores que influenciam o desenvolvimento econômico. Análises suportadas:

- Análise de componentes principais (PCA)
- Correlação


## Criando análises
As análises, no Lemoande, são associadas a uma Fonte de Dados. Para criar, editar 
ou visualizar análises, você precisa acessar a página de detalhes da Fonte de Dados.
Na barra de navegação, escolha a opção __`Fonte de Dados`__ e em seguida, localize
a Fonte de Dados que você deseja. Na página de detalhes, você tem a seção lateral
que exibe a opção `Análises`:

FIX: ADicionar figura

## Atualizando (reprocessando) as análises


