import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Lemonade",
  description: "Uma ferramenta....",
  lastUpdated: true,
  ignoreDeadLinks: 'localhostLinks',
  base: '/publico/dist/',
  locales: {
    en: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        outlineTitle: 'Nesta página',
      }
    },
    root: {
      label: 'Português',
      lang: 'pt',
      themeConfig: {
        outline: { label: 'Nesta página' },
        sidebar: [
          {
            text: 'O que é o Lemonade?', link: '/guide/about.md', collapsed: true,
            items: [
              { text: 'Funcionalidades', link: '/guide/features.md' },
              { text: 'Histórico', link: '/guide/history.md' }
            ],
          },
          {
            text: 'Início rápido', link: '/guide/quick-start/', collapsed: true,
            items: [
              { text: 'Como se autenticar no Lemonade', link: '/guide/tutorials/login-tutorial.html' },
              { text: 'Página inicial', link: '/guide/quick-start/start-page.md' },
              { text: 'Criando uma fonte de dados', link: '/guide/quick-start/creating-data-source.md' },
              { text: 'Tratando os dados da fonte de dados', link: '/guide/quick-start/feature-engineering.md' },
              { text: 'Criando visualizações básicas', link: '/guide/quick-start/creating-visualizations.md' },
              { text: 'Criando um modelo de classificação', link: '/guide/quick-start/creating-model.md' },
              { text: 'Criando um fluxo de trabalho', link: '/guide/quick-start/basic-workflow.md' },
              { text: 'Próximos passos', link: '/guide/quick-start/next-steps.md' },
            ]
          },
          {
            text: 'Guia do Usuário',
            collapsed: true,
            items: [
              { text: 'Interface de usuário', link: '/guide/concepts/user-interface.md' },
              { text: 'Conceitos', link: '/guide/concepts/' },
              {
                text: 'Registrando-se no Lemonade', 
                items: [
                  {text: 'Criando um usuário', link: '/guide/register/user.md'},
                  {text: 'Perfil de usuário', link: '/guide/register/profile.md'},
                ]
              },
              {
                text: 'Utilizando dados', link: '/guide/data-sources/',
                items: [
                  {text: 'Fontes de Dados', link: '/guide/data-sources/data-sources.md'},
                  {text: 'Armazenamentos', link: '/guide/data-sources/storages.md'},
                ]
              },
              {
                text: 'Criando experimentos', link: '/guide/experiments/',
                collapsed: true,
                items: [
                  { text: 'Explorar e analisar dados', link: '/guide/experiments/data-explorer/' },
                  { text: 'Criar visualizações de dados', link: '/guide/experiments/visualization-builder/' },
                  { text: 'Criar modelos de aprendizado de máquina', link: '/guide/experiments/model-builder/' }
                ]
              },
              { text: 'Fluxos de trabalho', link: '/guide/workflows/' },
              { text: 'Dashboards', link: '/guide/dashboards/' },
              { text: 'Paineis interativos', link: '/guide/apps/' },
              { text: 'Gestão de modelos de aprendizado de máquina', link: '/guide/models/' },
            ]
          },
          {
            text: 'Instalação e Administração',
            collapsed: true,
            items: [
              { text: 'Métodos de instalação', link: '/guide/install/' },
              { text: 'Escalabilidade', link: '/guide/install/scalling.md' },
              { text: 'Utilização em nuvem', link: '/guide/install/cloud-install.md' },
              { text: 'Integração com outros produtos', link: '/guide/install/integration.md' },
              { text: 'Segurança', link: '/guide/install/security.md' },
              { text: 'Configuração', link: '/guide/admin/configuration.md' },
              { text: 'Executores de rotinas', link: '/guide/admin/background-jobs.md' },
            ]
          },
          {
            text: 'Implantação de artefatos',
            collapsed: true,
            items: [
              { text: 'MLOps', link: '/guide/deploy/mlops.md' },
              { text: 'Implantação de modelos', link: '/guide/deploy/models-deployment.md' },
              { text: 'Implantação de dashboards', link: '/guide/deploy/dashboards-deployment.md' },
            ]
          },
          {
            text: 'Desenvolvimento', link: "/guide/dev/index.md",
            collapsed: true,
            items: [
              { text: 'Pré-requisitos', link: '/guide/dev/requirements.md' },
              { text: 'Conceitos', link: '/guide/dev/concepts.md' },
              { text: 'Serviços', link: '/guide/dev/services.md' },
              { text: 'Utilitários', link: '/guide/dev/utilities.md' },
              { text: 'API REST dos serviços', link: '/guide/dev/api-rest.md' },
              { text: 'Como escrever a documentação do Lemonade', link: '/guide/dev/writing-documentation.md' },
            ]
          },
          {
            text: 'Tutoriais',
            collapsed: true,
            items: [
              {
                text: 'Básicos', link: '/guide/tutorials/basic.md',
              },
              { text: 'Avançados', link: '/guide/tutorials/advanced.md' },
            ]
          },
          {
            text: 'Outras informações',
            collapsed: true,
            items: [
              { text: 'Notas de lançamento', link: '/guide/other/release-notes.md' },
              { text: 'Equipe', link: '/team.md' },
              { text: 'Agradecimentos', link: '/guide/other/thanks.md' },
            ]
          },
          {
            text: 'Guia de referência',
            collapsed: true,
            items: [
              { text: 'Operações', link: '/guide/reference/operations.md' },
              { text: 'Funções de transformação', link: '/guide/reference/functions.md' },
            ]
          }
        ]
      }
    }
  },
  themeConfig: {
    siteTitle: false,
    logo: '/guide/lemonade_logo.svg',
    /*locales: {
      '/': {
        selectLanguageText: 'Idioma:',
        nav: [
          { text: 'Página Inicial', link: '/' },
          { text: 'Sobre', link: '/sobre/' },
          { text: 'Contato', link: '/contato/' }
        ]
      },
      '/en/': {
        selectLanguageText: 'Language:',
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'About', link: '/en/about/' },
          { text: 'Contact', link: '/en/contact/' }
        ]
      }
    },*/
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      //{ text: 'Início', link: '/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/eubr-bigsea/lemonade' }
    ],
    lastUpdatedText: 'Última atualização',
    footer: {
      message: 'Licença Apache.',
      copyright: 'Copyright © 2016-presente Departamento de Ciência da Computação - UFMG/Brasil'
    },
    docFooter: {
      prev: 'Página anterior',
      next: 'Próxima página'
    }
  }
})
