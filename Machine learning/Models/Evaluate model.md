###  Description
Evaluates a machine learning model

###  Supported platforms
* COMPSs

###  Options
| Label | Description | Type | Required |
|---|---|---|---|
| Display sample(s) of output(s) (max. 50 records) | Display sample(s) of output(s) (max. 50 records) | INTEGER | false |
| Display output(s) schema(s) | Display output(s) schema(s) | INTEGER | false |
| Display text reports (if available) | Display text reports (if available) | INTEGER | false |
| Display images and charts (if available) | Display images and charts (if available) | INTEGER | false |
| Label attribute | Label attribute | TEXT | true |
| Prediction attribute | Prediction attribute | TEXT | true |
| Metric to evaluation | Metric to evaluation | TEXT | true |

###  Inputs
| Label | Description | Multiplicity |
|---|---|---|
| Input data | Input Data | One |
| Model | Model | One |

###  Outputs
| Label | Description | Multiplicity |
|---|---|---|
| Evaluated model | Evaluated model | Many |
| Evaluator | Evaluator | Many |
