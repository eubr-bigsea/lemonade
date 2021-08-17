# Comparação
A operação Comparação tem como objetivo comparar pares de registros.
### Conectores
| Entrada | Saída |
| --- | --- |
| Fonte(s) de dados e dados de saída da Blocagem | Resultado da comparação de pares de registros |

### Tarefa
Nome da Tarefa

### Aba Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Expressão** | Expressões usadas para realizar a comparação |

[Aba Aparência][1]

[Aba Resultados][2]


## Exemplo de Utilização
**Objetivo:** ...\
**Base de Dados:** dataset3 - [Wine Red Quality][3]

![Fluxo - Comparacao](/img/sklearn/resolucao_de_entidades/comparacao/imagem1.png)

1. Leia a base de dados por meio da operação [Ler dados][4].

2. Na Operação **1 - Blocagem**, clique na opção "*Editar valor*". Preencha o campo **expressão** com "block('given_name','given_name')". Em seguida clique em "*Adicionar*" e preencha o campo **expressão** com "block('surname','surname')". Por fim, clique em "*Adicionar*" mais uma vez e preencha o campo **expressão** com "block('date_of_birth','date_of_birth')".\
   ![Blocagem](/img/sklearn/resolucao_de_entidades/blocagem/imagem2.png)

3. Na Operação **2 - Comparação**, clique na opção "*Editar valor*". Preencha o campo **expressão** com ...\
      ![Blocagem](/img/sklearn/resolucao_de_entidades/comparacao/imagem2.png)

   Em seguida, na aba "*Resultados*" selecione "Exibir amostra(s) da(s) saida(s) (máx. 50 registros)".
   ![Resultados - Comparacao](/img/sklearn/resolucao_de_entidades/comparacao/imagem4.png)

4. Execute o fluxo e visualize o resultado:\
   ![Resultado](/img/sklearn/resolucao_de_entidades/comparacao/imagem3.png)




---
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[1]: /pt-br/sklearn/documentacao-geral/aba-aparencia.html
[2]: /pt-br/sklearn/documentacao-geral/aba-resultados.html
[3]: /pt-br/sklearn/base-de-dados/#wine
[4]: /pt-br/sklearn/entrada-e-saida/ler-dados.html