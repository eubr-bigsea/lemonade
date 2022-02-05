# Função Distributiva Acumulada

Transforma um atributo do conjunto de dados, aplicando a função de distribuição acumulada (CDF) para calcular a probabilidade cumulativa para um determinado valor x. Os valores resultantes ficam contidos no intervalo [0, 1]. Use o CDF para determinar a probabilidade de que uma observação aleatória tirada da população seja menor ou igual a um certo valor. Você também pode usar essas informações para determinar a probabilidade de uma observação ser maior do que um determinado valor ou entre dois valores.

### Conectores
| Entrada | Saída |
| --- | --- |
| Dados a serem tratados | Dados tratados |

### Tarefa
Nome da Tarefa

### Execução
|Parâmetro | Detalhe |
|--- | --- |
|Atributo com as características (features) | Atributo que será transformado pela função|
| Nome do novo atributo | Nome que o atributo transformado receberá |

[Aba Aparência][1]

[Aba Resultados][2]
 
## Exemplos de Utilização
### Exemplo 1
**Objetivo:** Utilizar a função cumulativa de distribuição em um atributo.
**Base de Dados:** ![Titanic][3]

1. Adicione uma base de dados por meio da operação [Ler Dados][4]\
![Imagem 1](/img/spark/estatistica/funcao_distributiva_acumulada/image1.png)
2. Utilize a operação *Função Cumulativa de Distribuição* para modificar o atributo.Selecione __"y_up"__ no campo Atributo(s). Preencha __"y_up_cdf"__ no campo **Nome do novo atributo**.\
![Imagem 2](/img/spark/estatistica/funcao_distributiva_acumulada/image2.png)
3. Utilize a operação [Gráfico em Barra][5]. Selecione __"y_up"__ no atributo do eixo X e __"y_up_cdf"__ no atributo do eixo Y.\
![Imagem 3](/img/spark/estatistica/funcao_distributiva_acumulada/image3.png)
4. Execute o fluxo e visualize o resultado.\
![Imagem 4](/img/spark/estatistica/funcao_distributiva_acumulada/image4.png)
-----

Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[Link na propria pagina]: #link-vem-pra-ca
[1]: /pt-br/spark/documentacao-geral/aba-aparencia.html
[2]: /pt-br/spark/documentacao-geral/aba-resultados.html
[3]: /pt-br/spark/base-de-dados/#titanic
[4]: /pt-br/spark/entrada-e-saida/ler-dados.html
