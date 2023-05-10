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
2. Alguns atributos foram incorretamente identificados como _string_, mas podem
ser convertidos para números, como é o caso do atributo `age`. 
3. Pode ser interessante extrair movos atributos, como o pronome de tratamento usado
(Mrs., Miss. Mr., etc). 
4. Alguns atributos têm valores nulos. Pode ser usada alguma ação para tratar esses casos.
5. Alguns valores numéricos podem ser agrupados, formando novos atributos categóricos. 
Por exemplo, `SibSp` e `Parch` podem ser somandos a 1, resultado no tamanho da família.

Family Size with 1 are labeled as Alone
Family Size with 2, 3 and 4 are labeled as Small
Family Size with 5 and 6 are labeled as Medium
Family Size with 7, 8 and 11 are labeled as Large

 is created by adding SibSp, Parch and 1. SibSp is the count of siblings and spouse, and Parch is the count of parents and children. Those columns are added in order to find the total size of families. Adding 1 at the end, is the current passenger. Graphs have clearly shown that family size is a predictor of survival because different values have different survival rates.

Training set have missing values in Age, Cabin and Embarked columns
Test set have missing values in Age, Cabin and Fare columns

Missing values in Age are filled with median age, but using median age of the whole data set is not a good choice. Median age of Pclass groups is the best choice because of its high correlation with Age (0.408106) and Survived (0.338481). It is also more logical to group ages by passenger classes instead of other features.

1.2.2 Embarked
Embarked is a categorical feature and there are only 2 missing values in whole data set. Both of those passengers are female, upper class and they have the same ticket number. This means that they know each other and embarked from the same port together. The mode Embarked value for an upper class female passenger is C (Cherbourg), but this doesn't necessarily mean that they embarked from that port.

1.2.3 Fare
There is only one passenger with missing Fare value. We can assume that Fare is related to family size (Parch and SibSp) and Pclass features. Median Fare value of a male with a third class ticket and no family is a logical choice to fill the missing value.

https://www.kaggle.com/code/gunesevitan/titanic-advanced-feature-engineering-tutorial

## Tratando os dados em um experimento
