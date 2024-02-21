# Pipelines

Uma Pipeline é um conjunto de etapas sequenciais que representam um único processo de ingestão de dados. Geralmente, a Pipeline estará associada a uma certa fonte de dados. Por exemplo, para dados provenientes da ANAC, uma Pipeline será criada e formada por etapas associadas a cada camada (ex. raw, stage, dataset, etc), definida no processo de ingestão de dados do MPMG.

Cada etapa tem a sua própria definição de regra para execução. A etapa poderá ser disparada manualmente, recorrentemente (por meio de uma configuração de periodicidade, no estilo crontab) ou ainda ser configurada para disparar logo após o término da etapa anterior da mesma Pipeline. 

No Lemonade, a definição da lógica do que deve ser executada no processo de ingestão é definida por meio de [fluxos de trabalho](../workflows/index.md). No Lemon, cada etapa deve estar associada a um fluxo de trabalho para que possa ser válida e executada. Note que um mesmo fluxo de trabalho pode ser associado a mais de uma etapa, caso faça sentido. O Lemonade provê o conceito de variáveis para o fluxo de trabalho, que teoricamente, permitiriam usar um fluxo de trabalho em diferentes processos de ingestão, desde que as variáveis fossem corretamente informadas.

Caso seja identificado que vários processos de ingestão de dados guardem similaridade (ou seja, tenham as mesmas etapas), o usuário do Lemon poderá definir um Modelo de Pipeline (TemplatePipeline). Desta forma, ao criar novas Pipelines, o usuário pode iniciar a partir de um modelo e não precisará definir todas as etapas novamente.

## Tópicos relacionados

Para mais informações a respeito de alguns tópicos relacionados ao contexto de pipelines, acesse as seções abaixo.

- [Templates para Pipeline](../pipelines/pipeline-template.md)
- [Gestão de Pipelines](../pipelines/pipeline-management.md)
- [Agendamento de execução](../pipelines/execution-schedule.md)
