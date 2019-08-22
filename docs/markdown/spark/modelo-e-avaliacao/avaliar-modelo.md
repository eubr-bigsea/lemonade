# Avaliar Modelo

Avalia resultado da aplicação de um modelo em dados de teste.

### Conectores
| Entrada | Saída |
| --- | --- |
| Dados a serem avaliados e modelo de aprendizado. | Não tem |

### Tarefa
Nome da Tarefa

### Aba Execução

| Parâmetro | Detalhe |
| --- | --- |
| **Atributo usado para predição** | Nome dado durante a aplicação do modelo ao atributo usado para avaliar a predição |
| **Atributo usado como label** | Rótulo do atributo que contém a classe real |
| **Métrica usada para avaliação** | Nome da métrica de avaliação que será usada |

[Aba Aparência][1]

[Aba Resultados][2]

## Definições
### Métricas usadas para avaliação
Existem as seguintes métricas para realização a avaliação do modelo:
- Area under ROC
- Area under PR
- F1
- Weighted Precision
- Weighted Recall
- Accuracy
- Root Mean Squared Error
- Mean Squared Error
- Mean Absolute Error



## Exemplo de Utilização
**Objetivo:** Classificar o tipo de íris da planta dado os atributos de pétala e sépala.

**Base de Dados:** [Íris][3]
	
![Ler dados](/img/spark/modelo_e_avaliacao/avaliar_modelo/image3.png)

1. Adicione uma base de dados por meio da operação [Ler dados][4]. \
	![Formulário Ler Dados](/img/spark/modelo_e_avaliacao/avaliar_modelo/image8.png)

2. Na operação [Converter categórico para numérico][5], selecione *“class”* no campo **Atributos**. Preencha *“class_label”* no campo **Nome para novos atributos indexados**. \
	![Formulário Converter Categórico](/img/spark/modelo_e_avaliacao/avaliar_modelo/image7.png)

3. Na operação [Divisão Percentual][6], selecione 30%-70%. \
	![Formulário Divisão Percentual](/img/spark/modelo_e_avaliacao/avaliar_modelo/image2.png)

4. Adicione a operação [Naive Bayes][7], selecione *“petal_length”*, *“petal_width”*, *“sepal_length”* e “*sepal_width”* no atributo **Atributo com features** e *“class_label”* no **Atributo com rótulo**. \
	![Formulário Naive Bayes](/img/spark/modelo_e_avaliacao/avaliar_modelo/image9.png)

5. Adicione a operação **Aplicar modelo**, selecione *“petal_length”*, *“petal_width”*, *“sepal_length”* e *“sepal_width”* no campo **Atributos com as features** e preencha *“prediction”* no campo **Nome do novo atributo**. \
	![Formulário Aplicar Modelo](/img/spark/modelo_e_avaliacao/avaliar_modelo/image6.png)\
	A ferramenta [Aplicar modelo][8] tem como objetivo retornar o resultado da aplicação de um modelo (neste exemplo, um modelo de classificação) em um conjunto. Este resultado é representado por predições feitas em um conjunto de dados de teste.

6. Adicione a operação **Avaliar Modelo** selecione *“prediction”* no campo **Atributo usado para predição**, *“class_label”* no **Atributo usado como label**, *“acurácia”* em **Métrica usada para avaliação**. \
	![Formulário Avaliar Modelo](/img/spark/modelo_e_avaliacao/avaliar_modelo/image1.png)

7. Execute o modelo e observe os resultados. \
	![Gráfico esultado da avaliação](/img/spark/modelo_e_avaliacao/avaliar_modelo/image5.png)\
	![Tabela resultado da avaliação](/img/spark/modelo_e_avaliacao/avaliar_modelo/image4.png)\
	Os resultados são satisfatórios para este tipo de classificador, uma vez que no conjunto de dados temos classes que não são linearmente separáveis. O foco, no entanto é exemplificar a aplicação de um determinado modelo em um conjunto de dados de teste.

----- 
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[1]: /pt-br/
[2]: /pt-br/
[3]: /pt-br/
[4]: /pt-br/
[5]: /pt-br/
[6]: /pt-br/
[7]: /pt-br/
[8]: /pt-br/