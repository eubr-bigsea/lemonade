###  Description
Indexes a feature by encoding a string column as a column containing indexes for labels (String type) or by encoding a Vector column as a column containing indexes for these vectors.

###  Supported platforms
* COMPSs

###  Options
| Label | Description | Type | Required |
|---|---|---|---|
| Display sample(s) of output(s) (max. 50 records) | Display sample(s) of output(s) (max. 50 records) | INTEGER | false |
| Display output(s) schema(s) | Display output(s) schema(s) | INTEGER | false |
| Display text reports (if available) | Display text reports (if available) | INTEGER | false |
| Display images and charts (if available) | Display images and charts (if available) | INTEGER | false |
| Attributes | Attributes (features) to be indexed | TEXT | true |
| Name for new indexed attribute(s) | Name for new indexed attribute(s) | TEXT | true |
| Indexer type | Indexer type | TEXT | true |

###  Inputs
| Label | Description | Multiplicity |
|---|---|---|
| Input data | Input Data | One |

###  Outputs
| Label | Description | Multiplicity |
|---|---|---|
| Output data | Output Data | Many |
