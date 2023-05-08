import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Lemonade",
  description: "Uma ferramenta....",
  lastUpdated: true,
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
            text: 'Guia do Usuário',
            collapsed: true,
            items: [
              { text: 'Funcionalidades', link: '/guide/features.md' },
              {
                text: 'Início rápido', link: '/guide/quick-start.md',
                items: [
                  { text: 'Página inicial', link: '' },
                  { text: 'Criando uma fonte de dados', link: '' },
                  { text: 'Criando um experimento', link: '' },
                  { text: 'Próximos passos', link: '' },
                ]
              },
              { text: 'Interface de usuário', link: '/guide/concepts/user-interface.md' },
              { text: 'Conceitos', link: '/guide/concepts/' },
              { text: 'Utilizando dados', link: '/guide/data-sources/' },
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
            ]
          },
          {
            text: 'Instalação e Administração',
            collapsed: true,
            items: [
              { text: 'Métodos de instalação', link: '/guide/install/' },
              { text: 'Escalabilidade', link: '/guide/install/scalling.md' },
              { text: 'Utilização em nuvem', link: '/guide/install/cloud-install.md' },
              { text: 'Integração com outros produtos', link: '/guide/workflows/' },
              { text: 'Segurança', link: '/guide/install/security.md' },
              { text: 'Configuração geral', link: '/guide/install/configuration.md' },
            ]
          },
          {
            text: 'Implantação de artefatos',
            collapsed: true,
            items: [
              { text: 'MLOps', link: '/guide/tutorials/mlops.md' },
              { text: 'Implantação de modelos', link: '/guide/tutorials/basic.md' },
              { text: 'Implantação de dashboards', link: '/guide/tutorials/advanced.md' },
            ]
          },
          {
            text: 'Tutoriais',
            collapsed: true,
            items: [
              { text: 'Básicos', link: '/guide/tutorials/basic.md' },
              { text: 'Avançados', link: '/guide/tutorials/advanced.md' },
            ]
          },
          {
            text: 'Desenvolvimento',
            collapsed: true,
            items: [
              { text: 'Conceitos', link: '/guide/dev/' },
              { text: 'Serviços', link: '/guide/dev/services.md' },
              { text: 'Utilitários', link: '/guide/dev/utilities.md' },
              { text: 'API REST dos serviços', link: '/guide/dev/api-rest.md' },
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
    logo: 'lemonade_logo.svg',
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
