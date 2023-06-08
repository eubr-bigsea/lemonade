# Clusters

_Clusters_ são conjuntos de recursos computacionais que trabalham juntos para 
realizar tarefas de forma coordenada. 

É comum ter em uma infraestrutura diferentes tipos de _clusters_, como por exemplo,
um para processamento de dados, outro para armazenamento, outro para serviços web, etc.
No contexto de administração do Lemonade, o termo _Cluster_ refere-se principalmente
ao conjunto de recursos computacionais voltados para o processamento dos fluxos 
de trabalho.

Para explorar o potencial de um _cluster_ de processamento, com vários computadores
processando os dados em simultaneamente (em paralelo) e de forma distribuída, 
o Lemonade faz uso do [Apache Spark](https://spark.apache.org/). Um _cluster_ 
Apache Spark permite executar aplicações e processamentos de grandes volumes de dados, distribuindo as tarefas de processamento em várias máquinas em paralelo.

Um cluster Apache Spark é composto por um nó de controle, também conhecido como 
 _driver_, e vários executores (também chamados de nós de trabalho, 
 de processamento ou _workers_). 
O nó de controle é responsável por coordenar as tarefas e distribuir o trabalho 
entre os executores. Os executores são responsáveis por executar as 
tarefas atribuídas a eles e fornecer recursos computacionais para processamento.
Um gerenciador de recursos também pode fazer parte do _cluster_ Apache Spark. 
O gerenciador de recursos é responsável por iniciar os processos dos executores e (opcionalmente) o nó de controle em recursos (computadores, máquinas virtuais, containers) existentes ou em caso de necessidade, alocar novos recursos para então iniciar os processos. 

As informações necessárias para se criar uma nova configuração de  _cluster_ no
Lemonade estão listadas na tabela a seguir:


| Campo | Descrição | Observações | 
| ------| ----------| ------------|
| Nome  | Nome do _cluster_ | Usado para identificar o cluster nas várias telas do Lemonade. |         
| Tipo  | Tipo do cluster | Atualmente, são suportados 5 tipos, descritos adiante. | 
| Endereço | Endereço do servidor | | 
| Executores | Número total de executores | FIXME | 
| Núcleos dos executores | Total de núcleos ... | FIXME | 
| Memória dos executores | Memória de cada executor | FIXME | 
| Habilitado | Indica se o _cluster_ está habilitado | _Clusters_ desabilitados não estão disponíveis na interface e não podem ser usados para a execução. |
| Descrição | Descrição do cluster | Em geral, uma breve descrição do _cluster_ para documentação | 
| Plataformas | Plataformas (do Lemonade) suportadas pelo _cluster_ | Habilite as plataformas cujas dependências estão instaladas e configuradas nos recursos computacionais do _cluster_. |
| Token de autenticação | Token de autenticação para casos onde há interação com uma API | Atualmente, necessário para o Kubernetes. Ver seção sobre o Kubernetes mais adiante. | 
| Parâmetros | Parâmetros que são passados diretamente para o Apache Spark | Veja a seção a seguir. |

### Parâmetros diretos do Apache Spark
A tela de configuração de _clusters_ permite que o usuário modifique os parâmetros
mais comuns e básicos para a execução do Apache Spark. No entando, podem haver 
situações onde esses parâmetros básicos não são suficientes. Você pode usar o 
campo `Parâmetros` para passar diretamente parâmetros de configuração para o Apache
Spark. O valor para `Parâmetros` deve ser um texto JSON, onde o conteúdo é o nome 
e o valor do parâmetro a ser passado. Por exemplo:
```js
{
    "spark.jars.packages": "org.apache.spark:spark-sql-kafka-0-10_2.11:2.4.0",
    "spark.driver.cores": 2,
    "spark.driver.memory": "10g"
   
}
```
O exemplo acima envia o parâmetro `spark.jars.packages` diretamente para o Spark. 
No caso, esse parâmetro instrui o Spark a fazer o download de um arquivo para 
habilitar sua conexão com o Apache Kafka. Os outros parâmetros são usados para 
configurar o número de núcleos de processamento e a memória para o nó de controle
(_driver_). Para uma lista mais completa _propriedades_ (termo usado pelo Spark), 
consulte a [documentação oficial](https://spark.apache.org/docs/latest/configuration.html#available-properties). 

::: warning Importante!
Se o JSON para `Parametros` não estiver correto, o Lemonade não conseguirá 
executar os fluxos no Apache Spark.
:::

spark.executor.extraClassPath=/usr/local/juicer/jars/lemonade-spark-ext-1.0.jar:/usr/local/juicer/jars/spark-lof_2.11-1.0.jar,spark.driver.extraClassPath=/usr/local/juicer/jars/lemonade-spark-ext-1.0.jar:/usr/local/juicer/jars/spark-lof_2.11-1.0.jar,

## Tipos de _Cluster_

O Apache Spark pode ser executado em modo local, isto é, os processos serão iniciados
somente em um único recurso computacional. Dependendo do volume de dados e/ou da 
tarefa a ser executada, usar um único recurso pode não ser suficiente. Nesses casos, 
podemos usar outros tipos de _clusters_ que usam gerenciadores de recursos especializados.
Spark Standalone, Mesos, YARN e Kubernetes são três sistemas de gerenciamento de recursos populares usados com o Apache Spark. Esses sistemas fornecem recursos de escalonamento, agendamento e alocação de recursos em ambientes distribuídos, permitindo que o Spark execute suas tarefas de processamento em um cluster de forma eficiente. Aqui está uma breve descrição de cada um deles:

### Spark Standalone

O Apache Spark Standalone é um cluster manager embutido no framework Apache Spark. Ele fornece recursos para gerenciar e coordenar o processamento distribuído em um ambiente de cluster. O Spark Standalone permite que você configure e execute um cluster Spark autônomo, sem depender de outros sistemas de gerenciamento de recursos, como o Mesos ou o YARN.

### Apache Mesos
 
O Apache Mesos é um sistema de gerenciamento de recursos que fornece uma camada de abstração entre os recursos físicos do cluster e as aplicações que estão sendo executadas nele. Ele permite que várias estruturas de processamento, como o Spark, compartilhem os mesmos recursos do cluster de forma eficiente. O Mesos é conhecido por sua escalabilidade, tolerância a falhas e capacidade de lidar com uma variedade de cargas de trabalho.

::: warning Nota
O suporte ao Apache Mesos foi depreciado (_deprecated_) a partir da versão 3.2.0 
do  Apache Spark e será removido em futuras versões. O projeto do Apache Mesos também está 
sendo retirado e não deve mais ser usado.
:::

### Apache Hadoop YARN

Yarn
spark.hadoop.yarn.resourcemanager.hostname=spark04.ctweb.inweb.org.br


Cada tipo de _cluster_ terá seu próprio conjunto de parâmetros e não cabe aqui 
descrever todos eles.


O YARN (Yet Another Resource Negotiator) é o componente central do Apache Hadoop para gerenciamento de recursos e escalonamento. Originalmente desenvolvido para processamento de dados com o Hadoop, o YARN evoluiu para se tornar um ambiente de execução genérico que suporta várias estruturas de processamento, incluindo o Spark. O YARN é responsável pela alocação de recursos, agendamento de tarefas e monitoramento no ecossistema Hadoop.

### Kubernetes

Kubernetes é um sistema de orquestração de contêineres de código aberto amplamente utilizado para implantação e gerenciamento de aplicativos em escala. Embora inicialmente tenha sido projetado para contêinerização de aplicativos, o Kubernetes também oferece recursos de gerenciamento de recursos e agendamento que podem ser usados com o Spark. Ele permite que o Spark execute em contêineres distribuídos em um cluster, gerenciando a alocação de recursos, o escalonamento e a recuperação de falhas de forma automatizada.

A configuração detalhadada pode ser lida [aqui](https://spark.apache.org/docs/latest/running-on-kubernetes.html).

Principais parâmetros/propriedades:

| Parâmetro        | Descrição |
| -----------------| ----------|
| spark.kubernetes.namespace         | lemonade |
| spark.kubernetes.authenticate.driver.serviceAccountName | spark-sa |
| spark.driver.host | juicer.lemonade.svc.cluster.local |
| spark.driver.port | 29413 |
| spark.kubernetes.container.image | 150.164.203.230:5000/eubrabigsea/juicer:latest | 
| spark.kubernetes.driver.limit.cores | 4 |
| spark.kubernetes.executor.limit.cores | 4 | 

Adicionalmente, o Lemonade suporta os seguintes parâmetros que são passados para o Kubernetes:

| Parâmetro        | Descrição |
| -----------------| ----------|
| kubernetes.container | 150.164.203.230:5000/eubrabigsea/juicer:latest | 
| kubernetes.namespace | lemonade | 
| kubernetes.pull_policy | Always | 

### _Cluster_ Kubernetes
Para obter o token ...
