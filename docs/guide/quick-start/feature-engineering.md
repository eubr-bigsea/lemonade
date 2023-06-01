# Criando um experimento básico

Nesta seção, serão apresentadas algumas funcionalidades do Lemonade, conhecidas
como _Experimentos_. Os Experimentos no Lemonade são a forma mais fácil de criar
fluxos para análise, processamento de dados, criação de modelos e visualizações. 
Os Experimentos apresentam uma interface de usuário mais direcionada e mais 
interativa, se comparada a parte de [Fluxos de Trabalho](../workflows/index.md).

https://www.kaggle.com/code/gunesevitan/titanic-advanced-feature-engineering-tutorial

## Antes de começar ...
Você deve ter criado a fonte de dados Titanic como descrito 
[anteriormente](./creating-data-source.md). Serão feitas as seguintes ações para 
melhorar a qualidade dos dados:

1. Ajuste dos tipos de dados para tipos mais eficientes. Arquivos CSV, no fim, 
é um arquivo textual. Mesmo que o Lemonade tenha identificado corretamente o tipo
de dados para alguns atributos, essa identificação pode não ter sido a melhor. 
Por exemplo, há 3 valores possíveis para a classe do passageiro (atributo `pclass`): 
1st, 2nd, 3rd. 
Representar esses valores como texto (_string_) não é eficiente, uma vez que cada
valor corresponde a 3 bytes (1 por letra). O atributo `pclass` pode ser convertido
para `categorical` (categórico) e como tem apenas 3 valores diferentes, 1 único
byte é suficiente para representar os valores. Há outros atributos na mesma situação.
2. Alguns atributos foram incorretamente identificados como sendo do tipo 
 _string_, mas podem ser convertidos para números, como é o caso do atributo `age`. 
3. Pode ser interessante extrair movos atributos, como o pronome de tratamento usado
(Mrs., Miss. Mr., etc). 
4. Alguns atributos têm valores nulos. Pode ser usada alguma ação para tratar esses casos.
5. Alguns valores numéricos podem ser agrupados, formando novos atributos categóricos. 
Por exemplo, `SibSp` e `Parch` podem ser somandos a 1, resultado no tamanho da família: 
- Família com tamanho 1 pode ser alterada para `sozinho`;
- Família com tamanho 2, 3 ou 4 pode ser alterada para `pequena`;
- Família com tamanho 5 ou 6 pode ser alterada para `média`;
- Família com tamanho igual ou superior a 7 pode ser alterada para `grande`;

 is created by adding SibSp, Parch and 1. SibSp is the count of siblings and spouse, and Parch is the count of parents and children. Those columns are added in order to find the total size of families. Adding 1 at the end, is the current passenger. Graphs have clearly shown that family size is a predictor of survival because different values have different survival rates.

6. Valores ausentes em `Age` podem ser preenchidos com a média da idade, 
  mediana ou moda. Mas ao invés de calcular a média de todo o conjunto de dados,
  pode ser feita uma segmentação por classe (`Pclass`), uma vez que a correlação
  entre `Age` e `Survived` é alta. Pode ser melhor agrupar as idades por classe
  ao invés de outros atributos.
7. `Embarked` é uma _feature_ categórica com apenas 2 valores ausentes, ambos para
  passageiras, da 1a classe e com o mesmo número de bilhete. Provavelmente, as 
  duas passageiras embarcaram no mesmo porto juntas. A moda para `Embarked` para 
  a 1a classe para passageiras é `C` (`Cherbourg`), mas não necessariamente isso
  é uma verdade para o caso.
8. Fare
There is only one passenger with missing Fare value. We can assume that Fare is related to family size (Parch and SibSp) and Pclass features. Median Fare value of a male with a third class ticket and no family is a logical choice to fill the missing value.

https://www.kaggle.com/code/gunesevitan/titanic-advanced-feature-engineering-tutorial

## Tratando os dados em um experimento
