###  Description
Uses K-Means algorithm for clustering

###  Supported platforms
* COMPSs

###  Options
| Label | Description | Type | Required |
|---|---|---|---|
| Display sample(s) of output(s) (max. 50 records) | Display sample(s) of output(s) (max. 50 records) | INTEGER | false |
| Display output(s) schema(s) | Display output(s) schema(s) | INTEGER | false |
| Display text reports (if available) | Display text reports (if available) | INTEGER | false |
| Display images and charts (if available) | Display images and charts (if available) | INTEGER | false |
| Number of clusters (K) | Number of clusters (K) | INTEGER | true |
| Init mode | How to generate initial centroids | TEXT | true |
| Max iterations | Max iterations | INTEGER | true |
| Tolerance | Convergency tolerance for the within-cluster sums of point-to-centroid distances. | FLOAT | false |

###  Inputs
| Label | Description | Multiplicity |
|---|---|---|

###  Outputs
| Label | Description | Multiplicity |
|---|---|---|
| Algorithm | Clustering model | One |
