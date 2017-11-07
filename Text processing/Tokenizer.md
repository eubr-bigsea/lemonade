###  Description
Tokenize the input text in a vector of words using a simple tokenizer or one based on regular expression.

###  Supported platforms
* Spark
* COMPSs

###  Options
| Label | Description | Type | Required |
|---|---|---|---|
| Type | Type of tokenizer | TEXT | true |
| Attributes | Attributes | TEXT | true |
| Alias | ALias | TEXT | false |
| Expression (only if type regex) | Expression (only if type regex) for regular expression (Java syntax) | TEXT | false |
| Minimum size of tokens | Any token smaller than this value will be discarded | INTEGER | false |
| Display sample(s) of output(s) (max. 50 records) | Display sample(s) of output(s) (max. 50 records) | INTEGER | false |
| Display output(s) schema(s) | Display output(s) schema(s) | INTEGER | false |
| Display text reports (if available) | Display text reports (if available) | INTEGER | false |
| Display images and charts (if available) | Display images and charts (if available) | INTEGER | false |

###  Inputs
| Label | Description | Multiplicity |
|---|---|---|
| Input data | Input data with a text attribute to be tokenized | One |

###  Outputs
| Label | Description | Multiplicity |
|---|---|---|
| Output data | Output data with tokenized text in a vector | Many |
