# Join
###  Description
Joins two data sets using a set of fields (keys)
###  Options
| Label | Description | Type | Required |
|---|---|---|---|
| Attribute(s) from first data source | Select one or more attributes from the first data source | TEXT | true |
| Attribute(s) from second data source | Select one or more attributes from the second data source | TEXT | true |
| Join type | Type of join to be performed. | TEXT | true |
| Keep keys from second data source | Keys columns used in the join could be ignored because they are already present in the first data source. | INTEGER | false |
| Match case when comparing keys | If checked, a case sensitive matching will be performed when comparing keys. | INTEGER | true |
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
