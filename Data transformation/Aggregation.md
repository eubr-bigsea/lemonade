###  Description
Performs aggregation of data grouped by a set of fields
###  Options
| Label | Description | Type | Required |
|---|---|---|---|
| Select attribute(s) for aggregation | Choose one or more attributes to aggregate data with | TEXT | true |
| Aggregation function | Function applied to aggregated data | TEXT | true |
| Display sample(s) of output(s) (max. 50 records) | Display sample(s) of output(s) (max. 50 records) | INTEGER | false |
| Display output(s) schema(s) | Display output(s) schema(s) | INTEGER | false |
| Display text reports (if available) | Display text reports (if available) | INTEGER | false |
| Display images and charts (if available) | Display images and charts (if available) | INTEGER | false |
###  Inputs
| Label | Description | Multiplicity |
|---|---|---|
| Input data | Input data to be aggregated | One |
###  Outputs
| Label | Description | Multiplicity |
|---|---|---|
| Output data | Aggregated output data | Many |
