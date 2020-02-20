# Adicionar nova(s) linha(s)

Adicionar nova(s) linha(s) é uma operação de **Manipulação de Dados** que concatena duas entradas de dados a uma única saída. Geralmente, a operação é utilizada quando precisamos agrupar numa mesma saída de dados duas entradas de dados diferentes. Um caso de uso para essa operação é a concatenação de duas bases de dados divididas em dois arquivos separados. No caso de uso analisado há uma entrada de dados com a metade inicial dos dados de uma base e outra entrada com a metade final dessa mesma base.\
**É importante que as duas bases de dados apresentem atributos de uma mesma natureza, isto é, que possam ser comparados.**



### Conectores
| Entrada | Saída |
| --- | --- |
| Duas fontes de dados | Fonte de dados com os dados concatenados |

### Parâmetros da Tarefa
Nome

[Aba Aparência][1]

[Aba Resultados][2]


## Exemplo de Utilização

**Objetivo:** Objetivo: Concatenar duas bases de dados divididas em dois arquivos separados.\
**Base de Dados:** [Íris][3].

![Ler dados](/img/spark/manipulacao_de_dados/linha_adicionar_nova/image1.png)

1. Adicione uma base de dados por meio da operação [Ler dados][4].

2. Adicione a base de dados, novamente, por meio da operação [Ler dados][4].


3. Adicione a operação **Adicionar nova(s) linhas(s)**

4. Execute o fluzo e visualize o resultado.\
	![Resultado](/img/spark/manipulacao_de_dados/linha_adicionar_nova/image2.png)

-----

Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[1]: /pt-br/spark/documentacao-geral/aba-aparencia.html
[2]: /pt-br/spark/documentacao-geral/aba-resultados.html
[3]: /pt-br/spark/base-de-dados/#iris
[4]: /pt-br/spark/entrada-e-saida/ler-dados.html