# Configuração

Há diferentes parâmetros que podem ser configurados em diferentes partes do Lemonade.
Também há configurações que são específicas de cada [serviço](../dev/services.md) 
e [tecnologia integrada](./integration.md).
Esta seção orienta como proceder com essas configurações.

## Configurações gerais

As configurações gerais estão disponíveis diretamente na interface do Lemonade,
debaixo do menu `Administração > Configurações`. 

::: info Nota
O menu `Configurações` está disponível somente para administradores.
::: 

As configurações disponíveis são:

| Configuração  | Categoria |Descrição  | Observações  | Valor padrão|
|---|---|---|---|---|
|LDAP_SERVER|Autenticação|Endereço do servidor LDAP| Usado para autenticação por LDAP |ldap.domain.com
|LDAP_BASE_DN|Autenticação|Base DN no servidor LDAP|Usado para autenticação por LDAP|dc=domain,dc=com
|LDAP_USER_DN|Autenticação|DN para usuário no servidor LDAP|Usado para autenticação por LDAP|uid={login},ou=People,dc=domain,dc=com
|SERVER_BASE_URL|Servidor|Endereço (URL) do servidor do Lemonade (se diferente do nome da máquina)| Necessário se o Lemonade está sendo executado atrás de um _proxy_ e o endereço está sendo modificando |http://localhost:8000
|SUPPORT_EMAIL|Envio de e-mail|E-mail de suporte (remetente) para o Lemonade (e-mail de contato)| Usado para envio de emails|supporte@domain
|SMTP_SERVER|Envio de e-mail|Endereço do servidor para envio de e-mails (SMTP)| Usado para envio de emails |smtp.domain.com
|SMTP_USER|Envio de e-mail|Usuário para autenticação no servidor de envio de e-mails| Usado para envio de emails |lemonade.user
|SMTP_PASSWORD|Envio de e-mail|Senha para autenticação no servidor de envio de e-mails| Usado para envio de emails |secret
|SMTP_PORT|Envio de e-mail|Porta do servidor para envio de e-mails| Usado para envio de emails |465

Para habilitar a autenticação por LDAP, é preciso também configurar o serviço Thorn. 
No arquivo `thorn-config.yaml`, adicione uma seção chamada `providers` e inclua
a opção `ldap`. Para um exemplo, veja a seção de [configuração do serviço Thorn](#thorn-autenticação).

## Configuração do Tahiti (metadados)
## Configuração do Limonero (metadados)
## Configuração do Stand
## Configuração do Caipirinha
## Configuração do Thorn (autenticação)

``` yaml{6}
thorn:
    port: 3319
    secret: xxxxx
    providers:
    - thorn
    - ldap
    servers:
        database_url: mysql+pymysql://login:pwd@server:3306/thorn?charset=utf8
        redis_url: redis://server/1
    services:
    config:
        SQLALCHEMY_POOL_SIZE: 0
        SQLALCHEMY_POOL_RECYCLE: 60
        RQ_QUEUES: ['thorn']
    unprotected_urls:
        /api/v1/thorn/auth/login: ['POST']
        /api/v1/thorn/register: ['POST']
        /api/v1/thorn/password/reset: ['PATCH', 'POST', 'GET']
        /api/v1/thorn/tokens: []
        /api/v1/stand//socket.io/: []
        /api/v1/stand/socket.io/: []
        /api/v1/stand/socket.io: []
        /api/v1/tahiti/public/js/tahiti.js: ['GET']
        /api/v1/caipirinha/public/dashboard: ['GET']
```

## Configuração do Juicer