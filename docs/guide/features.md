# Funcionalidades 

- Preparação de dados: o Lemonade permite que os usuários limpem, filtrem e 
transformem dados de várias fontes, incluindo bancos de dados, arquivos CSV, 
Parquet, JSON e outras fontes.
- Exploração de dados: o Lemonade oferece recursos de visualização interativa de dados, 
análise estatística, modelagem gráfica e exploração de dados.
- Permite integração com bancos de dados relacionais utilizando _drivers_ JDBC.
- Apresenta uma série de ferramentas para análise preliminar dos dados _brutos_.
- Modelagem de dados: o Lemonade permite que os usuários construam modelos de 
aprendizado de máquina e de estatística para prever resultados futuros, 
identificar padrões e insights.
    - Premite treinar modelos de classificação, regressão e agrupamento, usando os 
principais algoritmos presentes na biblioteca Scikit-Learn e no Apache Spark.
    - Permite identificar conjuntos de itens frequentes (_frequent item-sets_), 
encontrar pontos fora da curva (_outliers_) e executar algoritmo de recomendação.
    - Utilizando o Keras, permite definir redes neurais complexas usando a abstração 
de fluxo de trabalho.
    - O Lemonade possui um ambiente de modelagem integrado com diversas técnicas 
      de aprendizado de máquina, incluindo regressão, classificação, agrupamento, 
      redes neurais, árvores de decisão, entre outros.
- Visualização de dados: a plataforma oferece uma ampla gama de visualizações de 
dados, incluindo gráficos, tabelas, mapas e outros formatos para ajudar os 
usuários a entender e explorar os dados. As visualizações podem ser agrupadas, 
formando um _dashboard_, que por sua vez pode ser disponibilizado (apenas para leitura)
a usuários autenticados ou não no Lemonade. 
- Integração com outras ferramentas: o Lemonade se integra com uma ampla 
variedade de ferramentas de análise de dados, incluindo Python, HDFS, Keras, 
COMPSs, Scikit-Learn, Pandas, Polars, Spark e outros, para permitir que os 
usuários usem as ferramentas que preferirem.


## Em desenvolvimento

- Colaboração: a plataforma permite que vários usuários colaborem em projetos, 
compartilhem dados, modelos e visualizações de dados, e trabalhem juntos em equipes.
- Monitoramento de modelos: a plataforma oferece ferramentas de monitoramento de 
modelo para garantir que os modelos de aprendizado de máquina continuem 
funcionando de maneira eficaz após a implantação.
- Automação: a plataforma possui recursos de automação de tarefas de ciência de 
dados, permitindo criar fluxos de trabalho automatizados para pré-processamento 
de dados, modelagem, avaliação e implantação.
- Implantação de modelos: o Lemonade permite implantar modelos em diversos 
ambientes com infraestrutura Kubernetes.
- Governança de dados: O Lemonade possui recursos para garantir a segurança e 
a conformidade dos dados, incluindo recursos de anonimização, 
controle de acesso, monitoramento de dados sensíveis e rastreamento de mudanças.
- Linhagem e catálogos de dados: O Lemonade se integra com o OpenMetadata, 
servindo como fonte para popular esse catálogo de dados, permitindo análises de 
dependência e linhagem entre diferentes tipos de artefatos: fontes de dados, modelos 
de aprendizado de máquina, fluxos de trabalho, _dashboards_, validações de dados (testes)
e implantações.