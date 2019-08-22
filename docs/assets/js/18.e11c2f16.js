(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{241:function(a,e,o){"use strict";o.r(e);var r=o(0),s=Object(r.a)({},function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[o("h1",{attrs:{id:"mineracao-de-sequencias"}},[a._v("Mineração de Sequências")]),a._v(" "),o("p",[a._v("O objetivo da operação Mineração de Sequências é encontrar padrões frequentes na forma de sequências em dados transacionais. Para isso, essa operação usa o algoritmo "),o("a",{attrs:{href:"http://dx.doi.org/10.1109%2FTKDE.2004.77",target:"_blank",rel:"noopener noreferrer"}},[a._v("PrefixSpan"),o("OutboundLink")],1),a._v(".")]),a._v(" "),o("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Entrada")]),a._v(" "),o("th",[a._v("Saída")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[a._v("Dados de transações")]),a._v(" "),o("td",[a._v("Padrões de sequências cujas quantidades estão acima de um determinado limiar")])])])]),a._v(" "),o("h3",{attrs:{id:"tarefa"}},[a._v("Tarefa")]),a._v(" "),o("p",[a._v("Nome da Tarefa")]),a._v(" "),o("h3",{attrs:{id:"aba-execucao"}},[a._v("Aba Execução")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Parâmetro")]),a._v(" "),o("th",[a._v("Detalhe")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[o("strong",[a._v("Suporte mínimo")])]),a._v(" "),o("td",[a._v("É a proporção de transações em que x e y ocorrem conjuntamente na base de dados. Varia entre 0 e 1")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Tamanho máximo da sequência")])]),a._v(" "),o("td",[a._v("Tamanho máximo da sequência a ser encontrada pelo algoritmo")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Atributo com transações")])]),a._v(" "),o("td",[a._v("Atributo contendo as transações da base de dados")])])])]),a._v(" "),o("p",[o("router-link",{attrs:{to:"/spark/documentacao-geral/documentacao-geral.html#aba-aparencia"}},[a._v("Aba Aparência")])],1),a._v(" "),o("p",[o("router-link",{attrs:{to:"/spark/documentacao-geral/documentacao-geral.html#aba-resultados"}},[a._v("Aba Resultados")])],1),a._v(" "),o("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),o("p",[o("strong",[a._v("Objetivo:")]),a._v(" Retornar sequências de visitas de usuários no site "),o("a",{attrs:{href:"http://msnbc.com",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://msnbc.com"),o("OutboundLink")],1),a._v(" em 28 de setembro de 1999"),o("br"),a._v(" "),o("strong",[a._v("Base de Dados:")]),a._v(" "),o("router-link",{attrs:{to:"/spark/base-de-dados/#msnbc-com"}},[a._v("msnbc.com")])],1),a._v(" "),o("p",[o("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/associacao_mineracao_de_sequencias/image4.png",alt:"Fluxo de Trabalho - Ler dados"}})]),a._v(" "),o("ol",[o("li",[o("p",[a._v("Adicione a base de dados por meio da operação "),o("router-link",{attrs:{to:"/spark/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Utilize a operação "),o("strong",[a._v("Transformar valores por função")]),a._v(" para tratar a base de dados. Nesta operação, clique em "),o("strong",[a._v("Editar valor")]),a._v(" da expressão para adicionar a expressão. Clique em adicionar e, em seguida, preencha o campo da "),o("strong",[a._v("Expressão")]),a._v(" com "),o("em",[a._v("“cast(split(trim(value), ' '), 'array<int>')”")]),a._v(" e o campo do "),o("strong",[a._v("Alias")]),a._v(" com "),o("em",[a._v("“sequencias”")]),a._v(". Por fim, clique em "),o("strong",[a._v("OK")]),a._v(". Isso aplicará a expressão "),o("em",[a._v("“sequences = cast(split(trim(value), ' '), 'array<int>') ”")]),a._v(" nos dados de entrada.")])]),a._v(" "),o("li",[o("p",[a._v("Na operação "),o("strong",[a._v("Mineração de sequências")]),a._v(", preencha "),o("em",[a._v("0.01")]),a._v(" no campo "),o("strong",[a._v("Suporte mínimo")]),a._v(", selecione "),o("em",[a._v("“sequencias”")]),a._v(" no campo "),o("strong",[a._v("Atributo com transações (vazio = primeiro atributo)")]),a._v(", e preencha "),o("em",[a._v("6")]),a._v(" no campo "),o("strong",[a._v("Tamanho máx. da sequência")]),a._v("."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/associacao_mineracao_de_sequencias/image1.png",alt:"Tabela Mineração de sequẽncias"}})])]),a._v(" "),o("li",[o("p",[a._v("Execute o fluxo e visualize o resultado (i.e., as sequências com suas respectivas frequências):\n"),o("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/associacao_mineracao_de_sequencias/image2.png",alt:"Tabela Resultado - parte 1"}}),a._v(" "),o("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/associacao_mineracao_de_sequencias/image3.png",alt:"Tabela Resultado - parte 2"}})])])]),a._v(" "),o("hr"),a._v(" "),o("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])},[],!1,null,null,null);e.default=s.exports}}]);