(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{522:function(a,e,t){"use strict";t.r(e);var o=t(45),s=Object(o.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"avaliacao"}},[a._v("Avaliação")]),a._v(" "),t("p",[a._v("A operação Avaliação tem como objetivo avaliar os resultados obtidos pelo fluxo de resolução de entidades.")]),a._v(" "),t("p",[a._v("Para mais informações, visite o site "),t("a",{attrs:{href:"https://recordlinkage.readthedocs.io/en/latest/index.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Pyhton Record Linkage Toolkit Documentation"),t("OutboundLink")],1),a._v(".")]),a._v(" "),t("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("Entrada")]),a._v(" "),t("th",[a._v("Saída")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("Dados de saída da Classificação, dados de saída da Blocagem e fonte de dados")]),a._v(" "),t("td",[a._v("Resultados das métricas de avaliação")])])])]),a._v(" "),t("h3",{attrs:{id:"tarefa"}},[a._v("Tarefa")]),a._v(" "),t("p",[a._v("Nome da Tarefa")]),a._v(" "),t("h3",{attrs:{id:"aba-execucao"}},[a._v("Aba Execução")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("Parâmetro")]),a._v(" "),t("th",[a._v("Detalhe")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[t("strong",[a._v("Matriz de Confusão")])]),a._v(" "),t("td",[a._v("Calcula a matriz de confusão")])]),a._v(" "),t("tr",[t("td",[t("strong",[a._v("F-score")])]),a._v(" "),t("td",[a._v("Calcula o F-score")])]),a._v(" "),t("tr",[t("td",[t("strong",[a._v("Recall")])]),a._v(" "),t("td",[a._v("Calcula o recall")])]),a._v(" "),t("tr",[t("td",[t("strong",[a._v("Precisão")])]),a._v(" "),t("td",[a._v("Calcula a precisão")])]),a._v(" "),t("tr",[t("td",[t("strong",[a._v("Acurácia")])]),a._v(" "),t("td",[a._v("Calcula a acurácia")])]),a._v(" "),t("tr",[t("td",[t("strong",[a._v("Especificidade")])]),a._v(" "),t("td",[a._v("Calcula a especificidade")])])])]),a._v(" "),t("p",[t("RouterLink",{attrs:{to:"/pt-br/sklearn/documentacao-geral/aba-aparencia.html"}},[a._v("Aba Aparência")])],1),a._v(" "),t("p",[t("RouterLink",{attrs:{to:"/pt-br/sklearn/documentacao-geral/aba-resultados.html"}},[a._v("Aba Resultados")])],1),a._v(" "),t("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),t("p",[t("strong",[a._v("Objetivo:")]),a._v(" Avaliar a classificação de registros como sendo pares ou não."),t("br"),a._v(" "),t("strong",[a._v("Bases de Dados:")])]),a._v(" "),t("ol",[t("li",[a._v("dataset3 - "),t("RouterLink",{attrs:{to:"/pt-br/sklearn/base-de-dados/#wine"}},[a._v("Wine Red Quality")])],1),a._v(" "),t("li",[a._v("true_links_3 - "),t("RouterLink",{attrs:{to:"/pt-br/sklearn/base-de-dados/#wine"}},[a._v("Wine Red Quality")])],1)]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/sklearn/resolucao_de_entidades/avaliacao/imagem1.png",alt:"Fluxo - Classificacao"}})]),a._v(" "),t("ol",[t("li",[t("p",[a._v("Leia as bases de dados por meio de duas operações "),t("RouterLink",{attrs:{to:"/pt-br/sklearn/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v(". "),t("strong",[a._v("Ler dados 0")]),a._v(" deverá ler a base de dados 1 e "),t("strong",[a._v("Ler dados 1")]),a._v(" deverá ler a base de dados 2.")],1)]),a._v(" "),t("li",[t("p",[a._v("Na operação "),t("RouterLink",{attrs:{to:"/pt-br/sklearn/entrada-e-saida/blocagem.html"}},[a._v("1 - Blocagem")]),a._v(', clique na opção "'),t("em",[a._v("Editar valor")]),a._v('". Preencha o campo '),t("strong",[a._v("expressão")]),a._v(" com \"block('given_name','given_name')\". Em seguida clique em \""),t("em",[a._v("Adicionar")]),a._v('" e preencha o campo '),t("strong",[a._v("expressão")]),a._v(" com \"block('surname','surname')\". Por fim, clique em \""),t("em",[a._v("Adicionar")]),a._v('" mais uma vez e preencha o campo '),t("strong",[a._v("expressão")]),a._v(" com \"block('date_of_birth','date_of_birth')\"."),t("br"),a._v(" "),t("img",{attrs:{src:"/img/sklearn/resolucao_de_entidades/blocagem/imagem2.png",alt:"Blocagem"}})],1)]),a._v(" "),t("li",[t("p",[a._v("Na operação "),t("RouterLink",{attrs:{to:"/pt-br/sklearn/entrada-e-saida/comparacao.html"}},[a._v("2 - Comparação")]),a._v(', clique na opção "'),t("em",[a._v("Editar valor")]),a._v('". E da mesma forma que na operação anterior, preencha as seguintes '),t("strong",[a._v("expressões")]),a._v(": \"exact('date_of_birth', 'date_of_birth', 1, 0, 0, 'date_of_birth')\", \"exact('suburb', 'suburb', 1, 0, 0, 'suburb')\", \"exact('state', 'state', 1, 0, 0, 'state')\", \"string('address_1', 'address_1', 'levenshtein', None, 0.0, 'address_1')\", \"string('surname', 'surname', 'levenshtein', None, 0.0, 'surname')\", \"exact('given_name', 'given_name', 1, 0, 0, 'given_name')\", e, por último, \"string('address_2', 'address_2', 'levenshtein', None, 0.0, 'address_2')\"."),t("br"),a._v(" "),t("img",{attrs:{src:"/img/sklearn/resolucao_de_entidades/comparacao/imagem2.png",alt:"Blocagem"}})],1)]),a._v(" "),t("li",[t("p",[a._v("Na operação "),t("RouterLink",{attrs:{to:"/pt-br/sklearn/entrada-e-saida/classificacao.html"}},[a._v("3 - Classificação")]),a._v(', no campo "'),t("em",[a._v("Algoritmo")]),a._v('", selecione "Logistic Regression".'),t("br"),a._v(" "),t("img",{attrs:{src:"/img/sklearn/resolucao_de_entidades/classificacao/imagem2.png",alt:"Classificacao"}})],1)]),a._v(" "),t("li",[t("p",[a._v("Na operação "),t("RouterLink",{attrs:{to:"/pt-br/sklearn/entrada-e-saida/avalicao.html"}},[a._v("4 - Avaliação")]),a._v(", selecione todas as métricas disponíveis."),t("br"),a._v(" "),t("img",{attrs:{src:"/img/sklearn/resolucao_de_entidades/avaliacao/imagem2.png",alt:"Avalicao"}})],1)]),a._v(" "),t("li",[t("p",[a._v("Execute o fluxo e visualize os resultados:"),t("br"),a._v(" "),t("img",{attrs:{src:"/img/sklearn/resolucao_de_entidades/avaliacao/imagem3.png",alt:"Resultado"}}),a._v(" "),t("img",{attrs:{src:"/img/sklearn/resolucao_de_entidades/avaliacao/imagem4.png",alt:"Matriz - Confusao"}})])])]),a._v(" "),t("hr"),a._v(" "),t("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);e.default=s.exports}}]);