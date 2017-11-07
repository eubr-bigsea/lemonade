###  Description
Selects a subset of the fields from data set

###  Supported platforms
* Spark
* COMPSs

###  Options
| Label | Description | Type | Required |
|---|---|---|---|
| Select attribute(s) | Choose one or more attributes. These attributes will be selected to the output data set. | TEXT | true |
| Display sample(s) of output(s) (max. 50 records) | Display sample(s) of output(s) (max. 50 records) | INTEGER | false |
| Display output(s) schema(s) | Display output(s) schema(s) | INTEGER | false |
| Display text reports (if available) | Display text reports (if available) | INTEGER | false |
| Display images and charts (if available) | Display images and charts (if available) | INTEGER | false |

###  Inputs
| Label | Description | Multiplicity |
|---|---|---|
| Input data | Input data to be projected | One |

###  Outputs
| Label | Description | Multiplicity |
|---|---|---|
| Output projected data | Output data | Many |
