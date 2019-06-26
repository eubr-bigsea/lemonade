# Installation

## <a name="installing-the-latest-version"></a> Installing the latest version

## <a name="using-a-docker-container-version"></a> Using a Docker container

In the following Figure, Lemonade microservices are deployed as containers managed by Docker and by the underlying virtualization technology. Workflows in Lemonade are converted into PySpark code and runs on Apache Spark or COMPSs (under development), consuming resources in HDFS or in Ophidia (under development). In general, Lemonade's microservices do not require elasticity, because they are small applications and do not really execute any CPU or memory intensive code, this is responsibility of the underlying processing platform (COMPSs or Spark). As described in previous section, COMPSs PMES was modified in order to support Mesos and elasticity provided by QoS infrastructure. Spark itself is already integrated with Mesos.

![Docker installation](../img/Installation/deploy.jpg "Docker installation")
### Preparing to build

```bash

git clone git@github.com:eubr-bigsea/docker-lemonade.git
cd docker-lemonade
git submodule init
git submodule update --remote

```

### Building and running


```
docker-compose up
```

Running on detached mode:

```
docker-compose up -d
```