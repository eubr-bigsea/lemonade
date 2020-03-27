# Gráfico de Pizza

Gráfico de Pizza é um diagrama circular dividido em fatias, onde cada fatia representa o valor proporcional de um atributo em relação ao todo. 

### Conectores
| Entrada | Saída |
| --- | --- |
| Dados de entradas | Uma Visualização |

### Tarefa
Nome da Tarefa

### Aba Execução

| Parâmetro | Detalhe |
| --- | --- |
| **Atributo com Valor** | Atributo com os valores. A soma desses valores é o “todo” da visualização |
| **Atributo usado como rótulo** | Atributos que serão usados como rótulos para cada fatia do gráfico.  |
| **Título** | Título da visualização. É apresentado no gráfico. |
| **Título Interno** | Título que irá aparecer no centro da visualização.  |
| **Prefixo para rótulo** | Prefixos são palavras que aparecem na frente de cada rótulo. Por exemplo, se no rótulo estiver um número para cada dia do mês (i.e., 1 – 30), o prefixo poderia ser a palavra “Dia” |
| **Sufixo para rótulo** | Sufixos são palavras que aparecem após cada rótulo. Por exemplo, se no rótulo estiver temperaturas, o sufixo poderia ser a palavra “Graus”. |

[Aba Aparência][1]

[Aba Resultados][2]


## Exemplo de Utilização
**Objetivo:** analisar a distribuição das espécies da Íris.

**Base de Dados:** [Íris][3]
	
![Ler dados](/img/spark/visualizacao-de-dados/grafico-de-pizza/image2.png)

1. Adicione uma base de dados por meio da operação [Ler dados][4].
	
2.  Adicione a operação [Agrupar linhas por função][5] e selecione *“class”* no campo **Selecione o(s) atributos para agrupamento**. Na função de agrupamento, selecione o **Atributo** *"class”*, **Função** *“count”* e preencha *“count_class”* em **Nome Novo**. \
	![Formulario classes](/img/spark/visualizacao-de-dados/grafico-de-pizza/image1.png)
	

3. Na operação **Gŕafico de pizza** preencha “*Classes”* no campo **Título**, selecione *“count_class”* **Atributos com valor** e *“class”* em **Atributo usado como rótulo**. \
	![Formulario agrupar](/img/spark/visualizacao-de-dados/grafico-de-pizza/image1.png)

4. Execute o fluxo e visualize o resultado. \
	![Execução](/img/spark/visualizacao-de-dados/grafico-de-pizza/image4.png) \
	Observe que todas as classes possuem 50 instâncias.

-----

Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[1]: /pt-br/spark/documentacao-geral/aba-aparencia.html
[2]: /pt-br/spark/documentacao-geral/aba-resultados.html
[3]: /pt-br/spark/base-de-dados/#iris
[4]: /pt-br/spark/entrada-e-saida/ler-dados.html
[5]: /pt-br/spark/manipulacao-de-dados/linha-agrupar-por-funcao.html