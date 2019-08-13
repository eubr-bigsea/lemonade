# Architecture

## Micro-services organization

![Micro-services architecture](/img/image2.jpg "Micro-services")

### Citron

Citron is a web based user interface used in Lemonade to create workflows. Users may choose among a set of predefined operations which will compose the workflow by dragging and dropping them into the design area. Among the operations, there are operations for reading and writing data in different storages, such as file systems (including distributed, such as HDFS) and databases.

Each operation is grouped by category and configured by forms, including parameters for execution, appearance, quality of service (QoS) and security & privacy settings. Citron interacts with Tahiti component in order to retrieve operations metadata and persist workflows and with Limonero component to retrieve and save data source metadata. 

Workflow execution status is provided by Lemonade Stand and it is integrated with Citron by using web sockets 


### Tahiti

Tahiti manages metadata associated with operations. Operations are the smallest unit of processing and represent a coarse granularity task executed on one of the supported backends. 
Currently, Lemonade supports ETL and some machine learning operations. 
New operations can be implemented if the underlying processing framework supports them.
Metadata include operation name, description, parameters and ports. 
Ports are communication points that have direction (input and output), multiplicity (how many supported connections) and should “implement” interfaces in order to guarantee compatibility between operations. 
Each operation has a set of parameters grouped as forms. Forms are organized into different classes, e.g. execution, security & privacy, quality of service, appearance, reports and logging.

In order to provide extensibility, all operations in Lemonade are defined in two components: Tahiti and Juicer. Tahiti keeps all operation metadata, including their names, ports and related forms and makes such information available by an API, consumed by Citron when it starts rendering the user interface.  
Although by using Tahiti with Citron we eliminated the dependency between the interface and the available abstractions, still there is a strong dependency between Tahiti managed metadata and the execution component, Juicer. In order to create or modify a new operation, a developer must insert or update  information in Tahiti and implement changes directly in Juicer source code. 

There is another class of metadata related to the data sources themselves. In a design decision, we choose to keep, for each data source available in Lemonade, metadata about user access permissions, attributes (including the name, datatype, precision, length, nullability, if they are labels or features and their statistical data, distribution, how many missings, mean, max, min values, etc.) and the format of the data (CSV, JSON, Parquet, etc). Such information is used when reading data in order to avoid misinterpretation of formats, validation of input and of the workflow, optimize reading and finally, integrate more easily with the visualization component, Caipirinha (more details ahead). 


### Limonero

Limonero is similar to Tahiti, but instead of keeping metadata about operations, it keeps metadata information about data sources. 
Data sources may be input to workflows and also created by them as output. Data source metadata includes: 
Location: where data are located and in which storage technology (for instance, HDFS).
Data format and structure: If the data are in JSON format, what the columns and their data types are, and if any given column is optional, if it is a feature or a label. 
Access restrictions: ownership of data sets, authorization and privacy concerns. 
Statistics about the data: number of records, size in MB, column-specific information such as number of missing records, min/max/average/median values, deciles distribution, etc. 
Metadata are used by web interface to enable or disable data visualizations and operations, according to data/visualisation and data/operation compatibility. 
Currently: data source upload, soon data source download.

### Juicer

uicer has four main responsibilities: 
Receive a workflow specification (JSON) from Stand and convert it into executable code (transpile operations into respective underlying technology code). 
Execute the generated code, controlling the execution flow. 
Report execution status to Stand.
Interact with Limonero API in order to create new data sets and record their metadata. 
Under the hood, Juicer will generate code targeting a distributed processing platform, such as Spark and BSC COMPSs 
Code is executed in batch mode. 
Future versions may implement support to interactive execution. 
Being a higher level abstraction, Lemonade does not map all possible operations existing in the underlying technology.
But “black-box” operations that execute low-level code may be registered and used in a workflow.

### Thorn

Thorn controls authentication and authorization.
Current version uses a custom database schema.
Future versions may be integrated with existing technologies, such as OpenStack Keystone.
Evolution depends on work in EUBra-BigSea project (WP6).
Integration with LDAP (authentication).
Thorn is not used when components are communicating:
Authentication is based on static tokens defined in configuration files.

Thorn is the module responsible for provide security and privacy constraints in Lemonade. Current version only works with basic authentication and authorization but working groups from WP5 and WP6 are working together in order to create a common solution. The interaction between all components, except Caipirinha, is shown in Figure L3 below.
![Micro-services interaction](/img/image3.jpg "Micro-services interaction")


### Stand

Stand is a facade between user interface (Citron) and backend execution (Juicer).
It receives workflow execution requests and places them in a queue (we are using a queue implemented in Redis storage).
Juicer consumes the execution queue and for each workflow and task in execution, reports their statuses in a persistent database (MySQL) and in a publisher-subscriber topic in Redis.
Stand subscribes to each topic and reports execution status to Citron by using web sockets.

Citron allows users to start the workflow execution and Juicer is responsible for retrieving information about the execution from the underlying execution platform. To keep both components decoupled, a third component, Stand is needed. 

Stand a facade between user interface (Citron) and backend execution (Juicer). User interface should be responsiveness, while the backend is batch processing the workflow. Stand decouples the other two components by using async communication, implemented as a producer-consumer queue in Redis. Interactions between components are shown in Figure L2. When a user triggers the execution of a workflow, Citron invokes Stand in order to run the job (1a) and also connects to a websocket which provides feedback to the user interface (1b). Stand receives the request and pushes it into a queue (2a) and starts consuming status queue (2b) that feeds the websocket. Juicer consumes the execution queue (3a) and for again, reports execution status by pushing it to a publisher-subscriber topic in Redis (volatile) and updating rows in MySQL (persistent) (5). Citron then receives notifications about tasks execution status (6) and updates the interface. 


![Micro-services interaction](/img/image4.jpg "Micro-services interaction")

### Caipirinha

Caipirinha is the Lemonade service responsible for providing configuration for  data visualization.
It uses metadata information about data sets provided by Limonero.
Still being designed:
Requirements identification
Domain modeling
Challenges in usability and user experience in web applications
Final version will be “data exploration centric”: 
Instead of start from a workflow and then generate a visualization, final version will allow users to start from data, create visualizations, set parameters and then a workflow is generated (and processed).

An important requirement of Lemonade is to provide feedback to users about tasks execution and results. When a task modifies an input data, user must be able to analyze the resulting data by inspecting it directly (e.g. using a table) or by visualizing it by a visual metaphor (charts, graphs, custom visualizations, etc.). Caipirinha is a framework that integrates with Lemonade data and metadata in order to provide data visualization. The idea is to provide to the user a set of common visualizations, like tables, pie, line and bar charts with little effort in customization. For more sophisticated visualizations, user can configure a generate visualization operation with the type of the visualization and its parameters, something like the chart generation wizard present in common spreadsheet software. Visualizations will be enable/disabled according to predefined requirements. Such requirements are part of the visualization metadata and will be stored in Caipirinha. 


## Services communication


## Source code generation

Workflow is represented internally in JSON format. When a new job is created in order to execute a workflow, Juicer will convert code to code (transpile), parsing JSON format into a Python language script compatible with the underlying processing platform. The utilization of Python language restricts targeting platforms, but now, COMPSs, Ophidia and Spark supports it. We do not foresee the need of using a real compiler, but maybe in future we could extend Juicer to support it. 

## Code execution and platforms


