# Armazenamentos

Uma Fonte de Dados está associada a um Armazenamento. Um Armazenamento registra
as informações necessárias para a conexão entre o Lemonade e o provedor dos dados.
Sistemas de arquivos, sistemas de gerenciamento de bancos de dados, serviços de 
filas, servidores web e outros podem ser provedores de dados. Basta que o Lemonade
suporte a tecnologia e que tenha as dependências (bibliotecas) necessárias
instaladas e configuradas. 

Atualmente, o Lemonade suporta os seguintes tipos de Armazenamentos:

| Tipo | Descrição |
|------|-----------|
| HDFS | Sistema de arquivos distribuído do Apache Hadoop, suporta grandes volumes de dados de forma eficiente e escalável. 
| Arquivo | Qualquer sistema de arquivo suportado pelo sistema operacional onde o Lemonade está sendo executado. Há limitações quanto escalabilidade e disponibilidade. |
| Apache Hive | |
| JDBC + bancos de dados relacionais| Requer que os _drivers_ estejam corretamente instalados e configurados, tanto para Python, quanto para Java. |
| Bancos de dados NoSQL | Cassandra, MongoDB, Redis. Requer conectores.|
| Apache Kafka | |
| Amazon S3 | |

É recomendável que o Armazenamento seja configurado, mantido e visto como um serviço
externo ao Lemonade. Também é recomendável que seja usado algum tipo que seja 
distribuído e escalável, compatível com o Apache Spark.

A configuração de Armazenamentos é uma tarefa administrativa e é coberta em uma 
[seção específica](../admin/storage.md).