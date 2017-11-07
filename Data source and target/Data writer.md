###  Description
Writes a new data set

###  Supported platforms
* COMPSs

###  Options
| Label | Description | Type | Required |
|---|---|---|---|
| Display sample(s) of output(s) (max. 50 records) | Display sample(s) of output(s) (max. 50 records) | INTEGER | false |
| Display output(s) schema(s) | Display output(s) schema(s) | INTEGER | false |
| Display text reports (if available) | Display text reports (if available) | INTEGER | false |
| Display images and charts (if available) | Display images and charts (if available) | INTEGER | false |
| Data source name | Data source name | TEXT | true |
| Data source path (relative to storage) | Path for data source | TEXT | true |
| Output format | Output format used to write data | TEXT | true |
| Tags | Tags | TEXT | false |
| Overwrite mode | Action in case of trying to write over an existing file | INTEGER | false |
| Save header | Save header information if format is CSV | INTEGER | false |

###  Inputs
| Label | Description | Multiplicity |
|---|---|---|
| Input data | Write data | One |

###  Outputs
| Label | Description | Multiplicity |
|---|---|---|
