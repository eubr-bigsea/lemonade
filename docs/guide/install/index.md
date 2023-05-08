<script setup>
  import Constants from '../../components/Constants.js'
</script>

# Instalação

Há diferentes maneiras de se instalar o Lemonade:

- Usando o [__Docker Container__](#instalando-pelo-docker-container);
- Usando o [__Kubernetes__](#instalação-no-kubernetes);
- A partir do [código-fonte](#instalação-a-partir-do-código-fonte).

Atualmente, a maneira mais fácil de instalar o Lemonade é usado  o 
[Docker Container](#instalando-pelo-docker-container). 

## Instalando pelo Docker Container


Para instalar o Lemonade e usá-lo pelo Docker container, siga estes passos:

1. Instale e configure o Docker Compose em seu sistema operacional. Veja as orientações (em inglês) no [site oficial](https://docs.docker.com/compose/install/).


2. Clone o respositório com o código disponibilizado para o Docker Compose:
```
git clone git@github.com:eubr-bigsea/docker-lemonade.git
cd docker-lemonade

```
3. Certifique-se de que esteja usando o _branch_ correto do Lemonade: __master__ para a versão estável e __develop__ para a versão mais estável.
   
```
git switch master
```

4. Atualize as dependências do projeto
```
git submodule update --init --checkout
git submodule update --remote
```

5. Baixe as imagens dos vários serviços do Lemonade:

```
docker-compose pull
```

6. Finalmente, inicie a execução do Docker Container com as imagens do Lemonade:

```
docker-compose up -d --no-build
```

Aguarde enquanto todos os serviços iniciam. Então, acesse http://localhost:23456. 
Na instalação padrão, o usuário administrador tem as seguintes configurações:

::: tip AUTENTICAÇÃO
- __Login__: __admin__
- __Senha__: __123456__
:::

Para mudar a porta que o Lemonade usa para a interface web, altere o arquivo
 `docker-compose.yaml`, alterando a configuração `ports` debaixo do serviço `citrus`.


## Construindo as imagens a partir do código-fonte

```
git submodule update --init --checkout
docker-compose up -d --build
```

## Configurando o Docker Swarm
-----------
```
docker stack deploy -c docker-stack.yml lemonade

```

Using remote spark cluster
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


Using a HDFS Cluster
--------------------
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


DockerHub autobuild containers configuration
--------------------------------------------
* [Link GitHub and DockerHub](https://docs.docker.com/docker-hub/builds/link-source/)
* [Set up Automated builds](https://docs.docker.com/docker-hub/builds/)

Troubleshooting
---------------
### UnixHTTPConnectionPool ... Read timed out
Set the following environment variables and run compose up again
```
export DOCKER_CLIENT_TIMEOUT=120
export COMPOSE_HTTP_TIMEOUT=120
```


## Instalação no Kubernetes
Escolhendo a opção de instalação no Kubernetes, você poderá escolher entre vários
provedores:

- Amazon Web Services (AWS)
- Google Cloud Platform (GCP)
- Microsoft Azure

Mas você também pode instalar o Lemonade em sua própria infraestrutura gerenciada.
Note que em qualquer situação, é necessário ter o _cluster_ Kubernetes disponível, 
configurado e funcionando. 

## Instalação a partir do código-fonte


