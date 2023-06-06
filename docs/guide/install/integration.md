# Integração com outros produtos (mesclado com escalabilidade, rever seção)

## Usando um _cluster_ HDFS

O Hadoop Distributed File System (HDFS) é o sistema de arquivos distribuídos do 
[Apache Hadoop](https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html),
projetado para armazenar grandes volumes de dados com alta confiabilidade e escalabilidade.
 Algumas vantagens de se utilizar o HDFS incluem:

1. Escalabilidade: O HDFS foi projetado para ser altamente escalável, permitindo 
    que você adicione nós ao cluster para aumentar a capacidade de armazenamento 
    de dados. Isso torna o HDFS uma ótima opção para lidar com grandes 
    quantidades de dados que crescem rapidamente ao longo do tempo.

2. Confiabilidade: O HDFS é altamente confiável devido à sua arquitetura distribuída. 
    Os dados são replicados em vários nós diferentes, o que significa que se um 
    nó falhar, os dados ainda estarão disponíveis em outros nós. Isso torna o 
    HDFS uma opção segura e confiável para armazenamento de dados.

3. Processamento de dados paralelos: O HDFS permite processamento de dados 
   paralelos, o que significa que vários nós podem trabalhar simultaneamente em 
   diferentes partes do mesmo arquivo. Isso permite que o processamento de 
   dados seja executado de forma mais rápida e eficiente do que em um 
   sistema de arquivos centralizado.

4. Baixo custo: O HDFS é de código aberto e gratuito para uso, o que significa 
   que você não precisa pagar licenças caras para usá-lo. Além disso, ele pode 
   ser executado em hardware de baixo custo, o que torna o HDFS uma opção 
   acessível para organizações de todos os tamanhos.

5. Flexibilidade: O HDFS é compatível com uma ampla variedade de ferramentas 
   de processamento de dados, como o Apache Spark e o Apache Hive. 
   Isso significa que você pode usar as ferramentas de sua escolha para 
   processar e analisar dados armazenados no HDFS, permitindo uma grande 
   flexibilidade no processamento de dados.

A integração do Lemonade é feita através do Apache Spark e também pela biblioteca 
PyArrow. 

Na interface de administração do Lemonade

A user interface is under progress. If you want to use a HDFS cluster, you need to connect to the MySQL service and add a record in `storage` table:

```
% sudo docker-compose exec mysql mysql -u root -plemon limonero
mysql> INSERT INTO storage(id, name, type, url, enabled) VALUES (2, 'HDFS cluster', 'HDFS', 'hdfs://hdfs-server:9000', 1);
```
The `url` column must be a valid HDFS URL and the cluster must be accessible from the containers.

Directories in the host machine
-------------------------------

By default, Lemonade will create 2 directories in the host machine, under the parent dir `/srv`:
- `/srv/lemonade/mysql-dev`, for the MySql database;
- `/srv/lemonade/storage` for HDFS local file system.

You can change these configurations in the `docker-compose.yaml` file.

## Conexão a outras fontes de dados

## Using remote spark cluster
--------------------------
Update the following lines in `config/juicer-config.yaml` with your own data
```
libprocess_advertise_ip: 127.0.0.1
spark.driver.host: your.hostname
```
To allow the connection it is needed to uncomment the lines bellow in
`docker-compose.yml` file
```
ports:
  - '37100-37399:37100-37399'
```
If you want to use spark envent log edit the following lines in
`config/juicer-config.yaml`
```
spark.eventLog.enabled: false
spark.eventLog.dir: hdfs://<namenode>:9000/path
spark.history.fs.logDirectory: hdfs://<namenode>:9000/path
```
Clusters are configured in tables from `stand` service. A user interface is under progress. If you need to add a cluster configuration, you need to connect to the MySQL service and add a record in `cluster` table:

```
% sudo docker-compose exec mysql mysql -u root -plemon stand
mysql> INSERT INTO cluster(id, name, description, enabled, type, address, executor_cores, executor_memory, executors, general_parameters) VALUES (2, 'Spark cluster', 'Spark cluster', 1, 'MESOS', 'mesos://mesos-master:5050', 16, '2GB', 72, 'sparmesos.principal=lemonade,spark.mesos.secret=lemonade,spark.mesos.executor.home=/opt/spspark-2.3.0-bin-hadoop2.7');
```
The cluster type can be `MESOS`, `SPARK_LOCAL`, `SPARK` or `YARN`. The `address` must be a valid Spark master URL. The columns `executor_cores`, `executor_memory` and `executors` define the number of cores, memory and executors. These values are associated to the respective Spark parameters, as well parameters defined in `general_parameters`. They are well documented in Spark.

## Usando o Kubernetes
## Computação em nuvem

## Uso de GPUs

