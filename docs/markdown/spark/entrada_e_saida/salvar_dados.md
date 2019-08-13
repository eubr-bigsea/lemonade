# Salvar Dados

A operação Salvar Dados é utilizada para gravar dados que sofreram qualquer tipo de alteração durante o uso da ferramenta em uma nova fonte de dados. Por exemplo, ao excluir uma coluna ou uma linha da base, ela precisa ser salva novamente para que essas alterações sejam preservadas.

### Conectores
| Entrada | Saída |
| --- | --- |
| Dados a serem gravados | Dados que foram gravados no repositório de arquivos |

### Tarefa
Nome da Tarefa

### Aba Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Nome da fonte de dados** | Nome da nova fonte de dados que será criada |
| **Caminho da fonte de dados (relativo ao armazenamento)** | Pasta onde o arquivo será salvo. Caso a pasta não exista, ela será criada |
| **Armazenamento** | Dispositivo de armazenamento em que o arquivo é salvo |
| **[Formato de Saída]** | Formato a ser utilizado para escrita. |
| **Tags** | Etiquetas atribuídas a base |
| **[Modo para sobrescrita]** |  |
| **Aramzenamento** | Ação a ser realizada se o arquivo já existe |
| **Salvar cabeçalho** | Salva o cabeçalho, se o formato for CSV |

[Aba Aparência][1]



## Definições
### Formato de saída
O arquivo pode ter três formatos de saída:
1. Arquivo de dados [CSV][2] (separado por vírgulas).
2. Arquivo de dados [JSON][3].
3. Arquivo de dados Parquet.


### Modo para sobrescrita
Existem quatro ações que podem ser tomadas quando salvamos um arquivo com um nome de um arquivo já existente:
1. Acrescentar dados ao arquivo existente.
2. Não sobrescrever, gerar erro: nesse caso, o arquivo não é salvo.
3. Ignorar se existir: nesse caso, o arquivo não é salvo.
4. Sobrescrever se existir: nesse caso, o arquivo original é perdido.



## Exemplo de Utilização
**Objetivo:**  modificar uma base de dados e gravar sua nova versão.\
**Base de Dados:** [Titanic][4]
	
![Ler dados](/img/spark/entrada_e_saida/salvar_dados/image6.png)

1. Adicione uma base de dados por meio da operação [Ler dados][5]. \
	![Tabela - Ler dados](/img/spark/entrada_e_saida/salvar_dados/image7.png)	

2. Use a operação [Selecionar atributos][6], selecione os atributos *“class”*, *“survived”*, *“name”*, *“sex”* e *“age”*, que denotam, respectivamente, a classe do passageiro, se sobreviveu ou não ao desastre, seu nome, seu gênero e sua idade.\
	![Selecionar Atributos](/img/spark/entrada_e_saida/salvar_dados/image7.png)

3. Use a operação **Salvar Dados**, salve a base de dados resultante na ferramenta, com os seguintes parâmetros:\
	![Salvar Dados](/img/spark/entrada_e_saida/salvar_dados/image4.png)
	

4. Note que a base de dados que continha diversos atributos (10) foi transformada e salva como uma base de 5 atributos. Durante o processo de gravação, o arquivo salvo foi o CSV.\
	A base lida originalmente foi:
	![Base lida](/img/spark/entrada_e_saida/salvar_dados/image3.png)

	A base que foi escrita:\
	![Base escrita](/img/spark/entrada_e_saida/salvar_dados/image5.png)\
	![Atributos da base escrita](/img/spark/entrada_e_saida/salvar_dados/image1.png)

	- Para baixar a base salva, clique no ícone
	![Ícone](/img/spark/entrada_e_saida/salvar_dados/image2.png)
	no menu  Bases de Dados.
	- É importante inferir o esquema da nova base.

-----

Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[Formato de Saída]: #formato-de-saida
[Modo para sobrescrita]: #modo-para-sobrescrita
[1]: /pt-br/
[2]: /pt-br/
[3]: /pt-br/
[4]: /pt-br/
[5]: /pt-br/
[6]: /pt-br/