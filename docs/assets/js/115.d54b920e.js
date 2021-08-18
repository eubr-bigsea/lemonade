(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{477:function(a,o,e){"use strict";e.r(o);var t=e(45),r=Object(t.a)({},(function(){var a=this,o=a.$createElement,e=a._self._c||o;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"naive-bayes"}},[a._v("Naïve Bayes")]),a._v(" "),e("p",[a._v("A operação Naïve Bayes cria um modelo baseado na aplicação do teorema de Bayes com uma suposição ingênua de independência condicional entre cada par de atributos dado o atributo classe. Nesse caso, o modelo do Naïve Bayes define que todos os atributos sejam condicionados ao atributo classe, mas sendo independentes entre si.")]),a._v(" "),e("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Entrada")]),a._v(" "),e("th",[a._v("Saída")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("Dados utilizados para treinar o modelo")]),a._v(" "),e("td",[a._v("Dados de saída e modelo do algoritmo de classificação")])])])]),a._v(" "),e("h3",{attrs:{id:"tarefa"}},[a._v("Tarefa")]),a._v(" "),e("p",[a._v("Nome da Tarefa")]),a._v(" "),e("h3",{attrs:{id:"aba-execucao"}},[a._v("Aba Execução")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Parâmetro")]),a._v(" "),e("th",[a._v("Detalhe")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[a._v("Atributo(s) previsor(es)")])]),a._v(" "),e("td",[a._v("Atributo(s) que será(ão) usado(s) para treinamento")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Atributo com o rótulo")])]),a._v(" "),e("td",[a._v("Atributo a ser classificado")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Atributos com a predição")])]),a._v(" "),e("td",[a._v("Atributo contendo a predição do modelo")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Pesos")])]),a._v(" "),e("td",[a._v("Pesos do algoritmo em um ensemble")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Tipo de Modelo")])]),a._v(" "),e("td",[a._v("Modelo utilizado pelo Naïve Bayes. Pode assumir os valores de uma Binomial ou Multinomial, sendo que o tipo Multinomial é o padrão para este parâmetro")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Suavização")])]),a._v(" "),e("td",[a._v("Realiza suavização (por Laplace) dos dados. O valor 0 significa que não ocorrerá suavização")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Limiares")])]),a._v(" "),e("td",[a._v("Ajustar a probabilidade de previsão de cada classe")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Atributo com os pesos")])]),a._v(" "),e("td",[a._v("Atributos passados ao modelo que terão um peso diferenciado")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Métrica para validação cruzada")])]),a._v(" "),e("td",[a._v("Define a métrica utilizada dentro da validação cruzada (se aplicável) para avaliar o modelo de classificação dentro das k partições")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Atributo com o número da partição (fold)")])]),a._v(" "),e("td",[a._v("Define o atributo a ter o número da partição para realizar uma validação cruzada (se aplicável)")])]),a._v(" "),e("tr",[e("td",[e("strong",[a._v("Usar classificação um-contra-todos (one-vs-rest)")])]),a._v(" "),e("td",[a._v("Se selecionado, o algoritmo realizará classificação um-contra-todos ao invés de classificação tradicional (neste caso, binária ou multi-classe)")])])])]),a._v(" "),e("p",[e("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-aparencia.html"}},[a._v("Aba Aparência")])],1),a._v(" "),e("p",[e("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-resultados.html"}},[a._v("Aba Resultados")])],1),a._v(" "),e("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),e("p",[e("strong",[a._v("Objetivo:")]),a._v(" Utilizar o modelo do Naïve Bayes para classificar a espécie da planta Íris."),e("br"),a._v(" "),e("strong",[a._v("Base de Dados:")]),a._v(" "),e("RouterLink",{attrs:{to:"/pt-br/spark/base-de-dados/#iris"}},[a._v("Íris")])],1),a._v(" "),e("p",[e("img",{attrs:{src:"/img/spark/aprendizado-de-maquina/classificacao-naive-bayes/image4.png",alt:"Fluxo de trabalho - Ler dados"}})]),a._v(" "),e("ol",[e("li",[e("p",[a._v("Leia a base de dados Irís por meio da operação "),e("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v(".")],1)]),a._v(" "),e("li",[e("p",[a._v("Utilize a operação "),e("RouterLink",{attrs:{to:"/pt-br/spark/pre-processamento-de-dados/representacao-de-atributos-converter-categorico-para-numerico.html"}},[a._v("Converter categórico para numérico")]),a._v(" para converter os valores do atributo classe em valores numéricos. Para isso, utilize "),e("em",[a._v("“class”")]),a._v(" no campo "),e("strong",[a._v("Atributos")]),a._v(", "),e("em",[a._v("String")]),a._v(" como "),e("strong",[a._v("Tipo de indexador")]),a._v(" e "),e("em",[a._v("“class_index”")]),a._v(" como "),e("strong",[a._v("Nome para novo(s) atributos indexados")]),a._v(".")],1)]),a._v(" "),e("li",[e("p",[a._v("Utilize a operação "),e("RouterLink",{attrs:{to:"/pt-br/spark/pre-processamento-de-dados/amostragem-divisao-percentual.html"}},[a._v("Divisão percentual")]),a._v(" para dividir a base de dados em treino e teste. No parâmetro "),e("strong",[a._v("Percentual")]),a._v(", calibre-o utilizando 50% dos dados para treinar (1.ª parte) e 50% para testar (2.ª parte).")],1)]),a._v(" "),e("li",[e("p",[a._v("Na operação "),e("strong",[a._v("Naïve Bayes")]),a._v(", selecione "),e("em",[a._v("“petal_length”")]),a._v(", "),e("em",[a._v("“petal_width”")]),a._v(", "),e("em",[a._v("“sepal_length”")]),a._v(" e "),e("em",[a._v("“sepal_width”")]),a._v(" no campo "),e("strong",[a._v("Atributo(s) previsor(es)")]),a._v(". Selecione "),e("em",[a._v("“class_index”")]),a._v(" no campo "),e("strong",[a._v("Atributo com o rótulo")]),a._v(" e preencha "),e("em",[a._v("“resultado”")]),a._v(" no campo "),e("strong",[a._v("Atributo com a predição (novo)")]),a._v(". Deixe os demais parâmetros inalterados."),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/aprendizado-de-maquina/classificacao-naive-bayes/image1.png",alt:"Formulário Naïve Bayes - parte 1"}}),a._v(" "),e("img",{attrs:{src:"/img/spark/aprendizado-de-maquina/classificacao-naive-bayes/image2.png",alt:"Formulário Naïve Bayes - parte 1"}})])]),a._v(" "),e("li",[e("p",[a._v("Na operação "),e("RouterLink",{attrs:{to:"/pt-br/spark/modelo-e-avaliacao/aplicar-modelo.html"}},[a._v("Aplicar Modelo")]),a._v(", selecione "),e("em",[a._v("“petal_length”")]),a._v(", "),e("em",[a._v("“petal_width”")]),a._v(", "),e("em",[a._v("“sepal_length”")]),a._v(" e "),e("em",[a._v("“sepal_width”")]),a._v(" no campo "),e("strong",[a._v("Atributo(s) previsor(es)")]),a._v(" e preencha "),e("em",[a._v("“resultado”")]),a._v(" no campo "),e("strong",[a._v("Nome do novo atributo (herdado do modelo)")]),a._v(".")],1)]),a._v(" "),e("li",[e("p",[a._v("Na operação "),e("RouterLink",{attrs:{to:"/pt-br/spark/modelo-e-avaliacao/avaliar-modelo.html"}},[a._v("Avaliar Modelo")]),a._v(", selecione "),e("em",[a._v("“resultado”")]),a._v(" no campo "),e("strong",[a._v("Atributo usado para predição")]),a._v(". Selecione "),e("em",[a._v("“class_index”")]),a._v(" no campo "),e("strong",[a._v("Atributo usado como label")]),a._v(" e a métrica "),e("em",[a._v("“F1”")]),a._v(" como "),e("strong",[a._v("Métrica para avaliação")]),a._v(".")],1)]),a._v(" "),e("li",[e("p",[a._v("Execute o fluxo e visualize o resultado, i.e., a matriz de confusão gerada para as predições do modelo de árvore de decisão e, consequentemente, a tabela representando as métricas de classificação (derivadas da matriz de confusão)."),e("br"),a._v(" "),e("img",{attrs:{src:"/img/spark/aprendizado-de-maquina/classificacao-naive-bayes/image3.png",alt:"Resultado - Gráfico"}}),a._v(" "),e("img",{attrs:{src:"/img/spark/aprendizado-de-maquina/classificacao-naive-bayes/image5.png",alt:"Resultado - Tabela"}})])])]),a._v(" "),e("hr"),a._v(" "),e("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);o.default=r.exports}}]);