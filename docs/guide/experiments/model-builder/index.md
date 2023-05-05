# Construção de modelos de aprendizado de máquina:

Nesse módulo, o usuário poderá construir modelos de aprendizado de máquina a partir dos dados tratados no módulo 1. O foco é permitir a análise de métricas relacionadas à construção do modelo. A partir de uma tarefa (o que se deseja inferir ou obter), o usuário poderá escolher um ou mais algoritmos a serem executados para a realização da tarefa. Por sua vez, para cada algoritmo, conjuntos de parâmetros de execução e métricas de avaliação poderão ser definidos. Ao confirmar a criação do modelo de aprendizado de máquina, o Data Experiments irá construir as várias opções de modelos através do Lemonade, apresentando, para cada um, os resultados das métricas previamente definidas. Dessa forma, o usuário poderá escolher quais modelos são os mais adequados segundo seus critérios. Por exemplo, para uma tarefa de classificação para identificar se há indícios de fraude em uma licitação, o usuário poderia escolher algoritmos como Naive Bayes, SVM, Decision Tree, Boosted Trees, etc., parametrizando cada um e decidindo comparar as métricas de acurácia, precisão, revocação, F1, área sobre a curva ROC ou mesmo métricas que fazem parte da pesquisa deste projeto, como, por exemplo, modelos que sejam mais fáceis de ser interpretados. 

Em suma, esses módulos visam simplificar a construção dos fluxos e também reduzir a “impedância” que existe quando o usuário cria um novo fluxo de trabalho. Uma das grandes dificuldades é conseguir sair da “tela em branco” e por isso o retorno rápido do resultado para o usuário poderá quebrar a barreira inicial. 


O Model Builder (construtor de modelos) é a função do Data Experiments que permite definir experimentos usando algoritmos de aprendizado de máquina, que, por sua vez, geram modelos. Atualmente, são suportados 3 tipos de tarefas de aprendizado de máquina, 2 preditivas/supervisionadas (classificação e regressão) e uma descritiva/não-supervisionada (agrupamento/clustering). Na tela inicial de Experimentos (Figura 9), deve ser escolhida a opção 2, “Criar modelo de aprendizado de máquina”.


Figura 9: Opções do Data Experiments

Há várias definições de passos para a construção de um modelo de aprendizado de máquina. Para o Model Builder, serão considerados os seguintes, sendo que sua responsabilidade inicia-se a partir do passo 3 e indo até o passo:
Obtenção dos dados;
Preparação dos dados (por exemplo, usando o Data Explorer, fluxo do Lemonade ou quaisquer outras ferramentas);
Definição da tarefa a ser realizada e, consequentemente, o tipo de modelo a ser gerado. Existem diferentes modelos para diferentes propósitos. Ao selecionar um modelo, é necessário certificar-se de que ele atende ao objetivo que se deseja alcançar (por exemplo, segmentar os licitantes em grupos, identificar fraudes ou estimar valores de uma licitação). Também é necessário saber quais preparações são necessárias para o modelo (transformações, formatos, recursos de hardware/software, escala, volume) e também como o modelo será avaliado (usando métricas de desempenho ou uma combinação com outros critérios, como interpretabilidade ou justiça). O modelo mais complexo nem sempre significa que ele seja o melhor modelo. Alguns algoritmos normalmente usados em aprendizado de máquina incluem regressão linear, regressão logística, árvores de decisão, K-means, análise de componentes principais (Principal Component Analysis - PCA), Support Vector Machines (SVM), Naïve Bayes, Random Forest e redes neurais. De todos esses, apenas redes neurais não são suportadas na versão atual do Model Builder;
Treinamento do algoritmo e criação de modelos: essa é a parte central do processo. O objetivo é usar dados de entrada como treino e, de forma incremental, ir melhorando as predições dos modelos gerados. A cada iteração, vão se atualizando os parâmetros, pesos e vieses. Em um processo de aprendizado de máquina supervisionado, o modelo é construído usando-se dados rotulados como entrada, enquanto no aprendizado não-supervisionado, as inferências são obtidas a partir de dados não-rotulados;
Avaliação do modelo: após treinar o algoritmo e obter o modelo, vem a sua avaliação. É realizado o teste do aprendizado usando-se um conjunto de dados de controle (dados de teste, não usados durante o passo de treinamento) para avaliar como o modelo performa. A aplicação do modelo aos dados de teste pode ser uma representação de como o modelo funciona com dados do mundo real, podendo ter um bom ou mau desempenho. Quanto maior o número de variáveis no mundo real, maior deve ser o volume de dados de treino e teste. A avaliação é feita através de uma métrica, escolhida de acordo com o tipo de tarefa sendo realizada. Por exemplo, para regressão, podem ser escolhidas métricas associadas ao erro e, nesse caso, quanto menor o valor da métrica, melhor. Já para a classificação, se for escolhida uma métrica de desempenho, como acurácia ou métrica F1, o ideal é maximizar seu valor;
Otimização dos parâmetros: após a avaliação do modelo, ajustes podem ser feitos nos parâmetros a fim de melhorar o aprendizado. Em geral, múltiplas iterações dos passos 4 a 6 são realizadas. A cada nova iteração, um conjunto de parâmetros pode ser usado e testado, com o resultado da avaliação sendo comparado com as iterações anteriores. Aumentar o número de iterações pode levar à obtenção de resultados melhores, mas também consome mais tempo e recursos da infraestrutura. Recomenda-se que seja definido um ponto de corte, onde o resultado de algum modelo seja considerado bom e que não haja melhorias significativas após novas iterações;
Predição: é a utilização do modelo em dados do mundo real. Não está no escopo do Model Builder, mas o Lemonade tem suporte à implantação de modelos de aprendizado de máquina em produção para a predição, utilizando tecnologias como MLeap e Kubernetes.

