# Regressão Isotônica

A operação Regressão Isotônica tem como objetivo criar um modelo de aprendizado que tenta estimar uma função monótona crescente ou decrescente de forma a minimizar a distância entre esta e os pontos observados.


### Conectores
| Entrada | Saída |
| --- | --- |
| Dados utilizados para treinar o modelo | Dados de saída e modelo do algoritmo de regressão |

### Tarefa
Nome da Tarefa

### Aba Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Atributo(s) previsor(es)** | Atributo que será usado para treinamento |
| **Atributo com o rótulo** | Atributo a ser predito |
| **Atributos com a predição** | Atributo contendo a predição do modelo |
| [Isotonic] | Especifica o crescimento da função monótona gerada pela regressão. O seu valor padrão é Isotônica/crescente |
| **Y min** | Y min. |
| **Y max** | Y max. |
| **Out of bounds** | Out of bounds. |

[Aba Aparência][1]

[Aba Resultados][2] 

## Definições
### Isotonic

1. Isotônica/crescente: A regressão isotônica gera uma função monótona crescente.
2. Antitônica/decrescente: A regressão isotônica gera uma função monótona decrescente



## Exemplo de Utilização
**Objetivo:** Utilizar o modelo construído pela operação Regressão Isotônica para predizer a qualidade de um vinho\
**Base de Dados:** [Qualidade da Variante Vermelha do Vinho Verde Português][8]

![Ler dados](/img/sklearn/aprendizado_de_maquina/regressao_isotonica/image4.png)

1. Leia a base de dados por meio da operação [Ler dados][4].

2. Utilize a operação [Divisão percentual][5] para dividir a base de dados em treino e teste. No parâmetro **Percentual**, calibre-o utilizando 50% dos dados para treinar (1.ª parte) e 50% para testar (2.ª parte).

3. Na operação **Regressão Isotônica**, selecione “alcohol”, “chlorides”, “citric_acid”, “density”, “fixed_acidity”, “free_sulfur_dioxide”, “pH”, “residual_sugar”, “sulphates”, “total_sulfur_dioxide” e “volatile_acidity” no campo **Atributo(s) previsor(es)**. Selecione *“quality”* no campo **Atributo com o rótulo** e preencha “resultado” no campo **Atributo com a predição (novo)**.\
Preencha 100 no campo **Iterações máximas** e selecione no campo **Isotonic** a função Isotônica/crescente

	![Forumlário regressão isotônica - parte 1](/img/sklearn/aprendizado_de_maquina/regressao_isotonica/image2.png)
	![Forumlário regressão isotônica - parte 2](/img/sklearn/aprendizado_de_maquina/regressao_isotonica/image3.png)

4. Na operação [Aplicar Modelo][6], selecione “alcohol”, “chlorides”, “citric_acid”, “density”, “fixed_acidity”, “free_sulfur_dioxide”, “pH”, “residual_sugar”, “sulphates”, “total_sulfur_dioxide” e “volatile_acidity” no campo **Atributo(s) previsor(es)** e preencha *“resultado”* no campo **Nome do novo atributo (herdado do modelo)**. 

5. Na operação [Avaliar Modelo][7], selecione *“resultado”* no campo **Atributo usado para predição**. Selecione *“quality”* no campo **Atributo usado como label** e a métrica *“Raiz do erro quadrático médio”* como **Métrica para avaliação**. 

6. Execute o fluxo e visualize o resultado, que neste caso está de acordo com a raiz do erro quadrático médio (**Root Mean Square Error** ou **RMSE**):\
	![Resultado](/img/sklearn/aprendizado_de_maquina/regressao_isotonica/image1.png)



---
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[Link na propria pagina]: #link-vem-pra-ca
[Isotonic]: #isotonic
[1]: /pt-br/sklearn/documentacao-geral/aba-aparencia.html
[2]: /pt-br/sklearn/documentacao-geral/aba-resultados.html
[3]: /pt-br/sklearn/base-de-dados/#wine
[4]: /pt-br/sklearn/entrada-e-saida/ler-dados.html
[5]: /pt-br/sklearn/pre-processamento-de-dados/amostragem-divisao-percentual.html
[6]: /pt-br/sklearn/modelo-e-avaliacao/aplicar-modelo.html
[7]: /pt-br/sklearn/modelo-e-avaliacao/avaliar-modelo.html
[8]:/pt-br/sklearn/base-de-dados/#wine