(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{211:function(o,e,a){"use strict";a.r(e);var t=a(0),r=Object(t.a)({},function(){var o=this,e=o.$createElement,a=o._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[a("h1",{attrs:{id:"maximo-absoluto"}},[o._v("Máximo Absoluto")]),o._v(" "),a("p",[o._v("Transforma um atributo do conjunto de dados, escalando esse atributo pelo valor máximo absoluto encontrado. Assim, os valores resultantes ficam contidos no intervalo [-1, 1].")]),o._v(" "),a("h3",{attrs:{id:"conectores"}},[o._v("Conectores")]),o._v(" "),a("table",[a("thead",[a("tr",[a("th",[o._v("Entrada")]),o._v(" "),a("th",[o._v("Saída")])])]),o._v(" "),a("tbody",[a("tr",[a("td",[o._v("Dados a serem tratados")]),o._v(" "),a("td",[o._v("Dados tratados e modelo de transformação")])])])]),o._v(" "),a("h3",{attrs:{id:"tarefa"}},[o._v("Tarefa")]),o._v(" "),a("p",[o._v("Nome da Tarefa")]),o._v(" "),a("h3",{attrs:{id:"aba-execucao"}},[o._v("Aba Execução")]),o._v(" "),a("table",[a("thead",[a("tr",[a("th",[o._v("Parâmetro")]),o._v(" "),a("th",[o._v("Detalhe")])])]),o._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[o._v("Atributo com as características (features)")])]),o._v(" "),a("td",[o._v("Atributo que será transformado pelo escalador")])]),o._v(" "),a("tr",[a("td",[a("strong",[o._v("Nome do novo atributo")])]),o._v(" "),a("td",[o._v("Nome que o atributo escalado receberá")])])])]),o._v(" "),a("p",[a("router-link",{attrs:{to:"/spark/"}},[o._v("Aba Aparência")])],1),o._v(" "),a("p",[a("router-link",{attrs:{to:"/spark/"}},[o._v("Aba Resultados")])],1),o._v(" "),a("h2",{attrs:{id:"exemplos-de-utilizacao"}},[o._v("Exemplos de Utilização")]),o._v(" "),a("h3",{attrs:{id:"exemplo-1"}},[o._v("Exemplo 1")]),o._v(" "),a("p",[a("strong",[o._v("Objetivo:")]),o._v(" Utilizar o máximo-absoluto para escalonar um atributo."),a("br"),o._v(" "),a("strong",[o._v("Base de Dados:")]),o._v(" "),a("router-link",{attrs:{to:"/spark/"}},[o._v("Íris")])],1),o._v(" "),a("p",[a("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/redefinir-escala-maximo-absoluto/image5.png",alt:"Fluxo de trabalho"}})]),o._v(" "),a("ol",[a("li",[a("p",[o._v("Adicione uma base de dados por meio da operação "),a("router-link",{attrs:{to:"/spark/"}},[o._v("Ler dados")]),o._v("."),a("br"),o._v(" "),a("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/redefinir-escala-maximo-absoluto/image1.png",alt:"Operação Ler Dados"}})],1)]),o._v(" "),a("li",[a("p",[o._v("Utilize a operação "),a("strong",[o._v("Máximo Absoluto")]),o._v(" para escalar os atributos. Selecione "),a("em",[o._v("“sepallength”")]),o._v(", "),a("em",[o._v("“sepalwidth”")]),o._v(", "),a("em",[o._v("“petallength”")]),o._v(" e "),a("em",[o._v("“petalwidth”")]),o._v(" no campo "),a("strong",[o._v("Atributo(s) previsor(es)")]),o._v(". Preencha "),a("em",[o._v("“scaled_measures”")]),o._v(" no campo "),a("strong",[o._v("Nome do novo atributo")]),o._v("."),a("br"),o._v(" "),a("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/redefinir-escala-maximo-absoluto/image7.png",alt:"Operação Máximo Absoluto"}})])]),o._v(" "),a("li",[a("p",[o._v("Execute o fluxo e visualize o resultado. O resultado possui o atributo "),a("em",[o._v("“scaled_measures”")]),o._v(", que é um vetor de quatro elementos, correspondente aos atributos numéricos da base já escalados."),a("br"),o._v(" "),a("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/redefinir-escala-maximo-absoluto/image4.png",alt:"Operação Máximo Absoluto"}})])])]),o._v(" "),a("h3",{attrs:{id:"exemplo-2-reutilizacao-do-modelo"}},[o._v("Exemplo 2 - Reutilização do Modelo")]),o._v(" "),a("p",[a("strong",[o._v("Objetivo:")]),o._v(" A reutilização do modelo aprendido pelo escalador pode ser útil, por exemplo, ao processar o dado em batches. O segundo batch pode ser escalado de acordo com o primeiro, o que pode acontecer com a divisão de dados entre treino e teste numa tarefa de aprendizado supervisionado. Abaixo, é apresentado um exemplo do uso do Máximo-absoluto com a reutilização do modelo."),a("br"),o._v(" "),a("strong",[o._v("Base de Dados:")]),o._v(" "),a("router-link",{attrs:{to:"/spark/"}},[o._v("Íris")])],1),o._v(" "),a("p",[a("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/redefinir-escala-maximo-absoluto/image8.png",alt:"Fluxo de Trabalho"}})]),o._v(" "),a("ol",[a("li",[a("p",[o._v("Adicione uma base de dados por meio da operação "),a("router-link",{attrs:{to:"/spark/"}},[o._v("Ler dados")]),o._v(", assim como o "),a("strong",[o._v("Exemplo 1")]),o._v(".")],1)]),o._v(" "),a("li",[a("p",[o._v("Adicione e utilize a operação "),a("strong",[o._v("Máximo Absoluto")]),o._v(" para escalar os atributos. Selecione "),a("em",[o._v("“petallength”")]),o._v(" e "),a("em",[o._v("“petalwidth”")]),o._v(" no campo "),a("strong",[o._v("Atributo(s) previsor(es)")]),o._v(". Preencha "),a("em",[o._v("“scaled_measures”")]),o._v(" no campo "),a("strong",[o._v("Nome do novo atributo")]),o._v("."),a("br"),o._v(" "),a("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/redefinir-escala-maximo-absoluto/image6.png",alt:"Operação Máximo Absoluto"}})])]),o._v(" "),a("li",[a("p",[o._v("Utilize a operação "),a("router-link",{attrs:{to:"/spark/"}},[o._v("Aplicar modelo")]),o._v(". Selecione "),a("em",[o._v("“sepallength”")]),o._v(" e "),a("em",[o._v("“sepalwidth”")]),o._v(" no campo "),a("strong",[o._v("Atributos com as features")]),o._v(". Preencha "),a("em",[o._v("“scaled_length_with”")]),o._v(" no campo "),a("strong",[o._v("Nome do novo atributo")]),o._v("."),a("br"),o._v(" "),a("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/redefinir-escala-maximo-absoluto/image3.png",alt:"Operação Aplicar Modelo"}})],1)]),o._v(" "),a("li",[a("p",[o._v("Execute o fluxo e observe o resultado. O resultado possui o atributo "),a("em",[o._v("“scaled_length_width”")]),o._v(", que é um vetor de dois elementos, correspondente aos atributos "),a("em",[o._v("“sepal length”")]),o._v(" e "),a("em",[o._v("“sepal width”")]),o._v(" escalados de acordo com o modelo aprendido com os atributos "),a("em",[o._v("“petal length”")]),o._v(" e "),a("em",[o._v("“petal width”")]),o._v(". É possível notar que na amostra de dados, o valor do segundo elemento do vetor "),a("em",[o._v("“scaled_length_width”")]),o._v(" é maior que 1 para as instâncias visíveis. Isso se ocorre porque os valores correspondentes de "),a("em",[o._v("“sepal width”")]),o._v(" são maiores que o valor máximo absoluto encontrado para "),a("em",[o._v("“petal width”")]),o._v(", com o qual o modelo foi obtido.\n"),a("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/redefinir-escala-maximo-absoluto/image2.png",alt:"Resultado"}})])])]),o._v(" "),a("hr"),o._v(" "),a("p",[o._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])},[],!1,null,null,null);e.default=r.exports}}]);