2.3.1. Definição da tarefa a ser realizada
Considerando que o usuário já sabe o tipo de tarefa que deve ser realizada, o Model Builder disponibiliza 3 opções para ele: classificação, regressão e agrupamento, como pode ser visto na Figura 10.


Figura 10: Tipos de tarefas disponíveis no Model Builder

Cada uma das opções leva a telas parecidas à da Figura 11. Na Figura 11, o item 1 é o nome a ser dado ao experimento. Como sempre, deve ser usado um nome que represente o propósito do fluxo e que seja fácil de localizar na listagem. No número 2, é escolhida a fonte de dados. Essa fonte de dados será dividida em duas partes: treino e teste. A proporção da divisão em geral é 70-30% ou 80-20% e pode ser configurada pelo usuário. O Model Builder não suporta ainda que sejam usadas fontes de dados diferentes para o treino e teste.

 
Figura 11: Opções para a criação do novo fluxo do Model Builder

Para os casos de aprendizado supervisionado (classificação e regressão), é necessário informar o nome do atributo usado como alvo/rótulo (label), como no item 3. Para aprendizado supervisionado (agrupamento), o campo alvo não aparece.
As opções do item 4 definem como o fluxo do Model Builder será criado inicialmente. São escolhas-padrão usadas durante a criação, mas que poderão ser alteradas posteriormente. Dependendo da escolha, alguns algoritmos e parâmetros já vêm configurados no fluxo. As opções são:
Protótipo rápido: escolhe um conjunto de opções que usa algoritmos computacionalmente pouco intensivos, com menos iterações. Ideal para criar um modelo rápido e para começar a entender o problema;
Desempenho: escolhe um conjunto de opções que usa algoritmos computacionalmente mais intensivos (em geral, algoritmos que combinam outros algoritmos), bem mais iterações. Ideal para o caso onde você quer obter o melhor valor da métrica;
Criar modelos interpretáveis: escolhe um conjunto de opções que usa algoritmos que são mais fáceis de se entender as decisões tomadas. Exemplos incluem regressões linear e logística e árvores de decisão. Essa opção é ideal quando é importante ter uma clara visão das decisões, escolhas e vieses dos modelos. Também é interessante para atender às demandas de transparência e interpretabilidade (ver entregável P01.8 para uma discussão mais completa);
Escolha os algoritmos: nenhuma opção vem definida, você começa do zero. Ideal quando você não acha as opções anteriores interessantes e prefere escolher cada item por si só.
Importante: as opções em cada caso ainda estão sendo avaliadas, a fim de obter o melhor resultado e poderão sofrer alterações nas versões futuras do Lemonade.

2.3.2. Entendendo o Model Builder e especificando os dados de entrada
A Figura 12 mostra a tela inicial do Model Builder. Nessa figura, o número 1 mostra o nome do fluxo, definido anteriormente, mas que pode ser alterado a qualquer momento. O número 2 mostra os botões para salvar o fluxo e iniciar o treinamento. O fluxo não é salvo automaticamente, assim, é recomendável que de tempos em tempos você salve-o. O botão Treinar inicia o treinamento. Mais detalhes na seção 2.3.10.


Figura 12: Tela do Model Builder com a opção para escolha dos dados de entrada, amostragem, nome do fluxo e opções de salvar e iniciar o treino

