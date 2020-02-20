# Ler Dados

A operação **Ler Dados** é utilizada para carregar a fonte de dados a ser analisada. Ela tenta inferir o tipo dos dados sendo lidos e é capaz de tratar dados inválidos.

### Conectores
| Entrada | Saída |
| --- | --- |
| Não tem | Dados carregados |

### Tarefa
Nome da Tarefa

### Aba Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Fonte de dados** | Fonte de dados de entrada |
| **Tratar esses valores como nulos (separe por vírgula)** | Valores que serão considerados como nulos quando o arquivo estiver sendo lido |
| **[Inferir esquema da fonte de dados]** | Como inferir o tipo dos dados presentes na fonte |
| **[O que fazer em caso de dados inválidos]** | Ação a ser tomada em caso de dados inválidos |

[Aba Aparência][1]

[Aba Resultados][2]

## Definições
### Inferir esquema da fonte de dados
A inferência do esquema (ou o tipo dos atributos) da fonte de dados pode ser feita de três formas:
1. A partir dos metadados (recomendado):
	- Infere os tipos dos atributos a partir dos metadados. Metadados são dados que contém informações sobre os dados pertencentes à fonte.
2. A partir dos dados:
	- Infere os tipos dos atributos a partir dos dados em si.
3. Não inferir:
	- Não infere os tipos dos atributos da fonte de dados.

### O que fazer em caso de dados inválidos
Podem ser feitas três ações em caso de dados inválidos:
1. Converter dados inválidos para NULO (null):
	- Converter os dados inválidos para valores nulos, demarcados como NULL.
2. Ignorar todo o registro:
	- Ignorar toda as linhas corrompidas/inválidas
3. Parar o processamento e gerar um erro.

## Exemplo de Utilização
**Objetivo:** Construir um fluxo de dados para ler uma base de dados.\
**Base de Dados:** [Titanic][3]
	
![Ler dados](/img/spark/entrada_e_saida/ler_dados/image5.png)

### Exemplo 1:
A partir de metadados.

1. Adicione uma base de dados por meio da operação **Ler dados**. Selecione *“A partir dos metadados”* no campo **Inferir esquema da fonte de dados** e *“Converter dados inválidos para NULO”* no campo **O que fazer em caso de dados inválidos**.\
	![Tabela - Ler dados](/img/spark/entrada_e_saida/ler_dados/image7.png)

2. Execute o fluxo e visualize o resultado.\
	![Resultado - Ler dados](/img/spark/entrada_e_saida/ler_dados/image1.png)\
	Como pode ser observado, os tipos dos atributos e os metadados da base estão configurados (na coluna metadados), o que nos certifica da inferência a partir dos metadados.

### Exemplo 2:

1. Adicione uma base de dados por meio da operação **Ler dados**. Selecione *“A partir dos dados”* no campo **Inferir esquema da fonte de dados**.\
	![Tabela - Ler a partir de dados](/img/spark/entrada_e_saida/ler_dados/image4.png)

2. Execute o fluxo e visualize o resultado.\
	![Resultado - Ler a partir de dados](/img/spark/entrada_e_saida/ler_dados/image3.png)\
	Podemos verificar que os atributos estão inferidos, nomeados e com seus tipos definidos, porém os metadados não foram utilizados. Isso demonstra a inferência a partir dos dados.

### Exemplo 3:
Não inferir

1. Adicione uma base de dados por meio da operação Ler dados. Selecione “Não inferir” no campo Inferir esquema da fonte de dados.
	![Tabela - Não inferir](/img/spark/entrada_e_saida/ler_dados/image2.png)

2. Execute o fluxo e visualize o resultado.\
	![Resultado - Não inferir](/img/spark/entrada_e_saida/ler_dados/image6.png)\
	Podemos observar que os atributos não foram inferidos, e permaneceram com o tipo string.

-----

Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[Inferir esquema da fonte de dados]: #inferir-esquema-da-fonte-de-dados
[O que fazer em caso de dados inválidos]: #o-que-fazer-em-caso-de-dados-invalidos
[1]: /pt-br/spark/documentacao-geral/aba-aparencia.html
[2]: /pt-br/spark/documentacao-geral/aba-resultados.html
[3]: /pt-br/spark/base-de-dados/#titanic