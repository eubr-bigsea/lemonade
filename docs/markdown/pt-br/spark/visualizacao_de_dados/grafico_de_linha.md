
# Gráfico de Linha

Um gráfico de linhas é um tipo de gráfico que apresenta informação como uma série de pontos conectados a uma linha vertical.

### Conectores
| Entrada | Saída |
| --- | --- |
| Dados de entradas | Uma Visualização |

### Tarefa
Nome da Tarefa

### Aba Execução

| Parâmetro | Detalhe |
| --- | --- |
| **Atributos para o eixo X** | Atributo com os dados do eixo X |
| **Atributos para o eixo Y** | Atributo com os dados do eixo Y. Para múltiplas séries, basta selecionar dois ou mais atributoS |
| **Título** | Título da visualização. É apresentado no gráfico. |
| **Título para o eixo X** |  |
| **Título para o eixo y** |  |
| **Prefixo para o eixo X** | Prefixos são palavras que aparecem na frente de cada rótulo. Por exemplo, se no eixo X estiver um número para cada dia do mês (i.e., 1 – 30), o prefixo poderia ser a palavra “Dia”. |
| **Prefixo para o eixo Y** |  |
| **Sufixo para o eixo X** | Sufixos são palavras que aparecem após cada rótulo. Por exemplo, se no eixo X estiver temperaturas, o sufixo poderia ser a palavra “Graus”. |
| **Sufixo para o eixo Y** |  |

[Aba Aparência][1]

[Aba Resultados][2]


## Exemplo de Utilização
**Objetivo:** observar a variação das da temperatura no Brasil.

**Base de Dados:** [Temperatura Global por País][3]
	
![Ler dados](/lemonade/img/spark/visualizacao_de_dados/grafico_de_linha/image5.png)

1. Adicione uma base de dados por meio da operação [Ler dados][4].
	
2.  Adicione  a operação [Filtrar por função][5]. Na opção filtro, selecione o atributo *“Country”*, função *“Equals to =”* e preencha o Valor do atributo como *“Brazil”*. \
	![Formulario classes](/lemonade/img/spark/visualizacao_de_dados/grafico_de_linha/image1.png)
	

3. Na operação **Gráfico de linha(s)** selecione *“dt”* no **Atributo para eixo X** e *“AverageTemperature”* no **Atributos para eixo Y**. \
	![Formulario agrupar](/lemonade/img/spark/visualizacao_de_dados/grafico_de_linha/image3.png)

4. Execute o fluxo e visualize o resultado. 
	![Gráfico de linhas gerado](/lemonade/img/spark/visualizacao_de_dados/grafico_de_linha/image4.png)\
		Gráfico de linhas gerado pelo fluxo acima.

	![Janela de informação adicional](/lemonade/img/spark/visualizacao_de_dados/grafico_de_linha/image2.png)\
	Janela de informação adicional da visualização. 
	
----- 
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[1]: /pt-br/
[2]: /pt-br/
[3]: /pt-br/
[4]: /pt-br/