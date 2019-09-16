# Instalação

## Instalando a última versão

## Usando Docker container

Na figura a seguir, os microsserviços do Lemonade são implantados como containers gerenciados pelo Docker e pela tecnologia de virtualização subjacente. Os fluxos de trabalho no LEMONADE são convertidos em código do PySpark e executados no Apache Spark ou no COMPSs (em desenvolvimento), consumindo recursos no HDFS ou no Ophidia (em desenvolvimento). Em geral, os microsserviços não requerem elasticidade porque são pequenas aplicações e não executam qualquer código intensivo de memória ou CPU, isso é responsabilidade da plataforma de processamento subjacente (COMPSs ou Spark). Conforme descrito na seção anterior, o COMPSs PMES foi modificado para oferecer suporte ao Mesos e a elasticidade fornecidos pela infraestrutura de QoS. A própria Spark já está integrada com o Mesos.

![Docker installation](/img/image1.jpg "Docker installation")
### Preparando para construir

```bash

git clone git@github.com:eubr-bigsea/docker-lemonade.git
cd docker-lemonade
git submodule init
git submodule update --remote

```

### Construindo e executando


```
docker-compose up
```

Executando em modo independente:

```
docker-compose up -d
```