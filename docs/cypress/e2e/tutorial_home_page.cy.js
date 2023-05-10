describe('template spec', () => {
  it('user should log in and go to Home Page', () => {
    cy.viewport(1366, 900);
    cy.visit('https://dev.lemonade.org.br/auth/login')
    cy.get('[name=username').type('admin@lemonade.org.br')
    cy.get('[name=password').type('123456')
    cy.get('[name=login]').click()
    cy.url().should('includes', '/home');
    cy.get('body').screenshot('tutorials/home-page');

    cy.writeFile('guide/tutorials/home-page-tutorial.md', `
<script setup>
import ScriptInfo from "../../components/ScriptInfo.vue";
</script>
# Entendendo a página principal do Lemonade

Após ter se autenticado no Lemonade, você é encaminhado para a tela principal, 
também chamada de \`Home\`.

![Tela de login](../../cypress/screenshots/tutorials/home-page.png)

A tela principal tem listas ordenadas, 
dos mais recentes para os mais antigos, com os principais artefatos do Lemonade:

- Projetos
- Fontes de dados
- Fluxos de trabalho
- Execuções
- Aplicações
- Dashboards

<script-info spec="${Cypress.spec.name}"/>
`
    )

  })
})