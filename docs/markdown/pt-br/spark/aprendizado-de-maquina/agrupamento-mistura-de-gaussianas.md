# Mistura de Gaussianas 

Método de clusterização probabilístico de mistura de gaussianas. 


### Conectores
| Entrada | Saída |
| --- | --- |
| Dados utilizados para treinar o modelo | Dados de saída e Modelo do algoritmo de agrupamento |

### Tarefa
Nome da Tarefa

### Aba Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Atributo(s) previsor(es)** | Atributo que será usado para treinamento |
| **Atributo com a Predição (novo)** |  |
| **Número de agrupamentos (k)** | Quantidade de componentes da mistura |
| **Tolerância** | Tolerância relativa para declarar convergência do algoritmo |
| **Número máximo de iterações** | Quantidade máxima de iterações do algoritmo |
| **Métrica para validação cruzada** |  |
| **Atributo com o número da partição (fold)** |  |

[Aba Aparência][1]

[Aba Resultados][2] 

## Exemplo de Utilização
**Objetivo:** utilizar o modelo mistura de gaussianas para agrupar as espécies da Íris.\
**Base de Dados:** [Íris][3]

![Fluxo de trabalho - Ler Dados](/img/spark/aprendizado-de-maquina/agrupamento-mistura-de-gaussianas/image1.png)

1. Adicione uma base de dados por meio da operação [Ler dados][4].\
![Formulário - Ler Dados](/img/spark/aprendizado-de-maquina/agrupamento-mistura-de-gaussianas/image4.png)

2. Na operação **Mistura de Gaussianas**, selecione *“petallength”*, *“petalwidth”*, *“sepallength”* e *“sepalwidth”* no campo **Atributo(s) previsor(es)**. Selecione *“cluster”* no campo **Atributo com a predição (novo)**. Preencha 3 no campo **Número de agrupamentos (k)**, 0.01 no campo **Tolerância**, 20 no campo **Número max. de interações** e *“Não executar a validação cruzada"* no campo **Métrica para validação cruzada**.\
![Formulário - Mistura de Gaussianas](/img/spark/aprendizado-de-maquina/agrupamento-mistura-de-gaussianas/image2.png)

3. Na operação Visualizar em tabela, não preencha nada. 

4. Execute o fluxo e visualize o resultado.\
![Resultado](/img/spark/aprendizado-de-maquina/agrupamento-mistura-de-gaussianas/image3.png)\
Com a execução do modelo a probabilidade de cada amostra pertencer a cada componente pode ser visualizada pela tabela de visualização. 

---
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[Link na propria pagina]: #link-vem-pra-ca
[1]: /pt-br/spark/documentacao-geral/aba-aparencia.html
[2]: /pt-br/spark/documentacao-geral/aba-resultados.html
[3]: /pt-br/spark/base-de-dados#iris
[4]: /pt-br/spark/entrada-e-saida/ler-dados.html