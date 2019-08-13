# Salvar Modelo

Salva um modelo gerado pela ferramenta para uso futuro.

### Conectores
| Entrada | Saída |
| --- | --- |
| Modelo(s) a ser(em) salvo(s) | Não tem |

### Tarefa
Nome da Tarefa

### Aba Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Aramzenamento** |  |
| **Nome do Modelo** |  |
| **[Qual modelo salvar?]** | Atualmente disponível somente HDFS. É obrigatório se existem vários modelos |
| **[Ação caso o modelo já exista]** |  |

[Aba Aparência][1]

[Aba Resultados][2]


## Definições
### Qual modelo salvar?
O modelo pode ser salvo das seguintes formas:
1. Salvar melhor modelo.
2. Salvar todos (os nomes serão sufixados conforme a posição do modelo no rank).

### Ação caso o modelo já exista
As ações são as seguintes:
1. Sobrescrever.
2. Apresentar erro.


## Exemplo de Utilização
**Objetivo:** Salvar um modelo criado para uso posterior.\
**Base de Dados:** [Íris][3]
	
![Ler dados](/img/spark/entrada_e_saida/salvar_modelo/image6.png)

1. Adicione uma base de dados por meio da operação [Ler dados][4]. \
	![Tabela - Ler dados](/img/spark/entrada_e_saida/salvar_modelo/image3.png)

2. Na operação [Converter categórico para numérico][5], selecione *“class”* no campo **Atributos** e *“String”* no campo **Tipo de indexador**. Preencha *“class_label”* no campo **Nome para novo(s) atributo(s) indexado(s)**.\
	![Converter categórico para numérico](/img/spark/entrada_e_saida/salvar_modelo/image2.png)

3. Na operação [Divisão Percentual][6], selecione 30%-70%.\
	![Divisão percentual](/img/spark/entrada_e_saida/salvar_modelo/image4.png)

4. Adicione a operação [Naive Bayes][7], selecione *“petal_length”*, *“petal_width”*, *“sepal_length”* e *“sepal_width”* no campo **Atributos previsores** e *“class_label”* no **Atributo com rótulo**.\
	![Naive Bayes](/img/spark/entrada_e_saida/salvar_modelo/image1.png)

5. Adicione a operação [Aplicar modelo][8], selecione *“petal_length”*, *“petal_width”*, *“sepal_length”* e *“sepal_width”* no campo **Atributos previsores** e preencha *“prediction”* no campo **Nome do novo atributo**. \
	![Aplicar modelo](/img/spark/entrada_e_saida/salvar_modelo/image7.png)


6. Adicione a operação **Salvar Modelo**. Selecione *“Default”* em **Armazenamento**. Preencha *“teste_salvar”* em **Nome do modelo**. Selecione *“Salvar todos”* em Qual modelo salvar? e “*Sobrescrever”* em **Ação caso modelo já exista**.\
	![Salvar](/img/spark/entrada_e_saida/salvar_modelo/image5.png)

7. Execute o modelo e ele será salvo.

-----

Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[Qual modelo salvar?]: #qual-modelo-salvar
[Ação caso o modelo já exista]: #acao-caso-o-modelo-ja-exista
[1]: /pt-br/
[2]: /pt-br/
[3]: /pt-br/
[4]: /pt-br/
[5]: /pt-br/
[6]: /pt-br/
[7]: /pt-br/