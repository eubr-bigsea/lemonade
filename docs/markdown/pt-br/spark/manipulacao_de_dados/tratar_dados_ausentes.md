
# Tratar Dados Ausentes

A operação **Tratar Dados Ausentes** é utilizada para remover ou substituir valores ausentes dos campos de dados.

### Conectores
| Entrada | Saída |
| --- | --- |
|Dados a serem tratados | Dados tratados |

### Tarefa
Nome da Tarefa

### Aba Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Atributos** | Uma ou mais colunas que contenham os valores a serem removidos, ou substituídos. |
| **Tipo de Limpeza** | O tipo de limpeza a ser executado nos dados |
| **Valor** | Valor a ser utilizado nos casos de substituição |
| **Razão mínima de valores ausentes** | Razão mínima entre o total de valores ausentes e o total de registros a serem considerados para que a operação seja executada |
| **Razão máxima de valores ausentes** | Razão máxima entre o total de valores ausentes e o total de registros a serem considerados para que a operação seja executada. |

[Aba Aparência][1]

[Aba Resultados][2]


## Definições
### Tipos de Limpeza
**[Exemplo 1]**\
A limpeza pode ser feita das seguintes formas:

1. Substituir com a média:
	- Calcula a média dos valores da coluna e utiliza este número para substituir os valores ausentes. 
2. Substituir por valor:
	- Substitui todos os valores ausentes pelo valor determinado pelo usuário.
3. Substituir com a mediana aproximada (10% da precisão relativa):
	- Calcula a mediana e utiliza este número para substituir todos os valores ausentes.
4. Substituir com a moda:
	- Substitui todos os valores ausentes pelo valor que se repete com maior frequência.
5. Remover toda a linha:
	- Remove completamente a linha da base de dados que contenha um ou mais valores ausentes.
6. Remover toda a coluna
	- Remove completamente a coluna que contenha um ou mais valores ausentes. 

#### Observação
1. Esta operação não altera a fonte dos dados, ela sempre gera um novo conjunto de dados no fluxo de execução com todas as mudanças realizadas.

### Valor
**[Exemplo 2]**

### Razão mínima e máxima de valores ausentes
**[Exemplo 3]**
Em alguns casos a melhor medida para limpeza dos dados ausentes é a remoção completa da linha ou coluna da base. Estes casos acontecem quando o número de ausentes em um determinado atributo ultrapassa um critério limite que faça valer a pena o uso de qualquer outra técnica de limpeza. Para muitos analistas este critério é definido como sendo a razão entre número de itens ausentes e o número de itens encontrados para um determinado atributo.


## Exemplo de Utilização
O objetivo e a base de dados abaixo serão utilizados nos três exemplos a seguir.

**Objetivo:** Encontrar as inconsistências e os valores ausentes desta base e utilizar a operação **Tratar Dados Ausentes** para corrigi-los.

**Base de Dados:** [Titanic][1]
	
![Ler dados](/lemonade/img/spark/manipulacao_de_dados/tratar_dados_ausentes/image2.png)

### Exemplo 1
**Substituir pela média:**

1. Adicione uma base de dados por meio da operação [Ler dados][2]. \
	![Tabela ler dados](/lemonade/img/spark/manipulacao_de_dados/tratar_dados_ausentes/image1.png)

2. Adicione a operação **Tratar dados Ausentes** adicione *“Age”* no campo atributos e selecione o tipo **substituir pela média** no campo **Tipo de Limpeza**. \
	![Substituir pela média](/lemonade/img/spark/manipulacao_de_dados/tratar_dados_ausentes/image3.png)

3. Execute e observe o resultado.\
	Observe que é possível verificar qual valor foi utilizado para substituir os ausentes. Para o resultado da operação Ler Dados, observe que os passageiros de *PassengerId* 6, 18 e 20 não possuem valor no campo idade, ou seja, é null.\
	![Resultado do exemplo 1 - Ler dados](/lemonade/img/spark/manipulacao_de_dados/tratar_dados_ausentes/image5.png)

	Agora observe o resultado da operação Tratar Dados Ausentes. Os passageiros de *PassengerId* 6, 18 e 20 receberam a média das idades, ou seja, 18.90.\
	![Resultado do exemplo 1 - Substituir pela média](/lemonade/img/spark/manipulacao_de_dados/tratar_dados_ausentes/image4.png)

### Exemplo 2
**Substituir por um valor:**

1. Adicione uma base de dados por meio da operação [Ler dados][2], assim como o [Exemplo 1]. 

