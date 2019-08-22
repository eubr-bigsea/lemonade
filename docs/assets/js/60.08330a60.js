(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{212:function(o,a,e){"use strict";e.r(a);var r=e(0),t=Object(r.a)({},function(){var o=this,a=o.$createElement,e=o._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[e("h1",{attrs:{id:"por-quantis"}},[o._v("Por Quantis")]),o._v(" "),e("p",[o._v("Operação que mapeia uma coluna de valores ("),e("em",[o._v("features")]),o._v(") contínuos em uma coluna de recursos (features) categóricos.")]),o._v(" "),e("h3",{attrs:{id:"conectores"}},[o._v("Conectores")]),o._v(" "),e("table",[e("thead",[e("tr",[e("th",[o._v("Entrada")]),o._v(" "),e("th",[o._v("Saída")])])]),o._v(" "),e("tbody",[e("tr",[e("td",[o._v("Dados a serem tratados")]),o._v(" "),e("td",[o._v("Dados tratados e modelo")])])])]),o._v(" "),e("h3",{attrs:{id:"tarefa"}},[o._v("Tarefa")]),o._v(" "),e("p",[o._v("Nome da Tarefa")]),o._v(" "),e("h3",{attrs:{id:"aba-execucao"}},[o._v("Aba Execução")]),o._v(" "),e("table",[e("thead",[e("tr",[e("th",[o._v("Parâmetro")]),o._v(" "),e("th",[o._v("Detalhe")])])]),o._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[o._v("Atributos")])]),o._v(" "),e("td",[o._v("Uma ou mais colunas que contenham os valores a serem limpos, ou substituídos")])]),o._v(" "),e("tr",[e("td",[e("strong",[o._v("Nome do(s) novo(s) atributo(s)")])]),o._v(" "),e("td",[o._v("Nome dos novos atributos criados na operação*")])]),o._v(" "),e("tr",[e("td",[e("strong",[o._v("Número de categorias (buckets)")])]),o._v(" "),e("td",[o._v("Número de categorias a serem criadas")])]),o._v(" "),e("tr",[e("td",[e("strong",[o._v("Erro relativo (entre [0.0 1.0])")])]),o._v(" "),e("td",[o._v("Precisão do alvo relativo para o algoritmo quantil utilizado para gerar as categorias")])])])]),o._v(" "),e("p",[e("strong",[o._v("OBS:")]),o._v(": *Se o nome dos novos atributos forem omitidos, o nome resultante terá um sufixo seguido pelo nome original.")]),o._v(" "),e("p",[e("router-link",{attrs:{to:"/spark/"}},[o._v("Aba Aparência")])],1),o._v(" "),e("p",[e("router-link",{attrs:{to:"/spark/"}},[o._v("Aba Resultados")])],1),o._v(" "),e("h2",{attrs:{id:"exemplo-de-utilizacao"}},[o._v("Exemplo de Utilização")]),o._v(" "),e("p",[e("strong",[o._v("Objetivo:")]),o._v(" determinar a quantidade de tripulantes sobreviventes do desastre do titanic por faixa etária, com o intervalo de 10 anos entre elas."),e("br"),o._v(" "),e("strong",[o._v("Base de Dados:")]),o._v(" "),e("router-link",{attrs:{to:"/spark/"}},[o._v("Titanic")])],1),o._v(" "),e("p",[e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/discretizacao-por-quantis/image3.png",alt:"Fluxo de trabalho"}})]),o._v(" "),e("ol",[e("li",[e("p",[o._v("Adicione uma base de dados por meio da operação "),e("router-link",{attrs:{to:"/spark/"}},[o._v("Ler dados")]),o._v(" e selecione "),e("em",[o._v("“Converter dados inválidos para NULO”")]),o._v(" na opção "),e("strong",[o._v("O que fazer em caso de dados inválidos")]),o._v("."),e("br"),o._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/discretizacao-por-quantis/image6.png",alt:"Operação Ler dados"}})],1)]),o._v(" "),e("li",[e("p",[o._v("Adicione a operação "),e("router-link",{attrs:{to:"/spark/"}},[o._v("Tratar dados ausentes")]),o._v(", selecione "),e("em",[o._v("“age”")]),o._v(" como "),e("strong",[o._v("Atributo(s)")]),o._v(" e "),e("em",[o._v("“Substituir com a média”")]),o._v(" como "),e("strong",[o._v("Tipo de limpeza")]),o._v("."),e("br"),o._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/discretizacao-por-quantis/image2.png",alt:"Operação Tratar dados ausentes"}})],1)]),o._v(" "),e("li",[e("p",[o._v("Para tratar apenas dos sobreviventes do desastre, adicione a operação "),e("router-link",{attrs:{to:"/spark/"}},[o._v("Filtrar por função")]),o._v(". Utilizando o campo "),e("strong",[o._v("Filtro")]),o._v(", selecione "),e("em",[o._v("“Survived == 1”")]),o._v(" como "),e("strong",[o._v("Expressão")]),o._v(", na opção "),e("strong",[o._v("Editar valor")]),o._v("."),e("br"),o._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/discretizacao-por-quantis/image11.png",alt:"Operação Filtrar por função"}})],1)]),o._v(" "),e("li",[e("p",[o._v("Adicione a operação Por quantis e selecione "),e("em",[o._v("“age”")]),o._v(" como "),e("strong",[o._v("Atributos")]),o._v(". Preencha "),e("em",[o._v("“age_quantis”")]),o._v(" no campo "),e("strong",[o._v("Nome(s) do(s) novo(s) atributo(s)")]),o._v(", "),e("em",[o._v("8")]),o._v(" em "),e("strong",[o._v("Número de categorias (buckets)")]),o._v(" e "),e("em",[o._v("0,02")]),o._v(" em "),e("strong",[o._v("Erro relativo")]),o._v("."),e("br"),o._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/discretizacao-por-quantis/image10.png",alt:"Operação Por quantis"}})])]),o._v(" "),e("li",[e("p",[o._v("Adicione a operação "),e("router-link",{attrs:{to:"/spark/"}},[o._v("Agrupar linhas por função")]),o._v(" para visualizar os buckets gerados. Escolha "),e("em",[o._v("“Age_buckets”")]),o._v(" no campo "),e("strong",[o._v("Selecione o(s) atributos para agregação")]),o._v(". Utilizando o campo "),e("strong",[o._v("Função de agregação")]),o._v(", selecione "),e("em",[o._v("“age_quantis”")]),o._v(" como "),e("strong",[o._v("Atributo")]),o._v(", "),e("em",[o._v("“Count”")]),o._v(" como "),e("strong",[o._v("Função")]),o._v(" e "),e("em",[o._v("“mapped_age_quantis”")]),o._v(" como "),e("strong",[o._v("Nome novo")]),o._v("."),e("br"),o._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/discretizacao-por-quantis/image1.png",alt:"Operação Agrupar linhas por função"}})],1)]),o._v(" "),e("li",[e("p",[o._v("Para gerar o gráfico de barras é necessário ordenar os buckets, portanto, adicione a operação "),e("router-link",{attrs:{to:"/spark/"}},[o._v("Ordenar")]),o._v(" novamente. Utilizando "),e("em",[o._v("“age_quantis”")]),o._v(" como "),e("strong",[o._v("Atributos")]),o._v(" e "),e("em",[o._v("“Ascending”")]),o._v(" como "),e("strong",[o._v("Função")]),o._v(", na opção "),e("strong",[o._v("Abrir o Editor")]),o._v("."),e("br"),o._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/discretizacao-por-quantis/image7.png",alt:"Operação Ordenar"}}),e("br"),o._v("\nExecute e observe os resultados. Aqui podemos visualizar cada um dos quantis gerados na operação anterior."),e("br"),o._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/discretizacao-por-quantis/image4.png",alt:"Resultado de ordenação"}}),e("br"),o._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/discretizacao-por-quantis/image5.png",alt:"Resultado de ordenação"}}),o._v("\\")],1)]),o._v(" "),e("li",[e("p",[o._v("Adicione a operação "),e("router-link",{attrs:{to:"/spark/"}},[o._v("Gráfico de barras")]),o._v(". Selecione "),e("em",[o._v("“age_quantis”")]),o._v(" no campo "),e("strong",[o._v("Atributo para o eixo X")]),o._v(" e "),e("em",[o._v("“mapped_age_quantis”")]),o._v(" no campo "),e("strong",[o._v("Atributos para o eixo Y")]),o._v(". Preencha "),e("em",[o._v("“Número de sobreviventes por idade”")]),o._v(" no campo "),e("strong",[o._v("Título")]),o._v(", "),e("em",[o._v("“Quantis de idades”")]),o._v(" no campo "),e("strong",[o._v("Título para o eixo X")]),o._v(" e "),e("em",[o._v("“Número de sobreviventes”")]),o._v(" no campo "),e("strong",[o._v("Título para o eixo Y")]),o._v("."),e("br"),o._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/discretizacao-por-quantis/image9.png",alt:"Resultado Gráfico de barras"}}),o._v("\\")],1)]),o._v(" "),e("li",[e("p",[o._v("Execute o fluxo e visualize o resultado."),e("br"),o._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/discretizacao-por-quantis/image12.png",alt:"Resultado Gráfico de barras"}}),e("br"),o._v("\nCada barra equivale ao um quantil de idade, composto pelo intervalo de 10 em 10 anos. Observamos que o intervalo de 30 a INF anos apresenta o maior número de sobreviventes.")])])]),o._v(" "),e("hr"),o._v(" "),e("p",[o._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])},[],!1,null,null,null);a.default=t.exports}}]);