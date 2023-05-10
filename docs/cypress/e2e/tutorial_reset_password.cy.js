describe('template spec', () => {
    const screenshotOptions = {overwrite: true};
    it('user should log in', () => {
      //cy.visit('http://localhost:8081/reset-password')
      cy.visit('https://dev.lemonade.org.br/reset-password')
      cy.get('[type=email]').type('usuario@lemonade.org.br')
      cy.get('[class=card-wrapper]').screenshot('tutorials/reset-password', screenshotOptions)
      cy.get('[type=email]').clear()
      cy.get('[type=email]').type('waltersf@gmail.com')
      cy.get('[type=submit]').click()
      cy.get('[class=card-wrapper]').screenshot('tutorials/reset-password-result', screenshotOptions)
      cy.writeFile('guide/tutorials/reset-password-tutorial.md', `
<script setup>
import ScriptInfo from "../../components/ScriptInfo.vue";
</script>
# Como reiniciar a senha perdida no Lemonade

Para reiniciar sua senha (uma nova será criada):

1. Navegue até a página http://localhost:8081/auth/login
2. Preenchar o campo <code>Email</code> com __o seu email__.

![Tela de recuperação de senha](../../cypress/screenshots/tutorials/reset-password.png)

4. Click o botão <code>Redefinir</code>.
5. Se o seu email estiver cadatrado, você receberá uma mensagem como na tela a seguir: 
![Resultado recuperação de senha](../../cypress/screenshots/tutorials/reset-password-result.png)

Se seu email não for encontrado, certifique-se de que o digitou corretamente. 
Caso o problema persista, entre em contato com o suporte ou crie uma nova conta.

<script-info spec="${Cypress.spec.name}"/>
`
      )
  
    })
  })