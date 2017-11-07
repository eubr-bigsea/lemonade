###  Description
 feature transformer that merges multiple attributes into a vector attribute

###  Supported platforms
* Spark
* COMPSs

###  Options
| Label | Description | Type | Required |
|---|---|---|---|
| Attributes to be assembled | Attributes to be assembled | TEXT | true |
| New attribute name | New attribute name | TEXT | false |
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
