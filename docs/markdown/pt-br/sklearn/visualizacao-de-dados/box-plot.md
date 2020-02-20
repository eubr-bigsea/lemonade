
# Box Plot

Gráfico utilizado para visualizar quartis, máximo, mínimo e outliers de um atributo.

### Conectores
| Entrada | Saída |
| --- | --- |
| Dados de entradas | Uma Visualização |

### Tarefa
Nome da Tarefa

### Aba Execução

| Parâmetro | Detalhe |
| --- | --- |
| **Título** | Título da visualização. É apresentado no gráfico |
| **Atributos para o eixo X** | Atributo com os dados do eixo X |
| **Atributos usado para séries** | Atributo pelo qual os dados podem ser agrupados. Dependendo do agrupamento realizado, 1 ou mais gráficos serão apresentados |
| **Mostra outliers** | Inclui os valores discrepantes da métrica avaliada |
| **Título para o eixo X** |  |
| **Título para o eixo Y** |  |

[Aba Aparência][1]

[Aba Resultados][2]


## Exemplo de Utilização
**Objetivo:** analisar a distribuição das espécies da Íris.

**Base de Dados:** [Íris][3]
	
![Ler dados](/img/sklearn/visualizacao_de_dados/box_plot/image4.png)

1. Adicione uma base de dados por meio da operação [Ler dados][4]. \
	![Ler dados](/img/sklearn/visualizacao_de_dados/box_plot/image3.png)

2. Adicione a operação **Box plot** e preencha o campo **Título**. Selecione *“petallength”* no campo **Atributos de entrada** e *“class”* no campo **Atributo usado para agrupar**. \
	![Formulário filtrar por função](/img/sklearn/visualizacao_de_dados/box_plot/image1.png)

3. Execute o fluxo e visualize o resultado. 
	![Gráfico de área](/img/sklearn/visualizacao_de_dados/box_plot/image2.png)

----- 
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[1]: /pt-br/sklearn/documentacao-geral/aba-aparencia.html
[2]: /pt-br/sklearn/documentacao-geral/aba-resultados.html
[3]: /pt-br/sklearn/base-de-dados/#iris
[4]: /pt-br/sklearn/entrada-e-saida/ler-dados.html