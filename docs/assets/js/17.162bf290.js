(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{235:function(e,a,r){"use strict";r.r(a);var o=r(0),t=Object(o.a)({},function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"gradient-boosted-tree-regressor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gradient-boosted-tree-regressor","aria-hidden":"true"}},[e._v("#")]),e._v(" Gradient Boosted Tree Regressor")]),e._v(" "),r("p",[e._v("A operação Gradient-Boosted Trees (GBT) para regressão possui como objetivo criar um modelo baseado em ensembles de "),r("a",{attrs:{href:"/pt-br"}},[e._v("Árvores de decisão")]),e._v(". Para isso, GBT iterativamente treina (a partir de uma base de dados de entrada) um conjunto de árvores de decisão minimizando uma dada função de perda. A ideia do GBT é criar vários modelos (de árvore de decisão) considerados mais simples (ou fracos) a fim de criar um modelo mais poderoso e robusto, por combinar resultados desses vários modelos fracos.")]),e._v(" "),r("h3",{attrs:{id:"conectores"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#conectores","aria-hidden":"true"}},[e._v("#")]),e._v(" Conectores")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Entrada")]),e._v(" "),r("th",[e._v("Saída")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Dados utilizados para treinar o modelo")]),e._v(" "),r("td",[e._v("Dados de saída e modelo do algoritmo de regressão")])])])]),e._v(" "),r("h3",{attrs:{id:"tarefa"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tarefa","aria-hidden":"true"}},[e._v("#")]),e._v(" Tarefa")]),e._v(" "),r("p",[e._v("Nome da Tarefa")]),e._v(" "),r("h3",{attrs:{id:"aba-execucao"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#aba-execucao","aria-hidden":"true"}},[e._v("#")]),e._v(" Aba Execução")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Parâmetro")]),e._v(" "),r("th",[e._v("Detalhe")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("strong",[e._v("Atributo(s) previsor(es)")])]),e._v(" "),r("td",[e._v("Atributo que será usado para treinamento")])]),e._v(" "),r("tr",[r("td",[r("strong",[e._v("Atributo com o rótulo")])]),e._v(" "),r("td",[e._v("Atributo a ser predito")])]),e._v(" "),r("tr",[r("td",[r("strong",[e._v("Atributos com a predição")])]),e._v(" "),r("td",[e._v("Atributo contendo a predição do modelo")])]),e._v(" "),r("tr",[r("td",[r("strong",[e._v("Iterações máximas")])]),e._v(" "),r("td",[e._v("O número máximo de iterações do algoritmo boosting. O seu valor padrão é 100")])]),e._v(" "),r("tr",[r("td",[r("strong",[e._v("Regularização")])]),e._v(" "),r("td",[e._v("Valor para regularizar o ajuste da função de perda do algoritmo. O seu valor padrão é 0.0")])]),e._v(" "),r("tr",[r("td",[r("strong",[e._v("Mix. para ElasticNet (entre 0 e 1)")])]),e._v(" "),r("td",[e._v("Parâmetro de ajuste usado para a minimização da função objetivo usando uma combinação de L1 e L2. O seu valor por padrão é 0")])]),e._v(" "),r("tr",[r("td",[r("strong",[e._v("Profundidade máxima")])]),e._v(" "),r("td",[e._v("Profundidade máxima permitida nas árvores de decisão")])]),e._v(" "),r("tr",[r("td",[r("strong",[e._v("Instâncias mínimas")])]),e._v(" "),r("td",[e._v("O número mínimo de instâncias (exemplos) que precisam estar em um nó folha de cada árvore")])]),e._v(" "),r("tr",[r("td",[r("strong",[e._v("Ganho de informação mínimo")])]),e._v(" "),r("td",[e._v("Mínimo de ganho de informação (information gain) para que haja a utilização de uma feature na divisão de um nó")])]),e._v(" "),r("tr",[r("td",[r("strong",[e._v("Semente (seed)")])]),e._v(" "),r("td",[e._v("Semente pseudo-aleatória para iniciar o modelo do GBT.")])]),e._v(" "),r("tr",[r("td",[r("strong",[e._v("Métrica para validação cruzada")])]),e._v(" "),r("td",[e._v("Define a métrica utilizada dentro da validação cruzada (se aplicável) para avaliar o modelo de classificação dentro das k partições")])]),e._v(" "),r("tr",[r("td",[r("strong",[e._v("Atributo com o número da partição (fold)")])]),e._v(" "),r("td",[e._v("Define o atributo a ter o número da partição para realizar uma validação cruzada (se aplicável)")])])])]),e._v(" "),r("p",[r("a",{attrs:{href:"/pt-br"}},[e._v("Aba Aparência")])]),e._v(" "),r("p",[r("a",{attrs:{href:"/pt-br"}},[e._v("Aba Resultados")])]),e._v(" "),r("h2",{attrs:{id:"exemplo-de-utilizacao"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#exemplo-de-utilizacao","aria-hidden":"true"}},[e._v("#")]),e._v(" Exemplo de Utilização")]),e._v(" "),r("p",[r("strong",[e._v("Objetivo:")]),e._v(" Utilizar o modelo do "),r("em",[e._v("Gradient Boosted Tree Regressor")]),e._v(" para predizer a qualidade de um vinho."),r("br"),e._v(" "),r("strong",[e._v("Base de Dados:")]),e._v(" "),r("a",{attrs:{href:"/pt-br"}},[e._v("Qualidade da Variante Vermelha do Vinho Verde Português")])]),e._v(" "),r("p",[r("img",{attrs:{src:"/vuepress/img/spark/aprendizado_de_maquina/regressao_gradient_boosted_tree/image2.png",alt:"Ler dados"}})]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Leia a base de dados por meio da operação "),r("a",{attrs:{href:"/pt-br"}},[e._v("Ler dados")]),e._v(".")])]),e._v(" "),r("li",[r("p",[e._v("Utilize a operação "),r("a",{attrs:{href:"/pt-br"}},[e._v("Divisão percentual")]),e._v(" para dividir a base de dados em treino e teste. No parâmetro "),r("strong",[e._v("Percentual")]),e._v(", calibre-o utilizando 50% dos dados para treinar (1.ª parte) e 50% para testar (2.ª parte).")])]),e._v(" "),r("li",[r("p",[e._v("Na Operação "),r("strong",[e._v("Gradient Boosted Tree Regressor")]),e._v(", selecione “alcohol”, “chlorides”, “citric_acid”, “density”, “fixed_acidity”, “free_sulfur_dioxide”, “pH”, “residual_sugar”, “sulphates”, “total_sulfur_dioxide” e “volatile_acidity” no campo "),r("strong",[e._v("Atributo(s) previsor(es)")]),e._v(". Selecione "),r("em",[e._v("“quality”")]),e._v(" no campo "),r("strong",[e._v("Atributo com o rótulo")]),e._v(" e preencha “resultado” no campo "),r("strong",[e._v("Atributo com a predição (novo)")]),e._v(". Preencha 100 no campo "),r("strong",[e._v("Iterações máximas")]),e._v(", 10 no campo "),r("strong",[e._v("Profundidade máxima")]),e._v(", 20 no campo "),r("strong",[e._v("Número de instâncias")]),e._v(" e 0.1 no "),r("strong",[e._v("Ganho de informação")]),e._v(". Deixe os demais parâmetros inalterados."),r("br"),e._v(" "),r("img",{attrs:{src:"/vuepress/img/spark/aprendizado_de_maquina/regressao_gradient_boosted_tree/image3.png",alt:"Formulário Gradient Boosted Tree Regressor - parte 1"}}),e._v(" "),r("img",{attrs:{src:"/vuepress/img/spark/aprendizado_de_maquina/regressao_gradient_boosted_tree/image1.png",alt:"Formulário Gradient Boosted Tree Regressor - parte 1"}})])]),e._v(" "),r("li",[r("p",[e._v("Na operação "),r("a",{attrs:{href:"/pt-br"}},[e._v("Aplicar Modelo")]),e._v(", selecione  “alcohol”, “chlorides”,  “citric_acid”, “density”, “fixed_acidity”, “free_sulfur_dioxide”, “pH”, “residual_sugar”, “sulphates”, “total_sulfur_dioxide” e “volatile_acidity” no campo "),r("strong",[e._v("Atributo(s) previsor(es)")]),e._v(" e preencha “resultado” no campo "),r("strong",[e._v("Nome do novo atributo (herdado do modelo)")]),e._v(".")])]),e._v(" "),r("li",[r("p",[e._v("Na operação "),r("a",{attrs:{href:"/pt-br"}},[e._v("Avaliar Modelo")]),e._v(", selecione "),r("em",[e._v("“resultado”")]),e._v(" no campo "),r("strong",[e._v("Atributo usado para predição")]),e._v(". Selecione “quality” no campo "),r("strong",[e._v("Atributo usado como label")]),e._v(" e a métrica "),r("em",[e._v("“Raiz do erro quadrático médio”")]),e._v(" como "),r("strong",[e._v("Métrica para avaliação")]),e._v(".")])]),e._v(" "),r("li",[r("p",[e._v("Execute o fluxo e visualize o resultado, que neste caso está de acordo com a raiz do erro quadrático médio ("),r("strong",[e._v("Root Mean Square Error")]),e._v(" ou "),r("strong",[e._v("RMSE")]),e._v("):"),r("br"),e._v(" "),r("img",{attrs:{src:"/vuepress/img/spark/aprendizado_de_maquina/regressao_gradient_boosted_tree/image4.png",alt:"Formulário Gradient Boosted Tree Regressor - parte 1"}})])])]),e._v(" "),r("hr"),e._v(" "),r("p",[e._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])},[],!1,null,null,null);a.default=t.exports}}]);