(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{459:function(a,o,e){"use strict";e.r(o);var r=e(56),s=Object(r.a)({},(function(){var a=this,o=a.$createElement,e=a._self._c||o;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"discretizacao-intervalar"}},[a._v("Discretização intervalar")]),a._v(" "),e("p",[a._v("Operação que mapeia uma coluna de valores contínuos em uma coluna de buckets (blocos, faixas) definidos(as) pelo usuário.")]),a._v(" "),e("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Entrada")]),a._v(" "),e("th",[a._v("Saída")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("Dados a serem tratados")]),a._v(" "),e("td",[a._v("Dados tratados e modelo")])])])]),a._v(" "),e("h3",{attrs:{id:"tarefa"}},[a._v("Tarefa")]),a._v(" "),e("p",[a._v("Nome da Tarefa")]),a._v(" "),e("h3",{attrs:{id:"aba-execucao"}},[a._v("Aba Execução")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Parâmetro")]),a._v(" "),e("th",[a._v("Detalhe")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[a._v("Atributos")])]),a._v(" "),e("td",[a._v("Uma ou mais colunas que contenham os valores a serem limpos, ou substituídos")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Nome do(s) novo(s) atributo(s)")])]),a._v(" "),e("td",[a._v("Nome dos novos atributos criados na operação*")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Divisores (lista de valores com no mínimo de 3 elementos, usado para definir as faixas, separados por vírgula, -INF e INF são valores válidos)*")])]),a._v(" "),e("td",[a._v("Lista de valores com no mínimo 3 elementos utilizados para definir as faixas, separados por vírgulas")])]),a._v(" "),e("tr",[e("td",[e("strong",[e("a",{attrs:{href:"#como-tratar-dados-invalidos"}},[a._v("Como tratar dados inválidos?")])])]),a._v(" "),e("td",[a._v("Como devem ser tratados os dados inválidos")])])])]),a._v(" "),e("p",[e("strong",[a._v("OBS:")]),a._v(" *Se o nome dos novos atributos forem omitidos, o nome resultante terá um sufixo seguido pelo nome original.")]),a._v(" "),e("p",[e("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-aparencia.html"}},[a._v("Aba Aparência")])],1),a._v(" "),e("p",[e("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-resultados.html"}},[a._v("Aba Resultados")])],1),a._v(" "),e("h2",{attrs:{id:"definicoes"}},[a._v("Definições")]),a._v(" "),e("h3",{attrs:{id:"como-tratar-dados-invalidos"}},[a._v("Como tratar dados inválidos?")]),a._v(" "),e("p",[a._v("Existem as seguintes opções:")]),a._v(" "),e("ol",[e("li",[a._v("Ignorar: Os dados inválidos são ignorados no mapeamento em buckets.")]),a._v(" "),e("li",[a._v("Manter: Os dados inválidos serão mapeados em um bucket especial.")]),a._v(" "),e("li",[a._v("Gerar erro: O programa lança uma exceção.")])]),a._v(" "),e("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),e("p",[e("strong",[a._v("Objetivo:")]),a._v(" determinar a quantidade de tripulantes sobreviventes do desastre do titanic por faixa etária, com o intervalo de 10 anos entre elas."),e("br"),a._v(" "),e("strong",[a._v("Base de Dados:")]),a._v(" "),e("RouterLink",{attrs:{to:"/pt-br/spark/base-de-dados/#titanic"}},[a._v("Titanic")])],1),a._v(" "),e("p",[e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/discretizacao-intervalar/image12.md",alt:"Fluxo de trabalho"}})]),a._v(" "),e("ol",[e("li",[e("p",[a._v("Adicione uma base de dados por meio da operação "),e("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[a._v("Ler de dados")]),a._v(" e selecione "),e("em",[a._v("“Converter dados inválidos para NULO”")]),a._v(" na opção O que fazer em caso de dados inválidos."),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/discretizacao-intervalar/image3.md",alt:"Operação Ler dados"}})],1)]),a._v(" "),e("li",[e("p",[a._v("Adicione a operação "),e("RouterLink",{attrs:{to:"/pt-br/spark/manipulacao-de-dados/tratar-dados-ausentes.html#tipos-de-limpeza"}},[a._v("Limpar dados ausentes")]),a._v(", selecione "),e("em",[a._v("“age”")]),a._v(" como "),e("strong",[a._v("Atributo(s)")]),a._v(" e "),e("em",[a._v("“Substituir com a média”")]),a._v(" como "),e("strong",[a._v("Tipo de limpeza")]),a._v("."),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/discretizacao-intervalar/image13.md",alt:"Operação Limpar dados ausentes"}})],1)]),a._v(" "),e("li",[e("p",[a._v("Para tratar apenas dos sobreviventes do desastre, adicione a operação "),e("RouterLink",{attrs:{to:"/pt-br/spark/manipulacao-de-dados/filtrar-por-funcao.html"}},[a._v("Filtrar por função")]),a._v(". Utilizando o campo "),e("strong",[a._v("Filtro")]),a._v(", selecione "),e("em",[a._v("“Survived == 1”")]),a._v(" como "),e("strong",[a._v("Expressão")]),a._v(", na opção "),e("strong",[a._v("Editar valor")]),a._v("."),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/discretizacao-intervalar/image5.md",alt:"Operação Filtrar por função"}})],1)]),a._v(" "),e("li",[e("p",[a._v("Esta operação é opcional, o objetivo dela é determinar o infinito inferior da coluna "),e("em",[a._v("Age")]),a._v(". Ao ordenar os valores, é possível visualizar um "),e("em",[a._v("preview")]),a._v(" dos dados e identificar o menor valor. Desta forma temos o limite inferior dos nossos intervalos. Portanto, adicione a operação "),e("strong",[a._v("Ordenar")]),a._v(". Abra o editor do campo "),e("strong",[a._v("Atributo(s)")]),a._v(", selecione "),e("em",[a._v("“age”")]),a._v(" como "),e("strong",[a._v("Atributos")]),a._v(" e "),e("em",[a._v("“Ascending”")]),a._v(" como "),e("strong",[a._v("Função")]),a._v("."),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/discretizacao-intervalar/image2.md",alt:"Preview de ordenação"}}),e("br"),a._v("\nExecute o fluxo:\n"),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/discretizacao-intervalar/image1.md",alt:"Resultado do preview de ordenação"}}),e("br"),a._v("\nAgora é possível visualizar o menor valor inferior.")])]),a._v(" "),e("li",[e("p",[a._v("Adicione a operação "),e("strong",[a._v("Intervalar")]),a._v(" e selecione "),e("em",[a._v("“Age”")]),a._v(" como "),e("strong",[a._v("Atributos")]),a._v(". Preencha "),e("em",[a._v("“Age_buckets”")]),a._v(" no campo "),e("strong",[a._v("Nome(s) do(s) novo(s) atributo(s)")]),a._v(", "),e("em",[a._v("“0,10,20,30,40,50,60,INF”")]),a._v(" em "),e("strong",[a._v("Divisores")]),a._v(" e “Ignorar” em "),e("strong",[a._v("Como tratar dados inválidos?")]),a._v("."),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/discretizacao-intervalar/image11.md",alt:"Operação Intervalar"}}),e("br"),a._v("\nExecute e observe as categorias geradas após a execução da operação:\n"),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/discretizacao-intervalar/image10.md",alt:"Resultado de operação Intervalar"}}),e("br"),a._v("\nComo o limite superior é desconhecido, foi utilizado o valor INF e optado por ignorar quaisquer valores que não estejam mapeados.")])]),a._v(" "),e("li",[e("p",[a._v("Adicione a operação "),e("RouterLink",{attrs:{to:"/pt-br/spark/manipulacao-de-dados/linha-agrupar-por-funcao.html"}},[a._v("Agrupar linhas por função")]),a._v(" para visualizar os buckets gerados. Escolha "),e("em",[a._v("“Age_buckets”")]),a._v(" no campo "),e("strong",[a._v("Selecione o(s) atributos para agregação")]),a._v(". Utilizando o campo "),e("strong",[a._v("Função de agregação")]),a._v(", selecione "),e("em",[a._v("“Age_buckets”")]),a._v(" como "),e("strong",[a._v("Atributo")]),a._v(", "),e("em",[a._v("“Count”")]),a._v(" como "),e("strong",[a._v("Função")]),a._v(" e "),e("em",[a._v("“Mapped_Age”")]),a._v(" como "),e("strong",[a._v("Alias")]),a._v("."),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/discretizacao-intervalar/image4.md",alt:"Operação Agrupar linhas por função"}})],1)]),a._v(" "),e("li",[e("p",[a._v("Para gerar o gráfico de barras é necessário ordenar os buckets, portanto, adicione a operação "),e("RouterLink",{attrs:{to:"/pt-br/spark/manipulacao-de-dados/coluna-ordenar.html"}},[a._v("Ordenar")]),a._v(" novamente. Utilizando "),e("em",[a._v("“Age_buckets”")]),a._v(" como "),e("strong",[a._v("Atributo")]),a._v(" e “Ascending” como "),e("strong",[a._v("Função")]),a._v(", na opção "),e("strong",[a._v("Abrir o Editor")]),a._v("."),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/discretizacao-intervalar/image7.md",alt:"Operação Ordenar - buckets"}}),e("br"),a._v("\nExecutando a operação, é possível visualizar cada um dos buckets gerados na operação anterior."),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/discretizacao-intervalar/image6.md",alt:"Resultado de operação Ordenar - buckets"}})],1)]),a._v(" "),e("li",[e("p",[a._v("Adicione a operação "),e("RouterLink",{attrs:{to:"/pt-br/spark/visualizacao-de-dados/grafico-de-barra.html"}},[a._v("Gráfico de barras")]),a._v(". Selecione "),e("em",[a._v("“Age_bucktes”")]),a._v(" no campo "),e("strong",[a._v("Atributo")]),a._v(" para o eixo X e “"),e("em",[a._v("Mapped_age”")]),a._v(" no campo "),e("strong",[a._v("Atributos para o eixo Y")]),a._v(". Preencha "),e("em",[a._v("“Sobreviventes do desastre no Titanic”")]),a._v(" no campo "),e("strong",[a._v("Título")]),a._v(", "),e("em",[a._v("“Buckets de Idade (10 em 10 anos)”")]),a._v(" no campo "),e("strong",[a._v("Título para o eixo X")]),a._v(" e "),e("em",[a._v("“Número de sobreviventes”")]),a._v(" no campo "),e("strong",[a._v("Título para o eixo Y")]),a._v("."),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/discretizacao-intervalar/image9.md",alt:"Operação Gráfico de barras"}})],1)]),a._v(" "),e("li",[e("p",[a._v("Execute o fluxo e visualize o resultado."),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/pre-processamento-de-dados/discretizacao-intervalar/image8.md",alt:"Resultado Gráfico de barras"}}),e("br"),a._v("\nCada barra equivale ao um bucket de idade, composto pelo intervalo de 10 em 10 anos. Observamos que o intervalo de 20 a 30 anos apresenta o maior número de sobreviventes.")])])]),a._v(" "),e("hr"),a._v(" "),e("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);o.default=s.exports}}]);