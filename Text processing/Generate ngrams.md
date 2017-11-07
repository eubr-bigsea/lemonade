###  Description
A feature transformer that converts the input array of strings into an array of n-grams. 

###  Supported platforms
* Spark

###  Options
| Label | Description | Type | Required |
|---|---|---|---|
| Number of elements per n-gram | Number of elements per n-gram (>=2) | INTEGER | true |
| Attributes | Attributes | TEXT | true |
| Name(s) of new attribute(s) | Name(s) of new attribute(s) | TEXT | false |
| Display sample(s) of output(s) (max. 50 records) | Display sample(s) of output(s) (max. 50 records) | INTEGER | false |
| Display output(s) schema(s) | Display output(s) schema(s) | INTEGER | false |
| Display text reports (if available) | Display text reports (if available) | INTEGER | false |
| Display images and charts (if available) | Display images and charts (if available) | INTEGER | false |

###  Inputs
| Label | Description | Multiplicity |
|---|---|---|
| Input data | Input data | One |

###  Outputs
| Label | Description | Multiplicity |
|---|---|---|
| Output data | Output data | Many |
