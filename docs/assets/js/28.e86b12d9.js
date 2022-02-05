(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{415:function(a,e,o){"use strict";o.r(e);var r=o(56),t=Object(r.a)({},(function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[o("h1",{attrs:{id:"support-vector-machines"}},[a._v("Support Vector Machines")]),a._v(" "),o("p",[a._v("O Support Vector Machines (SVM) é um algoritmo de aprendizado de máquina supervisionado baseado em kernels que é utilizado para problemas de classificação. Basicamente, o SVM encontra uma linha de separação, usualmente conhecida como hiperplano entre dados pertencentes de duas classes arbitrárias. Essa linha tenta maximizar\na distância entre os pontos mais próximos em relação a cada uma das classes. Nesta versão, implementa somente uma versão específica do SVM linear. Por esse motivo, somente suporta problemas de classificação multi-classe (i.e., com mais de duas classes) caso seja realizada classificação um-contra-todos.")]),a._v(" "),o("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Entrada")]),a._v(" "),o("th",[a._v("Saída")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[a._v("Dados utilizados para treinar o modelo")]),a._v(" "),o("td",[a._v("Dados de saída e Modelo do algoritmo de classificação")])])])]),a._v(" "),o("h3",{attrs:{id:"tarefa"}},[a._v("Tarefa")]),a._v(" "),o("p",[a._v("Nome da Tarefa")]),a._v(" "),o("h3",{attrs:{id:"aba-execucao"}},[a._v("Aba Execução")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Parâmetro")]),a._v(" "),o("th",[a._v("Detalhe")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[o("strong",[a._v("Atributo com Features")])]),a._v(" "),o("td",[a._v("Atributo(s) que será(ão) usado(s) para treinamento")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Atributo com o rótulo")])]),a._v(" "),o("td",[a._v("Atributo a ser classificado")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Atributos com a predição (novo)")])]),a._v(" "),o("td",[a._v("Atributo contendo a predição do modelo")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Pesos")])]),a._v(" "),o("td",[a._v("Peso do algoritmo em um Ensemble")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Iterações máximas")])]),a._v(" "),o("td",[a._v("Número máximo de iterações (>=0)")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Aplicar padronização")])]),a._v(" "),o("td",[a._v("Indica se é para padronizar os atributos antes de treinar o modelo")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Limiar para a classificação binária")])]),a._v(" "),o("td",[a._v("Ajustar a probabilidade de previsão de cada classe")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Tolerância para a convergência")])]),a._v(" "),o("td",[a._v("Tolerância de convergência para algoritmos iterativos (>=0.0)")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Atributo com pesos")])]),a._v(" "),o("td",[a._v("Atributos passados ao modelo que terão um peso diferenciado")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Métrica para validação cruzada")])]),a._v(" "),o("td",[a._v("Define a métrica utilizada dentro da validação cruzada (se aplicável) para avaliar o modelo de classificação dentro das k partições")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Atributo com o número da partição (fold)")])]),a._v(" "),o("td",[a._v("Define o atributo a ter o número da partição para realizar uma validação cruzada (se aplicável)")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Usar classificação um-contra-todos (one-vs-rest)")])]),a._v(" "),o("td",[a._v("Se selecionado, o algoritmo realizará classificação um-contra-todos ao invés de classificação tradicional (neste caso, binária)")])])])]),a._v(" "),o("p",[o("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-aparencia.html"}},[a._v("Aba Aparência")])],1),a._v(" "),o("p",[o("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-resultados.html"}},[a._v("Aba Resultados")])],1),a._v(" "),o("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),o("p",[o("strong",[a._v("Objetivo:")]),a._v(" Utilizar o modelo do Support Vector Machines ("),o("em",[a._v("SVM")]),a._v(") para classificar se uma pessoa possui ou não a doença diabetes"),o("br"),a._v(" "),o("strong",[a._v("Base de Dados:")]),a._v(" "),o("RouterLink",{attrs:{to:"/pt-br/spark/base-de-dados/#pima-indians-diabetes"}},[a._v("Pima Indians Diabetes")])],1),a._v(" "),o("p",[o("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/classificacao_support_vector_machines/image4.png",alt:"Fluxo de trabalho - Ler dados"}})]),a._v(" "),o("ol",[o("li",[o("p",[a._v("Leia a base de dados por meio da operação "),o("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Utilize a operação "),o("RouterLink",{attrs:{to:"/pt-br/spark/pre-processamento-de-dados/amostragem-divisao-percentual.html"}},[a._v("Divisão percentual")]),a._v(" para dividir a base de dados em treino e teste. No parâmetro "),o("strong",[a._v("Percentual")]),a._v(", calibre-o utilizando 50% dos dados para treinar (1.ª parte) e 50% para testar (2.ª parte).")],1)]),a._v(" "),o("li",[o("p",[a._v("Na operação "),o("strong",[a._v("Support Vector Machines (SVM)")]),a._v(", selecione "),o("em",[a._v("“Age”")]),a._v(", "),o("em",[a._v("“BMI”")]),a._v(", "),o("em",[a._v("“BloodPressure”")]),a._v(", "),o("em",[a._v("“DiabetesPedigreeFunction”")]),a._v(", "),o("em",[a._v("“Glucose”")]),a._v(", "),o("em",[a._v("“Insulin”")]),a._v(", "),o("em",[a._v("“Pregnancies”")]),a._v(" e "),o("em",[a._v("“SkinThickness”")]),a._v(" no campo "),o("strong",[a._v("Atributos com features")]),a._v(". Selecione "),o("em",[a._v("“class”")]),a._v(" no campo "),o("strong",[a._v("Atributo com o rótulo")]),a._v(" e preencha "),o("em",[a._v("“resultado”")]),a._v(" no campo Atributo com a predição (novo). Deixe os demais parâmetros inalterados."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/classificacao_support_vector_machines/image3.png",alt:"Formulario Support Vector Machines - parte 1"}}),a._v(" "),o("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/classificacao_support_vector_machines/image1.png",alt:"Formulario Support Vector Machines - parte 2"}})])]),a._v(" "),o("li",[o("p",[a._v("Na operação "),o("RouterLink",{attrs:{to:"/pt-br/spark/modelo-e-avaliacao/aplicar-modelo.html"}},[a._v("Aplicar Modelo")]),a._v(", selecione "),o("em",[a._v("“Age”")]),a._v(", "),o("em",[a._v("“BMI”")]),a._v(", "),o("em",[a._v("“BloodPressure”")]),a._v(", "),o("em",[a._v("“DiabetesPedigreeFunction”")]),a._v(", "),o("em",[a._v("“Glucose”")]),a._v(", "),o("em",[a._v("“Insulin”")]),a._v(", "),o("em",[a._v("“Pregnancies”")]),a._v(" e "),o("em",[a._v("“SkinThickness”")]),a._v(" no campo "),o("strong",[a._v("Atributos com features")]),a._v(" e preencha "),o("em",[a._v("“resultado”")]),a._v(" no campo "),o("strong",[a._v("Nome do novo atributo (herdado do modelo)")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Na operação "),o("RouterLink",{attrs:{to:"/pt-br/spark/modelo-e-avaliacao/avaliar-modelo.html"}},[a._v("Avaliar Modelo")]),a._v(", selecione "),o("em",[a._v("“resultado”")]),a._v(" no campo "),o("strong",[a._v("Atributo usado para predição")]),a._v(". Selecione "),o("em",[a._v("“class”")]),a._v(" no campo "),o("strong",[a._v("Atributo usado como label")]),a._v(" e a métrica "),o("em",[a._v("“F1”")]),a._v(" como "),o("strong",[a._v("Métrica para avaliação")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Execute o fluxo e visualize o resultado, i.e., a matriz de confusão gerada para as predições do modelo de árvore de decisão e, consequentemente, a tabela representando as métricas de classificação (derivadas da matriz de confusão)."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/classificacao_support_vector_machines/image2.png",alt:"Gráfico - resultado"}}),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/classificacao_support_vector_machines/image5.png",alt:"Tabela - resultado"}})])])]),a._v(" "),o("hr"),a._v(" "),o("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);e.default=t.exports}}]);