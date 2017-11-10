###  Description
Classification Model

###  Supported platforms
* COMPSs

###  Options
| Label | Description | Type | Required |
|---|---|---|---|
| Features | Feature | TEXT | true |
| Label attribute | Label attribute | TEXT | true |
| Prediction attribute | Prediction attribute | TEXT | false |
| Display sample(s) of output(s) (max. 50 records) | Display sample(s) of output(s) (max. 50 records) | INTEGER | false |
| Display output(s) schema(s) | Display output(s) schema(s) | INTEGER | false |
| Display text reports (if available) | Display text reports (if available) | INTEGER | false |
| Display images and charts (if available) | Display images and charts (if available) | INTEGER | false |

###  Inputs
| Label | Description | Multiplicity |
|---|---|---|
| Train input data | Train input data | One |
| Algorithm | Algorithm | One |

###  Outputs
| Label | Description | Multiplicity |
|---|---|---|
| Model | Model | Many |
| Output data | Output Data | Many |
