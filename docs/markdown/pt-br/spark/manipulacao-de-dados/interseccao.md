# Intersecção

Retorna linhas (exemplos/instâncias) que pertençam simultaneamente as duas bases de dados de entrada.

**Detalhes de funcionamento**: A operação será realizada somente se: (i) o número de atributos (colunas/variáveis) das bases de dados de entrada for o mesmo; (ii) os atributos correspondentes das bases de dados possuírem o mesmo tipo.


### Conectores
| Entrada | Saída |
| --- | --- |
| Duas bases de dados | Dados pertencentes a ambas as bases de dados de entrada |

### Tarefa
Nome da Tarefa

[Aba Aparência][1]

[Aba Resultados][2]


## Exemplo de Utilização
**Objetivo:** Identificar objetos comuns entre dois conjuntos de dados.

**Base de Dados:** [Wine][3]
	
![Ler dados](/img/spark/manipulacao_de_dados/interseccao/image2.png)

1. Adicione uma base de dados por meio da operação [Ler dados][4].
	
2. Utilize a operação [Amostrar][5]. Selecione *“Extract top N records from data”* como **Tipo de amostragem ou partição**, as 5 primeiras linhas (registros) da base de dados original em número **Total de registros** e 99% - 1% como **Percentual**.\
	![Amostrar exemplos](/img/spark/manipulacao_de_dados/interseccao/image3.png)
	
3. Dado que a operação **Intersecção** não possui parâmetros de execução, prossiga com a execução de seu respectivo fluxo.

4. Observe abaixo o resultado após a execução do fluxo. Ele possui apenas 5 linhas como saída. Compare os registros da base de dados original com esse resultado. Note que as linhas que sofreram interseção foram as 5 primeiras da base de dados original.\
	![Resultado](/img/spark/manipulacao_de_dados/interseccao/image1.png)

-----

Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[1]: /pt-br/spark/documentacao-geral/documentacao-geral.html#aba-aparencia
[2]: /pt-br/spark/documentacao-geral/documentacao-geral.html#aba-resultados
[3]: /pt-br/spark/base-de-dados/#wine
[4]: /pt-br/spark/entrada-e-saida/ler-dados.html
[5]: /pt-br/spark/pre-processamento-de-dados/amostragem-amostrar-exemplos.html