###  Description
Performs a data transformation
###  Options
| Label | Description | Type | Required |
|---|---|---|---|
| Expression | Expression to apply to an attribute in order to generate another attribute. See help for supported functions and syntax. | TEXT | true |
| Name for transformed attribute | Name for the transformed attribute. | TEXT | true |
| Display sample(s) of output(s) (max. 50 records) | Display sample(s) of output(s) (max. 50 records) | INTEGER | false |
| Display output(s) schema(s) | Display output(s) schema(s) | INTEGER | false |
| Display text reports (if available) | Display text reports (if available) | INTEGER | false |
| Display images and charts (if available) | Display images and charts (if available) | INTEGER | false |
###  Inputs
| Label | Description | Multiplicity |
|---|---|---|
| Input data | Input data to be transformed | One |
###  Outputs
| Label | Description | Multiplicity |
|---|---|---|
| Output data | Tranformed output data | Many |