Ainda na Figura 12, o número 3 mostra a aba de parâmetros. Duas abas estão disponíveis: Parâmetros e Resultados. Nesta seção, serão apresentados os parâmetros, enquanto a discussão sobre os resultados será abordada na seção 2.3.11.
O número 4 mostra a lista de categorias de parâmetros, organizada em 2 níveis. Cada categoria de parâmetros tem sua própria tela, discutidas nas seções subsequentes. No exemplo, a categoria selecionada é a de Dados, que tem seus parâmetros exibidos no item 5 da imagem. Parâmetros disponíveis:
Fonte de dados: permite alterar a fonte de dados anteriormente informada, usada para treino e teste do modelo;
Amostragem: como será a amostra dos dados da fonte de dados escolhida anteriormente. Opções válidas:
Sem amostragem, usar todos os registros;
Amostrar um percentual aleatório dos dados;
Amostrar N registros aleatórios a partir dos dados;
Extrair os primeiros N registros dos dados.
Dependendo da opção escolhida para a amostragem, poderão aparecer três novos parâmetros: o percentual a ser usado, o número N de registros e, para o caso de amostras aleatórias, a semente de números aleatórios a ser usada.
Importante: é possível alterar a fonte de dados, mas ao fazer isso, você terá que rever o fluxo, especialmente a lista de atributos que está sendo usada.

2.3.3. Divisão entre treino e teste
A divisão entre treino e teste divide a fonte de dados usando uma de duas estratégias disponíveis (ver Figura 13). Nesse caso, é necessário informar uma razão entre treino e teste. É um valor entre 0 e 1 (não-inclusos). Por exemplo, 0,5 significaria que 50% dos dados são usados para treino e outros 50% para teste. A semente para números aleatórios é usada para aleatorizar os dados que vão em cada divisão e permite reproduzir o experimento, caso um mesmo valor seja informado.


Figura 13: Opções para a divisão entre treino e teste no Model Builder

A outra estratégia é a validação cruzada (experimental). Nesse caso, é solicitado o número de folds (divisões). Em geral, trabalha-se com 10 folds. Nessa estratégia, os dados são divididos em N folds e são realizadas N iterações, portanto, gerando N modelos. A cada iteração, cada fração 1/N dos dados é usada uma única vez como dados de teste e as restantes (N-1)/N frações são usadas como dados de treino. Com mais iterações e variações dos dados de entrada, o experimento pode obter melhores resultados. No entanto, como é de se esperar, mais iterações consomem mais tempo e recursos de hardware.

2.3.4. Tarefa e métrica
Nessa categoria de parâmetros, é possível mudar o tipo de tarefa a ser realizada e também a métrica a ser avaliada (ver Figura 14). Não é recomendável mudar o tipo de tarefa para um fluxo existente, pois essa funcionalidade não foi testada no Lemonade (exceto alterar o tipo de classificação binária para multiclasse e vice-versa). Já a métrica a ser utilizada pode ser alterada sem maiores complicações.


Figura 14: Opções para a o tipo de tarefa e métrica a ser considerada durante a avaliação dos modelos

2.3.5. Seleção de atributos
A opção de seleção de atributos permite escolher quais serão preditivos (features) e qual será o alvo (target). Idealmente, espera-se que os atributos já tenham sido processados anteriormente, seja usando o Data Explorer, um fluxo do Lemonade ou alguma outra ferramenta. No entanto, ainda é possível fazer alguns ajustes nos atributos, especialmente aqueles relacionados ao tratamento do dado numérico (como normalização, por exemplo), alteração de escala e tratamento de dados ausentes.


Figura 15: Definição dos atributos usados para o treino

