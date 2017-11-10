###  Description
Change metadata information associated to attributes

###  Supported platforms
* COMPSs

###  Options
| Label | Description | Type | Required |
|---|---|---|---|
| Display sample(s) of output(s) (max. 50 records) | Display sample(s) of output(s) (max. 50 records) | INTEGER | false |
| Display output(s) schema(s) | Display output(s) schema(s) | INTEGER | false |
| Display text reports (if available) | Display text reports (if available) | INTEGER | false |
| Display images and charts (if available) | Display images and charts (if available) | INTEGER | false |
| Attribute(s) | Select one or more attributes. | TEXT | true |
| New name | New name. If used with multiple attributes, a numerical suffix will be used to distinguish them. For example, name1, name2, ...
You can use the variable ${attribute_name} to rename attributes by adding a prefix or a suffix to the original name. | TEXT | false |
| New data type | New data type. A conversion is not performed and if you incorrectly change this information, the workflow may not work. | TEXT | false |

###  Inputs
| Label | Description | Multiplicity |
|---|---|---|
| Input data | Input Data | One |

###  Outputs
| Label | Description | Multiplicity |
|---|---|---|
| Output data | Output Data | Many |
