<script setup>
    import { ref } from 'vue';
    const types = ref([
        {
            name: "line", label: "Linhas",
            objectives: ['fluxo', 'relacionamento', 'comparação', 'tendência'],
            dataTypes: ['contínuos']
        },
        { name: "bar", label: "Barras", dataTypes: ['categóricos'], objectives: ['tendência', 'comparação', 'distribuição'] },
        { name: "stacked-bar", label: "Barras Empilhadas", dataTypes: ['categóricos'], objectives: ['tendência', 'comparação', 'distribuição', 'composição'] },
        { name: "horizontal-bar", label: "Barras Horizontais", dataTypes: ['categóricos'], objectives: ['tendência', 'comparação', 'distribuição'] },
        { name: "stacked-horizontal-bar", label: "Barras Horizontais Empilhadas", dataTypes: ['categóricos'], objectives: ['tendência', 'comparação', 'distribuição', 'composição'] },
        {
            name: "stacked-area", label: "Área empilhado",
            dataTypes: ['categóricos'], objectives: ['composição']
        },
        { name: "stacked-area-100", label: "Área empilhado 100%", dataTypes: ['contínuos'], objectives: ['comparação', 'composição'] },
        { name: "pie", label: "Pizza", dataTypes: ['categóricos'], objectives: ['comparação', 'composição'] },
        { name: "donut", label: "Rosca (Donut)", dataTypes: ['categóricos'], objectives: ['composição', 'comparação',] },
        { name: "indicator", label: "Indicador", dataTypes: ['contínuos'], objectives: ['tendência',] },
        { name: "boxplot", label: "Box plot", dataTypes: ['contínuos'], objectives: ['comparação', 'distribuição'] },
        { name: "bubble", label: "Bolhas", dataTypes: ['contínuos'], objectives: ['comparação', 'distribuição'] },
        {
            name: "scatter", label: "Dispersão",
            dataTypes: ['contínuos'], objectives: ['comparação']
        },
        //{ name: "scatterplot", label: "Scatter Plot", },

        {
            name: "scattermapbox", label: 'Mapa de pontos',
            dataTypes: ['contínuos'], objectives: ['comparação']
        },

        {
            name: "treemap", label: "Mapa em Árvore (Treemap)",
            dataTypes: ['categóricos'], objectives: ['hierarquia', 'comparação']
        },
        { name: "sunburst", label: "Gráfico de Hierarquias", dataTypes: ['categóricos'], objectives: ['hierarquia', 'comparação']},
        { name: "pointcloud", label: "Nuvem de Pontos", },
        //{ name: "scattergeo", label: "Bolhas em Mapa", },
        { name: "funnel", label: "Gráfico de Funil", },
        { name: "violin", label: "Violin Plot", },
        { name: "histogram2d", label: "Density Heatmap", },
        { name: "parcoords", label: "Coordenadas Paralelas", },
        { name: "histogram2dcontour", label: "2D Histogram Contour", },
        { name: "heatmap", label: "Mapa de Calor (Heatmap)", objectives: ['comparação',
            'correlação', 'distribuição', 'tendência']},
        /*{name: "dots",label: "Pontos",
                image: "https://images.plot.ly/plotly-documentation/thumbnail/dot-plot.jpg"
            },*/
    ]);
    const getChartIcon = (type) => {
        return `http://localhost:8081/src/assets/charts/${type}.svg`;
    };

</script>

<style module>

.vis_type_container {
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    justify-content: center;
}

.vis_type {
    border: 1px solid #eee;
    flex: 0 0 24.5%;
    padding: 10px;
    margin: 1px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>

# Visualização de dados

Possibilita a criação de gráficos e outras visualizações a partir dos dados transformados usando o módulo anterior. Assemelha-se a uma ferramenta de construção de dashboards de BI (Business Intelligence), ainda que mais simplificada e com foco no entendimento dos dados. O objetivo é manter o usuário em uma única aplicação.

# Construtor de visualizações

O construtor de visualizações é uma ferramenta que permite criar diversos tipos 
de visualizações, tais como gráficos, tabelas e indicadores de forma fácil e 
rápida usando o Lemonade. Com esta ferramenta, é possível personalizar 
diferentes aspectos dos gráficos, configurar as dimensões de entrada e opções 
para eixos, bem como adicionar cores e legendas para deixar as visualizações 
mais atraentes e informativas.

Além disso, as visualizações geradas podem ser exportadas para 
[dashboards](../../dashboards/) no 
próprio Lemonade, permitindo que os usuários tenham acesso a todas as suas 
informações em um único lugar. É possível também exportá-las como imagem, 
o que é útil para incluir em relatórios e apresentações ou ainda exportar 
a visualização como código-fonte Python, para executá-la usando a biblioteca 
[Dash](https://plotly.com/dash/).

## Visualizações disponíveis

<div :class="$style.vis_type_container">
    <div v-for="type in types" :key="type.name" :class="$style.vis_type" role="button">
        <div>
            <strong><a :href="`${type.name}`">{{type.label}}</a></strong>
        </div>
        <div class="mb-4">
            <img :src="getChartIcon(type.name)" style="width:60px; height: 60px;" />
        </div>
    </div>
</div>

## Início rápido: criando a primeira visualização

## Configurações comuns a todas as visualizações

## Configurando os eixos e dimensões da visualização

## A área da visualização

## Opções de formatação

## Conceitos avançados
### Criando subgráficos 
### Criando animações em gráficos
### Exportação para o _Dash_


## Visualizações disponíveis
- [Linhas](line)
- [Barras](bar)
- [Barras Empilhadas](stacked-bar)
- [Barras Horizontais](horizontal-bar)
- [Barras Horizontais Empilhadas](stacked-horizontal-bar)
- [Área empilhado](stacked-area)
- [Área empilhado 100%](stacked-area-100)
- [Pizza](pie)
- [Rosca (Donut)](donut)
- [Indicador](indicator)
- [Box plot](boxplot)
- [Bolhas](bubble)
- [Dispersão](scatter)
- [Mapa de pontos](scattermapbox)
- [Mapa em Árvore (Treemap)](treemap)
- [Gráfico de Hierarquias](sunburst)
- [Nuvem de Pontos](pointcloud)
- [Gráfico de Funil](funnel)
- [Violin Plot](violin)
- [Density Heatmap](histogram2d)
- [Coordenadas Paralelas](parcoords)
- [2D Histogram Contour](histogram2dcontour)
- [Mapa de Calor (Heatmap)](heatmap)
