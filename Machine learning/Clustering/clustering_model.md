# Clustering model
###  Description
Trains and applies a clustering model
###  Options
| Label | Description | Type | Required |
|---|---|---|---|
| Features attribute | Features attribute | TEXT | true |
| Display sample(s) of output(s) (max. 50 records) | Display sample(s) of output(s) (max. 50 records) | INTEGER | false |
| Display output(s) schema(s) | Display output(s) schema(s) | INTEGER | false |
| Display text reports (if available) | Display text reports (if available) | INTEGER | false |
| Display images and charts (if available) | Display images and charts (if available) | INTEGER | false |
###  Inputs
| Label | Description | Multiplicity |
|---|---|---|
| Algorithm | Clustering algorithm to be trained | One |
| Train input data | Train input data | One |
###  Outputs
| Label | Description | Multiplicity |
|---|---|---|
| Model | Clustering output model | Many |
| Output data | Clustered data | Many |
