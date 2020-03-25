const path = require("path");

module.exports = {
	base: '/',

	//html header
	head: [
		// ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css' }],
		// ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css' }],
		['link', { rel: 'icon', type: 'image/png', sizes:'96x96', href: '/img/logo.png' }]
	],
	//support languages
	locales: {
		'/pt-br/': {
			lang: 'pt-br',
			title: 'Documentação LEMONADE',
			description: 'Documentação LEMONADE'
		},
		'/en/': {
			lang: 'en-US',
			title: 'LEMONADE Documentation',
			description: 'LEMONADE Documentation'
		}
	},


	themeConfig: {
		isDevelopment: true,
		displayAllHeaders: false,

		//Header page logo
		logo: '/img/logo.png',
		
		//searchBox feature ?
		searchMaxSuggestions: 10,
		search: true,
		
		//support languages
		locales: {
			'/pt-br/' : {
				selectText: 'Idiomas',
				label: 'Português',
				nav: [
					{
						//text: '<label on navbar>', link: '<link to redirect>'
						text: 'Início', link: '/'
					},
					{ 
						text: 'Plataformas',
						items: [
							{ text: 'COMPSs', link: 'https://www.bsc.es/research-and-development/software-and-apps/software-list/comp-superscalar/documentation'},
							{ text: 'Keras', link: 'https://keras.io/'},
							{ text: 'Scikit-Learn', link: '/pt-br/sklearn/documentacao-geral/utilizacao-basica'},
							{ text: 'Spark', link: '/pt-br/spark/documentacao-geral/utilizacao-basica'}
						],
					}
				],
				sidebar: {
					'/pt-br/sklearn/': [
						{
							title: 'Primeiros Passos', // Titulo do menu lateral
							collapsable: true,
							sidebarDepth: 1,
							children:[ //arquivos markdown
								['documentacao-geral/utilizacao-basica.md', 'Utilização Básica'],
                                ['documentacao-geral/criacao-de-usuario.md', 'Criação de Usuário'],
                                ['documentacao-geral/importacao-da-base-de-dados.md', 'Importação da Base de Dados'],
                                ['documentacao-geral/edicao-dos-fluxos-de-trabalho.md', 'Edição dos Fluxos de Trabalho'],
                                ['documentacao-geral/criacao-de-um-experimento.md', 'Criação de um Experimento Preditivo'],
                                ['documentacao-geral/aba-aparencia.md', 'Aba Aparência'],
                                ['documentacao-geral/aba-resultados.md', 'Aba Resultados']
							]
						},
						{
						    title: 'Aprendizado de Máquina',
                            collapsable: true,
                            sidebarDepth: 1,
                            children: [
                                //['<route>', '<label to show on sidebar>']
                                ['aprendizado-de-maquina/regressor-linear-generalizado.md', 'Regressão - Regressor Linear Generalizado'],
                                ['aprendizado-de-maquina/regressor-linear.md', 'Regressão - Regressor Linear'],
                                ['aprendizado-de-maquina/regressao-isotonica.md', 'Regressão - Regressão Isotônica'],
                                ['aprendizado-de-maquina/regressao-random-forest.md', 'Regressão - Random Forest'],
                                ['aprendizado-de-maquina/regressao-gradient-boosted-tree.md', 'Regressão - Gradient Boosted Tree'],
                                ['aprendizado-de-maquina/anomalias-local-outlier-factor.md', 'Anomalias - Local Outlier Factor'],
                                ['aprendizado-de-maquina/classificacao-knn.md', 'Classificação - Voto por Maioria'],
                                ['aprendizado-de-maquina/classificacao-support-vector-machines.md', 'Classificação - Support Vector Machines'],
                                ['aprendizado-de-maquina/classificacao-regressao-logistica.md', 'Classificação - Regressão Logística'],
                                ['aprendizado-de-maquina/classificacao-random-forest.md', 'Classificação - Random Forest'],
                                ['aprendizado-de-maquina/classificacao-perceptron-multicamadas.md', 'Classificação - Perceptron Multicamadas'],
                                ['aprendizado-de-maquina/classificacao-naive-bayes.md', 'Classificação - Naïve-Bayes'],
                                ['aprendizado-de-maquina/classificacao-gradient-boosted-tree.md', 'Classificação - Gradient Boosted Tree'],
                                ['aprendizado-de-maquina/classificacao-arvore-de-decisao.md', 'Classificação - Árvore de Decisão'],
                                ['aprendizado-de-maquina/associacao-regras-de-associacao.md', 'Associação - Regras de Associação'],
                                ['aprendizado-de-maquina/associacao-mineracao-de-sequencias.md', 'Associação - Mineração de Sequências'],
                                ['aprendizado-de-maquina/associacao-mineracao-de-itemsets-frequentes.md', 'Associação - Mineração de Itemsets Frequentes'],
                                ['aprendizado-de-maquina/agrupamento-mistura-de-gaussianas.md', 'Agrupamento - Mistura de Gaussianas'],
                                ['aprendizado-de-maquina/agrupamento-k-means.md', 'Agrupamento - K-Means'],
    						]
						},
						{
                            title: 'Avançado',
                            collapsable: true,
                            sidebarDepth: 1,
                            children: [
                            //['<route>', '<label to show on sidebar>']
                                ['avancado/executar-comandos-sql.md', 'Executar Comandos SQL'],
                                ['avancado/executar-codigo-python.md', 'Executar Código Python']
                            ]
                        },
                        {
                        	title: 'Base de Dados',
                        	collapsable: true,
                        	sidebarDepth: 1,
                        	children: [
                        	//['<route>', '<label to show on sidebar>']
                        		['base-de-dados/', 'Base de Dados']
                        	]
                        },
                        {
                        	title: 'Entrada e Saída',
                        	collapsable: true,
                        	sidebarDepth: 1,
                        	children: [
                        		//['<route>', '<label to show on sidebar>']
                        		['entrada-e-saida/salvar-modelo.md', 'Salvar Modelo'],
                        		['entrada-e-saida/salvar-dados.md', 'Salvar Dados'],
                        		['entrada-e-saida/ler-dados.md', 'Ler Dados'],
                        		['entrada-e-saida/carregar-modelo.md', 'Carregar Modelo']
                        	]
                        },
                        {
                        	title: 'Manipulação de Dados',
                        	collapsable: true,
                        	sidebarDepth: 1,
                        	children: [
                        		//['<route>', '<label to show on sidebar>']
                        		['manipulacao-de-dados/tratar-dados-ausentes.md', 'Tratar Dados Ausentes'],
                        		['manipulacao-de-dados/selecionar-atributos.md', 'Selecionar Atributos'],
                        		['manipulacao-de-dados/juncao.md', 'Junção'],
                        		['manipulacao-de-dados/interseccao.md', 'Intersecção'],
                        		['manipulacao-de-dados/filtrar-por-funcao.md', 'Filtrar por Função'],
                        		['manipulacao-de-dados/coluna-substituir-valor.md', 'Coluna - Substituir Valor'],
                        		['manipulacao-de-dados/coluna-ordenar.md', 'Coluna - Ordenar'],
                        		['manipulacao-de-dados/coluna-adicionar-nova.md', 'Coluna - Adicionar Nova(s)'],
                        		['manipulacao-de-dados/coluna-diferenca.md', 'Coluna - Diferença'],
                        		['manipulacao-de-dados/linha-remover-duplicadas.md', 'Linha - Remover Duplicadas'],
                        		['manipulacao-de-dados/linha-agrupar-por-funcao.md', 'Linha - Agrupar por Função'],
                        		['manipulacao-de-dados/linha-adicionar-nova.md', 'Linha - Adicionar Nova(s)']
                        	]
                        },
                        {
                        	title: 'Modelo e Avaliação',
                        	collapsable: true,
                        	sidebarDepth: 1,
                        	children: [
                        		//['<route>', '<label to show on sidebar>']
                        		['modelo-e-avaliacao/avaliar-modelo.md', 'Avaliar Modelo'],
                        		['modelo-e-avaliacao/aplicar-modelo.md', 'Aplicar Modelo'],
                        	]
                        },
						{
							title: 'Pré Processamento de Dados',
							collapsable: true,
							sidebarDepth: 0,
							depth: 0,
							children: [
								//['<route>', '<label to show on sidebar>']
								['pre-processamento-de-dados/representacao-de-atributos-vetorizar-atributos.md', 'Representação de Atributos - Vetorizar Atributos'],
								['pre-processamento-de-dados/representacao-de-atributos-converter-categorico-para-numerico.md', 'Representação de Atributos - Converter Categórico para Numérico'],
								['pre-processamento-de-dados/representacao-de-atributos-codificacao-distribuida.md', 'Representação de Atributos - Codificação Distribuída'],
								['pre-processamento-de-dados/reducao-de-dimensionalidade-hash-sensivel-a-localidade.md', 'Redução de Dimensionalidade - Hash Sensível a Localidade'],
								['pre-processamento-de-dados/reducao-de-dimensionalidade-analise-de-componentes-principais.md', 'Redução de Dimensionalidade - Análise de Compononentes Principais'],
								['pre-processamento-de-dados/redefinir-escala-minimo-maximo.md', 'Redefinir Escala - Mínimo Máximo'],
								['pre-processamento-de-dados/redefinir-escala-maximo-absoluto.md', 'Redefinir Escala - Máximo Absoluto'],
								['pre-processamento-de-dados/redefinir-escala-escalador-padrao.md', 'Redefinir Escala - Escalador Padrão'],
								['pre-processamento-de-dados/operacoes-textuais-remover-palavras-comuns.md', 'Operações Textuais - Remover Palavras Comuns'],
								['pre-processamento-de-dados/operacoes-textuais-processar-topicos.md', 'Operações Textuais - Processar Tópicos'],
								['pre-processamento-de-dados/operacoes-textuais-gerar-n-gramas.md', 'Operações Textuais - Gerar N-Gramas'],
								['pre-processamento-de-dados/operacoes-textuais-dividir-texto-por-delimitador.md', 'Operações Textuais - Dividir Texto por Delimitador'],
								['pre-processamento-de-dados/operacoes-textuais-contar-frequencia-dos-termos.md', 'Operações Textuais - Contar Freqência dos Termos'],
								['pre-processamento-de-dados/operacoes-textuais-agrupamento-lda.md', 'Operações Textuais - Latent Dirichlet Allocation'],
								['pre-processamento-de-dados/discretizacao-por-quantis.md', 'Discretização - Por Quantis'],
								['pre-processamento-de-dados/discretizacao-intervalar.md', 'Discretização Intervalar'],
								['pre-processamento-de-dados/amostragem-divisao-percentual.md', 'Amostragem - Divisão Percentual'],
								['pre-processamento-de-dados/amostragem-amostrar-exemplos.md', 'Amostragem - Amostrar Exemplos']
							]
						},
{
							title: 'Visualização de Dados',
							collapsable: true,
							sidebarDepth: 0,
							children: [
								//['<route>', '<label to show on sidebar>']
								['visualizacao-de-dados/tabela.md', 'Tabela'],
								['visualizacao-de-dados/sumario-estatistico.md', 'Sumário Estatístico'],
								['visualizacao-de-dados/publicar-como-dashboard.md', 'Publicar como Dashboard'],
								['visualizacao-de-dados/mapa.md', 'Mapa'],
								['visualizacao-de-dados/histograma.md', 'Histograma'],
								['visualizacao-de-dados/grafico-de-rosca.md', 'Gráfico de Rosca'],
								['visualizacao-de-dados/grafico-de-pizza.md', 'Gráfico de Pizza'],
								['visualizacao-de-dados/grafico-de-linha.md', 'Gráfico de Linha'],
								['visualizacao-de-dados/grafico-de-dispersao.md', 'Gráfico de Dispersão'],
								['visualizacao-de-dados/grafico-de-barra.md', 'Gráfico de Barra'],
								['visualizacao-de-dados/grafico-de-area.md', 'Gráfico de Área'],
								['visualizacao-de-dados/box-plot.md', 'Box Plot'],
							]
						}
					],
					'/pt-br/spark/': [
						{
							title: 'Primeiros Passos',
							collapsable: true,
							sidebarDepth: 1,
							children:[
								['documentacao-geral/utilizacao-basica.md', 'Utilização Básica'],
								['documentacao-geral/criacao-de-usuario.md', 'Criação de Usuário'],
								['documentacao-geral/importacao-da-base-de-dados.md', 'Importação da Base de Dados'],
								['documentacao-geral/edicao-dos-fluxos-de-trabalho.md', 'Edição dos Fluxos de Trabalho'],
								['documentacao-geral/criacao-de-um-experimento.md', 'Criação de um Experimento Preditivo'],
								['documentacao-geral/aba-aparencia.md', 'Aba Aparência'],
								['documentacao-geral/aba-resultados.md', 'Aba Resultados']
							]
						},
						{
							title: 'Aprendizado de Máquina',
							collapsable: true,
							sidebarDepth: 1,
							children: [
								//['<route>', '<label to show on sidebar>']
								['aprendizado-de-maquina/regressor-linear-generalizado.md', 'Regressão - Regressor Linear Generalizado'],
								['aprendizado-de-maquina/regressor-linear.md', 'Regressão - Regressor Linear'],
								['aprendizado-de-maquina/regressao-isotonica.md', 'Regressão - Regressão Isotônica'],
								['aprendizado-de-maquina/regressao-random-forest.md', 'Regressão - Random Forest'],
								['aprendizado-de-maquina/regressao-gradient-boosted-tree.md', 'Regressão - Gradient Boosted Tree'],
								['aprendizado-de-maquina/anomalias-local-outlier-factor.md', 'Anomalias - Local Outlier Factor'],
								['aprendizado-de-maquina/classificacao-voto-por-maioria.md', 'Classificação - Voto por Maioria'],
								['aprendizado-de-maquina/classificacao-support-vector-machines.md', 'Classificação - Support Vector Machines'],
								['aprendizado-de-maquina/classificacao-regressao-logistica.md', 'Classificação - Regressão Logística'],
								['aprendizado-de-maquina/classificacao-random-forest.md', 'Classificação - Random Forest'],
								['aprendizado-de-maquina/classificacao-perceptron-multicamadas.md', 'Classificação - Perceptron Multicamadas'],
								['aprendizado-de-maquina/classificacao-naive-bayes.md', 'Classificação - Naïve-Bayes'],
								['aprendizado-de-maquina/classificacao-gradient-boosted-tree.md', 'Classificação - Gradient Boosted Tree'],
								['aprendizado-de-maquina/classificacao-arvore-de-decisao.md', 'Classificação - Árvore de Decisão'],
								['aprendizado-de-maquina/associacao-regras-de-associacao.md', 'Associação - Regras de Associação'],
								['aprendizado-de-maquina/associacao-mineracao-de-sequencias.md', 'Associação - Mineração de Sequências'],
								['aprendizado-de-maquina/associacao-mineracao-de-itemsets-frequentes.md', 'Associação - Mineração de Itemsets Frequentes'],
								['aprendizado-de-maquina/agrupamento-mistura-de-gaussianas.md', 'Agrupamento - Mistura de Gaussianas'],
								['aprendizado-de-maquina/agrupamento-k-means.md', 'Agrupamento - K-Means'],
							]
						},
						{
							title: 'Avançado',
							collapsable: true,
							sidebarDepth: 1,
							children: [
								//['<route>', '<label to show on sidebar>']
								['avancado/executar-comandos-sql.md', 'Executar Comandos SQL'],
								['avancado/executar-codigo-python.md', 'Executar Código Python']
							]
						},
						{
							title: 'Base de Dados',
							collapsable: true,
							sidebarDepth: 1,
							children: [
								//['<route>', '<label to show on sidebar>']
								['base-de-dados/', 'Base de Dados']
							]
						},
						{
							title: 'Entrada e Saída',
							collapsable: true,
							sidebarDepth: 1,
							children: [
								//['<route>', '<label to show on sidebar>']
								['entrada-e-saida/salvar-modelo.md', 'Salvar Modelo'],
								['entrada-e-saida/salvar-dados.md', 'Salvar Dados'],
								['entrada-e-saida/ler-dados.md', 'Ler Dados'],
								['entrada-e-saida/carregar-modelo.md', 'Carregar Modelo']
							]
						},
						{
							title: 'Manipulação de Dados',
							collapsable: true,
							sidebarDepth: 1,
							children: [
								//['<route>', '<label to show on sidebar>']
								['manipulacao-de-dados/tratar-dados-ausentes.md', 'Tratar Dados Ausentes'],
								['manipulacao-de-dados/selecionar-atributos.md', 'Selecionar Atributos'],
								['manipulacao-de-dados/juncao.md', 'Junção'],
								['manipulacao-de-dados/interseccao.md', 'Intersecção'],
								['manipulacao-de-dados/filtrar-por-funcao.md', 'Filtrar por Função'],
								['manipulacao-de-dados/coluna-substituir-valor.md', 'Coluna - Substituir Valor'],
								['manipulacao-de-dados/coluna-ordenar.md', 'Coluna - Ordenar'],
								['manipulacao-de-dados/coluna-adicionar-nova.md', 'Coluna - Adicionar Nova(s)'],
								['manipulacao-de-dados/coluna-diferenca.md', 'Coluna - Diferença'],
								['manipulacao-de-dados/linha-remover-duplicadas.md', 'Linha - Remover Duplicadas'],
								['manipulacao-de-dados/linha-agrupar-por-funcao.md', 'Linha - Agrupar por Função'],
								['manipulacao-de-dados/linha-adicionar-nova.md', 'Linha - Adicionar Nova(s)']
							]
						},
						{
							title: 'Modelo e Avaliação',
							collapsable: true,
							sidebarDepth: 1,
							children: [
								//['<route>', '<label to show on sidebar>']
								['modelo-e-avaliacao/avaliar-modelo.md', 'Avaliar Modelo'],
								['modelo-e-avaliacao/aplicar-modelo.md', 'Aplicar Modelo'],
							]
						},
						/*{
							title: 'Transformação de Dados',
							collapsable: true,
							sidebarDepth: 1,
							children: [
								//['<route>', '<label to show on sidebar>']
								'transformacao_de_dados/'
							]
						},*/
						{
							title: 'Pré Processamento de Dados',
							collapsable: true,
							sidebarDepth: 0,
							depth: 0,
							children: [
								//['<route>', '<label to show on sidebar>']
								['pre-processamento-de-dados/representacao-de-atributos-vetorizar-atributos.md', 'Representação de Atributos - Vetorizar Atributos'],
								['pre-processamento-de-dados/representacao-de-atributos-converter-categorico-para-numerico.md', 'Representação de Atributos - Converter Categórico para Numérico'],
								['pre-processamento-de-dados/representacao-de-atributos-codificacao-distribuida.md', 'Representação de Atributos - Codificação Distribuída'],
								['pre-processamento-de-dados/reducao-de-dimensionalidade-hash-sensivel-a-localidade.md', 'Redução de Dimensionalidade - Hash Sensível a Localidade'],
								['pre-processamento-de-dados/reducao-de-dimensionalidade-analise-de-componentes-principais.md', 'Redução de Dimensionalidade - Análise de Compononentes Principais'],
								['pre-processamento-de-dados/redefinir-escala-minimo-maximo.md', 'Redefinir Escala - Mínimo Máximo'],
								['pre-processamento-de-dados/redefinir-escala-maximo-absoluto.md', 'Redefinir Escala - Máximo Absoluto'],
								['pre-processamento-de-dados/redefinir-escala-escalador-padrao.md', 'Redefinir Escala - Escalador Padrão'],
								['pre-processamento-de-dados/operacoes-textuais-remover-palavras-comuns.md', 'Operações Textuais - Remover Palavras Comuns'],
								['pre-processamento-de-dados/operacoes-textuais-processar-topicos.md', 'Operações Textuais - Processar Tópicos'],
								['pre-processamento-de-dados/operacoes-textuais-gerar-n-gramas.md', 'Operações Textuais - Gerar N-Gramas'],
								['pre-processamento-de-dados/operacoes-textuais-dividir-texto-por-delimitador.md', 'Operações Textuais - Dividir Texto por Delimitador'],
								['pre-processamento-de-dados/operacoes-textuais-contar-frequencia-dos-termos.md', 'Operações Textuais - Contar Freqência dos Termos'],
								['pre-processamento-de-dados/operacoes-textuais-agrupamento-lda.md', 'Operações Textuais - Latent Dirichlet Allocation'],
								['pre-processamento-de-dados/discretizacao-por-quantis.md', 'Discretização - Por Quantis'],
								['pre-processamento-de-dados/discretizacao-intervalar.md', 'Discretização Intervalar'],
								['pre-processamento-de-dados/amostragem-divisao-percentual.md', 'Amostragem - Divisão Percentual'],
								['pre-processamento-de-dados/amostragem-amostrar-exemplos.md', 'Amostragem - Amostrar Exemplos']
							]
						},
						{
							title: 'Visualização de Dados',
							collapsable: true,
							sidebarDepth: 0,
							children: [
								//['<route>', '<label to show on sidebar>']
								['visualizacao-de-dados/tabela.md', 'Tabela'],
								['visualizacao-de-dados/sumario-estatistico.md', 'Sumário Estatístico'],
								['visualizacao-de-dados/publicar-como-dashboard.md', 'Publicar como Dashboard'],
								['visualizacao-de-dados/mapa.md', 'Mapa'],
								['visualizacao-de-dados/histograma.md', 'Histograma'],
								['visualizacao-de-dados/grafico-de-rosca.md', 'Gráfico de Rosca'],
								['visualizacao-de-dados/grafico-de-pizza.md', 'Gráfico de Pizza'],
								['visualizacao-de-dados/grafico-de-linha.md', 'Gráfico de Linha'],
								['visualizacao-de-dados/grafico-de-dispersao.md', 'Gráfico de Dispersão'],
								['visualizacao-de-dados/grafico-de-barra.md', 'Gráfico de Barra'],
								['visualizacao-de-dados/grafico-de-area.md', 'Gráfico de Área'],
								['visualizacao-de-dados/box-plot.md', 'Box Plot'],
							]
						}
						
					],
					'/pt-br/': [
						['', 'Sobre'],
						['data-science.md', 'Ciência de Dados'],
						['installation.md', 'Instalação'],
						['architecture.md', 'Arquitetura']
					]
				}
			},
			'/en/' : {
				selectText: 'Languages',
				label: 'English',
				nav: [
					{
						//text: '<label on navbar>', link: '<link to redirect>'
						text: 'Home', link: '/en/'
					},
					{ 
						text: 'Platforms',
						items: [
							{ text: 'COMPSs', link: 'https://www.bsc.es/research-and-development/software-and-apps/software-list/comp-superscalar/documentation'},
							{ text: 'Keras', link: 'https://keras.io/'},
							{ text: 'Scikit-Learn', link: 'https://scikit-learn.org/stable/documentation.html'},
							{ text: 'Spark', link: '/pt-br/spark/visualizacao-de-dados/tabela'}
						],
					}
				],
				/*sidebar: [
					{
						type : 'group',
						title: '1',
						collapsable: true,
						children: [
							{
								type: 'group',
								title: '1.1',
								collapsable: true,
								children: [
									['/', '1.1.1'],
									// ['/teste2/', 'Two'],
									// ['/teste2/1.md', 'Two dot one']
								]
							}
						]
					}
				]*/
				sidebar: {
					'/en/': [
						['', 'About'],
						['data-science.md', 'Data Science'],
						['installation.md', 'Installation'],
						['architecture.md', 'Architecture']
					]
				}
			}
		}
	},
	markdown: {
		anchor: { permalink: false },
		config: md => {
			md.use(require("markdown-it-katex"));
		}
	}
}
