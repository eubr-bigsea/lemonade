(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{288:function(a,e,o){"use strict";o.r(e);var r=o(0),t=Object(r.a)({},(function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[o("h1",{attrs:{id:"perceptron-multicamadas"}},[a._v("Perceptron multicamadas")]),a._v(" "),o("p",[a._v("O classificador Perceptron Multicamadas (Multi-Layer perceptron) baseia-se em abstrações de redes neurais encontradas no cérebro. Esse classificador cria um modelo com camadas de neurônios conectadas, considerando que cada camada possui diversos neurônios")]),a._v(" "),o("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Entrada")]),a._v(" "),o("th",[a._v("Saída")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[a._v("Dados utilizados para treinar o modelo")]),a._v(" "),o("td",[a._v("Dados de saída e modelo do algoritmo de classificação")])])])]),a._v(" "),o("h3",{attrs:{id:"tarefa"}},[a._v("Tarefa")]),a._v(" "),o("p",[a._v("Nome da Tarefa")]),a._v(" "),o("h3",{attrs:{id:"aba-execucao"}},[a._v("Aba Execução")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Parâmetro")]),a._v(" "),o("th",[a._v("Detalhe")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[o("strong",[a._v("Atributo(s) previsor(es)")])]),a._v(" "),o("td",[a._v("Atributo(s) que será(ão) usado(s) para treinamento")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Atributo com o rótulo")])]),a._v(" "),o("td",[a._v("Atributo a ser classificado")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Atributos com a predição (novo)")])]),a._v(" "),o("td",[a._v("Atributo contendo a predição do modelo")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Pesos")])]),a._v(" "),o("td",[a._v("Pesos do algoritmo em um ensemble")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Tamanho do bloco")])]),a._v(" "),o("td",[a._v("Tamanho do bloco para empilhar os dados de entrada em matrizes para acelerar a computação. Os dados são empilhados por partições. Se o tamanho do bloco é maior que os dados restantes em uma partição, ele é ajustado ao tamanho desses dados. Tamanho recomendado é entre 10 e 1000. O seu valor padrão é 128")])]),a._v(" "),o("tr",[o("td",[o("strong",[o("a",{attrs:{href:"#camada"}},[a._v("Camada")])])]),a._v(" "),o("td",[a._v("Indica o número de camadas e a quantidade de neurônios por camada (de entrada, escondidas e de saída). Esses valores devem ser separados por vírgulas (e.g., “4,2,4” indica que existirá quatro neurônios na primeira camada, dois na camada escondida, e quatro na camada de saída). Obrigatoriamente, a primeira e última camada devem conter um número de neurônios igual ao número de atributos da base de dados")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Iterações máximas")])]),a._v(" "),o("td",[a._v("Determina o número máximo de iterações a serem realizadas durante o treinamento do modelo, a fim de limitar um treinamento excessivo resultando em pouca generalização do modelo")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Semente")])]),a._v(" "),o("td",[a._v("Semente usada para a geração de números aleatórios durante a inicialização do modelo")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Solucionador")])]),a._v(" "),o("td",[a._v("Solucionador a ser utilizado pelo modelo para otimização. As opções são gd (minibatch gradient descent) e l-bfgs")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Métrica para validação cruzada")])]),a._v(" "),o("td",[a._v("Define a métrica utilizada dentro da validação cruzada (se aplicável) para avaliar o modelo de classificação dentro das k partições")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Atributo com o número da partição (fold)")])]),a._v(" "),o("td",[a._v("Define o atributo a ter o número da partição para realizar uma validação cruzada (se aplicável)")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Usar classificação um-contra-todos (one-vs-rest)")])]),a._v(" "),o("td",[a._v("Se selecionado, o algoritmo realizará classificação um-contra-todos ao invés de classificação tradicional (neste caso, binária ou multi-classe)")])])])]),a._v(" "),o("p",[o("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-aparencia.html"}},[a._v("Aba Aparência")])],1),a._v(" "),o("p",[o("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-resultados.html"}},[a._v("Aba Resultados")])],1),a._v(" "),o("h2",{attrs:{id:"definicoes"}},[a._v("Definições")]),a._v(" "),o("h3",{attrs:{id:"camada"}},[a._v("Camada")]),a._v(" "),o("p",[a._v("Esse classificador utiliza a função (de ativação) logística nos neurônios em camadas comuns (intermediárias) e a função softmax nos neurônios na camada de saída.")]),a._v(" "),o("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),o("p",[o("strong",[a._v("Objetivo:")]),a._v(" Utilizar o modelo do Perceptron Multicamadas para classificar a espécie da planta Íris."),o("br"),a._v(" "),o("strong",[a._v("Base de Dados:")]),a._v(" "),o("RouterLink",{attrs:{to:"/pt-br/spark/base-de-dados/#iris"}},[a._v("Íris")])],1),a._v(" "),o("p",[o("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/classificacao_perceptron_multicamadas/image4.png",alt:"FLuxo de trabalho - Ler dados"}})]),a._v(" "),o("ol",[o("li",[o("p",[a._v("Leia a base de dados Irís por meio da operação "),o("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Utilize a operação "),o("RouterLink",{attrs:{to:"/pt-br/spark/pre-processamento-de-dados/representacao-de-atributos-converter-categorico-para-numerico.html"}},[a._v("Converter categórico para numérico")]),a._v(" para converter os valores do atributo classe em valores numéricos. Para isso, utilize "),o("em",[a._v("“class”")]),a._v(" no campo "),o("strong",[a._v("Atributos")]),a._v(", "),o("em",[a._v("String")]),a._v(" como "),o("strong",[a._v("Tipo de indexador")]),a._v(" e "),o("em",[a._v("“class_index”")]),a._v(" como "),o("strong",[a._v("Nome para novo(s) atributos indexados")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Utilize a operação "),o("RouterLink",{attrs:{to:"/pt-br/spark/pre-processamento-de-dados/amostragem-divisao-percentual.html"}},[a._v("Divisão percentual")]),a._v(" para dividir a base de dados em treino e teste. No parâmetro "),o("strong",[a._v("Pesos")]),a._v(", calibre-o utilizando 50% dos dados para treinar e 50% para testar.")],1)]),a._v(" "),o("li",[o("p",[a._v("Na operação "),o("strong",[a._v("Perceptron Multicamadas")]),a._v(", selecione "),o("em",[a._v("“petal_length”")]),a._v(", "),o("em",[a._v("“petal_width”")]),a._v(", "),o("em",[a._v("“sepal_length”")]),a._v(" e "),o("em",[a._v("“sepal_width”")]),a._v(" no campo "),o("strong",[a._v("Atributo(s) previsor(es)")]),a._v(". Selecione "),o("em",[a._v("“class_index”")]),a._v(" no campo "),o("strong",[a._v("Atributo com o rótulo")]),a._v(" e preencha ‘resultado’ no campo "),o("strong",[a._v("Atributo com a predição (novo)")]),a._v(". Além disso, indique que será utilizada uma camada de entrada, uma escondida e uma de saída, preenchendo "),o("strong",[a._v("Camadas")]),a._v(" com "),o("em",[a._v("“4,20,4”")]),a._v(". Isso indicará que irão existir quatro neurônios na primeira camada (iguais aos números de atributos da base Íris), 20 na camada escondida, e quatro na de saída (também iguais aos números de atributos da base Íris). Deixe os demais parâmetros inalterados."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/classificacao_perceptron_multicamadas/image3.png",alt:"Formulário Perceptron Multicamadas - parte 1"}}),a._v(" "),o("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/classificacao_perceptron_multicamadas/image2.png",alt:"Formulário Perceptron Multicamadas - parte 2"}})])]),a._v(" "),o("li",[o("p",[a._v("Na operação "),o("RouterLink",{attrs:{to:"/pt-br/spark/modelo-e-avaliacao/aplicar-modelo.html"}},[a._v("Aplicar Modelo")]),a._v(", selecione "),o("em",[a._v("“petal_length”")]),a._v(", "),o("em",[a._v("“petal_width”")]),a._v(", "),o("em",[a._v("“sepal_length”")]),a._v(" e "),o("em",[a._v("“sepal_width”")]),a._v(" no campo "),o("strong",[a._v("Atributo(s) previsor(es)")]),a._v(" e preencha "),o("em",[a._v("“resultado”")]),a._v(" no campo "),o("strong",[a._v("Nome do novo atributo")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Na operação "),o("RouterLink",{attrs:{to:"/pt-br/spark/modelo-e-avaliacao/avaliar-modelo.html"}},[a._v("Avaliar Modelo")]),a._v(", selecione "),o("em",[a._v("“resultado”")]),a._v(" no campo "),o("strong",[a._v("Atributo usado para predição")]),a._v(". Selecione "),o("em",[a._v("“class_index”")]),a._v(" no campo "),o("strong",[a._v("Atributo usado como label")]),a._v(" e a métrica "),o("em",[a._v("“F1”")]),a._v(" como "),o("strong",[a._v("Métrica para avaliação")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Execute o fluxo e visualize o resultado, i.e., a matriz de confusão gerada para as predições do modelo de árvore de decisão e, consequentemente, a tabela representando as métricas de classificação (derivadas da matriz de confusão)."),o("br"),a._v(" "),o("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/classificacao_perceptron_multicamadas/image1.png",alt:"Gráfico - resultado"}}),a._v(" "),o("img",{attrs:{src:"/img/spark/aprendizado_de_maquina/classificacao_perceptron_multicamadas/image5.png",alt:"Tabela - resultado"}})])])]),a._v(" "),o("hr"),a._v(" "),o("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);e.default=t.exports}}]);