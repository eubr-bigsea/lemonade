(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{293:function(e,a,o){"use strict";o.r(a);var r=o(0),t=Object(r.a)({},(function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"regressor-perceptron-multicamadas"}},[e._v("Regressor Perceptron Multicamadas")]),e._v(" "),o("h3",{attrs:{id:"conectores"}},[e._v("Conectores")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Entrada")]),e._v(" "),o("th",[e._v("Saída")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("Dados utilizados para treinar o modelo")]),e._v(" "),o("td",[e._v("Dados de saída e modelo do algoritmo de regressão")])])])]),e._v(" "),o("h3",{attrs:{id:"tarefa"}},[e._v("Tarefa")]),e._v(" "),o("p",[e._v("Nome da Tarefa")]),e._v(" "),o("h3",{attrs:{id:"aba-execucao"}},[e._v("Aba Execução")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Parâmetro")]),e._v(" "),o("th",[e._v("Detalhe")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[o("strong",[e._v("Atributo(s) previsor(es)")])]),e._v(" "),o("td",[e._v("Atributo que será usado para treinamento")])]),e._v(" "),o("tr",[o("td",[o("strong",[e._v("Atributo com o rótulo")])]),e._v(" "),o("td",[e._v("Atributo a ser predito")])]),e._v(" "),o("tr",[o("td",[o("strong",[e._v("Atributos com a predição")])]),e._v(" "),o("td",[e._v("Atributo contendo a predição do modelo")])])])]),e._v(" "),o("p",[o("RouterLink",{attrs:{to:"/pt-br/sklearn/documentacao-geral/aba-aparencia.html"}},[e._v("Aba Aparência")])],1),e._v(" "),o("p",[o("RouterLink",{attrs:{to:"/pt-br/sklearn/documentacao-geral/aba-resultados.html"}},[e._v("Aba Resultados")])],1),e._v(" "),o("h2",{attrs:{id:"definicoes"}},[e._v("Definições")]),e._v(" "),o("h2",{attrs:{id:"exemplo-de-utilizacao"}},[e._v("Exemplo de Utilização")]),e._v(" "),o("p",[o("strong",[e._v("Objetivo:")]),e._v(" Utilizar o modelo construído pela operação Regressão Linear para predizer a qualidade de um vinho."),o("br"),e._v(" "),o("strong",[e._v("Base de Dados:")]),e._v(" Qualidade da Variante Vermelha do Vinho Verde Português - "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/base-de-dados/#wine"}},[e._v("Wine Red Quality")])],1),e._v(" "),o("p",[o("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/regressor_linear/image3.png",alt:"Fluxo - Ler dados"}})]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Leia a base de dados por meio da operação "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/entrada-e-saida/ler-dados.html"}},[e._v("Ler dados")]),e._v(".")],1)]),e._v(" "),o("li",[o("p",[e._v("Utilize a operação "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/pre-processamento-de-dados/amostragem-divisao-percentual.html"}},[e._v("Divisão percentual")]),e._v(" para dividir a base de dados em treino e teste. No parâmetro "),o("strong",[e._v("Percentual")]),e._v(", calibre-o utilizando 50% dos dados para treinar (1.ª parte) e 50% para testar (2.ª parte).")],1)]),e._v(" "),o("li",[o("p",[e._v("Na Operação "),o("strong",[e._v("Regressão Linear")]),e._v(", selecione "),o("em",[e._v("“alcohol”")]),e._v(", "),o("em",[e._v("“chlorides”")]),e._v(", "),o("em",[e._v("“citric_acid”")]),e._v(", "),o("em",[e._v("“density”")]),e._v(", "),o("em",[e._v("“fixed_acidity”")]),e._v(", "),o("em",[e._v("“free_sulfur_dioxide”")]),e._v(", "),o("em",[e._v("“pH”")]),e._v(", "),o("em",[e._v("“residual_sugar”")]),e._v(", "),o("em",[e._v("“sulphates”")]),e._v(", "),o("em",[e._v("“total_sulfur_dioxide”")]),e._v(" e "),o("em",[e._v("“volatile_acidity”")]),e._v(" no campo "),o("strong",[e._v("Atributo(s) previsor(es)")]),e._v(". Selecione "),o("em",[e._v("“quality”")]),e._v(" no campo  "),o("strong",[e._v("Atributo com o rótulo")]),e._v(" e preencha "),o("em",[e._v("“resultado”")]),e._v(" no campo "),o("strong",[e._v("Atributo com a predição (novo)")]),e._v(". Preencha 100 no campo "),o("strong",[e._v("Iterações máximas")]),e._v(", 0.35 no campo "),o("strong",[e._v("Regularização")]),e._v(" e 0.8 no campo "),o("strong",[e._v("Mix. para ElasticNet")]),e._v(". Deixe os demais parâmetros inalterados."),o("br"),e._v(" "),o("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/regressor_linear/image4.png",alt:"Tabela - Regressão linear 1"}}),e._v(" "),o("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/regressor_linear/image2.png",alt:"Tabela - Regressão linear 2"}})])]),e._v(" "),o("li",[o("p",[e._v("Na operação "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/modelo-e-avaliacao/aplicar-modelo.html"}},[e._v("Aplicar Modelo")]),e._v(", selecione "),o("em",[e._v("“alcohol”")]),e._v(", "),o("em",[e._v("“chlorides”")]),e._v(", "),o("em",[e._v("“citric_acid”")]),e._v(", "),o("em",[e._v("“density”")]),e._v(", "),o("em",[e._v("“fixed_acidity”")]),e._v(", "),o("em",[e._v("“free_sulfur_dioxide”")]),e._v(", "),o("em",[e._v("“pH”")]),e._v(", "),o("em",[e._v("“residual_sugar”")]),e._v(", "),o("em",[e._v("“sulphates”")]),e._v(", "),o("em",[e._v("“total_sulfur_dioxide”")]),e._v(" e "),o("em",[e._v("“volatile_acidity”")]),e._v(" no campo "),o("strong",[e._v("Atributo(s) previsor(es)")]),e._v(" e preencha "),o("em",[e._v("“resultado”")]),e._v(" no campo "),o("strong",[e._v("Nome do novo atributo (herdado do modelo)")]),e._v(".")],1)]),e._v(" "),o("li",[o("p",[e._v("Na operação "),o("RouterLink",{attrs:{to:"/pt-br/sklearn/modelo-e-avaliacao/avaliar-modelo.html"}},[e._v("Avaliar Modelo")]),e._v(", selecione "),o("em",[e._v("“resultado”")]),e._v(" no campo "),o("strong",[e._v("Atributo usado para predição")]),e._v(". Selecione "),o("em",[e._v("“quality”")]),e._v(" no campo "),o("strong",[e._v("Atributo usado como label")]),e._v(" e a métrica "),o("em",[e._v("“Raiz do erro quadrático médio”")]),e._v(" como "),o("strong",[e._v("Métrica para avaliação")]),e._v(".")],1)]),e._v(" "),o("li",[o("p",[e._v("Execute o fluxo e visualize o resultado, que neste caso está de acordo com a raiz do erro quadrático médio "),o("strong",[e._v("(Root Mean Square Error ou RMSE)")]),e._v(":\n"),o("img",{attrs:{src:"/img/sklearn/aprendizado_de_maquina/regressor_linear/image1.png",alt:"Resultado"}})])])]),e._v(" "),o("hr"),e._v(" "),o("p",[e._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);a.default=t.exports}}]);