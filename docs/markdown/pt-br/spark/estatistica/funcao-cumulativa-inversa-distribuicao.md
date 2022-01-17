# Função Cumulativa Inversa de Distribuição

Transforma um atributo do conjunto de dados, aplicando a função de distribuição cumulativa inversa (CCDF). Os valores resultantes ficam contidos no intervalo [0, 1]. Use o CCDF para determinar a probabilidade de que uma observação aleatória tirada da população seja menor ou igual a um certo valor. Você também pode usar essas informações para determinar a probabilidade de uma observação ser maior do que um determinado valor ou entre dois valores.


Conectores

| Entrada | Saída |
| --- | --- |
| Dados a serem tratados | Dados tratados e modelo de transformação |

### Tarefa
Nome da Tarefa

### Execução

| Parâmetro  | Detalhe |
| --- | --- |
| Atributo com as características (features) | Atributo que será transformado pela função |
| Nome do novo atributo | Nome que o atributo transformado receberá |

[Aba Aparência][1]

[Aba Resultados][2]

## Exemplos de Utilização

### Exemplo 1
**Objetivo:** Utilizar a função cumulativa inversa de distribuição em um atributo, criando uma visualização em gráfico de barras.

*Base de Dados:* ![Titanic](https://docs.lemonade.org.br/pt-br/spark/base-de-dados/#titanic)

1. Adicione uma base de dados por meio da operação [Ler Dados][4]\
![Imagem 1](/img/spark/estatistica/funcao_cumulativa_inversa_distribuicao/image1.png)
2. Utilize a operação *Função Cumulativa Inversa de Distribuição* para modificar o atributo. Selecione __"fare"__ no campo *Atributo(s)*. Preencha __"fare_CCDF"__ no campo **Nome do novo atributo**.\
3. Utilize a operação [Gráfico em Barra][5]. Selecione __"fare"__ no atributo do eixo X e __"fare_CCDF" no atributo do eixo Y.\
![Imagem 2](/img/spark/estatistica/funcao_cumulativa_inversa_distribuicao/image2.png)
4. Execute o fluxo e visualize o resultado. O resultado possui o atributo __"fare_CCDF"__ e o gráfico em barras.3\
![Imagem 3](/img/spark/estatistica/funcao_cumulativa_inversa_distribuicao/image3.png)

---
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[Link na propria pagina]: #link-vem-pra-ca
[1]: /pt-br/spark/documentacao-geral/aba-aparencia.html
[2]: /pt-br/spark/documentacao-geral/aba-resultados.html
[3]: /pt-br/spark/base-de-dados/#titanic
[4]: /pt-br/spark/entrada-e-saida/ler-dados.html
[5]: /pt-br/spark/visualizacao-de-dados/grafico-de-barra.html
