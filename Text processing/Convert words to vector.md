###  Description
Convert words to vector

###  Supported platforms
* COMPSs

###  Options
| Label | Description | Type | Required |
|---|---|---|---|
| Attributes | Attributes | TEXT | true |
| Alias | Name of the new column | TEXT | true |
| Type | Type | TEXT | true |
| Vocabulary size | Vocabulary size | INTEGER | false |
| Minimum frequency in docs (DF) | Minimum frequency in docs (DF) | INTEGER | false |
| Minimum term frequency (TF) | Minimum term frequency (TF) | INTEGER | false |
| Display sample(s) of output(s) (max. 50 records) | Display sample(s) of output(s) (max. 50 records) | INTEGER | false |
| Display output(s) schema(s) | Display output(s) schema(s) | INTEGER | false |
| Display text reports (if available) | Display text reports (if available) | INTEGER | false |
| Display images and charts (if available) | Display images and charts (if available) | INTEGER | false |

###  Inputs
| Label | Description | Multiplicity |
|---|---|---|
| Input data | Input Data | One |

###  Outputs
| Label | Description | Multiplicity |
|---|---|---|
| Output data | Output Data | Many |
| Vocabulary | Vocabulary | Many |
