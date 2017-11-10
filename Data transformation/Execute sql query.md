###  Description
Executes a query using SQL language available in Spark.

###  Supported platforms
* Spark

###  Options
| Label | Description | Type | Required |
|---|---|---|---|
| SQL Query, (inputs are available as tables named ds1 and ds2) | SQL query compatible with Apache Spark. For more information, see https://docs.databricks.com/spark/latest/spark-sql/language-manual/select.html or https://spark.apache.org/docs/latest/sql-programming-guide.html. | TEXT | true |
| Names of attributes after the query | Name of the new attributes after executing the query (optional, helps attribute suggestion). | TEXT | false |
| Display sample(s) of output(s) (max. 50 records) | Display sample(s) of output(s) (max. 50 records) | INTEGER | false |
| Display output(s) schema(s) | Display output(s) schema(s) | INTEGER | false |
| Display text reports (if available) | Display text reports (if available) | INTEGER | false |
| Display images and charts (if available) | Display images and charts (if available) | INTEGER | false |

###  Inputs
| Label | Description | Multiplicity |
|---|---|---|
| Input data 1 | Input data 1 | One |
| Input data 2 | Input data 2 | One |

###  Outputs
| Label | Description | Multiplicity |
|---|---|---|
| Output data | Output data | Many |
