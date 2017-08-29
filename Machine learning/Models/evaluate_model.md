# Evaluate model
###  Description
Evaluates a machine learning model
###  Options
| Label | Description | Type | Required |
|---|---|---|---|
| Prediction attribute | Prediction attribute | TEXT | true |
| Label attribute | Label attribute | TEXT | true |
| Metric to evaluation | Metric to evaluation | TEXT | false |
| Display sample(s) of output(s) (max. 50 records) | Display sample(s) of output(s) (max. 50 records) | INTEGER | false |
| Display output(s) schema(s) | Display output(s) schema(s) | INTEGER | false |
| Display text reports (if available) | Display text reports (if available) | INTEGER | false |
| Display images and charts (if available) | Display images and charts (if available) | INTEGER | false |
###  Inputs
| Label | Description | Multiplicity |
|---|---|---|
| Input data | Input data to be used during evaluation | One |
| Model | Model to be evaluated | One |
###  Outputs
| Label | Description | Multiplicity |
|---|---|---|
| Evaluated model | Evaluated model | Many |
| Evaluator | Evaluator for ML model | Many |
