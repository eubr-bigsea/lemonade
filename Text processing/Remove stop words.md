###  Description
Remove stop words
###  Options
| Label | Description | Type | Required |
|---|---|---|---|
| Attributes | List of attributes to be used as input to remove stop words | TEXT | true |
| Alias for new attributes | Alias for new attributes | TEXT | false |
| Stop word list | Stop word list, separated by commas | TEXT | false |
| Attribute from 2nd input with stop words | Attribute from 2nd input with stop words | TEXT | false |
| Case sensitive | Case sensitive | INTEGER | true |
| Display sample(s) of output(s) (max. 50 records) | Display sample(s) of output(s) (max. 50 records) | INTEGER | false |
| Display output(s) schema(s) | Display output(s) schema(s) | INTEGER | false |
| Display text reports (if available) | Display text reports (if available) | INTEGER | false |
| Display images and charts (if available) | Display images and charts (if available) | INTEGER | false |
###  Inputs
| Label | Description | Multiplicity |
|---|---|---|
| Input data | Input data with text to remove stop words | One |
| Stop words | Input data containing an attribute with stop words | One |
###  Outputs
| Label | Description | Multiplicity |
|---|---|---|
| Output data | Output data with text field without stop words | Many |
