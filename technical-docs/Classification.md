# Classification

## <a name=""></a> What is the Classification technique?

## <a name="binary-classification"></a> Binary Classification

### Titanic's sinking dataset

https://github.com/ramansah/kaggle-titanic/blob/master/Analysis.ipynb

## <a name="multiclass-classification"></a> Multiclass Classification

### Iris flower dataset

According to [Wikipedia](https://en.wikipedia.org/wiki/Iris_flower_data_set):

<blockquote>
<p>
The Iris flower data set or Fisher's Iris data set is a multivariate data set introduced by the British statistician and biologist Ronald Fisher in his 1936 paper The use of multiple measurements in taxonomic problems as an example of linear discriminant analysis. It is sometimes called Anderson's Iris data set because Edgar Anderson collected the data to quantify the morphologic variation of Iris flowers of three related species. Two of the three species were collected in the Gaspé Peninsula "all from the same pasture, and picked on the same day and measured at the same time by the same person with the same apparatus".
</p>
</blockquote>

The data set consists of 50 samples from each of three species of Iris (*Iris setosa*, *Iris virginica* and *Iris versicolor*). Four features were measured from each sample: the length and the width of the sepals and petals, in centimetres. Based on the combination of these four features, Fisher developed a linear discriminant model to distinguish the species from each other. Below, a sample of the dataset:

| Sepal length | Sepal width | Petal length | Petal width | Species|
| ------------ | ----------- | ------------ | ----------- | -------|
| 5.2 | 3.5 | 1.4 | 0.2 | *I. setosa* |
| 4.9 | 3.0 | 1.4 | 0.2 | *I. setosa* |
| 4.7 | 3.2 | 1.3 | 0.2 | *I. setosa* |
| 4.6 | 3.1 | 1.5 | 0.2 | *I. setosa* |
| 7.0 | 3.2 | 4.7 | 1.4 | *I. versicolor* |
| 6.4 | 3.2 | 4.5 | 1.5 | *I. versicolor* |
| 6.9 | 3.1 | 4.9 | 1.5 | *I. versicolor* |
| 5.5 | 2.3 | 4.0 | 1.3 | *I. versicolor* |
| 6.3 | 2.7 | 4.9 | 1.8 | *I. virginica* |
| 6.7 | 3.3 | 5.7 | 2.1 | *I. virginica* |
| 7.2 | 3.2 | 6.0 | 1.8 | *I. virginica* |
| 6.2 | 2.8 | 4.8 | 1.8 | *I. virginica* |


### Importing the dataset into Lemonade

1. Download Iris dataset used in this tutorial from [Lemonade documentation wiki](/data/iris.csv) and save it using the suggested name (iris.csv).
2. Open the Lemonade Citron URL (for example, http://localhost) in a browser.
3. Login in using your email or username and password.
4. In the toolbar, click the option *Data sources*.
5. In the listing, click in the button *Upload database*.
6. Drag the downloaded file (iris.csv) to the upload area or choose it from the 
button in the upload area.
7. Confirm the operation.
8. If it works, a new data set is available with the name *iris.csv*. 
9. In the listing, locate the iris.csv data set and click the Edit button 
(pencil) or in its name to start editing.
10. Change the name to *Iris dataset*.
11. Ensure the Format is CSV, with the Delimiter *,* (comma) and that the Header 
option is checked. 
12. Click the Infer Attributes button.
13. The 5 attributes from the dataset must be listed in the attributes list. 
14. Click the Save button to go back to the listing.

Now, the Iris dataset is available to be used in workflows.



## <a name=""></a> Evaluating Classification with metrics

## <a name=""></a> Training better models with cross validation

http://nasdag.github.io/blog/2016/01/02/predicting-heart-disease-with-hadoop-spark-and-python/
https://mapr.com/blog/churn-prediction-sparkml/
https://blog.cloudera.com/blog/2016/02/how-to-predict-telco-churn-with-apache-spark-mllib/
https://mapr.com/blog/churn-prediction-pyspark-using-mllib-and-ml-packages/
https://mapr.com/blog/predicting-breast-cancer-using-apache-spark-machine-learning-logistic-regression/?utm_content=buffercd8bc&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer

## Record linkage

http://aseigneurin.github.io/2016/02/22/record-inkage-a-real-use-case-with-spark-ml.html