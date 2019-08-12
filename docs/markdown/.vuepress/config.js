const path = require("path");

module.exports = {
	base: '/lemonade/',

	//html header
	head: [
		// ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css' }],
		// ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css' }],
		['link', { rel: 'icon', type: 'image/png', sizes:'96x96', href: '/img/logo.png' }]
	],
	//support languages
	locales: {
		'/': {
			lang: 'en-US',
			title: 'LEMONADE Documentation',
			description: 'LEMONADE Documentation'
		},
		'/pt-br/': {
			lang: 'pt-br',
			title: 'Documentação LEMONADE',
			description: 'Documentação LEMONADE'
		}
	},


	themeConfig: {
		isDevelopment: true,
		displayAllHeaders: true,

		//Header page logo
		logo: '/img/logo.png',
		
		//searchBox feature ?
		searchMaxSuggestions: 6,
		search: true,
		
		//support languages
		locales: {
			'/' : {
				selectText: 'Languages',
				label: 'English',
				nav: [
					{
						//text: '<label on navbar>', link: '<link to redirect>'
						text: 'Home', link: '/'
					},
					{ 
						text: 'Platforms',
						items: [
							{ text: 'COMPSs', link: 'https://www.bsc.es/research-and-development/software-and-apps/software-list/comp-superscalar/documentation'},
							{ text: 'Keras', link: 'https://keras.io/'},
							{ text: 'Scikit-Learn', link: 'https://scikit-learn.org/stable/documentation.html'},
							{ text: 'Spark', link: '/spark'}
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
					'/': [
						['', 'About'],
						['/instalation.md', 'Instalation'],
						['/architecture.md', 'Architecture']
					]
				}
			},
			'/pt-br/' : {
				selectText: 'Idiomas',
				label: 'Português',
				nav: [
					{
						//text: '<label on navbar>', link: '<link to redirect>'
						text: 'Início', link: '/pt-br/'
					},
					{ 
						text: 'Plataformas',
						items: [
							{ text: 'COMPSs', link: 'https://www.bsc.es/research-and-development/software-and-apps/software-list/comp-superscalar/documentation'},
							{ text: 'Keras', link: 'https://keras.io/'},
							{ text: 'Scikit-Learn', link: 'https://scikit-learn.org/stable/documentation.html'},
							{ text: 'Spark', link: '/pt-br/spark/visualizacao_de_dados/sumario_estatistico'}
						],
					}
				],
				sidebar: {
					// '/pt-br/spark/' : [
					// 'spark/' : [
					'/pt-br/spark/': [
						{
							title: 'Visualização de Dados',
							collapsable: true,
							sidebarDepth: 1,
							children: [
								//['<route>', '<label to show on sidebar>']
								['visualizacao_de_dados/tabela.md', 'Tabela'],
								['visualizacao_de_dados/sumario_estatistico.md', 'Sumário Estatístico'],
								['visualizacao_de_dados/publicar_como_dashboard.md', 'Publicar como Dashboard'],
								['visualizacao_de_dados/mapa.md', 'Mapa'],
								['visualizacao_de_dados/histograma.md', 'Histograma'],
								['visualizacao_de_dados/grafico_de_rosca.md', 'Gráfico de Rosca'],
								['visualizacao_de_dados/grafico_de_pizza.md', 'Gráfico de Pizza'],
								['visualizacao_de_dados/grafico_de_linha.md', 'Gráfico de Linha'],
								['visualizacao_de_dados/grafico_de_dispersao.md', 'Gráfico de Dispersão'],
								['visualizacao_de_dados/grafico_de_barra.md', 'Gráfico de Barra'],
								['visualizacao_de_dados/grafico_de_area.md', 'Gráfico de Área'],
								['visualizacao_de_dados/box_plot.md', 'Box Plot'],
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
							title: 'Modelo e Avaliação',
							collapsable: true,
							sidebarDepth: 1,
							children: [
								//['<route>', '<label to show on sidebar>']
								['modelo_e_avaliacao/avaliar_modelo.md', 'Avaliar Modelo'],
								['modelo_e_avaliacao/aplicar_modelo.md', 'Aplicar Modelo'],
							]
						},
						{
							title: 'Manipulação de Dados',
							collapsable: true,
							sidebarDepth: 1,
							children: [
								//['<route>', '<label to show on sidebar>']
								['manipulacao_de_dados/tratar_dados_ausentes.md', 'Tratar Dados Ausentes'],
								['manipulacao_de_dados/selecionar_atributos.md', 'Selecionar Atributos'],
								['manipulacao_de_dados/juncao.md', 'Junção'],
								['manipulacao_de_dados/interseccao.md', 'Intersecção'],
								['manipulacao_de_dados/filtrar_por_funcao.md', 'Filtrar por Função'],
								['manipulacao_de_dados/coluna_substituir_valor.md', 'Coluna - Substituir Valor'],
								['manipulacao_de_dados/coluna_ordenar.md', 'Coluna - Ordenar'],
								['manipulacao_de_dados/coluna_adicionar_nova.md', 'Coluna - Adicionar Nova(s)'],
								['manipulacao_de_dados/coluna_diferenca.md', 'Coluna - Diferença'],
								['manipulacao_de_dados/linha_remover_duplicadas.md', 'Linha - Remover Duplicadas'],
								['manipulacao_de_dados/linha_agrupar_por_funcao.md', 'Linha - Agrupar por Função'],
								['manipulacao_de_dados/linha_adicionar_nova.md', 'Linha - Adicionar Nova(s)']
							]
						},
						{
							title: 'Entrada e Saída',
							collapsable: true,
							sidebarDepth: 1,
							children: [
								//['<route>', '<label to show on sidebar>']
								['entrada_e_saida/salvar_modelo.md', 'Salvar Modelo'],
								['entrada_e_saida/salvar_dados.md', 'Salvar Dados'],
								['entrada_e_saida/ler_dados.md', 'Ler Dados'],
								['entrada_e_saida/carregar_modelo.md', 'Carregar Modelo']
							]
						},
						{
							title: 'Documentação Geral',
							collapsable: true,
							sidebarDepth: 2,
							children: [
								//['<route>', '<label to show on sidebar>']
								['documentacao_geral/documentacao_geral.md', 'Documentação Geral'],
								['documentacao_geral/utilizacao_basica_da_plataforma_lemonade.md', 'Utilização Básica da Plataforma Lemonade']
							]
						},
						{
							title: 'Base de Dados',
							collapsable: true,
							sidebarDepth: 1,
							children: [
								//['<route>', '<label to show on sidebar>']
								['base_de_dados/', 'Base de Dados']
							]
						},
						{
							title: 'Avançado',
							collapsable: true,
							sidebarDepth: 1,
							children: [
								//['<route>', '<label to show on sidebar>']
								['avancado/executar_comandos_sql.md', 'Executar Commandos SQL'],
								['avancado/executar_codigo_python.md', 'Executar Código Python']
							]
						},
						{
							title: 'Aprendizado de Máquina',
							collapsable: true,
							sidebarDepth: 1,
							children: [
								//['<route>', '<label to show on sidebar>']
								['aprendizado_de_maquina/regressor_linear_generalizado.md', 'Regressão - Regressor Linear Generalizado'],
								['aprendizado_de_maquina/regressor_linear.md', 'Regressão - Regressor Linear'],
								['aprendizado_de_maquina/regressao_isotonica.md', 'Regressão - Regressão Isotônica'],
								['aprendizado_de_maquina/regressao_random_forest.md', 'Regressão - Random Forest'],
								['aprendizado_de_maquina/regressao_gradient_boosted_tree.md', 'Regressão - Gradient Boosted Tree'],
								['aprendizado_de_maquina/anomalias_local_outlier_factor.md', 'Anomalias - Local Outlier Factor'],
								['aprendizado_de_maquina/classificacao_voto_por_maioria.md', 'Classificação - Voto por Maioria'],
								['aprendizado_de_maquina/classificacao_support_vector_machines.md', 'Classificação - Support Vector Machines'],
								['aprendizado_de_maquina/classificacao_regressao_logistica.md', 'Classificação - Regressão Logística'],
								['aprendizado_de_maquina/classificacao_random_forest.md', 'Classificação - Random Forest'],
								['aprendizado_de_maquina/classificacao_perceptron_multicamadas.md', 'Classificação - Perceptron Multicamadas'],
								['aprendizado_de_maquina/classificacao_naive_bayes.md', 'Classificação - Perceptron Multicamadas'],
								['aprendizado_de_maquina/classificacao_gradient_boosted_tree.md', 'Classificação - Gradient Boosted Tree'],
								['aprendizado_de_maquina/classificacao_arvore_de_decisao.md', 'Classificação - Árvore de Decisão'],
								['aprendizado_de_maquina/associacao_regras_de_associacao.md', 'Associação - Regras de Associação'],
								['aprendizado_de_maquina/associacao_mineracao_de_sequencias.md', 'Associação - Mineração de Sequências'],
								['aprendizado_de_maquina/associacao_mineracao_de_itemsets_frequentes.md', 'Associação - Mineração de Itemsets Frequentes'],
								['aprendizado_de_maquina/agrupamento_mistura_de_gaussianas.md', 'Agrupamento - Mistura de Gaussianas'],
								['aprendizado_de_maquina/agrupamento_k_means.md', 'Agrupamento - K-Means'],
							]
						}
					],
					'/pt-br/': [
						['', 'About'],
						['data_science.md', 'Data Science'],
						['instalation.md', 'Instalation'],
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
