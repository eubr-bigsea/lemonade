# Como escrever a documentação do Lemonade

A documentação do Lemonade é escrita majoritariamente usando o formato [Markdown](https://pt.wikipedia.org/wiki/Markdown).
É usada a ferramenta [VitePress](https://vitepress.dev/), um gerador de _sites_
estáticos (_Static Site Generator_ - SSG, no inglês), projetado para construir _sites_ 
web rápidos e focados em conteúdo. Resumidamente, segundo a sua documentação:

> VitePress lê o conteúdo-fonte 
> escrito em Markdown, aplica um tema a ele e gera páginas HTML estáticas que 
> podem ser facilmente disponibilizadas em qualquer servidor.

No esforço de gerar a documentação e também gerar testes "fim a fim" (_End to End_ - E2E, no inglês), a documentação também pode ser gerada usando a ferramenta de 
testes [Cypress](https://www.cypress.io/). Os testes E2E são escritos na linguagem
Javascript (podem ser escritos também em Typescript) controlam um navegador web
que acessa as páginas do Lemonade, preenche formulários, clica em botões e outros 
elementos e captura as telas ou áreas específicas (elementos da página), 
tudo por meio de comandos da API do Cypress. 

Nos testes, também é gerado um arquivo no formato Markdown, 
cujo conteúdo é definido pelo autor do teste. Esses arquivos gerados não devem
ser editados diretamente, pois podem ser sobrescritos pelos testes. Na maior parte dos
casos, os documentos gerados são aqueles relacionados aos tutoriais do Lemonade.

## Obtendo o código-fonte da documentação
O código-fonte da documentação do Lemoande está disponível no Github, no projeto https://github.com/eubr-bigsea/lemonade. Antes de tudo, você tem que ter o cliente
git instalado e configurado na sua máquina. Você pode clonar o repositório com o comando:

```
$ git clone git@github.com:eubr-bigsea/lemonade.git
```
Atualmente, a documentação está sendo reescrita. A versão mais atual está no _branch_
`doc-2023`. Para alterar para esse _branch_, execute o comando em uma janela de comandos (_shell_):

```
$ git switch doc-2023
```

A documentação está debaixo do diretório `lemonade/docs`. Altere o diretório para 
o recém-criado diretório `lemonade`:

```
$ cd lemonade
```

## Instalando as dependências
Tanto o VitePress, quanto o Cypress, precisam do [Node.js](https://nodejs.org/)instalado. Veja a documentação de instalação do Node.js para seu sistema operacional.
A instalação de uma das versões mais recentes (acima da 16) deve atender aos requisitos das ferramentas. 

Após instalar o Node.js, instale as ferramentas pelo comando

```
$ npm install
```
::: warning Dependências do Cypress
O Cypress requer que alguns pacotes sejam instalados no sistema operacional.
Veja a documentação em 
https://docs.cypress.io/guides/getting-started/installing-cypress#Linux-Prerequisites.

Dependendo do seu sistema operacional e da sua configuração, podem ser necessários
centenas de MBs em disco para a instalação das dependências.
:::

A última coisa a fazer para o Cypress é instalar a interface gráfica: 

```
$ npx cypress install
```

Se tudo estiver certo, as ferramentas estarão instaladas. Em caso de erro, 
consulte a documentação específica de cada uma sobre a instalação:
- VitePress: https://vitepress.dev/guide/getting-started
- Cypress: https://docs.cypress.io/guides/getting-started/installing-cypress

## Organização do projeto de documentação
O projeto de documentação do Lemonade usa a seguinte estrutura de diretórios:

```text:line-numbers
/
├─ docs
│  ├─ .vitepress
│  │  ├─ cache
│  │  ├─ theme
│  │  └─ config.js
│  ├─ components
│  │  ├─ ...
│  │  └─ ScriptInfo.vue
│  ├─ cypress
│  │  ├─ e2e
│  │  ├─ fixtures
│  │  ├─ screenshots
│  │  └─ support
│  ├─ guide
│  │  ├─ admin
│  │  ├─ apps
│  │  ├─ ...
│  │  ├─ tutorials
│  │  └─ workflows
│  ├─ team.md
│  └─ index.md
├─ package.json
└─ .gitignore

```
Esta estrutura é derivada da estrutura de diretórios proposta pelo VitePress, 
quando o projeto da documentação foi iniciado.

Os documentos estão organizados debaixo da pasta `docs`, que por sua vez tem os 
subdiretórios: `.vitepress`, `components`, `cypress`, `en` e `guide` e os arquivos
que ficam na raiz da documentação, como o `index.md`. 

No diretório `.vitepress`, existe o arquivo
`config.js`, onde você pode configurar vários aspectos da ferramenta, tais como 
os idiomas suportados, o tema a ser usado, a estrutura do menu lateral (_sidebar_)
e do menu superior (_navbar_), entre outras opções. Há ainda a pasta `theme`, 
que permite personalizar ainda mais o tema aplicado à documentação e o diretório `cache`, que é usado internamente pela ferramenta. Consulte a documentação do
VitePress para mais detalhes.

No diretório `components`, ficam os componentes desenvolvidos em 
[Vue.js](https://vuejs.org/), que podem ser usados nas páginas.  O diretório 
`cypress` tem os artefatos dessa ferramenta (discutidos mais adiante). O diretório
`en` contém a documentação no idioma inglês (a ser escrita) e por fim, o diretório
`guide`, onde está organizada a estrutura da documentação do Lemonade e contém
a maior parte dos documentos.

## Executando o VitePress

Para visualizar a documentação, você tem que executar (iniciar) o servidor de 
desenvolvimento do VitePress. Na linha de comando e estando no diretório raiz 
da documentação (o que tem, entre outros, o arquivo `package.json`),

execute o comando:

```
$ npm run docs:dev
```

Abra um navegador web e digite o endereço http://localhost:5173/. A página incial
da documentação será apresentado.

## Editando os documentos Markdown
Para editar os documentos Markdown, recomenda-se algum editor de texto capaz de 
editar o texto e exibi-lo com algum tipo de coloração de sintaxe (_syntax hightlighting_). O [VSCode](https://code.visualstudio.com/) funciona muito bem 
para esse fim.


## Criando testes, tutoriais e documentação com o Cypress (avançado)

Para criar os testes, tutoriais e documentação com o Cypress, antes de tudo, 
é necessário que você saiba usar a ferramenta. Leia a documentação e faça alguns
testes, especificamente a parte de teste E2E.

Quando julgar capacitado, você pode começar a entender o uso do Cypress no 
contexto da documentação do Lemonade. Veja algum dos exemplos que está na pasta 
`/cypress/e2e`. Um dos exemplos mais simples é o que faz o _login_ no Lemonade:

```js:line-numbers

describe('template spec', () => {
  it('user should log in', () => {
    cy.visit('http://localhost:8081/auth/login')
    cy.get('[name=username').type('admin@lemonade.org.br')
    cy.get('[name=password').type('123456')
    cy.get('[class=card-wrapper]').screenshot('tutorials/filled-login-form')
    cy.get('[name=login]').click()
    cy.writeFile('guide/tutorials/login-tutorial.md', `
<script setup>
import ScriptInfo from "../../components/ScriptInfo.vue";
</script>
# Como se autenticar no Lemonade (login)

Para se autenticar no Lemonade:

1. Navegue até a página http://localhost:8081/auth/login
2. Preenchar o campo <code>Email / Login do Usuário</code> com o valor _admin@lemonade.org.br_.
3. Preenchar o campo <code>Senha</code> com o valor _123456_.

![Tela de login](../../cypress/screenshots/tutorials/filled-login-form.png)

4. Click o botão <code>Entrar</code>.
5. Você deverá ser autenticado e encaminhado para a página inicial do Lemonade. 

Caso o login de usuário ou a senha estejam incorretos, um aviso será exibido. 
Se você não se lembrar da senha, você pode clicar o link <code>Esqueceu a senha?</code>. 
O Lemonade irá enviar uma mensagem para o email informado, contendo as 
instruções necessárias para você informar uma nova senha.

Se você quer criar um novo usuário, você pode clicar o link <code>Criar conta</code>. 
Novamente, uma mensagem será enviado para o email de cadastro solicitando a 
confirmação. Também é necessário que um administrador do Lemonade autorize 
a criação da nova conta.

<script-info spec="${Cypress.spec.name}"/>
`
    )

  })
})
```
O _script_ Cypress navega até a página `http://localhost:8081/auth/login`, 
preenche os campso de `login` e `senha`, captura uma imagem (_screenshot_) da tela (
mas somente a área do formulário) e clica o botão.
A última parte cria o arquivo Markdown `guide/tutorials/login-tutorial.md`.
Note que o conteúdo do arquivo é montado pelo autor, sabendo que tem que ser 
no formato Markdown e tem que incluir corretamente os caminhos para as imagens
capturadas. A parte final do Markdown usa o componente `ScriptInfo.vue` para 
mostrar um aviso indicando que a página foi gerada e não deve ser editada 
diretamente. 

Para abrir o ambiente gráfico do Cypress, você deve digitar o comando:

```
$ npx cypress open
```
Se for a primeira vez que você abre o Cypress, algumas configurações serão solicitadas.


