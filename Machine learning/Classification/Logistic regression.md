###  Description
Performs logistic regression

###  Supported platforms
* COMPSs

###  Options
| Label | Description | Type | Required |
|---|---|---|---|
| Display sample(s) of output(s) (max. 50 records) | Display sample(s) of output(s) (max. 50 records) | INTEGER | false |
| Display output(s) schema(s) | Display output(s) schema(s) | INTEGER | false |
| Display text reports (if available) | Display text reports (if available) | INTEGER | false |
| Display images and charts (if available) | Display images and charts (if available) | INTEGER | false |
| Learning rate parameter | Values between zero and one | FLOAT | false |
| Regularization  parameter | Values between zero and infinity. | FLOAT | false |
| Tolerance | Tolerance for stopping criterion | FLOAT | false |
| Max iterations | Number of maximum iterations | INTEGER | false |

###  Inputs
| Label | Description | Multiplicity |
|---|---|---|

###  Outputs
| Label | Description | Multiplicity |
|---|---|---|
| Algorithm | Untrained classification model | Many |
