(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{221:function(a,o,e){"use strict";e.r(o);var r=e(0),t=Object(r.a)({},(function(){var a=this,o=a.$createElement,e=a._self._c||o;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"regressao-isotonica"}},[a._v("Regressão Isotônica")]),a._v(" "),e("p",[a._v("A operação Regressão Isotônica tem como objetivo criar um modelo de aprendizado que tenta estimar uma função monótona crescente ou decrescente de forma a minimizar a distância entre esta e os pontos observados.")]),a._v(" "),e("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Entrada")]),a._v(" "),e("th",[a._v("Saída")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("Dados utilizados para treinar o modelo")]),a._v(" "),e("td",[a._v("Dados de saída e modelo do algoritmo de regressão")])])])]),a._v(" "),e("h3",{attrs:{id:"tarefa"}},[a._v("Tarefa")]),a._v(" "),e("p",[a._v("Nome da Tarefa")]),a._v(" "),e("h3",{attrs:{id:"aba-execucao"}},[a._v("Aba Execução")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Parâmetro")]),a._v(" "),e("th",[a._v("Detalhe")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[a._v("Atributo(s) previsor(es)")])]),a._v(" "),e("td",[a._v("Atributo que será usado para treinamento")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Atributo com o rótulo")])]),a._v(" "),e("td",[a._v("Atributo a ser predito")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Atributos com a predição")])]),a._v(" "),e("td",[a._v("Atributo contendo a predição do modelo")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Iterações máximas")])]),a._v(" "),e("td",[a._v("Define o número máximo de iterações para a convergência do algoritmo. O seu valor padrão é 100")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Regularização")])]),a._v(" "),e("td",[a._v("Define o valor para regularizar o ajuste da função de perda do algoritmo. O seu o valor padrão é 0")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Mix. para ElasticNet (entre 0 e 1)")])]),a._v(" "),e("td",[a._v("Parâmetro de ajuste usado para a minimização da função objetivo usando uma combinação de L1 e L2. O seu valor por padrão é 0")])]),a._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#isotonic"}},[a._v("Isotonic")])]),a._v(" "),e("td",[a._v("Especifica o crescimento da função monótona gerada pela regressão. O seu valor padrão é Isotônica/crescente")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Métrica para validação cruzada")])]),a._v(" "),e("td",[a._v("Define a métrica utilizada dentro da validação cruzada (se aplicável) para avaliar o modelo de classificação dentro das k partições")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Atributo com o número da partição (fold)")])]),a._v(" "),e("td",[a._v("Define o atributo a ter o número da partição para realizar uma validação cruzada (se aplicável)")])])])]),a._v(" "),e("p",[e("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-aparencia.html"}},[a._v("Aba Aparência")])],1),a._v(" "),e("p",[e("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-resultados.html"}},[a._v("Aba Resultados")])],1),a._v(" "),e("h2",{attrs:{id:"definicoes"}},[a._v("Definições")]),a._v(" "),e("h3",{attrs:{id:"isotonic"}},[a._v("Isotonic")]),a._v(" "),e("ol",[e("li",[a._v("Isotônica/crescente: A regressão isotônica gera uma função monótona crescente.")]),a._v(" "),e("li",[a._v("Antitônica/decrescente: A regressão isotônica gera uma função monótona decrescente")])]),a._v(" "),e("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),e("p",[e("strong",[a._v("Objetivo:")]),a._v(" Utilizar o modelo construído pela operação Regressão Isotônica para predizer a qualidade de um vinho"),e("br"),a._v(" "),e("strong",[a._v("Base de Dados:")]),a._v(" "),e("RouterLink",{attrs:{to:"/pt-br/spark/base-de-dados/#wine"}},[a._v("Qualidade da Variante Vermelha do Vinho Verde Português")])],1),a._v(" "),e("p",[e("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/regressao_isotonica/image4.png",alt:"Ler dados"}})]),a._v(" "),e("ol",[e("li",[e("p",[a._v("Leia a base de dados por meio da operação "),e("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v(".")],1)]),a._v(" "),e("li",[e("p",[a._v("Utilize a operação "),e("RouterLink",{attrs:{to:"/pt-br/spark/pre-processamento-de-dados/amostragem-divisao-percentual.html"}},[a._v("Divisão percentual")]),a._v(" para dividir a base de dados em treino e teste. No parâmetro "),e("strong",[a._v("Percentual")]),a._v(", calibre-o utilizando 50% dos dados para treinar (1.ª parte) e 50% para testar (2.ª parte).")],1)]),a._v(" "),e("li",[e("p",[a._v("Na operação "),e("strong",[a._v("Regressão Isotônica")]),a._v(", selecione “alcohol”, “chlorides”, “citric_acid”, “density”, “fixed_acidity”, “free_sulfur_dioxide”, “pH”, “residual_sugar”, “sulphates”, “total_sulfur_dioxide” e “volatile_acidity” no campo "),e("strong",[a._v("Atributo(s) previsor(es)")]),a._v(". Selecione "),e("em",[a._v("“quality”")]),a._v(" no campo "),e("strong",[a._v("Atributo com o rótulo")]),a._v(" e preencha “resultado” no campo "),e("strong",[a._v("Atributo com a predição (novo)")]),a._v("."),e("br"),a._v("\nPreencha 100 no campo "),e("strong",[a._v("Iterações máximas")]),a._v(" e selecione no campo "),e("strong",[a._v("Isotonic")]),a._v(" a função Isotônica/crescente")]),a._v(" "),e("p",[e("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/regressao_isotonica/image2.png",alt:"Forumlário regressão isotônica - parte 1"}}),a._v(" "),e("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/regressao_isotonica/image3.png",alt:"Forumlário regressão isotônica - parte 2"}})])]),a._v(" "),e("li",[e("p",[a._v("Na operação "),e("RouterLink",{attrs:{to:"/pt-br/spark/modelo-e-avaliacao/aplicar-modelo.html"}},[a._v("Aplicar Modelo")]),a._v(", selecione “alcohol”, “chlorides”, “citric_acid”, “density”, “fixed_acidity”, “free_sulfur_dioxide”, “pH”, “residual_sugar”, “sulphates”, “total_sulfur_dioxide” e “volatile_acidity” no campo "),e("strong",[a._v("Atributo(s) previsor(es)")]),a._v(" e preencha "),e("em",[a._v("“resultado”")]),a._v(" no campo "),e("strong",[a._v("Nome do novo atributo (herdado do modelo)")]),a._v(".")],1)]),a._v(" "),e("li",[e("p",[a._v("Na operação "),e("RouterLink",{attrs:{to:"/pt-br/spark/modelo-e-avaliacao/avaliar-modelo.html"}},[a._v("Avaliar Modelo")]),a._v(", selecione "),e("em",[a._v("“resultado”")]),a._v(" no campo "),e("strong",[a._v("Atributo usado para predição")]),a._v(". Selecione "),e("em",[a._v("“quality”")]),a._v(" no campo "),e("strong",[a._v("Atributo usado como label")]),a._v(" e a métrica "),e("em",[a._v("“Raiz do erro quadrático médio”")]),a._v(" como "),e("strong",[a._v("Métrica para avaliação")]),a._v(".")],1)]),a._v(" "),e("li",[e("p",[a._v("Execute o fluxo e visualize o resultado, que neste caso está de acordo com a raiz do erro quadrático médio ("),e("strong",[a._v("Root Mean Square Error")]),a._v(" ou "),e("strong",[a._v("RMSE")]),a._v("):"),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/regressao_isotonica/image1.png",alt:"Resultado"}})])])]),a._v(" "),e("hr"),a._v(" "),e("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);o.default=t.exports}}]);