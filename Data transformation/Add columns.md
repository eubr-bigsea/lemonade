###  Description
Adds columns from one data source to another

###  Supported platforms
* Spark
* COMPSs

###  Options
| Label | Description | Type | Required |
|---|---|---|---|
| Display sample(s) of output(s) (max. 50 records) | Display sample(s) of output(s) (max. 50 records) | INTEGER | false |
| Display output(s) schema(s) | Display output(s) schema(s) | INTEGER | false |
| Display text reports (if available) | Display text reports (if available) | INTEGER | false |
| Display images and charts (if available) | Display images and charts (if available) | INTEGER | false |
| Prefix for attributes (2 values, comma separated) | Attributes are prefixed in order to avoid name collision. | TEXT | false |

###  Inputs
| Label | Description | Multiplicity |
|---|---|---|
| Input data 1 | Input data 1 | One |
| Input data 2 | Input data 2 | One |

###  Outputs
| Label | Description | Multiplicity |
|---|---|---|
| Output data | Output data | Many |
