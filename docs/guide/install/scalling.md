# Escalabilidade

Não raramente, processos de engenharia de dados ou de ciência de dados, como
tratamento de dados e criação de modelos de aprendizado de máquina, requerem
uma infraestrutura robusta o suficiente para suportar o processamento de grandes
volumes de dados (_big data_). 

Os componentes básicos do Lemonade _per si_ não implementam nenhum algoritmo 
que exija muitos recursos da infraestrutura. Quando um algoritmo exige mais 
capacidade de processamento ou algum recurso específico, como GPUs, o Lemonade
delega a gestão desses recursos para diferentes tecnologias/mecanismos de 
processamento, incluindo o Apache Spark, Keras e Kubernetes. 

A instalação padrão do Lemonade foi pensada para trabalhar com pequenos volumes 
de dados, capazes de serem armazenados em alguns megabytes e que podem ser 
processados por até mesmo algoritmos de computação mais intensiva, mas que ainda
assim não são tidos como grandes volumes. Tal instalação se caracteriza por:

- Usar apenas uma instância do Apache Spark, configurada para o modo _local_ 
  (veja a [documentação](https://spark.apache.org/docs/latest/submitting-applications.html#master-urls) 
  do Apache Spark a respeito). Por padrão, será iniciado 1 executor para cada
  CPU disponível no computador e cada executor contará com 1 Gb de memória. 
- O armazenamento dos dados usa o sistema de arquivos HDFS, mas sem ser no modo
  distribuído ou redundante. Basicamente, os dados são armazenados e lidos usando-se 
  a API do HDFS, mas usando o esquema `file:///`, significando que os arquivos
  são escritos em um diretório local no sistema de arquivos do computador. 
  Por padrão, usa-se o diretório `/srv/lemonade` e quando se instala o Docker,
  os containers dos módulos Limonero e Juicer mapeiam esse diretório do computador
  hospedeiro para dentro do sistema de arquivos do container.
- Não há suporte à GPUs.

Essas restrições, no entanto, são apenas por conta da instalação básica e podem
ser resolvidas com a configuração adequada da infraestrutura para execução do 
Lemonade. 

## Configuração recomendada para grandes volumes de dados

Como foi dito, o Lemonade faz uso de tecnologias (consagradas) para processar 
grandes volumes de dados. Não há, no entanto, uma fórmula precisa de quanto 
de cada tipo de recurso (computadores, CPUs, memória, GPUs, disco, etc) é preciso
para conseguir processar certo conjunto de dados. A máxima de que _quanto mais, melhor_
certamente é válida, mas o contraponto do custo operacional e financeiro precisa 
ser considerado. 

### Recomendação para armazenamento dos dados
O Lemonade foi testado primariamente integrado ao sistema de arquivos do Apache 
Hadoop, o HDFS, e por isso, é a recomendação principal. Considere seriamente seu
uso para volumes que excedam algumas dezenas de megabytes, ou que gerem muitos 
dados intermediários ou que precisem de alta disponibilidade e redundância. 

Para o HDFS, alguns fabricantes têm artigos com recomendações de hardware.
Note que o HDFS é apenas 1 dos componentes do Apache Hadoop e é o único necessário
para o Lemonade:
- [Hadoop Cluster Setup](https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-common/ClusterSetup.html), da própria Apache Foundation.
- [Planning for the HDP Cluster](https://docs.cloudera.com/HDPDocuments/HDP3/HDP-3.0.1/cluster-planning/content/hardware-recommendations.html), da Cloudera, empresa especialista em soluções de _big data_.
- [Hadoop Cluster Hardware Recommendations](https://docs.informatica.com/data-engineering/data-engineering-integration/h2l/1415-tuning-and-sizing-guidelines-for-data-engineering-integrati/tuning-and-sizing-guidelines-for-data-engineering-integration--1/sizing-recommendations/hadoop-cluster-hardware-recommendations.html), da Informática, outra empresa especialista.

Você tem que observar outros recursos de infraestrutura que também têm impacto, 
além dos tradicionais memória e CPU. Dispositivos de rede, tais como roteadores e 
placas de rede tem grande impacto, uma vez que dependendo da situação, pode ser
necessário trafegar grandes quantidades de dados pela rede.


### Recomendação para processamento de dados

### Integração Apache Spark e HDFS

O Apache Spark atinge o melhor desempenho no acesso ao HDFS
quando há uma sobreposição do _cluster_ HDFS com o _cluster_ Spark, isto é, as máquinas
tem ambos instalados e configurados. Desta forma, se um processo Spark está 
executando numa máquina específica, há uma boa chance de que esse processo utilize
principalmente os dados locais (mais isso não é regra). Este 
[artigo em inglês](https://spark.apache.org/docs/latest/tuning.html#data-locality) tem
uma rápida explicação sobre o tema.

Mas há casos, como por exemplo, quando se usa um _cluuter_ HDFS separado do 
_cluster_ do Spark, onde a otimização do Spark para a leitura dos dados não é 
útil, uma vez que o agendador do Spark (o módulo que delega as tarefas para os 
executores) não consegue obter a informação da localização dos dados para 
direcionar o processamento para onde eles estão. Há também outros sistemas de 
arquivos similares ao HDFS, como o AWS S3, que simplesmente não tem suporte à 
sobreposição de _clusters_. 

A principal razão para não se adotar a sobreposição
de _clusters_ é financeira: enquanto o HDFS precisa ser persistente, uma vez que 
os dados _não_ podem ser perdidos, o processamento do Spark é perene. Escalar 
(aumentar ou diminuir) um _cluster_ HDFS é bem mais complicado do que um _cluster_
Spark, uma vez que para o primeiro, poderia ser necessário ter que mover grandes 
quantidades de dados entre as máquinas.

::: info Dica
A versão 3.0.0 do Apache Spark introduziu uma opção para desabilitar a funcionalidade
de localidade de dados:
```
spark.sql.sources.ignoreDataLocality.enabled=false
```
:::

Uma vez que você tenha configurado os _clusters_ HDFS e Spark, você pode configurar
o Lemonade para utilizá-los. 
Veja as seções sobre [Armazenamentos](../admin/storage.md),
[Clusters](../admin/cluster.md) e de [Integração](./integration.md) para mais detalhes.

## Alternativas
