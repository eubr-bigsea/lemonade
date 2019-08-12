# Regras de Associação

O objetivo da operação Regras de Associação é extrair as regras de associação e suas respectivas confianças encontradas pela operação [Mineração de Itemsets Frequentes][1].

### Conectores
| Entrada | Saída |
| --- | --- |
| Dados de transações | Tabela com os antecedentes e consequentes de cada regra, e também com a respectiva confiança da mesma |

### Tarefa
Nome da Tarefa

### Aba Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Confiança** | É a frequência de itens em x que aparece nas transações que contêm y, variando entre 0 e 1. A confiança da regra x => y é calculada como a probabilidade de y aparecer na transação dado que x ocorreu, isto é: confiança(x => y) = suporte (x U y)/suporte(x) |
| **Quantidade de regras a serem geradas** | O número máximo de regras a serem gerada |
| **Atributo com transações** | Atributo contendo as transações da base de dados |

[Aba Aparência][2]

[Aba Resultados][3] 

## Exemplo de Utilização
**Objetivo:**  Extrair regras (com sua respectiva confiança) de compras de itens frequentes de uma cesta de produtos de uma loja varejo Belga.\
**Base de Dados:** [Belgium retail][4]

![Fluxo de trabalho - Ler dados](/lemonade/img/spark/aprendizado_de_maquina/associacao_regras_de_associacao/image2.png)

1. Adicione a base de dados por meio da operação [Ler dados][5].

2. Utilize a operação **Transformar valores por função** para tratar a base de dados. Nesta operação, clique em **Editar valor** da expressão para adicionar a expressão. Clique em adicionar e, em seguida preencha o campo da **Expressão** com *“split(trim(value), ' ')”* e o campo do **Alias** com *“trata_transacao”*. Por fim, clique em **OK**. Isso aplicará a expressão *“trata_transacao = split(trim(value), ' ') ”* nos dados de entrada.

3. Na operação **Mineração de itemsets** frequentes, preencha *0,2* no campo **Suporte mínimo**, selecione *“trata_transacoes”* no campo **Atributo com transações (vazio = primeiro atributo)**, e preencha *0,6* no campo **Confiança mínima (para a geração das regras)**. 

4. Na operação **Regras de associação**, preencha *0,6* no campo **Confiança mínima** e *200* no campo **Quantidade de regras a serem geradas**. Por fim, selecione *“items”* no campo **Atributo com transações (vazio = primeiro atributo)**.\
![Fluxo de trabalho - Ler dados](/lemonade/img/spark/aprendizado_de_maquina/associacao_regras_de_associacao/image1.png)

5. Para visualizar os resultados, adicione a operação [Tabela][6].

6. Execute o fluxo e visualize o resultado na aba **Visualizações**. A única regra encontrada para os parâmetros especificados foi aquela com o antecedente 48 e o consequente 39, que possui um confiança de aproximadamente 0,692:\
![Resultado](/lemonade/img/spark/aprendizado_de_maquina/associacao_regras_de_associacao/image3.png)

---
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[1]: /pt-br/
[2]: /pt-br/
[3]: /pt-br/
[4]: /pt-br/
[5]: /pt-br/
[6]: /pt-br/