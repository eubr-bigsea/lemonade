
# Histograma

Gráfico que apresenta a distribuição de frequência de variáveis numéricas. Indica as regiões com concentração ou esparsidade de valores.

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
| **Atributos para o eixo Y** | Atributo com os dados do eixo Y. Para múltiplas séries, basta selecionar dois ou mais atributos |
| **Título** | Título da visualização. É apresentado no gráfico |
| **Título para o eixo X** |  |
| **Título para o eixo Y** |  |
| **Prefixo para o eixo X** | Prefixos são palavras que aparecem na frente de cada rótulo. Por exemplo, se no eixo X estiver um número para cada dia do mês (i.e., 1 – 30), o prefixo poderia ser a palavra “Dia” |
| **Prefixo para o eixo Y** |  |
| **Sufixo para o eixo X** | Sufixos são palavras que aparecem após cada rótulo. Por exemplo, se no eixo X estiver associado à temperatura, o sufixo poderia ser a palavra “Graus”. |
| **Sufixo para o eixo Y** |  |

[Aba Aparência][1]

[Aba Resultados][2]


## Exemplo de Utilização
**Objetivo:** analisar a quantidade de plantas por tamanho de pétala.

**Base de Dados:** [Íris][3]
	
![Ler dados](/img/spark/visualizacao_de_dados/histograma/image1.png)

1. Adicione uma base de dados por meio da operação [Ler dados][4].
	![Formulario Ler Dados](/img/spark/visualizacao_de_dados/histograma/image2.png)
	
2.  Adicione a operação **Histograma** e preencha o campo **Título**. Selecione *“petallength”*  no campo **Atributos de entrada** e preencha o valor *“'5*” no campo **Quantidade de intervalos**. \
	![Formulario](/img/spark/visualizacao_de_dados/histograma/image3.png)

3. Execute o fluxo e visualize o resultado. \
	![Execução](/img/spark/visualizacao_de_dados/histograma/image4.png)

-----

Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[1]: /pt-br/
[2]: /pt-br/
[3]: /pt-br/
[4]: /pt-br/