2. Adicione a operação **Tratar dados Ausentes** adicione *“Age”* no campo atributos e selecione o tipo **substituir por valor** no campo **Tipo de Limpeza**, preencha *“99”* no campo **valor**.\
	![Substituir por valor](/lemonade/img/spark/manipulacao_de_dados/tratar_dados_ausentes/image11.png)

3. Execute e observe o resultado.\
	Verifique o valor que foi utilizado para substituir os ausentes.\
	![Resultado do exemplo 2 - Substituir por valor](/lemonade/img/spark/manipulacao_de_dados/tratar_dados_ausentes/image14.png)\
	A idade dos passageiros de *PassengerId* 6, 18 e 20 foi substituída por *99*.

### Exemplo 3
**Remover uma linha inteira:**\
Calcule a razão e utilize recursos da ferramenta para determinar se as linhas da base ou a coluna devem ser completamente removidas. Para calcular a razão entre os número de itens ausentes e válidos para a coluna Age, será utilizado o seguinte fluxo:
![Fluxo - Calcular a razão](/lemonade/img/spark/manipulacao_de_dados/tratar_dados_ausentes/image9.png)

1. Adicione uma base de dados por meio da operação [Ler dados][2], assim como o [Exemplo 1].

2. Utilize a operação **Transformar valores por função**. Ela é responsável por informar se um determinado item é ausente ou válido. \
	![Transformar valores por função](/lemonade/img/spark/manipulacao_de_dados/tratar_dados_ausentes/image12.png)

3. Execute e observe na visualização da tabela que uma nova coluna *booleana* de nome *is_null* aparece determinando o valor *true* para valores ausentes e *false* para todo o contrário. 
	![Resultado - Transformar valores por função](/lemonade/img/spark/manipulacao_de_dados/tratar_dados_ausentes/10.png)

4. Agrupe e conte o número de itens da coluna *is_null*. Para isto adicione a operação [Agrupar linhas por função][3] com os seguintes parâmetros:
	![Agrupar por Linha](/lemonade/img/spark/manipulacao_de_dados/tratar_dados_ausentes/image6.png)

5. Execute e observe o resultado da tabela:
	![Resultado - Agrupar por Linha](/lemonade/img/spark/manipulacao_de_dados/tratar_dados_ausentes/image13.png)\
	De acordo com a tabela:	
	- Número de itens ausentes = 177
	- Número Total de itens = 1309
	- Razão entre o número de itens ausentes e o total de itens da coluna Age: 177/1309 = 0.135 ou 0.1 (10%)\
	Dez por cento (10%) dos dados presentes na coluna Age são ausentes. Com este dado, determine um limiar que seja capaz de definir as condições para todas as linhas ausentes ou toda a coluna seja inteiramente removida. 

6. Agora crie um novo fluxo, ele será similar aos exemplos 1 e 2.

7. Adicione uma base de dados por meio da operação [Ler dados][2].

8. Adicione a operação **Tratar dados Ausentes**. Preencha *“Age”* no campo **Atributos** e selecione o tipo **Remover toda a linha**. No campo **Razão mínima de valores ausentes**, preencha *“0.0”*  e no campo **Razão máxima de valores ausentes**, preencha *“0.2”*. \
	Analise os seguintes parâmetros da ferramenta:
	- Razão mínima de valores ausentes
	- Razão máxima de valores ausentes

	Estes parâmetros são os dois fatores que determinam se uma operação de limpeza será executada para os atributos escolhidos. Os valores padrões são 0.00 para razão mínima e 1.00 para razão máxima, isto é, se estes valores não forem definidos pelo usuário eles não interferem na realização do processo de limpeza. 

	Neste estudo encontra-se que a coluna Age tem 10% de dados ausentes, logo para que a operação seja executada, este valor precisa estar contemplado no intervalo mínimo e máximo. \
	Observe os seguintes parâmetros:\
	![Tratar dados ausentes - Age](/lemonade/img/spark/manipulacao_de_dados/tratar_dados_ausentes/image11.png)\
	O intervalo define como razão mínima para execução o valor 0% ou (0.0) e para razão máxima 20% (ou 0.2). Como o valor que foi encontrado está dentro deste intervalo, a operação de remoção completa da linha com valores nulos será executada. 

9. Execute e observe os resultados.\
	Observe que os passageiros com *PassengerId* 6, 18 e 20 foram removidas na preview do resultado.\
	![Tratar dados ausentes - Age](/lemonade/img/spark/manipulacao_de_dados/tratar_dados_ausentes/image8.png)

-----

Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[Exemplo 1]: #exemplo-1
[Exemplo 2]: #exemplo-2
[Exemplo 3]: #exemplo-3
[1]: /pt-br/
[2]: /pt-br/
[3]: /pt-br/