# Mineração de itemsets frequentes

O objetivo da operação Mineração de Itemsets Frequentes é encontrar todos os conjuntos de itens (itemsets) em uma transação, em que o suporte é maior ou igual a um suporte mínimo previamente estabelecido.

### Conectores
| Entrada | Saída |
| --- | --- |
| Dados de transações | Conjunto de itemsets frequentes, regras de associação com métricas de interesse (suporte, confiança, lift, etc.) |

### Tarefa
Nome da Tarefa

### Aba Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Suporte mínimo** | É a proporção de transações em que x e y ocorrem conjuntamente na base de dados. Varia entre 0 e 1 |
| **Atributo com transações** | Atributo contendo as transações da base de dados |
| **Confiança** | É a frequência de itens em x que aparece nas transações que contêm y, variando entre 0 e 1. A confiança da regra x => y é calculada como a probabilidade de y aparecer na transação dado que x ocorreu, isto é: confiança(x => y) = suporte (x U y)/suporte(x) |

[Aba Aparência][1]

[Aba Resultados][2]

## Exemplo de Utilização
**Objetivo:** Retornar conjuntos de itens frequentes de uma cesta de produtos de uma loja varejo Belga.\
**Base de Dados:** [Belguium retail][3]

![Fluxo de trabalho - Ler dados](/docs/img/spark/aprendizado_de_maquina/associacao_mineracao_de_itemsets_frequentes/image1.png)

1. Adicione a base de dados por meio da operação [Ler dados][4].

2) Utilize a operação **Transformar valores por função** para tratar a base de dados. Nesta o.eração, clique em **Editar valor** da expressão para adicionar a expressão. Clique em adicionar e, em seguida preencha o campo da **Expressão** com *“split(trim(value), ' ')”* e o campo do **Alias** com *“trata_transacao”*. Por fim, clique em OK. Isso aplicará a expressão *“trata_transacao = split(trim(value), ' ') ”* nos dados de entrada.

3. Na operação **Mineração de itemsets frequentes**, preencha *0,2* no campo **Suporte mínimo**, selecione *“trata_transacoes”* no campo **Atributo com transações (vazio = primeiro atributo)**, e preencha *0,6* no campo **Confiança mínima (para a geração das regras)**.\
![Formulário Mineração de itemsets frequentes](/docs/img/spark/aprendizado_de_maquina/associacao_mineracao_de_itemsets_frequentes/image3.png)

4. Na operação [Regras de associação][5], preencha *0,6* no campo Confiança mínima e *200* no campo Quantidade de regras a serem geradas. Por fim, selecione *“items”* no campo Atributo com transações (vazio = primeiro atributo).

5. Para visualizar os resultados, adicione a operação [Tabela][6].

6. Execute o fluxo e visualize o resultado na aba Visualizações. A única regra encontrada para os parâmetros especificados foi aquela com o antecedente 48 e o consequente 39, que possui uma confiança de aproximadamente 0,692:\
![Resultado](/docs/img/spark/aprendizado_de_maquina/associacao_mineracao_de_itemsets_frequentes/image2.png)

---
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[Link na propria pagina]: #link-vem-pra-ca
[1]: /pt-br/
[2]: /pt-br/
[3]: /pt-br/
[4]: /pt-br/
[5]: /pt-br/
[6]: /pt-br/