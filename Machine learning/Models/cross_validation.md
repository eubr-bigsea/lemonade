# Cross validation
###  Description
Perform cross validation
###  Options
| Label | Description | Type | Required |
|---|---|---|---|
| Estimator | Estimator | TEXT | true |
| Evaluator | Evaluator | TEXT | true |
| Folds | Folds | INTEGER | true |
| Seed | Seed used to generate folds | INTEGER | false |
| Display sample(s) of output(s) (max. 50 records) | Display sample(s) of output(s) (max. 50 records) | INTEGER | false |
| Display output(s) schema(s) | Display output(s) schema(s) | INTEGER | false |
| Display text reports (if available) | Display text reports (if available) | INTEGER | false |
| Display images and charts (if available) | Display images and charts (if available) | INTEGER | false |
###  Inputs
| Label | Description | Multiplicity |
|---|---|---|
| Input data | Partitioned data in folds | One |
| Algorithm | Model | One |
| Evaluator | Evaluator | One |
###  Outputs
| Label | Description | Multiplicity |
|---|---|---|
| Scored data | Scored data | Many |
| Best model | Best model generated | Many |
| Models | Models generate for each fold, sorted by best scored | Many |
