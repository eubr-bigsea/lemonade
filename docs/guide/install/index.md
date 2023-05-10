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

## Instalando pelo Docker Compose
Para a instalação pelo Docker Compose, veja a seção [Início rápido](../quick-start/index.md).

## Construindo as imagens a partir do código-fonte

Siga os mesmos passos para a baixar o código-fonte do Lemonade, mas desta vez, 
execute também os comandos:

```
git submodule update --init --checkout
docker-compose up -d --build
```

## Configurando o Docker Swarm

```
docker stack deploy -c docker-stack.yml lemonade

```


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
FIXME

## Integração do Lemonade com outros produtos

O Lemonade pode ser integrado com vários produtos. A integração exigirá 
configurações específicas para o funcionamento correto e otimizado. Por exemplo, 
você pode querer executar o Lemonade integrado a um _cluster_ Apache Spark, 
conectá-lo a um sistema de arquivos HDFS ou a um servidor de banco de dados MySQL.

Para mais detalhes, consulte
a página de [integração](./integration.md).


