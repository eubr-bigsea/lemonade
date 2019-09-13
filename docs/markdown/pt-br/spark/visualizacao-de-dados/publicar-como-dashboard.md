
# Publicar como Dashboard

Uma dashboard é um conjunto de visualizações.

### Conectores
| Entrada | Saída |
| --- | --- |
|Visualizações geradas | Sem saída |

### Tarefa
Nome da Tarefa

### Aba Execução
| Parâmetro | Detalhe |
| --- | --- |
| Título do painel de visualização | Título do Dashboard que será mostrado na visualização. |

[Aba Aparência][1]

[Aba Resultados][2]


## Exemplo de Utilização
**Objetivo:** gerar um dashboard para analisar a quantidade de classes da flor Íris.

**Base de Dados:** [Iris][3]
	
![Ler dados](/img/spark/visualizacao_de_dados/publicar_como_dashboard/image2.png)

1. Utilize o fluxo apresentado no [Gráfico de Rosca][4] e o fluxo do [Gráfico de Pizza][5].

2. Adicione a operação **Publicar como dashboard** e preencha *“Iris Dash”* no campo **Título do painel de visualização**. \
	![Formulario](/img/spark/visualizacao_de_dados/publicar_como_dashboard/image1.png)

3. Execute o fluxo e visualize o resultado. Para acessar o dashboard, é necessário ir ao menu lateral esquerdo e clicar na opção Dashboards.\
	Obs.: O tamanho e a posição das visualizações podem ser alterados.
	![Dashboard](/img/spark/visualizacao_de_dados/publicar_como_dashboard/image3.png)

-----

Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[1]: /pt-br/spark/documentacao-geral/aba-aparencia.html
[2]: /pt-br/spark/documentacao-geral/aba-resultados.html
[3]: /pt-br/spark/base-de-dados/#iris
[4]: /pt-br/spark/visualizacao-de-dados/grafico-de-rosca.html
[5]: /pt-br/spark/visualizacao-de-dados/grafico-de-pizza.html