###  Description
Voting classifier
###  Options
| Label | Description | Type | Required |
|---|---|---|---|
| Display sample(s) of output(s) (max. 50 records) | Display sample(s) of output(s) (max. 50 records) | INTEGER | false |
| Display output(s) schema(s) | Display output(s) schema(s) | INTEGER | false |
| Display text reports (if available) | Display text reports (if available) | INTEGER | false |
| Display images and charts (if available) | Display images and charts (if available) | INTEGER | false |
| Weights (comma-separated, if empty, all estimators will have same weight) | Weights (if empty, all estimators will have same weight, otherwise, implies "soft" voting) | TEXT | false |
###  Inputs
| Label | Description | Multiplicity |
|---|---|---|
| Models | Input models | Many |
| Input data | Input data | One |
###  Outputs
| Label | Description | Multiplicity |
|---|---|---|
| Output data | Output data | Many |
