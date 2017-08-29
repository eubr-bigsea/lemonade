###  Description
Generates a sample of data
###  Options
| Label | Description | Type | Required |
|---|---|---|---|
| Type of sampling or partition | Type of sampling or partition | TEXT | true |
| Total of records | Total of records to be retrieved | INTEGER | true |
| percentage | Percentage of data to be sampled | FLOAT | true |
| Seed | Seed used to initialize the random number generator. | INTEGER | false |
| Display sample(s) of output(s) (max. 50 records) | Display sample(s) of output(s) (max. 50 records) | INTEGER | false |
| Display output(s) schema(s) | Display output(s) schema(s) | INTEGER | false |
| Display text reports (if available) | Display text reports (if available) | INTEGER | false |
| Display images and charts (if available) | Display images and charts (if available) | INTEGER | false |
###  Inputs
| Label | Description | Multiplicity |
|---|---|---|
| Input data | Input data to be sampled | One |
###  Outputs
| Label | Description | Multiplicity |
|---|---|---|
| Sampled data | Sampled data | Many |
