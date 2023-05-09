# Conceitos

O Lemonade é composto por vários módulos, que colaboram entre si por meio de 
APIs, formando uma arquitetura baseada em microsserviços. 
O módulo de cada projeto possui seu próprio repositório no Github:

- Citrus (https://github.com/eubr-bigsea/citrus)
- Tahiti (https://github.com/eubr-bigsea/tahiti)
- Juicer (https://github.com/eubr-bigsea/juicer)
- Stand (https://github.com/eubr-bigsea/stand)
- Limonero (https://github.com/eubr-bigsea/limonero)
- Caipirinha (https://github.com/eubr-bigsea/caipirinha)
- Thorn (https://github.com/eubr-bigsea/thorn)
- Seed (https://github.com/eubr-bigsea/seed)

Reveja os conceitos apresentados no documento sobre [conceitos gerais](../concepts/index.md), pois eles são fundamentais 
para o entendimento. Além dos conceitos apresentados anteriormente, há alguns 
novos, necessários para o desenvolvimento:

1.2.5. Cluster, minions e processos
No Lemonade, um cluster é um recurso computacional que executa o fluxo de trabalho. Quando uma ação de executar um fluxo de trabalho é disparada, um processo do Juicer, chamado Juicer Server, cria um novo processo chamado de minion. Cada plataforma deve ter seu próprio minion e este deve saber como alocar os recursos computacionais necessários em cada tipo de cluster. Minions mais simples, que não demandam um cluster efetivamente ou demandam GPU, podem ser implementados simplesmente realizando um fork de um novo processo ou mesmo rodando o código gerado em seu próprio processo.
Quando um cluster é usado, haverá a figura de um agendador de recursos (scheduler). Atualmente, são suportados os seguintes agendadores:

|Agendador|Plataformas suportadas|Observações|
|---------|----------------------|-----------|
|Apache Standalone|Spark|Simples de se configurar e usar.|
|Apache Yarn|Spark|Configuração mais elaborada.|
|Kubernetes|Spark, Python (scikit-learn) e Keras|Configuração complexa.|

|"Minion"|Spark, Python (scikit-learn) e Keras|Não é bem um agendador, mas o código será executado no próprio minion.|


Cada tipo de cluster demandará uma série de configurações para o funcionamento e a própria instalação pode ser complexa. No Apêndice A, há uma descrição sobre como configurar a entidade "cluster" do Lemonade para a execução de fluxos.