Como pode ser visto na Figura 15, o formulário é formado por 4 partes principais:
Lista de atributos: permite selecionar (ligar/desligar) os atributos que serão usados para o experimento;
Definição de como o atributo será usado. Se usado, ele pode ser um atributo preditor (feature) ou um alvo. Apenas um atributo pode ser marcado como alvo no experimento;
Definição do tipo do atributo: permite sobrescrever a definição tipo do atributo;
Opções para tratamento do atributo. De acordo com a opção escolhida para o tipo (item 3), as opções de tratamento e valores ausentes vão variar:
Dados numéricos:
Manter como está: não fazer nada de transformação;
Binarizar de acordo com determinado valor (requer que seja informado esse limiar em “Limiar para a binarização”): basicamente, atribui o valor 0 (zero) para o atributo se seu valor for menor que o limiar definido e 1 (um) se maior ou igual;
Dividir em quantis: permite dividir os valores do atributo em quantis. O número de quantis deve ser informado no item específico (aparece ao escolher essa opção);
Divisão em buckets: permite dividir os valores em buckets (“baldes”), ou seja, grupos de valores organizados segundo faixas de valores. As definições das faixas devem ser informadas na caixa de texto correspondente. É necessário informar o texto -inf e inf, representando valores infinitos (negativo e positivo), como por exemplo: -inf,1,10,100,inf. No exemplo, são criados os buckets de [-inf, 1[, [1, 10[, [10,100[ e [100, inf] ([-inf, 1[ significa de - infinito até 1, exclusive);
Para tratamento de dados ausentes, têm-se as seguintes opções: substituir pela média, substituir pela mediana, substituir por valor constante ou remover o registro inteiramente.
Dados categóricos:
Dummy encoding (indexação): permite indexar os dados categóricos, gerando um número sequencial para cada novo valor encontrado;
One hot encoder: permite codificar os valores categóricos usando one hot encoder;
Para tratamento de dados ausentes, têm-se as seguintes opções: substituir por valor constante ou remover o registro inteiramente.
Dados textuais (aplica uma ou mais transformações):
Tokenizar e hash;
Tokenizar, remover stop words e hash;
Vetor de contagem;
Vetor usando word2vec;
Para tratamento de dados ausentes, têm-se as seguintes opções: substituir por valor constante ou remover o registro inteiramente.

2.3.6. Redução de features (atributos) usando o PCA
O Model Builder permite reduzir a quantidade de atributos usados para o treino através do uso do PCA (Principal Component Analysis). É uma técnica frequentemente usada quando há muitos atributos correlacionados e que não são tão úteis para o desempenho do modelo, podendo ser retirados sem grandes perdas e diminuindo o tempo de processamento.


Figura 16: Opção de redução de atributos usando PCA

Como visto na Figura 16, as únicas opções para a parte de redução de atributos é a escolha do método (atualmente, só o PCA é suportado) e, para o PCA, a quantidade de componentes que serão usados. Importante: o uso de técnicas como PCA pode diminuir a interpretabilidade do modelo.

2.3.7. Escolha dos algoritmos e hiperparâmetros
Cada tipo de tarefa de aprendizado de máquina (classificação, regressão, agrupamento, etc) terá seu próprio conjunto de algoritmos disponíveis. Por exemplo, para a regressão, pode ser visto na Figura 17 que o Lemonade suporta 6 algoritmos diferentes (justamente aqueles suportados pelo Apache Spark). Não cabe a este documento detalhar cada um dos algoritmos e seus parâmetros. Para uma referência completa, consulte a documentação do Apache Spark. 


Figura 17: Algoritmos e hiperparametrização

Ainda na Figura 17, observa-se que os números 2, 3 e 4 mostram 3 tipos de campos de entrada que o usuário pode interagir:
O número 2 mostra opções do tipo “liga/desliga”. Nesse caso, cada valor pode ser escolhido individualmente. Valores desligados não farão parte do conjunto de valores dos hiperparâmetros;
O número 3 mostra um campo de entrada para a especificação de uma faixa de valores. É usado quando se deseja criar modelos variando-se um determinado hiperparâmetro em uma faixa de valores, por exemplo, entre [0.0, 1.0]. Você tem que informar os valores inicial e final da faixa (ambos são inclusivos) e também uma distribuição que será usada. A distribuição pode ser uniforme ou log uniforme. Dependendo da estratégia de geração da grade (seção 2.3.8):
Se a estratégia for grade de parâmetros, você terá que informar a quantidade de itens que serão gerados para a faixa. Por exemplo, para a faixa [0.0, 1.0], se a quantidade for igual a 11, teremos os valores {0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0};
Se a estratégia for igual a grade aleatória, você não precisa informar aqui a quantidade de itens a serem gerados. A quantidade é especificada em outro ponto, explicado na seção a seguir. 
O número 4 mostra um campo de entrada para a especificação de um conjunto de valores a serem usados. Isso significa que o usuário deve informar cada possível valor para o hiperparâmetro a ser usado no experimento. Por exemplo, {2, 4, 8, 16, 20}.

2.3.8. Forma de geração da grade de parâmetros

Figura 18: Escolha da estratégia e demais opções para a geração da grade de parâmetros

A escolha da estratégia para geração e opções para a grade de parâmetros determina a quantidade de modelos que serão treinados pelo experimento. Dependendo da escolha dos hiperparâmetros (seção 2.3.7), o número de modelos pode fazer com que o experimento leve muito tempo para ser executado. É importante entender a diferença entre as estratégias e os impactos de cada uma. Em caso de dúvidas, recomenda-se definir uma quantidade máxima de iterações que serão executadas. As estratégias são:
Grade (grid): estratégia de otimização de parâmetros onde, para cada hiperparâmetro, é especificada um conjunto ou faixa de valores a serem testados (seção 2.3.7). Uma vez definidos os valores, serão testadas todas as suas possíveis combinações, em uma grade discreta de pontos. Caso alguma combinação de parâmetros não seja suportada, a construção do modelo para tal combinação gera um erro e isso é reportado nos resultados, sem interromper a busca pela grade. A grade pode ser explorada em ordem, ou aleatorizada (opção “Aleatorizar a busca na grade”, como definição de semente em “Semente para números aleatórios”). Em geral, aleatorizar a grade, em média, tende a encontrar os melhores pontos mais cedo, o que é interessante quando você quer interromper a busca (seja por limite de iterações ou por tempo). Se um número máximo de iterações for especificado, o experimento gera exatamente aquele número de modelos. Do contrário, será gerado um modelo para cada combinação válida dos hiperparâmetros;
Aleatório (random): busca pontos na grade, considerando a faixa dos hiperparâmetros como espaços contínuos (você deve especificar uma faixa de valores). Um ponto nesse espaço de hiperparâmetros é sorteado aleatoriamente e então testado. A busca aleatória por definição é infinita, portanto é obrigatório selecionar o número máximo de iterações a fim de interromper a busca.
Importante: cada algoritmo tem seus próprios hiperparâmetros. No fim, a quantidade de modelos gerados é a soma da quantidade de combinações geradas para os hiperparâmetros de cada algoritmo. Assim, por exemplo, um algoritmo A, com 2 hiperparâmetros com 2 valores cada, gera, numa estratégia de grade, 2 x 2 = 4 modelos. Se for usado um algoritmo B, com 1 hiperparâmetro com 6 valores, existem 1 x 6 = 6 modelos, totalizado, ao fim do experimento, 6 + 4 = 10 modelos treinados.
Como definir a melhor opção de estratégia está fora do escopo deste documento, mas, em geral, uma busca aleatória pode ter melhores resultados.


Figura 19: Comparação das estratégias de busca na grade de hiperparâmetros
Fonte: Bergstra, J., Bengio, Y.: Random search for hyper-parameter optimization. Journal of Machine Learning Research 13, 281–305 (2012).

2.3.9. Definição do ambiente de processamento
A escolha do cluster para execução do experimento usa as mesmas configurações de infraestrutura apresentadas em outras partes do Lemonade. Ao escolher o cluster, diferentes opções, como quantidade de máquinas, memória, CPU e outros recursos, podem ser alocados para executar o experimento. O cluster escolhido deve ser acordado com o administrador da infraestrutura.


Figura 20: Escolha do cluster para a execução do experimento

2.3.10. Iniciando o treinamento dos algoritmos
Para iniciar o treinamento dos algoritmos e geração dos modelos, basta clicar no botão Treinar, localizado no canto superior direito.

2.3.11. Entendendo os resultados
A Figura 21 mostra a tela de resultados de experimentos. Para abri-la, basta clicar a aba “Resultados” no Model Builder (número 1 na Figura 21). Do lado esquerdo, no número 2, podem ser vistos os resultados das execuções anteriores, mostrando o status final de execução e para cada algoritmo, qual foi o valor obtido para a métrica escolhida.


Figura 21: Tela de resultados do experimento no Model Builder

No número 3, pode ser visto qual algoritmo gerou o melhor modelo e com quais hiperparâmetros (número 4), segundo a métrica escolhida. Também há o valor obtido para a métrica e uma explicação, indicando se, para a métrica, valores mais altos ou mais baixos são melhores. Por exemplo, para regressão, métricas baseadas em erro, como raiz do erro quadrático médio, deseja-se diminuir o valor (menor é melhor). Já a métrica de coeficiente de determinação R2, o melhor é maximizá-la (maior é melhor).
O número 5 mostra o gráfico da métrica em função do tempo. Cada ponto é o resultado da avaliação de um modelo treinado. Ao passar o cursor do mouse por cima de um dos pontos, aparece a informação sobre qual algoritmo e quais hiperparâmetros foram usados em cada caso. O tempo não é acumulativo, portanto, permitindo comparar também os algoritmos segundo o tempo gasto de processamento. Tendo em mãos essas informações, o usuário pode escolher o melhor algoritmo segundo suas necessidades, coincidindo ou não com o melhor segundo a métrica.
O número 6 mostra a informação de percentual usado para o treino e teste e o número 7 mostra um relatório para cada modelo gerado (mesma informação do gráfico, mas dessa vez, na forma de tabela).


