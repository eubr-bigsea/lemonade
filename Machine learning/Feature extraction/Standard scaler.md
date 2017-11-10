###  Description
Transforms the input (vector rows), normalizing each feature to have unit standard deviation and/or zero mean.

###  Supported platforms
* Spark

###  Options
| Label | Description | Type | Required |
|---|---|---|---|
| Attribute with features | Attribute with features to be transformed. | TEXT | true |
| New attribute name | Name of the new attribute with transformed features. | TEXT | false |
| Center data with mean | Center data with mean (default: false). | INTEGER | true |
| Scale to unit standard deviation | Scale to unit standard deviation (default: true). | INTEGER | true |
| Display sample(s) of output(s) (max. 50 records) | Display sample(s) of output(s) (max. 50 records) | INTEGER | false |
| Display output(s) schema(s) | Display output(s) schema(s) | INTEGER | false |
| Display text reports (if available) | Display text reports (if available) | INTEGER | false |
| Display images and charts (if available) | Display images and charts (if available) | INTEGER | false |

###  Inputs
| Label | Description | Multiplicity |
|---|---|---|
| Input data | Input data | One |

###  Outputs
| Label | Description | Multiplicity |
|---|---|---|
| Output data | Output data | Many |
| Transformation model | Transformation model | Many |
