# Armazenamentos

Armazenamentos representam as configurações necessárias para a conexão a um 
_provedor_ de dados. Provedores podem ser desde sistemas de arquivos (do sistema
operacional ou distribuídos, como HDFS ou AWS S3), gerenciadores de bancos de dados 
(PostgreSQL, MySQL, etc), filas (Kafka, RabbitMQ, etc) ou NoSQL (MongoDB, 
Cassandra, Hive, etc).

Atualmente, o Lemonade suporta a configuração para acesso aos sistemas de 
arquivo do sistema operacional, HDFS, Kafka, Hive e MySQL. 

## Criando um armazenamento

Para criar um armazenamento, 
