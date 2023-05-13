# Utilização em nuvem

O Lemonade pode ser instalado em nuvem. Os seus componentes já são preparados
para serem usados na forma de _containers_ Docker e também já estão prontos 
para serem usados no [Kubernetes](https://kubernetes.io/pt-br/) e esta é a forma
testada e recomendada.

A nuvem pode ser privada ou de terceiros. Grandes provedores de infraestrutura, 
tais como Google (Cloud Engine), IBM (Cloud), Amazon (AWS), Microsoft (Azure), 
entre outras, dão suporte ao Kubernetes. 

Para usar o Lemonade em uma infraestrutura com Kubernetes, você precisa:
1. Construir as imagens dos vários serviços do Lemonade ou usar as versões
disponibilizadas pela equipe do projeto. 
2. Se decidir construir as imagens, você precisa registrá-las em um repositório
de imagens que esteja acessível no _cluster_ Kubernetes.
3. Você deve baixar o projeto https://github.com/eubr-atmosphere/lemonade-on-k8s. 
Ele contém os _scripts_ e arquivos de configuração para a instalação no Kubernetes.

```
$ git clone https://github.com/eubr-atmosphere/lemonade-on-k8s.git
$ cd lemonade-on-k8s
```


Os _scripts_ fornecidos irão configurar:
- Um espaço de nomes (_namespace_) para isolar as configurações, segurança, 
permissões e recursos usados pelo Lemonade.
- Os volumes de dados necessários para armazenar o banco de dados de configuração
e os arquivos de dados que porventura os usuários envie para o servidor. Também
serão criados os _volume claims_ (reinvindicações de uso de volume), para associar
os volumes aos módulos que precisam deles. 
- Implantações (_deployments_) de cada um dos módulos do Lemonade
- Serviços (_services_) que são expostos para fora do _cluster_, especialmente 
o Citrus, que é a interface de usuário do Lemonade.
- Serão criadas as contas de serviço (_service accounts_), que por sua vez 
serão associadas a papéis ('roles') no Kubernetes. Essas contas são usadas 
diretamente pelo Lemonade para criar _pods_ ou indiretamente, pelo Apache Spark,
para executar os fluxos de trabalho.

::: warning Importante
Você deve rever o conteúdo dos arquivos `accounts.sh` e  `setup.sh` e fazer os 
ajustes necessários. Você também deve escolher um _namespace_ para segmentar 
o Lemonade no _cluster_ Kubernetes.
:::

Uma vez revistos os arquivos e definido o _namespace_, você pode rodar os 
comandos nesta ordem:

```
$ ./accounts.sh <NAMESPACE>
$ ./setup.sh <NAMESPACE>
```

Algumas considerações importantes:

1. Teoricamente, você pode executar os _scripts_ com o mesmo namespace, 
pois eles apenas substituem a configuração anterior, exceto para as contas. 
Se um _pod_ falhar ao iniciar, tente excluí-lo. O _deployment_ irá recriá-lo. 
2. Alguns serviços requerem acesso a armazenamento, como MySQL, Juicer e Limonero. 
Idealmente, um sistema de arquivos distribuído (DFS) ou _object store_ são recomendados, 
omo por exemplo, GlusterFS ou CEPH. Caso contrário, quando um _pod_ reinicia e 
é alocado para um nó diferente, ele não conseguirá encontrar o caminho e o 
recriará. Se o Limonero e o Juicer estiverem em nós diferentes sem um DFS, 
o Juicer não conseguirá encontrar os arquivos enviados no Limonero.
3. Especificamente para o Juicer e para o Limonero, o recomendado é configurar
um _cluster_ HDFS separado do Lemoande, para servir como sistema de arquivos 
distribuído. Veja [esta seção](./integration.md#usando-um-cluster-hdfs) sobre a 
utilização de um _cluster_ HDFS. 