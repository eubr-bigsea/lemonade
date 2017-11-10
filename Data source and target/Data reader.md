###  Description
Reads data from a data set

###  Supported platforms
* COMPSs

###  Options
| Label | Description | Type | Required |
|---|---|---|---|
| Data source | Data source to be used as input. | TEXT | true |
| Use first line as header | Does file first line contain header information about attributes? | INTEGER | false |
| Attribute separator | Character used as attribute separator | TEXT | true |
| Treat these values as None (comma-separated) | These values will be considered as None when parsing the file. Separe items by comma (,). | TEXT | false |
| Infer data source schema | Infer data source schema from attribute's values. | TEXT | false |
| Display sample(s) of output(s) (max. 50 records) | Display sample(s) of output(s) (max. 50 records) | INTEGER | false |
| Display output(s) schema(s) | Display output(s) schema(s) | INTEGER | false |
| Display text reports (if available) | Display text reports (if available) | INTEGER | false |
| Display images and charts (if available) | Display images and charts (if available) | INTEGER | false |

###  Inputs
| Label | Description | Multiplicity |
|---|---|---|

###  Outputs
| Label | Description | Multiplicity |
|---|---|---|
| Output data | Read data | Many |
