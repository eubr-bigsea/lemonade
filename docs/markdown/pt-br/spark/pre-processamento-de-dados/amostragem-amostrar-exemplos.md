# Amostrar Exemplos
Gera uma amostra dos dados de entrada de tamanho determinado.


### Conectores
| Entrada | Saída |
| --- | --- |
| Dados a serem amostrados | Amostra dos dados |

### Tarefa
Nome da Tarefa

### Aba Execução
| Parâmetro | Detalhe |
| --- | --- |
| **[Tipo de Amostragem]** | O tipo de amostragem a ser executado nos dados. |
| **Total de registros** | Define quantos registros serão extraídos nos tipos amostragem:\
- Amostrar N registros a partir dos dados\
- Extrair os primeiros N registros dos dados |
| **Semente para num. aleatório** | Define um ponto de começo para o algoritmo de geração de números pseudo-aleatórios. Ao usar a mesma semente, serão utilizados os mesmos registros em todas as execuções |

[Aba Aparência][1]

[Aba Resultados][2]

## Definições
### Tipos de Amostragem    
A amostragem pode ser feita das seguintes formas:
1. Amostrar um percentual aleatório dos dados.
2. Amostrar N registros a partir dos dados.
3. Extrair os primeiros N registros dos dados

## Exemplo de Utilização
**Objetivo:** Amostrar N registros a partir dos dados.\
**Base de Dados:** [Íris][3]

![Fluxo de trabalho](/img/spark/pre-processamento-de-dados/amostragem-amostrar-exemplos/image5.png)

1. Adicione uma base de dados por meio da operação [Ler dados][4].\
![Operação Ler dados](/img/spark/pre-processamento-de-dados/amostragem-amostrar-exemplos/image1.png)

2. Adicione a operação **Amostrar exemplos**. Selecione *“Amostrar N registros a partir dos dados”* como **Tipo de amostragem ou partição**, *6* como número **Total de registros** e *1%-99%* como **Percentual**.\
![Operação Amostrar Exemplos](/img/spark/pre-processamento-de-dados/amostragem-amostrar-exemplos/image3.png)

3. Execute o fluxo e visualize o resultado.\
![Resultado 1](/img/spark/pre-processamento-de-dados/amostragem-amostrar-exemplos/image4.png)\
![Resultado 2](/img/spark/pre-processamento-de-dados/amostragem-amostrar-exemplos/image2.png)\
Observe o resultado após a execução do fluxo. A saída possui somente 6 linhas. Compare os primeiros 6 registros da imagem superior, base original, com a inferior, saída, para ver a aleatoriedade desse modo.

---
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[Tipo de Amostragem]: #tipos-de-amostragem
[1]: /pt-br/spark/documentacao-geral/documentacao-geral.html#aba-aparencia
[2]: /pt-br/spark/documentacao-geral/documentacao-geral.html#aba-resultados
[3]: /pt-br/spark/base-de-dados/#iris
[4]: /pt-br/spark/entrada-e-saida/ler-dados.html