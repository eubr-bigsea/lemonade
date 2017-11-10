###  Description
Uses ST-DBSCAN algorithm for clustering spartial-temporal data

###  Supported platforms
* COMPSs

###  Options
| Label | Description | Type | Required |
|---|---|---|---|
| Latitude Column | Latitude Column | TEXT | true |
| Longitude Column | Longitude Column | TEXT | true |
| Datetime Column | Datetime Column | TEXT | true |
| Spartial distance thresold (in meters) | The maximum distance between two samples for them to be considered as in the same neighborhood. | FLOAT | false |
| Temporal Distance thresold (in seconds) | The maximum distance between two samples for them to be considered as in the same neighborhood. | FLOAT | false |
| Minimum sample | The number of samples in a neighborhood for a point to be considered as a core point. | INTEGER | false |
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
