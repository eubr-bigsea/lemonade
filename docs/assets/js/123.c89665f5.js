(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{465:function(a,e,o){"use strict";o.r(e);var r=o(45),t=Object(r.a)({},(function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[o("h1",{attrs:{id:"random-forest-regressor"}},[a._v("Random Forest Regressor")]),a._v(" "),o("p",[a._v("Random Forest (floresta aleatória) é uma generalização da operação "),o("RouterLink",{attrs:{to:"/pt-br/spark/aprendizado-de-maquina/classificacao-arvore-de-decisao.html"}},[a._v("Árvore de Decisão")]),a._v(", em que se utiliza um conjunto de árvores de decisão (aleatórias) a fim de minimizar o sobreajuste ("),o("em",[a._v("overfitting")]),a._v(") de cada modelo individual de árvore gerado para os dados de entrada.")],1),a._v(" "),o("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Entrada")]),a._v(" "),o("th",[a._v("Saída")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[a._v("Dados utilizados para treinar o modelo")]),a._v(" "),o("td",[a._v("Dados de saída e modelo do algoritmo de regressão")])])])]),a._v(" "),o("h3",{attrs:{id:"tarefa"}},[a._v("Tarefa")]),a._v(" "),o("p",[a._v("Nome da Tarefa")]),a._v(" "),o("h3",{attrs:{id:"aba-execucao"}},[a._v("Aba Execução")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Parâmetro")]),a._v(" "),o("th",[a._v("Detalhe")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[o("strong",[a._v("Atributo(s) previsor(es)")])]),a._v(" "),o("td",[a._v("Atributo(s) que será(ão) usado(s) para treinamento")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Atributo com o rótulo")])]),a._v(" "),o("td",[a._v("Atributo a ser predito")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Atributos com a predição")])]),a._v(" "),o("td",[a._v("Atributo contendo a predição do modelo")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Profundidade máxima")])]),a._v(" "),o("td",[a._v("Profundidade máxima permitida nas árvores de decisão")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Número de árvores")])]),a._v(" "),o("td",[a._v("O número de árvores na floresta")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Máximo de bins")])]),a._v(" "),o("td",[a._v("Número de bins utilizados para discretizar uma variável contínua")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Estratégia para subconjunto de features")])]),a._v(" "),o("td",[a._v("Define o cálculo usado para definir a quantidade de atributos que será passado para cada árvore")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Ganho de informação (info gain) mínimo")])]),a._v(" "),o("td",[a._v("Define o mínimo de ganho de informação ("),o("em",[a._v("information gain")]),a._v(") para que haja a utilização de uma feature na divisão de um nó")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Iterações máximas")])]),a._v(" "),o("td",[a._v("Define o número máximos de iterações para a convergência do algoritmo. O seu valor padrão é 100")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Regularização")])]),a._v(" "),o("td",[a._v("Define o valor para regularizar o ajuste da função de perda do algoritmo. O seu o valor padrão é 0")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Mix. para ElasticNet (entre 0 e 1)")])]),a._v(" "),o("td",[a._v("Define o parâmetro de ajuste usado para a minimização da função objetivo usando uma combinação de L1 e L2. O seu valor por padrão é 0")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Métrica para validação cruzada")])]),a._v(" "),o("td",[a._v("Define a métrica utilizada dentro da validação cruzada (se aplicável) para avaliar o modelo de classificação dentro das k partições")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Atributo com o número da partição (fold)")])]),a._v(" "),o("td",[a._v("Define o atributo a ter o número da partição para realizar uma validação cruzada (se aplicável)")])])])]),a._v(" "),o("p",[o("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-aparencia.html"}},[a._v("Aba Aparência")])],1),a._v(" "),o("p",[o("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-resultados.html"}},[a._v("Aba Resultados")])],1),a._v(" "),o("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),o("p",[o("strong",[a._v("Objetivo:")]),a._v(" Utilizar o modelo do Random Forest para predizer a qualidade de um vinho. "),o("br"),a._v(" "),o("strong",[a._v("Base de Dados:")]),a._v(" "),o("RouterLink",{attrs:{to:"/pt-br/spark/base-de-dados/#msnbc-com"}},[a._v("Qualidade da Variante Vermelha do Vinho Verde Português")])],1),a._v(" "),o("p",[o("img",{attrs:{src:"/img/spark/aprendizado-de-maquina/regressao-random-forest/image3.png",alt:"Ler dados"}})]),a._v(" "),o("ol",[o("li",[o("p",[a._v("Leia a base de dados por meio da operação "),o("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Utilize a operação "),o("RouterLink",{attrs:{to:"/pt-br/spark/pre-processamento-de-dados/amostragem-divisao-percentual.html"}},[a._v("Divisão percentual")]),a._v(" para dividir a base de dados em treino e teste. No parâmetro "),o("strong",[a._v("Percentual")]),a._v(", calibre-o utilizando 50% dos dados para treinar (1.ª parte) e 50% para testar (2.ª parte).")],1)]),a._v(" "),o("li",[o("p",[a._v("Na operação "),o("strong",[a._v("Random Forest Regressor")]),a._v(", selecione "),o("em",[a._v("“alcohol”")]),a._v(", "),o("em",[a._v("“chlorides”")]),a._v(", "),o("em",[a._v("“citric_acid”")]),a._v(", "),o("em",[a._v("“density”")]),a._v(", "),o("em",[a._v("“fixed_acidity”")]),a._v(", "),o("em",[a._v("“free_sulfur_dioxide”")]),a._v(", "),o("em",[a._v("“pH”")]),a._v(", "),o("em",[a._v("“residual_sugar”")]),a._v(", "),o("em",[a._v("“sulphates”")]),a._v(", "),o("em",[a._v("“total_sulfur_dioxide”")]),a._v(" e "),o("em",[a._v("“volatile_acidity”")]),a._v(" no campo "),o("strong",[a._v("Atributo(s) previsor(es)")]),a._v(". Selecione “quality” no campo Atributo com o rótulo e preencha “resultado” no campo "),o("strong",[a._v("Atributo com a predição (novo)")]),a._v(". Preencha 100 no campo "),o("strong",[a._v("Iterações máximas,")]),a._v(" 10 no campo "),o("strong",[a._v("Profundidade máxima")]),a._v(", 50 no campo "),o("strong",[a._v("Número de árvores")]),a._v(", e 0.1 no "),o("strong",[a._v("Ganho de informação")]),a._v(". Deixe os demais parâmetros inalterados."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/aprendizado-de-maquina/regressao-random-forest/image4.png",alt:"Random Forest Regressor - parte 1"}}),a._v(" "),o("img",{attrs:{src:"/img/spark/aprendizado-de-maquina/regressao-random-forest/image2.png",alt:"Random Forest Regressor - parte 2"}})])]),a._v(" "),o("li",[o("p",[a._v("Na operação "),o("RouterLink",{attrs:{to:"/pt-br/spark/modelo-e-avaliacao/aplicar-modelo.html"}},[a._v("Aplicar Modelo")]),a._v(", selecione "),o("em",[a._v("“alcohol”")]),a._v(", "),o("em",[a._v("“chlorides”")]),a._v(", "),o("em",[a._v("“citric_acid”")]),a._v(", "),o("em",[a._v("“density”")]),a._v(", "),o("em",[a._v("“fixed_acidity”")]),a._v(", "),o("em",[a._v("“free_sulfur_dioxide”")]),a._v(", "),o("em",[a._v("“pH”")]),a._v(", "),o("em",[a._v("“residual_sugar”")]),a._v(", "),o("em",[a._v("“sulphates”")]),a._v(", "),o("em",[a._v("“total_sulfur_dioxide”")]),a._v(" e "),o("em",[a._v("“volatile_acidity”")]),a._v(" no campo "),o("strong",[a._v("Atributo(s) previsor(es)")]),a._v(" e preencha "),o("em",[a._v("“resultado”")]),a._v(" no campo "),o("strong",[a._v("Nome do novo atributo (herdado do modelo)")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Na operação "),o("RouterLink",{attrs:{to:"/pt-br/spark/modelo-e-avaliacao/avaliar-modelo.html"}},[a._v("Avaliar Modelo")]),a._v(", selecione "),o("em",[a._v("“resultado”")]),a._v(" no campo "),o("strong",[a._v("Atributo usado para predição")]),a._v(". Selecione "),o("em",[a._v("“quality”")]),a._v(" no campo "),o("strong",[a._v("Atributo usado como label")]),a._v(" e a métrica "),o("em",[a._v("“Raiz do erro quadrático médio”")]),a._v(" como "),o("strong",[a._v("Métrica para avaliação")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Execute o fluxo e visualize o resultado, que neste caso está de acordo com a raiz do erro quadrático médio ("),o("strong",[a._v("Root Mean Square Error")]),a._v(" ou "),o("strong",[a._v("RMSE")]),a._v("):"),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/aprendizado-de-maquina/regressao-random-forest/image1.png",alt:"Resultado"}})])])]),a._v(" "),o("hr"),a._v(" "),o("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);e.default=t.exports}}]);