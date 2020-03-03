(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{229:function(a,e,o){"use strict";o.r(e);var r=o(0),s=Object(r.a)({},(function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[o("h1",{attrs:{id:"escalador-padrao-z-score"}},[a._v("Escalador Padrão (Z-score)")]),a._v(" "),o("p",[a._v("O objetivo desse escalador é fazer com que cada atributo individualmente se pareça com uma distribuição normal padrão de forma aproximada, e.g., Gaussiana com média 0 e variância unitária.")]),a._v(" "),o("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Entrada")]),a._v(" "),o("th",[a._v("Saída")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[a._v("Dados a serem tratados")]),a._v(" "),o("td",[a._v("Dados tratados e modelo de transformação")])])])]),a._v(" "),o("h3",{attrs:{id:"tarefa"}},[a._v("Tarefa")]),a._v(" "),o("p",[a._v("Nome da Tarefa")]),a._v(" "),o("h3",{attrs:{id:"aba-execucao"}},[a._v("Aba Execução")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Parâmetro")]),a._v(" "),o("th",[a._v("Detalhe")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[o("strong",[a._v("Atributo com as características (features)")])]),a._v(" "),o("td",[a._v("Atributo que será transformado pelo escalador")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Nome do novo atributo")])]),a._v(" "),o("td",[a._v("Nome que o atributo escalado receberá")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Centralizar os dados com a média")])]),a._v(" "),o("td",[a._v("Centraliza os dados com a média antes de escalar. Não recomendado para conjuntos de dados esparsos")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Escalar os dados para o desvio padrão unitário")])]),a._v(" "),o("td",[a._v("Escala os dados para terem desvio padrão unitário")])])])]),a._v(" "),o("p",[o("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-aparencia.html"}},[a._v("Aba Aparência")])],1),a._v(" "),o("p",[o("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-resultados.html"}},[a._v("Aba Resultados")])],1),a._v(" "),o("h2",{attrs:{id:"exemplos-de-utilizacao"}},[a._v("Exemplos de Utilização")]),a._v(" "),o("h3",{attrs:{id:"exemplo-1"}},[a._v("Exemplo 1")]),a._v(" "),o("p",[o("strong",[a._v("Objetivo:")]),a._v(" Remover linhas duplicadas da base de dados."),o("br"),a._v(" "),o("strong",[a._v("Base de Dados:")]),a._v(" "),o("RouterLink",{attrs:{to:"/pt-br/spark/base-de-dados/#iris"}},[a._v("Íris")])],1),a._v(" "),o("p",[o("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/redefinir-escala-escalador-padrao/image9.png",alt:"Fluxo de trabalho"}})]),a._v(" "),o("ol",[o("li",[o("p",[a._v("Adicione uma base de dados por meio da operação "),o("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v("."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/redefinir-escala-escalador-padrao/image4.png",alt:"Operação Ler dados"}})],1)]),a._v(" "),o("li",[o("p",[a._v("Utilize a operação "),o("strong",[a._v("Z-score")]),a._v(" para escalar os atributos. Selecione "),o("em",[a._v("“sepallength”")]),a._v(", "),o("em",[a._v("“sepalwidth”")]),a._v(", "),o("em",[a._v("“petallength”")]),a._v(" e "),o("em",[a._v("“petalwidth”")]),a._v(" no campo "),o("strong",[a._v("Atributo(s) previsor(es)")]),a._v(". Preencha "),o("em",[a._v("“scaled_measures”")]),a._v("  no campo "),o("strong",[a._v("Nome do novo atributo")]),a._v("."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/redefinir-escala-escalador-padrao/image10.png",alt:"Operação Z-score"}})])]),a._v(" "),o("li",[o("p",[a._v("Adicione a visualização em "),o("strong",[a._v("Tabela")]),a._v(" para ver os resultados."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/redefinir-escala-escalador-padrao/image3.png",alt:"Operação Tabela"}})])]),a._v(" "),o("li",[o("p",[a._v("Execute o fluxo e visualize o resultado."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/redefinir-escala-escalador-padrao/image5.png",alt:"Resultado"}}),o("br"),a._v("\nO resultado possui o atributo “scaled_measures”, que é um vetor de quatro elementos, correspondente aos atributos numéricos da base já escalados.")])])]),a._v(" "),o("h3",{attrs:{id:"exemplo-2-reutilizacao-do-modelo"}},[a._v("Exemplo 2 - Reutilização do modelo")]),a._v(" "),o("p",[o("strong",[a._v("Objetivo:")]),a._v("  A reutilização do modelo aprendido pelo escalador pode ser útil, por exemplo, ao processar o dado em batches. O segundo batch pode ser escalado de acordo com o primeiro, o que pode acontecer com a divisão de dados entre treino e teste numa tarefa de aprendizado supervisionado. Abaixo, é apresentado um exemplo do uso do "),o("strong",[a._v("Z-score")]),a._v(" com a reutilização do modelo."),o("br"),a._v(" "),o("strong",[a._v("Base de Dados:")]),a._v(" "),o("RouterLink",{attrs:{to:"/pt-br/spark/base-de-dados/#iris"}},[a._v("Íris")])],1),a._v(" "),o("p",[o("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/redefinir-escala-escalador-padrao/image7.png",alt:"Fluxo de trabalho"}})]),a._v(" "),o("ol",[o("li",[o("p",[a._v("Adicione uma base de dados por meio da operação "),o("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Adicione e utilize a operação "),o("strong",[a._v("Z-score")]),a._v(" para escalar os atributos. Selecione "),o("em",[a._v("“petallength”")]),a._v(" e "),o("em",[a._v("“petalwidth”")]),a._v(" no campo "),o("strong",[a._v("Atributo(s) previsor(es)")]),a._v(". Preencha "),o("em",[a._v("“scaled_length_width”")]),a._v(" no campo "),o("strong",[a._v("Nome do novo atributo")]),a._v("."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/redefinir-escala-escalador-padrao/image1.png",alt:"Operação Z-score"}})])]),a._v(" "),o("li",[o("p",[a._v("Utilize a operação "),o("RouterLink",{attrs:{to:"/pt-br/spark/modelo-e-avaliacao/aplicar-modelo.html"}},[a._v("Aplicar modelo")]),a._v(". Selecione "),o("em",[a._v("“sepallength”")]),a._v(" e "),o("em",[a._v("“sepalwidth”")]),a._v(" no campo "),o("strong",[a._v("Atributos previsores")]),a._v(". Preencha "),o("em",[a._v("“prediction”")]),a._v(" no campo "),o("strong",[a._v("Nome do novo atributo")]),a._v("."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/redefinir-escala-escalador-padrao/image6.png",alt:"Operação Aplicar modelo"}})],1)]),a._v(" "),o("li",[o("p",[a._v("Adicione a visualização em Tabela para ver os resultados."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/redefinir-escala-escalador-padrao/image8.png",alt:"Operação Tabela"}})])]),a._v(" "),o("li",[o("p",[a._v("Execute o fluxo e observe o resultado."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/redefinir-escala-escalador-padrao/image2.png",alt:"Resultado"}}),o("br"),a._v("\nO resultado possui o atributo "),o("em",[a._v("“scaled_length_width”")]),a._v(", que é um vetor de dois elementos, correspondente aos atributos "),o("em",[a._v("“sepal length”")]),a._v(" e "),o("em",[a._v("“sepal width”")]),a._v(" escalados de acordo com o modelo aprendido com os atributos "),o("em",[a._v("“petallength”")]),a._v(" e "),o("em",[a._v("“petalwidth”")]),a._v(".  É possível notar a diferença entre ajustar e aplicar o modelo nos mesmos dados, que resultou nas duas primeiras posições do vetor do caso de uso anterior, e ajustar o modelo e aplicar em dados diferentes. Como a média e o desvio padrão para os atributos "),o("em",[a._v("“petallength”")]),a._v(" e "),o("em",[a._v("“petalwidth”")]),a._v(" são menores, e esses foram os parâmetros aprendidos pelo escalador, os dados dessa vez acabaram positivos, ao contrário do resultado anterior.")])])]),a._v(" "),o("hr"),a._v(" "),o("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);e.default=s.exports}}]);