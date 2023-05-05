# 2D Histogram Contour

## Definição
O 2D Histogram Contour é um tipo de gráfico que representa a distribuição conjunta de duas variáveis contínuas, utilizando histogramas em duas dimensões e linhas de contorno para visualizar as áreas de maior densidade de pontos.

## Utilização
Este tipo de gráfico é útil para analisar a relação entre duas variáveis contínuas e identificar padrões de distribuição conjunta. Ele é amplamente utilizado em áreas como estatística, ciências sociais, economia e engenharia.

## Formato dos dados de entrada
O 2D Histogram Contour requer duas variáveis contínuas como entrada, geralmente representadas em uma matriz ou dataframe de duas colunas. É possível adicionar uma terceira variável discreta para representar diferentes grupos ou categorias.

## Observações
É importante ajustar os parâmetros de suavização para obter uma visualização adequada da distribuição conjunta. Além disso, é recomendado utilizar uma paleta de cores adequada para destacar as áreas de maior densidade.

## Exemplo de código em Python utilizando a biblioteca matplotlib:

```python
import matplotlib.pyplot as plt
import numpy as np

# Gerando dados aleatórios
x = np.random.normal(size=500)
y = np.random.normal(size=500)

# Criando o gráfico
fig, ax = plt.subplots()
ax.hist2d(x, y, bins=30, cmap='Blues')
ax.contour(x, y, levels=5, colors='black')

# Adicionando título e legendas
ax.set_title('2D Histogram Contour')
ax.set_xlabel('Variável 1')
ax.set_ylabel('Variável 2')

# Exibindo o gráfico
plt.show()

```