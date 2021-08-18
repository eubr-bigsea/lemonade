(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{441:function(a,e,o){"use strict";o.r(e);var d=o(45),s=Object(d.a)({},(function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[o("h1",{attrs:{id:"ler-dados"}},[a._v("Ler Dados")]),a._v(" "),o("p",[a._v("A operação "),o("strong",[a._v("Ler Dados")]),a._v(" é utilizada para carregar a fonte de dados a ser analisada. Ela tenta inferir o tipo dos dados sendo lidos e é capaz de tratar dados inválidos.")]),a._v(" "),o("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Entrada")]),a._v(" "),o("th",[a._v("Saída")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[a._v("Não tem")]),a._v(" "),o("td",[a._v("Dados carregados")])])])]),a._v(" "),o("h3",{attrs:{id:"tarefa"}},[a._v("Tarefa")]),a._v(" "),o("p",[a._v("Nome da Tarefa")]),a._v(" "),o("h3",{attrs:{id:"aba-execucao"}},[a._v("Aba Execução")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Parâmetro")]),a._v(" "),o("th",[a._v("Detalhe")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[o("strong",[a._v("Fonte de dados")])]),a._v(" "),o("td",[a._v("Fonte de dados de entrada")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Tratar esses valores como nulos (separe por vírgula)")])]),a._v(" "),o("td",[a._v("Valores que serão considerados como nulos quando o arquivo estiver sendo lido")])]),a._v(" "),o("tr",[o("td",[o("strong",[o("a",{attrs:{href:"#inferir-esquema-da-fonte-de-dados"}},[a._v("Inferir esquema da fonte de dados")])])]),a._v(" "),o("td",[a._v("Como inferir o tipo dos dados presentes na fonte")])]),a._v(" "),o("tr",[o("td",[o("strong",[o("a",{attrs:{href:"#o-que-fazer-em-caso-de-dados-invalidos"}},[a._v("O que fazer em caso de dados inválidos")])])]),a._v(" "),o("td",[a._v("Ação a ser tomada em caso de dados inválidos")])])])]),a._v(" "),o("p",[o("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-aparencia.html"}},[a._v("Aba Aparência")])],1),a._v(" "),o("p",[o("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-resultados.html"}},[a._v("Aba Resultados")])],1),a._v(" "),o("h2",{attrs:{id:"definicoes"}},[a._v("Definições")]),a._v(" "),o("h3",{attrs:{id:"inferir-esquema-da-fonte-de-dados"}},[a._v("Inferir esquema da fonte de dados")]),a._v(" "),o("p",[a._v("A inferência do esquema (ou o tipo dos atributos) da fonte de dados pode ser feita de três formas:")]),a._v(" "),o("ol",[o("li",[a._v("A partir dos metadados (recomendado):\n"),o("ul",[o("li",[a._v("Infere os tipos dos atributos a partir dos metadados. Metadados são dados que contém informações sobre os dados pertencentes à fonte.")])])]),a._v(" "),o("li",[a._v("A partir dos dados:\n"),o("ul",[o("li",[a._v("Infere os tipos dos atributos a partir dos dados em si.")])])]),a._v(" "),o("li",[a._v("Não inferir:\n"),o("ul",[o("li",[a._v("Não infere os tipos dos atributos da fonte de dados.")])])])]),a._v(" "),o("h3",{attrs:{id:"o-que-fazer-em-caso-de-dados-invalidos"}},[a._v("O que fazer em caso de dados inválidos")]),a._v(" "),o("p",[a._v("Podem ser feitas três ações em caso de dados inválidos:")]),a._v(" "),o("ol",[o("li",[a._v("Converter dados inválidos para NULO (null):\n"),o("ul",[o("li",[a._v("Converter os dados inválidos para valores nulos, demarcados como NULL.")])])]),a._v(" "),o("li",[a._v("Ignorar todo o registro:\n"),o("ul",[o("li",[a._v("Ignorar toda as linhas corrompidas/inválidas")])])]),a._v(" "),o("li",[a._v("Parar o processamento e gerar um erro.")])]),a._v(" "),o("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),o("p",[o("strong",[a._v("Objetivo:")]),a._v(" Construir um fluxo de dados para ler uma base de dados."),o("br"),a._v(" "),o("strong",[a._v("Base de Dados:")]),a._v(" "),o("RouterLink",{attrs:{to:"/pt-br/spark/base-de-dados/#titanic"}},[a._v("Titanic")])],1),a._v(" "),o("p",[o("img",{attrs:{src:"/img/spark/entrada-e-saida/ler-dados/image5.png",alt:"Ler dados"}})]),a._v(" "),o("h3",{attrs:{id:"exemplo-1"}},[a._v("Exemplo 1:")]),a._v(" "),o("p",[a._v("A partir de metadados.")]),a._v(" "),o("ol",[o("li",[o("p",[a._v("Adicione uma base de dados por meio da operação "),o("strong",[a._v("Ler dados")]),a._v(". Selecione "),o("em",[a._v("“A partir dos metadados”")]),a._v(" no campo "),o("strong",[a._v("Inferir esquema da fonte de dados")]),a._v(" e "),o("em",[a._v("“Converter dados inválidos para NULO”")]),a._v(" no campo "),o("strong",[a._v("O que fazer em caso de dados inválidos")]),a._v("."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/entrada-e-saida/ler-dados/image7.png",alt:"Tabela - Ler dados"}})])]),a._v(" "),o("li",[o("p",[a._v("Execute o fluxo e visualize o resultado."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/entrada-e-saida/ler-dados/image1.png",alt:"Resultado - Ler dados"}}),o("br"),a._v("\nComo pode ser observado, os tipos dos atributos e os metadados da base estão configurados (na coluna metadados), o que nos certifica da inferência a partir dos metadados.")])])]),a._v(" "),o("h3",{attrs:{id:"exemplo-2"}},[a._v("Exemplo 2:")]),a._v(" "),o("ol",[o("li",[o("p",[a._v("Adicione uma base de dados por meio da operação "),o("strong",[a._v("Ler dados")]),a._v(". Selecione "),o("em",[a._v("“A partir dos dados”")]),a._v(" no campo "),o("strong",[a._v("Inferir esquema da fonte de dados")]),a._v("."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/entrada-e-saida/ler-dados/image4.png",alt:"Tabela - Ler a partir de dados"}})])]),a._v(" "),o("li",[o("p",[a._v("Execute o fluxo e visualize o resultado."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/entrada-e-saida/ler-dados/image3.png",alt:"Resultado - Ler a partir de dados"}}),o("br"),a._v("\nPodemos verificar que os atributos estão inferidos, nomeados e com seus tipos definidos, porém os metadados não foram utilizados. Isso demonstra a inferência a partir dos dados.")])])]),a._v(" "),o("h3",{attrs:{id:"exemplo-3"}},[a._v("Exemplo 3:")]),a._v(" "),o("p",[a._v("Não inferir")]),a._v(" "),o("ol",[o("li",[o("p",[a._v("Adicione uma base de dados por meio da operação Ler dados. Selecione “Não inferir” no campo Inferir esquema da fonte de dados.\n"),o("img",{attrs:{src:"/img/spark/entrada-e-saida/ler-dados/image2.png",alt:"Tabela - Não inferir"}})])]),a._v(" "),o("li",[o("p",[a._v("Execute o fluxo e visualize o resultado."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/entrada-e-saida/ler-dados/image6.png",alt:"Resultado - Não inferir"}}),o("br"),a._v("\nPodemos observar que os atributos não foram inferidos, e permaneceram com o tipo string.")])])]),a._v(" "),o("hr"),a._v(" "),o("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);e.default=s.exports}}]);