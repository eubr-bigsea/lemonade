# Aplicar Modelo

Aplica o modelo de aprendizado de máquina em um (novo) conjunto de dados (e.g., um conjunto de teste) e retorna o resultado.

### Conectores
| Entrada | Saída |
| --- | --- |
| Dados de teste e modelo de aprendizado | Dados de saída resultantes da aplicação do modelo de aprendizado nos dados de entrada |

### Tarefa
Nome da Tarefa

### Aba Execução

| Parâmetro | Detalhe |
| --- | --- |
| **Atributo com Features** | Atributos que devem ser usados na aplicação do modelo de aprendizado |
| **Nome do novo atributo (herdado do modelo)** | Atributo contendo as predições do modelo nos dados de teste |

[Aba Aparência][1]

[Aba Resultados][2]

## Exemplo de Utilização
**Objetivo:** Aplicar o modelo criado pelo classificador [Random Forest][3]  em um conjunto de dados não visto no treinamento de tal classificador.

**Base de Dados:** [Íris][4]
	
![Ler dados](/lemonade/img/spark/modelo_e_avaliacao/aplicar_modelo/image4.png)

1. Adicione uma base de dados por meio da operação [Ler dados][5].
	
2. Utilize a operação [Converter categórico para numérico][6] para converter os valores do atributo classe em valores numéricos. Para isso, utilize *“class”* no campo **Atributos**, *String* como **Tipo de indexador** e *“class_index”* como **Nome para novo(s) atributos indexados**. \

3. Utilize a operação [Divisão percentual][7] para dividir a base de dados em treino e teste. No parâmetro **Pesos**, calibre-o utilizando 50% dos dados para treinar e 50% para testar.

4. Na operação **Random Forest**, selecione *“petal_length”*, *“petal_width”*, *“sepal_length”* e *“sepal_width”* no campo **Atributo(s) previsor(es)**. Selecione *“class_index”* no campo **Atributo com o rótulo** e preencha *“resultado”* no campo **Atributo com a predição (novo)**. Deixe os demais parâmetros inalterados.

5. Na operação [Aplicar Modelo][8], selecione *“petal_length”*, *“petal_width”*, *“sepal_length”* e *“sepal_width”* no campo **Atributo(s) previsor(es)** e preencha *“resultado”* no campo **Nome do novo atributo (herdado do modelo)**. Neste exemplo, a operação **Aplicar Modelo** aplica o modelo produzido pelo [Random Forest][3] (neste caso, um modelo de classificação) em um conjunto de dados não visto durante o treinamento de tal algoritmo de aprendizado (i.e., em um conjunto de teste). O resultado desta operação é representado por predições feitas em tal conjunto.
	![Formulário Aplicar Modelo](/lemonade/img/spark/modelo_e_avaliacao/aplicar_modelo/image2.png)

6. Na operação [Avaliar Modelo][9], selecione *“resultado”* no campo **Atributo usado para predição**. Selecione *“class_index”* no campo **Atributo usado como label**. E selecione a métrica *“F1”* como **Métrica para avaliação**. 



7. Execute o fluxo e visualize o resultado, i.e., a matriz de confusão gerada para as predições do modelo de árvore de decisão e, consequentemente, a tabela representando as métricas de classificação (derivadas da matriz de confusão). \
	![Gráfico esultado da avaliação](/lemonade/img/spark/modelo_e_avaliacao/aplicar_modelo/image1.png)\
	![Tabela resultado da avaliação](/lemonade/img/spark/modelo_e_avaliacao/aplicar_modelo/image3.png)

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
[9]: /pt-br/