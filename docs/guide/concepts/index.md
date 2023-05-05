# Conceitos básicos

O LEMONADE utiliza uma terminologia comum, mas gostaríamos de reforçar algumas definições para explicar melhor a plataforma. O diagrama do modelo de domínio é mostrado na Figura L0.

## Fontes de dados e armazenamentos
Os metadados relacionados a fontes de dados e seus atributos são mantidos e usados durante o design e o tempo de execução. Os usuários configuram as tarefas que exigem informações sobre os atributos da fonte de dados, selecionando a partir de uma lista com as opções disponíveis. Essa lista é fornecida pelos serviços de metadados, descritos adiante, na seção Arquitetura do LEMONADE.

## Operações, portas e parâmetros
Uma operação é a menor unidade de execução definida no LEMONADE. Cada operação possui um conjunto de parâmetros (definidos como formulários) e um conjunto de portas. Uma operação é mapeada em um bloco de código a ser executado na plataforma de execução subjacente. Diferentes plataformas de execução podem ter operações diferentes, mas, em geral, há um conjunto de operações comuns disponíveis na maioria delas. Geralmente, são operações relacionadas a tarefas como extração, transformação e carregamento (ETL). No LEMONADE, existem diferentes categorias.

## Fluxos de trabalho, tarefas e fluxos
O fluxo de trabalho é um grupo de tarefas (instâncias de operações), organizado como um grafo acíclico direto (DAG). As tarefas se comunicam por meio de fluxos, conectando uma porta de origem a uma porta de destino. Cada porta tem uma direção (INPUT ou OUTPUT), uma cardinalidade (ONE, MANY) e uma ou mais interfaces definidas (por exemplo, IData, IModel). As interfaces são usadas para validar fluxos usando uma espécie de sistema de tipos. Os usuários não podem conectar duas portas se elas não compartilharem pelo menos uma interface em comum. Os formulários definidos nas operações são preenchidos pela interface (Citron) para cada tarefa associada a essas operações.

## Jobs, steps, resultados e clusters
Depois de enviar um fluxo de trabalho, um job (trabalho) é iniciado para processar o fluxo de trabalho. A DAG formada por tarefas e fluxos é avaliada e convertida em código para ser executado na plataforma de execução subjacente. A versão atual do LEMONADE permite apenas a execução de todo o fluxo de trabalho, mas temos planos para permitir a execução parcial e até incremental, dispensando a execução de tarefas já processadas e não alteradas na interface.

## Plataformas Suportadas
Lemonade atualmente suporta 3 plataformas de execução:

- Apache Spark 2.2.0. Alguns fluxos de trabalho podem funcionar nas versões anteriores, mas pelo menos a versão 2.0.0 é necessária. Ele suporta geração de código e controle de execução de fluxos de trabalho. O código é compatível com o PySpark e pode ser executado fora do Lemonade.
- Keras. É uma API de redes neurais de alto nível, escrita em Python e capaz de executar em cima do TensorFlow, CNTK ou Theano. Ela foi desenvolvida com foco em permitir a experimentação rápida, ser capaz de ir da ideia ao resultado com o menor atraso possível é a chave para fazer uma boa pesquisa. Use o Keras se você precisar de uma biblioteca de aprendizado profunda que: Permite a criação fácil e rápida de protótipos (por meio da facilidade de uso, modularidade e extensibilidade). Suporta redes convolucionais e redes recorrentes, assim como combinações das duas. E, funciona perfeitamente com CPU e GPU.
- Python Scikit Learn + Pandas. Em desenvolvimento. Geração de código preliminar, nem todas as operações são suportadas.
- Barcelona Supercomputer Center - BSC COMPSs. Suporta geração de código. O gerenciamento de execução está em desenvolvimento.

Novas plataformas podem ser desenvolvidas. Veja desenvolvimento para novas plataformas no Guia de Programação.