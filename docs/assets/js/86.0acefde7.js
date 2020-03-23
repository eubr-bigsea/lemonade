(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{392:function(a,e,o){"use strict";o.r(e);var s=o(28),t=Object(s.a)({},(function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[o("h1",{attrs:{id:"hash-sensivel-a-localidade-lsh"}},[a._v("Hash sensível à localidade (LSH)")]),a._v(" "),o("p",[a._v("A operação Hash sensível à localidade ("),o("em",[a._v("Locality-sensitive hashing")]),a._v(" ou LSH) aplica funções hash sobre um conjunto de atributos e produz um novo atributo, que é um vetor dos códigos hash da instância para cada uma das funções aplicadas. O objetivo ao aplicar essa operação é que instâncias muito similares terminem com alta probabilidade de ter o mesmo código hash, reduzindo-se assim a dimensionalidade da base de dados de entrada.")]),a._v(" "),o("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Entrada")]),a._v(" "),o("th",[a._v("Saída")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[a._v("Dados a serem tratados")]),a._v(" "),o("td",[a._v("Dados tratados")])])])]),a._v(" "),o("h3",{attrs:{id:"tarefa"}},[a._v("Tarefa")]),a._v(" "),o("p",[a._v("Nome da Tarefa")]),a._v(" "),o("h3",{attrs:{id:"aba-execucao"}},[a._v("Aba Execução")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Parâmetro")]),a._v(" "),o("th",[a._v("Detalhe")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[o("strong",[a._v("Número de tabelas hash")])]),a._v(" "),o("td",[a._v("Número de funções hash que serão aplicadas no(s) atributo(s)")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Atributo(s) previsor(es)")])]),a._v(" "),o("td",[a._v("Atributos da base de dados que sofrerão pré-processamento")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Atributo para saída")])]),a._v(" "),o("td",[a._v("Atributo que terá a saída da operação")])]),a._v(" "),o("tr",[o("td",[o("strong",[o("a",{attrs:{href:"#tipo-do-lsh"}},[a._v("Tipo do LSH")])])]),a._v(" "),o("td",[a._v("Tipo de LSH: “Min Hash LSH para distância de Jaccard” ("),o("em",[a._v("Min Hash LSH for Jaccard distance")]),a._v(") ou “Projeção aleatória em buckets para distância euclidiana” ("),o("em",[a._v("Bucketed Random Projection LSH")]),a._v(")")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Tamanho do bucket (apenas para "),o("em",[a._v("Bucketed Random Projection LSH")]),a._v(")")])]),a._v(" "),o("td",[a._v("Comprimento de cada bucket, onde as instâncias que caem no mesmo bucket recebem o mesmo código "),o("em",[a._v("hash")])])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Semente para números aleatórios")])]),a._v(" "),o("td",[a._v("Semente usada para gerar as funções hash de forma reprodutível")])])])]),a._v(" "),o("p",[o("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-aparencia.html"}},[a._v("Aba Aparência")])],1),a._v(" "),o("p",[o("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-resultados.html"}},[a._v("Aba Resultados")])],1),a._v(" "),o("h2",{attrs:{id:"definicoes"}},[a._v("Definições")]),a._v(" "),o("h3",{attrs:{id:"tipo-do-lsh"}},[a._v("Tipo do LSH")]),a._v(" "),o("p",[a._v("Existem os seguintes tipos do LSH")]),a._v(" "),o("p",[a._v("Min Hash LSH para distância de Jaccard:")]),a._v(" "),o("ol",[o("li",[o("p",[a._v("Sejam a e b duas instâncias quaisquer. A similaridade de Jaccard entre elas é dada por:"),o("br"),a._v("\ninterseção(a, b) / união(a, b)"),o("br"),a._v("\nonde a interseção e a união são obtidas comparando os elementos das instâncias na devida ordem. No hash mínimo para distância de Jaccard, para cada instância é produzido um código hash para cada elemento nela e é mantido o menor desses códigos. Assim, a probabilidade de que o hash de a e de b sejam iguais é igual à similaridade de Jaccard. A distância de Jaccard é dada apenas por 1 - similaridade de Jaccard.")])]),a._v(" "),o("li",[o("p",[a._v("Projeção aleatória em buckets para distância euclidiana: "),o("br"),a._v("\nNa projeção aleatória por buckets para distância Euclidiana, o código hash é obtido projetando-se o vetor de atributos em um vetor aleatório unitário, e dividindo-se esse resultado pelo comprimento do bucket. Assim, quanto menor o comprimento dos buckets, menor é a probabilidade de se obter instâncias não similares entre si mapeadas para o mesmo bucket, ou seja, com o mesmo código hash. No entanto, diminuindo-se demais esse comprimento, é possível que instâncias similares acabem em buckets diferentes.")])])]),a._v(" "),o("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),o("p",[o("strong",[a._v("Objetivo:")]),a._v(" Utilizar a operação "),o("strong",[a._v("Hashing sensível a contexto")]),a._v(" para reduzir a dimensionalidade da base de dados Diabetes. "),o("br"),a._v(" "),o("strong",[a._v("Base de Dados:")]),a._v(" "),o("RouterLink",{attrs:{to:"/pt-br/spark/base-de-dados/#pima-indians-diabetes"}},[a._v("Pima Indians Diabetes")])],1),a._v(" "),o("p",[o("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/reducao-de-dimensionalidade-hash-sensivel-a-localidade/image4.png",alt:"Fluxo de trabalho"}})]),a._v(" "),o("ol",[o("li",[o("p",[a._v("Leia abase de dados por meio da operação "),o("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")])],1)]),a._v(" "),o("li",[o("p",[a._v("Na operação "),o("strong",[a._v("Hashing sensível a contexto")]),a._v(", preencha "),o("em",[a._v("2")]),a._v(" no campo "),o("strong",[a._v("Número de tabelas hash")]),a._v(". Selecione "),o("em",[a._v("“Age”")]),a._v(", "),o("em",[a._v("“BMI”")]),a._v(", "),o("em",[a._v("“BloodPressure”")]),a._v(", "),o("em",[a._v("“DiabetesPedigreeFunction”")]),a._v(", "),o("em",[a._v("“Glucose”")]),a._v(", "),o("em",[a._v("“Insulin”")]),a._v(", "),o("em",[a._v("“Pregnancies”")]),a._v(" e "),o("em",[a._v("“SkinThickness”")]),a._v(" no campo "),o("strong",[a._v("Atributo(s) previsor(es)")]),a._v(". Preencha "),o("em",[a._v("“atributo_final”")]),a._v(" no campo "),o("strong",[a._v("Atributo para saída")]),a._v(". Selecione "),o("em",[a._v("“Projeção aleatória em buckets para distância euclidiana”")]),a._v(" no campo "),o("strong",[a._v("Tipo LSH")]),a._v(" e preencha "),o("em",[a._v("2")]),a._v(" no campo "),o("strong",[a._v("Tamanho do bucket")]),a._v(" e "),o("em",[a._v("1")]),a._v(" no campo "),o("strong",[a._v("Semente para números aleatórios")]),a._v("."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/reducao-de-dimensionalidade-hash-sensivel-a-localidade/image1.png",alt:"Formulário - Hashing sensível a contexto 1"}}),a._v(" "),o("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/reducao-de-dimensionalidade-hash-sensivel-a-localidade/image2.png",alt:"Formulário - Hashing sensível a contexto 2"}})])]),a._v(" "),o("li",[o("p",[a._v("Execute o fluxo e visualize uma amostra dos resultados do LSH. Abaixo é mostrada as 10 primeiras instâncias da base de dados com os atributos originais "),o("em",[a._v("“Age”")]),a._v(", "),o("em",[a._v("“BMI”")]),a._v(", "),o("em",[a._v("“BloodPressure”")]),a._v(", "),o("em",[a._v("“DiabetesPedigreeFunction”")]),a._v(", "),o("em",[a._v("“Glucose”")]),a._v(", "),o("em",[a._v("“Insulin”")]),a._v(", "),o("em",[a._v("“Pregnancies”")]),a._v(" e "),o("em",[a._v("“SkinThickness”")]),a._v(" e o atributo de saída do LSH, i.e., o "),o("em",[a._v("“atributo final”")]),a._v(". Observe que os 8 atributos originais da base de dados foram transformados em um atributo que é uma estrutura vetorial com 2 tabelas hash."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/reducao-de-dimensionalidade-hash-sensivel-a-localidade/image3.png",alt:"Resultado"}})])])]),a._v(" "),o("hr"),a._v(" "),o("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);e.default=t.exports}}]);