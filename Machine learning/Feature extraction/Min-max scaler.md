###  Description
Transforms the input (vector rows), rescaling each feature to a specific range (often [0, 1]). 

###  Supported platforms
* Spark

###  Options
| Label | Description | Type | Required |
|---|---|---|---|
| Attribute with features | Attribute with features to be transformed. | TEXT | true |
| New attribute name | Name of the new attribute with transformed features. | TEXT | false |
| Lower bound of the output feature range | Lower bound of the output feature range (default: 0.0). | FLOAT | false |
| Upper bound of the output feature range | Upper bound of the output feature range (default: 1.0). | FLOAT | false |
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
