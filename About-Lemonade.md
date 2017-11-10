# About Lemonade

### Lemonade Overview

Lemonade (**L**ive **E**xploration and **M**ining **O**f **N**on-trivial **A**mount of **D**ata from **E**verywhere) is a visual platform for distributed computing, aimed to enable implementation, experimentation, test and deploying of data processing and machine learning applications. It provides a higher level of abstractions, called operations, to users build processing workflows using a graphical web interface. By using high performance and scalable technologies, such as COMPSs, Ophidia and Spark, Lemonade can process very large amount of data, hiding all backend complexity from the users and allowing them to focus mainly in the construction of the solution.

Lemonade is implemented as an open-source tool and is under development as a product of [EUBra-BIGSEA](http://www.eubra-bigsea.eu/) project

### Project & Community

Each project's submodule has its own repository in Github:

* [Citron](https://github.com/eubr-bigsea/citron)
* [Tahiti](https://github.com/eubr-bigsea/tahiti)
* [Juicer](https://github.com/eubr-bigsea/juicer)
* [Stand](https://github.com/eubr-bigsea/stand)
* [Limonero](https://github.com/eubr-bigsea/limonero)
* [Caipirinha](https://github.com/eubr-bigsea/caipirinha)
* [Thorn](https://github.com/eubr-bigsea/thorn)


### More Information
* [Lastest Release](https://teste.ctweb.inweb.org.br/landing-page)
* [Basic Usage]()
* [Technical Documentation](https://github.com/eubr-bigsea/citron/wiki/API)

### Additional Support
* [Support]()
* [FAQ]()
* [Tutorials]()

## <a name="origin-and-motivations"></a> Origin and motivations

Visual workflows tools provide a higher level of abstraction than general purpose programming languages, even those created specifically to data processing, such [R language](https://www.r-project.org/). 

Today, current processing infrastructure capacity and price and the availability of large amount of data enabled the development of new applications, previously restricted to very large companies and organizations. However, to fully exploit such opportunity, a team should deal with different expertises, such as business domain, programming skills and infrastructure maintenance. Sometimes, one wants just test an hypothesis about the data, not to learn technical details. 

Available data processing tools have a very large spectrum regarding processing capacity, ranging from desktop spreadsheet tools to very large computer clusters. Also, abstraction level ranges from low level programming languages (e.g. GPU processing) to completely black box solutions. Visual programming is an approach where procedure or program is constructed by arranging program elements graphically instead of writing it in a programming language and has become popular thanks to the proliferation of tools, such as [Knime](https://www.knime.com/), [Weka](https://www.cs.waikato.ac.nz/ml/weka/), [RapidMiner](https://www.cs.waikato.ac.nz/ml/weka/), [ClowdFlows](http://clowdflows.org) and [Microsoft Azure ML Studio](https://studio.azureml.net). 

**Lemonade** shares many similarities with aforementioned technologies. We believe Lemonade is different regarding its integration with big data processing technologies included in the project (COMPSs. Spark, Ophidia) and with other project teams/work packages. Lemonade integrates with infrastructure by allowing users to specify QoS constraints for the execution. Such constraints will be used to statically or dynamically allocate resources for process the workflow. Privacy and security (under progress) are configurable by constraints implemented as parameters or operators in Lemonade. 
All operations available in Lemonade user interface are kept as metadata information. It is easy to someone to define new operations by adding meta information and changing backend implementation. 

#### Related work

The KNIME [R2] is a framework which enables visual and interactive execution of a data pipeline for data mining. This environment was developed to be a collaborative platform for teaching and research. Brings the high-level development of workflows for data analysis, is not necessary skills in programming languages. KNIME has 3 main attractives: Interactive framework, modularity and easy extensibility.

The Weka [R3] is  a project aims to provide machine learning algorithms and data preprocessing tools to many users (teachers, students, researchers, etc).  Its advantage is be a modular and extensible architecture. Weka has a wide variety of algorithms for regression, classification, clustering, association rule mining and attribute selection. Users may create sophisticated data mining processes to get relevant information on data.

The platform ClowdFlows [R5] is a cloud-based web application for distributed computing (with batch or real-time processing mode). It allows to create and perform data mining workflows through visual programming. An application in visual programming is constructed by “dragging and dropping” graphical elements instead of writing the source code as text. The ClowdFlows for batch processing uses MapReduce programming model through DiscoMLL library. MapReduce programming simplifies execution of parallel and distributed processing to multiples machines.

Mention Azure Machine Learning Studio [R6] is a cloud service that enables to easily build, deploy, and share predictive analytics solutions.  There’s no code required, but needs commercial license to use whole functions and tools. Azure provides visual workflows with state of the art algorithms, that can be run in parallel/cloud. 

## <a name="target-users"></a> Target users
Todo

## <a name="basic-concepts"></a> Basic concepts

The terminology used in Lemonade is a common one, but we would like to reinforce some definitions in order to better explain the platform. The domain model diagram is shown in Figure L0.

### <a name="data-sources-and-storages"></a> Data sources and storages
Metadata related to data sources and their attributes are kept and used during the design and execution time. Users will configure tasks requiring information about data source attributes selecting them from a list of available ones. Such list is provided by metadata services, described ahead, in Lemonade architecture section. 

### <a name="operations-ports-and-parameters"></a> Operations, ports and parameters

Operation is the smaller execution unit defined in Lemonade. Each operation has a set of parameters (defined as forms), a set of ports. An operation is mapped into a block of code to be executed in the underlying execution platform. Different execution platforms may have different operations, but in general, there is a set of common operations available in most of them, generally operations related to tasks as extraction, transformation and loading (ETL). In Lemonade, there are different categories.


### <a name="workflows-task-and-flows"></a> Workflows, tasks and flows

Workflow is a group of tasks (instances of operations), organized as a direct acyclic graph (DAG). Tasks communicate each other by flows connecting a source port with a target port. Each port has a direction (INPUT or OUTPUT), a cardinality (ONE, MANY) and one or more interfaces defined (e.g., IData, IModel). Interfaces are used to validate flows by using kind of type system. Users can not connect two ports if they do not share at least one common interfaces. Forms defined in operations are filled by interface (Citron) for each task associated to those operations. 

### <a name="job-steps-results-and-clusters"></a> Jobs, steps, results and clusters

After submitting a workflow, a job is launched to process the workflow. The DAG formed by tasks and flows is evaluated and converted into code to be ran in the underlying execution platform. Current version of Lemonade allows only the execution of the entire workflow, but we have plans to allow partial execution and even incremental one, dispensing the execution of tasks already processed and not changed in the interface. 

### <a name="visualizations-and-dashboards"></a> Visualizations and dashboards
Todo

# <a name="supported-platforms"> Supported platforms

Lemonade currently supports 3 execution platforms:

* [Apache Spark 2.2.0](http://spark.apache.org/docs/2.2.0/). Some workflows may work in previous versions, but at least version 2.0.0 is required. Supports code generation and execution control of workflows. Code is compatible with PySpark and can be ran outside Lemonade. 
* [Barcelona Supercomputer Center - BSC COMPSs](https://www.bsc.es/research-and-development/software-and-apps/software-list/comp-superscalar). Supports code generation. Execution management is under development.
* [Python Scikit Learn](http://scikit-learn.org/stable/) + [Pandas](http://pandas.pydata.org/). Under development. Prelimary code generation, not all operations supported.

New platforms can be developed. See _[developing for new platforms]()_ in the Programming Guide.
