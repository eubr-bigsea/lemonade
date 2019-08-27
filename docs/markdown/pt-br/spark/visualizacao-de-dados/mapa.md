
# Mapa

Visualizações de mapa são úteis para a visualização de dados geográficos.

### Conectores
| Entrada | Saída |
| --- | --- |
| Dados de entradas | Uma Visualização |

### Tarefa
Nome da Tarefa

### Aba Execução

| Parâmetro | Detalhe |
| --- | --- |
| **Tipo de Mapa** | Tipo de será renderizado. Atualmente existem 3 opções: ***pontos, heatmap (mapa de calor) e geojson** |
| **Título** | Título da visualização. É apresentado no gráfico |
| **Atributo com Latitude** | Atributo que contém latitude |
| **Atributo com Longitude** | Atributo que contém longitude |
| **Atributo usado para valor** | Atributo que será usado como um indicador de uma região geográfica. Por exemplo, este atributo pode se referir ao número de habitantes de determinada região |
| **Atributo usado para rótulo** | Atributo que será usado como um rótulo, ou ID de uma região geográfica. Pode ser, por exemplo, a sigla de um estado |
| **Limites do polígono(s) (Geo JSON)** | Base de dados a ser desenhada. Atualmente o Lemonade suporta apenas um **Mapa Mundi** e um mapa dos **Estados Brasileiros**. |
| **Nome da propriedade no Geo JSON usada para relacionar os dados** | Propriedade que servirá como identificador dos dados. No caso do **Mapa Mundi** deve ser **"iso_a2"**. No caso do mapa dos estados do Brasil, deve ser "id" |
| **Dados extras (Geo JSON)** | Atributos extras a serem inseridos ao geojson. Por exemplo, o nome da região desenhada. |

[Aba Aparência][1]

[Aba Resultados][2]


## Exemplo de Utilização
**Objetivo:** visualizar a localização dos aeroportos do Brasil.

**Base de Dados:** [Aeroportos do Brasil][3]
	
![Ler dados](/img/spark/visualizacao_de_dados/mapa/image1.png)

1. Adicione uma base de dados por meio da operação [Ler dados][4].

2.  Na operação **Mapa**, selecione o valor *“pontos”* para o parâmetro **Tipo de Mapa**. Preencha o campo Título e selecione os valores *“latitude_deg”* para o campo **Atributo com Latitude** e *“longitude_deg”* para o campo **Atributo com Longitude**. \
	![Formulario](/img/spark/visualizacao_de_dados/mapa/image3.png)

3. Execute o fluxo e visualize o resultado. \
	![Execução](/img/spark/visualizacao_de_dados/mapa/image2.png)

4. Na operação **Mapa**, altere o valor do parâmetro **Tipo de Mapa** para *“heatmap”* e visualize o resultado. \
	![Execução](/img/spark/visualizacao_de_dados/mapa/image4.png)

-----

Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[1]: /pt-br/spark/documentacao-geral/documentacao-geral.html#aba-aparencia
[2]: /pt-br/spark/documentacao-geral/documentacao-geral.html#aba-resultados
[3]: /pt-br/spark/base-de-dados/#aeroportos-do-brasil
[4]: /pt-br/spark/entrada-e-saida/ler-dados.html