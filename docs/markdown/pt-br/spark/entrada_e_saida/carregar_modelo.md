# Carregar Modelo

Carrega um modelo previamente gerado pelo LEMONADE e salvo usando a operação [Salvar modelo][1]. O modelo carregado pode ser aplicado em um novo conjunto de dados, sendo reutilizado.

### Conectores
| Entrada | Saída |
| --- | --- |
| Não tem | Modelo carregado |

### Tarefa
Nome da Tarefa

### Aba Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Modelo** | Modelo anteriormente salvo a ser carregado |

[Aba Aparência][2]

[Aba Resultados][3]

## Exemplo de Utilização
**Objetivo:** Carregar um modelo salvo. No exemplo apresentado, será utilizada a base de dados íris. O modelo será carregado, aplicado a base íris e avaliado.\
**Base de Dados:** [Íris][4]
	
![Ler dados](/docs/img/spark/entrada_e_saida/carregar_modelo/image6.png)

1. Adicione uma base de dados por meio da operação [Ler dados][5].\
	![Tabela - Ler dados](/docs/img/spark/entrada_e_saida/carregar_modelo/image5.png)

2. Na operação [Converter categórico][6] para numérico, selecione *“class”* no campo **Atributos**. Preencha *“class_label”* no campo **Nome para novos atributos indexados**.\
	![Converter categórico para numérico](/docs/img/spark/entrada_e_saida/carregar_modelo/image4.png)

3. Adicione a operação [Aplicar modelo][7], selecione *“petal_length”*, *“petal_width”*, *“sepal_length”* e *“sepal_width”* no campo **Atributos previsores** e preencha *“prediction”* no campo **Nome do novo atributo**.\
	![Aplicar modelo](/docs/img/spark/entrada_e_saida/carregar_modelo/image3.png)

4. Adicione a operação **Carregar modelo** e selecione o modelo que será utilizado no fluxo.\
	![Tabela - Carregar modelo](/docs/img/spark/entrada_e_saida/carregar_modelo/image7.png)

5. Adicione a operação [Avaliar Modelo] selecione *“prediction”* no campo **Atributo usado para predição**, *“class_label”* no **Atributo usado como label**, *“Acurácia”* em **Métrica usada para avaliação**.
	![Tabela - Avaliar modelo](/docs/img/spark/entrada_e_saida/carregar_modelo/image2.png)

6. Execute o fluxo e visualize o resultado.\
	![Gráfico - Resultado](/docs/img/spark/entrada_e_saida/carregar_modelo/image1.png)\
	![Tabela - Resultado](/docs/img/spark/entrada_e_saida/carregar_modelo/image8.png)

-----

Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[Inferir esquema da fonte de dados]: #inferir-esquema-da-fonte-de-dados
[O que fazer em caso de dados inválidos]: #o-que-fazer-em-caso-de-dados-invalidos
[1]: /pt-br/
[2]: /pt-br/
[3]: /pt-br/
[4]: /pt-br/
[5]: /pt-br/
[6]: /pt-br/
[7]: /pt-br/