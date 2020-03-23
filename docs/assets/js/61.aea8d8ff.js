(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{355:function(a,o,t){"use strict";t.r(o);var s=t(28),e=Object(s.a)({},(function(){var a=this,o=a.$createElement,t=a._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"substituir-valor"}},[a._v("Substituir Valor")]),a._v(" "),t("p",[a._v("Substituir valor é uma operação de "),t("strong",[a._v("manipulação de dados por coluna")]),a._v(" que substitui todas as ocorrências de um determinado valor no(s) atributo(s) de um fonte de dados por um outro valor específico.")]),a._v(" "),t("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("Entrada")]),a._v(" "),t("th",[a._v("Saída")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("Uma Fonte de Dados")]),a._v(" "),t("td",[a._v("Fonte com os dados modificados")])])])]),a._v(" "),t("h3",{attrs:{id:"tarefa"}},[a._v("Tarefa")]),a._v(" "),t("p",[a._v("Nome da Tarefa")]),a._v(" "),t("h3",{attrs:{id:"execucao"}},[a._v("Execução")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("Parâmetro")]),a._v(" "),t("th",[a._v("Detalhe")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[t("strong",[a._v("Atributos*")])]),a._v(" "),t("td",[a._v("Define os atributos que serão utilizados na busca do valor a ser substituído")])]),a._v(" "),t("tr",[t("td",[t("strong",[a._v("Valor a ser Substituído*")])]),a._v(" "),t("td",[a._v("Define o valor escolhido para alteração")])]),a._v(" "),t("tr",[t("td",[t("strong",[a._v("Substituir por*")])]),a._v(" "),t("td",[a._v("Define o novo valor utilizado na substituição")])])])]),a._v(" "),t("p",[t("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-aparencia.html"}},[a._v("Propriedades da Aparência")])],1),a._v(" "),t("p",[t("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-resultados.html"}},[a._v("Resultados")])],1),a._v(" "),t("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),t("p",[t("strong",[a._v("Objetivo:")]),a._v(" Supondo que houve um engano durante a coleta do conjunto de dados, os autores precisam corrigir os dados inconsistentes. Todos os atributos que possuem valores 4.4 estão errados, sendo necessário substituí-los por um valor específico, o valor 4.3."),t("br"),a._v(" "),t("strong",[a._v("Base de Dados:")]),a._v(" "),t("RouterLink",{attrs:{to:"/pt-br/spark/base-de-dados/#iris"}},[a._v("Íris")])],1),a._v(" "),t("p",[t("img",{attrs:{src:"/img/spark/manipulacao_de_dados/coluna_substituir_valor/image2.png",alt:"Ler dados"}})]),a._v(" "),t("ol",[t("li",[t("p",[a._v("Adicione uma base de dados por meio da operação "),t("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v(". É importante marcar na aba de "),t("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-resultados.html"}},[a._v("Resultados")]),a._v(" a opção "),t("strong",[a._v("Exibir amostra(s) da(s) saída(s) (máx. 50 registros)")]),a._v(" para poder comparar os dados antes e depois da transformação.\n"),t("img",{attrs:{src:"/img/spark/manipulacao_de_dados/coluna_substituir_valor/image3.png",alt:"Tabela Ler Dados"}})],1)]),a._v(" "),t("li",[t("p",[a._v("Adicione a operação "),t("strong",[a._v("Substituir valor")]),a._v(". Selecione "),t("em",[a._v("“sepallength”")]),a._v(", "),t("em",[a._v("“sepalwidth”")]),a._v(", "),t("em",[a._v("“petallength”")]),a._v(" e "),t("em",[a._v('"petalwidth”')]),a._v(" como "),t("strong",[a._v("Atributos")]),a._v(". No "),t("strong",[a._v("valor")]),a._v(" a ser substituído coloque 4.4 e no de "),t("strong",[a._v("substituir por")]),a._v(" use 4.3."),t("br"),a._v("\nÉ importante prestar atenção aos tipos de dados da base usada, no nosso exemplo não seleciona a coluna "),t("strong",[a._v("class")]),a._v(" pois, ela é do tipo texto enquanto as outras são do tipo inteiro. Ao substituir um parâmetro na forma de texto deve-se colocar aspas. Além disso, marque a mesma opção na aba de "),t("strong",[a._v("Resultados")]),a._v(", "),t("strong",[a._v("Exibir amostra(s) da(s) saída(s) (máx. 50 registros)")]),a._v(".\n"),t("img",{attrs:{src:"/img/spark/manipulacao_de_dados/coluna_substituir_valor/image4.png",alt:"Tabela Substituir Valor"}})])]),a._v(" "),t("li",[t("p",[a._v("Execute o fluxo e visualize o resultado."),t("br"),a._v("\nObserve o resultado da tabela da função "),t("strong",[a._v("Ler dados")]),a._v(" e repare na linha 9 do primeiro parâmetro e na linha 16 do segundo. Ambos estão como 4.4. Em seguida, faça o mesmo para a função de "),t("strong",[a._v("Substituir valor")]),a._v(", as imagens abaixo mostram que os valores que estavam previamente em 4.4 foram substituídos por 4.3."),t("br"),a._v(" "),t("img",{attrs:{src:"/img/spark/manipulacao_de_dados/coluna_substituir_valor/image1.png",alt:"Resultado - Ler Dados"}}),t("br"),a._v(" "),t("img",{attrs:{src:"/img/spark/manipulacao_de_dados/coluna_substituir_valor/image5.png",alt:"Resultado - Substituir Valor"}})])])]),a._v(" "),t("hr"),a._v(" "),t("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);o.default=e.exports}}]);