###  Description
Cleans or replaces missing values from fields

###  Supported platforms
* Spark
* COMPSs

###  Options
| Label | Description | Type | Required |
|---|---|---|---|
| Attribute(s) | Select one or more attributes to be cleaned | TEXT | true |
| Cleaning mode | Type of cleaning to be performed. | TEXT | true |
| Value | Value used to replace missing values. | TEXT | false |
| Minimum missing value ratio | Minimum number of missing values required for the operation to be performed | FLOAT | false |
| Maximum missing value ratio | Maximum number of missing values that can be present for the operation to be performed | FLOAT | false |
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
| Output result | Output result | Many |
