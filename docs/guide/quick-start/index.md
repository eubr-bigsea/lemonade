# Início rápido com o Lemonade

Esta seção apresenta rapidamente o Lemonade, mostrando como você pode iniciar o 
uso dessa ferramenta, sem entrar nos detalhes. Haverá outras seções onde serão 
apresentados mais detalhes do uso, configuração e funcionamento do Lemonade. Por 
ora, vamos iniciar uma instalação do Lemonade, apresentar algumas telas da ferramenta 
e rodar algum experimento.

## Instalação básica

Você precisará clonar o repositório do Lemonade, por isso, certifique-se que o 
computador onde você fará a instalação tenha um cliente Git instalado e configurado.

A instalação básica do Lemonade é feita através do uso do Docker Compose. 

Para instalar o Lemonade e usá-lo pelo Docker container, siga estes passos:

1. Instale e configure o Docker Compose em seu sistema operacional. 
2. Veja as orientações (em inglês) no [site oficial](https://docs.docker.com/compose/install/).


3. Clone o respositório com o código disponibilizado para o Docker Compose:
```
$ git clone git@github.com:eubr-bigsea/docker-lemonade.git
$ cd docker-lemonade

```
4. Certifique-se de que esteja usando o _branch_ correto do Lemonade: 
  __master__ para a versão estável e __develop__ para a versão mais recente.
   
```
git switch master
```

5. Atualize as dependências do projeto
```
git submodule update --init --checkout
git submodule update --remote
```

5. Baixe as imagens dos vários serviços e dependências do Lemonade:

```
docker-compose pull
```

6. Finalmente, inicie a execução do Docker Container com as imagens do Lemonade:

```
docker-compose up -d --no-build
```

Aguarde enquanto todos os serviços iniciam. Então, acesse 
<a href="http://localhost:23456" target="_blank" rel="noopener noreferrer">http://localhost:23456</a>. 
Na instalação padrão, o usuário administrador tem as seguintes configurações:

::: tip AUTENTICAÇÃO
- __Login__: __admin__
- __Senha__: __123456__
:::

Para mudar a porta que o Lemonade usa para a interface web, altere o arquivo
 `docker-compose.yaml`, alterando a configuração `ports` debaixo do serviço `citrus`.
