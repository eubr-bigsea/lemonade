# Junção

É uma operação que combina os dados de duas fontes, duas tabelas. Usa como base a operação SQL join.

### Conectores
| Entrada | Saída |
| --- | --- |
| Duas fontes de dados | Os dados combinados das duas fontes |

### Parâmetros da Tarefa
Nome

### Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Atributos da 1.ª Fonte** | Lista com o(s) atributo(s) da primeira fonte de dados que serão utilizados como chave(s). |
| **Atributos da 2.ª Fonte** | Lista com o(s) atributo(s) da segunda fonte de dados que serão utilizados como chave(s). |
| **[Tipo de Junção]** | Tipo de junção a ser utilizada na operação |
| **Manter chaves da 2.ª Fonte** | Quando definido mantêm as chaves privadas da segunda base de dados |
| **Diferenciar maiúsculas e minúsculas** | Quando definido diferencia maiúsculas de minúsculas ao comparar chaves |
| **Prefixo para os atributos** | No resultado da operação define o prefixo que será utilizado para renomear atributos |

[Aba Aparência][1]

[Aba Resultados][2]


## Definições
### Tipos de Junção
**[Exemplo Inner Join]**\
Executa a junção levando em consideração a interseção das duas fontes de dados.

**[Exemplo Right Outer Join]**\
Executa a junção preservando os atributos da primeira fonte de dados, mantendo da segunda fonte apenas os atributos com interseção com a primeira.

**[Exemplo Left outer join]**\
Executa a junção preservando os atributos da segunda fonte de dados, mantendo da primeira fonte apenas os atributos com interseção com a segunda.


## Exemplo de Utilização
**Objetivo:** Realizar junção das bases.\
**Base de Dados:** [Artificial 1][3]
	
![Ler dados](/docs/img/spark/manipulacao_de_dados/juncao/image7.png)\
Utilize para o critério de junção o atributo *key* para ambas as entradas de dados.

1. Adicione uma base de dados por meio da operação [Ler dados][4]. \
	![Tabela ler dados](/docs/img/spark/manipulacao_de_dados/juncao/image3.png)

2. Adicione a outra base de dados por meio da operação [Ler dados][4]. \
	![Tabela ler dados](/docs/img/spark/manipulacao_de_dados/juncao/image6.png)

3. Adicione a operação Junção. Selecione *“key”* como **Atributo(s) da primeira fonte de dados** e **Atributo(s) da segunda fonte de dados**. Preencha *“ds0_, ds1_”* no campo **Prefixo para os atributos** e selecione a opção **Diferenciar maiúsculas e minúsculas quando comparar chaves**.\
	![Tabela Junção](/docs/img/spark/manipulacao_de_dados/juncao/image5.png)\
	Os prefixos *ds0_* e *ds1_* são definidos para o nome dos atributos na saída de dados.\
	Essas definições são usadas para todos os exemplos desta seção.

### Inner Join
Ainda na operação **Junção**, selecione *“Inner join”* no campo **Tipo de junção (join)** e execute o fluxo.\
![Resultado Inner Join](/docs/img/spark/manipulacao_de_dados/juncao/image2.png)\
A junção do tipo **Inner Join**, associa os atributos correspondentes nas duas entradas retornando o conjunto intersecção dos mesmos, como pode ser visto abaixo. Os atributos que não tem paridade não são relacionados. 

### Left Outer Join
Volte na operação **Junção** e altere o campo **Tipo de junção (join)** para *“Left Outer join”*.  Execute o fluxo novamente.\
![Resultado Left Outer Join](/docs/img/spark/manipulacao_de_dados/juncao/image1.png)\
A junção do tipo **Left Outer Join** associa todos os atributos da primeira entrada de dados com os atributos da segunda entrada. Mesmo que não exista correspondência. Observe que o resultado está ordenado levando em conta os atributos da primeira entrada de dados. E que para este caso houve correspondência em todas as associações.

### Right Outer Join
Volte na operação **Junção** e altere o campo **Tipo de junção (join)** para *“Right Outer join”*. Execute o fluxo novamente.\
![Resultado Right Outer Join](/docs/img/spark/manipulacao_de_dados/juncao/image4.png)\
A junção do tipo **Right Outer Join** associa todos os atributos da segunda entrada de dados com os atributos da primeira entrada, mesmo que não exista correspondência. Observe que para os casos em que a associação de atributos não apresenta interseção de chaves em correspondência, o campo ausente recebe o valor nulo.

-----

Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[Tipo de Junção]: #tipos-de-juncao
[Exemplo Inner Join]: #inner-join
[Exemplo Right Outer Join]: #right-outer-join
[Exemplo left Outer Join]: #left-outer-join
[1]: /pt-br/
[2]: /pt-br/
[3]: /pt-br/
[4]: /pt-br/