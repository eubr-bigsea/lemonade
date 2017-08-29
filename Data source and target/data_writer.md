# Data writer
###  Description
Writes a new data set
###  Options
| Label | Description | Type | Required |
|---|---|---|---|
| Data source name | Data source name | TEXT | true |
| Data source path (relative to storage) | Path for data source | TEXT | true |
| Storage | Storage where data is saved | INTEGER | true |
| Output format | Output format used to write data | TEXT | true |
| Tags | Tags	 | TEXT | false |
| Overwrite mode | Action in case of trying to write over an existing file | INTEGER | false |
| Save header | Save header information if format is CSV | INTEGER | false |
###  Inputs
| Label | Description | Multiplicity |
|---|---|---|
| Input data | Write data | One |
###  Outputs
| Label | Description | Multiplicity |
|---|---|---|
