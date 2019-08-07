# Substituir Valor

Substituir valor é uma operação de **manipulação de dados por coluna** que substitui todas as ocorrências de um determinado valor no(s) atributo(s) de um fonte de dados por um outro valor específico.


### Conectores
| Entrada | Saída |
| --- | --- |
| Uma Fonte de Dados | Fonte com os dados modificados |

### Tarefa
Nome da Tarefa

### Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Atributos\*** | Define os atributos que serão utilizados na busca do valor a ser substituído |
| **Valor a ser Substituído\*** | Define o valor escolhido para alteração |
| **Substituir por\*** | Define o novo valor utilizado na substituição |

[Propriedades da Aparência][1]

[Resultados][2]


## Exemplo de Utilização
**Objetivo:** Supondo que houve um engano durante a coleta do conjunto de dados, os autores precisam corrigir os dados inconsistentes. Todos os atributos que possuem valores 4.4 estão errados, sendo necessário substituí-los por um valor específico, o valor 4.3.\
**Base de Dados:** [Íris][3]
	
![Ler dados](/docs/img/spark/manipulacao_de_dados/coluna_substituir_valor/image2.png)

1. Adicione uma base de dados por meio da operação [Ler dados][4]. É importante marcar na aba de [Resultados][2] a opção **Exibir amostra(s) da(s) saída(s) (máx. 50 registros)** para poder comparar os dados antes e depois da transformação.
	![Tabela Ler Dados](/docs/img/spark/manipulacao_de_dados/coluna_substituir_valor/image3.png)
	
2. Adicione a operação **Substituir valor**. Selecione *“sepallength”*, *“sepalwidth”*, *“petallength”* e *"petalwidth”* como **Atributos**. No **valor** a ser substituído coloque 4.4 e no de **substituir por** use 4.3.\
	É importante prestar atenção aos tipos de dados da base usada, no nosso exemplo não seleciona a coluna **class** pois, ela é do tipo texto enquanto as outras são do tipo inteiro. Ao substituir um parâmetro na forma de texto deve-se colocar aspas. Além disso, marque a mesma opção na aba de **Resultados**, **Exibir amostra(s) da(s) saída(s) (máx. 50 registros)**.
	![Tabela Substituir Valor](/docs/img/spark/manipulacao_de_dados/coluna_substituir_valor/image4.png)

3.  Execute o fluxo e visualize o resultado.\
	Observe o resultado da tabela da função **Ler dados** e repare na linha 9 do primeiro parâmetro e na linha 16 do segundo. Ambos estão como 4.4. Em seguida, faça o mesmo para a função de **Substituir valor**, as imagens abaixo mostram que os valores que estavam previamente em 4.4 foram substituídos por 4.3.\
	![Resultado - Ler Dados](/docs/img/spark/manipulacao_de_dados/coluna_substituir_valor/image1.png)\
	![Resultado - Substituir Valor](/docs/img/spark/manipulacao_de_dados/coluna_substituir_valor/image5.png)
	
-----

Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[1]: /pt-br/
[2]: /pt-br/
[3]: /pt-br/
[4]: /pt-br/