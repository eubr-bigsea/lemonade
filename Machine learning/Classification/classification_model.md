# Classification model
###  Description
Trains and applies a classification model
###  Options
| Label | Description | Type | Required |
|---|---|---|---|
| Features attribute | Features attribute | TEXT | true |
| Label attribute | Label attribute | TEXT | true |
| Prediction attribute (new) | Prediction attribute (new) | TEXT | false |
| Display sample(s) of output(s) (max. 50 records) | Display sample(s) of output(s) (max. 50 records) | INTEGER | false |
| Display output(s) schema(s) | Display output(s) schema(s) | INTEGER | false |
| Display text reports (if available) | Display text reports (if available) | INTEGER | false |
| Display images and charts (if available) | Display images and charts (if available) | INTEGER | false |
###  Inputs
| Label | Description | Multiplicity |
|---|---|---|
| Algorithm | Classification algorithm to be trained | One |
| Train input data | Train input data | One |
###  Outputs
| Label | Description | Multiplicity |
|---|---|---|
| Model | Output model | Many |
