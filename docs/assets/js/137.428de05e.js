(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{324:function(a,e,r){"use strict";r.r(e);var o=r(28),s=Object(o.a)({},(function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"salvar-dados"}},[a._v("Salvar Dados")]),a._v(" "),r("p",[a._v("A operação Salvar Dados é utilizada para gravar dados que sofreram qualquer tipo de alteração durante o uso da ferramenta em uma nova fonte de dados. Por exemplo, ao excluir uma coluna ou uma linha da base, ela precisa ser salva novamente para que essas alterações sejam preservadas.")]),a._v(" "),r("h3",{attrs:{id:"conectores"}},[a._v("Conectores")]),a._v(" "),r("table",[r("thead",[r("tr",[r("th",[a._v("Entrada")]),a._v(" "),r("th",[a._v("Saída")])])]),a._v(" "),r("tbody",[r("tr",[r("td",[a._v("Dados a serem gravados")]),a._v(" "),r("td",[a._v("Dados que foram gravados no repositório de arquivos")])])])]),a._v(" "),r("h3",{attrs:{id:"tarefa"}},[a._v("Tarefa")]),a._v(" "),r("p",[a._v("Nome da Tarefa")]),a._v(" "),r("h3",{attrs:{id:"aba-execucao"}},[a._v("Aba Execução")]),a._v(" "),r("table",[r("thead",[r("tr",[r("th",[a._v("Parâmetro")]),a._v(" "),r("th",[a._v("Detalhe")])])]),a._v(" "),r("tbody",[r("tr",[r("td",[r("strong",[a._v("Nome da fonte de dados")])]),a._v(" "),r("td",[a._v("Nome da nova fonte de dados que será criada")])]),a._v(" "),r("tr",[r("td",[r("strong",[a._v("Caminho da fonte de dados (relativo ao armazenamento)")])]),a._v(" "),r("td",[a._v("Pasta onde o arquivo será salvo. Caso a pasta não exista, ela será criada")])]),a._v(" "),r("tr",[r("td",[r("strong",[a._v("Armazenamento")])]),a._v(" "),r("td",[a._v("Dispositivo de armazenamento em que o arquivo é salvo")])]),a._v(" "),r("tr",[r("td",[r("strong",[r("a",{attrs:{href:"#formato-de-saida"}},[a._v("Formato de Saída")])])]),a._v(" "),r("td",[a._v("Formato a ser utilizado para escrita.")])]),a._v(" "),r("tr",[r("td",[r("strong",[a._v("Tags")])]),a._v(" "),r("td",[a._v("Etiquetas atribuídas a base")])]),a._v(" "),r("tr",[r("td",[r("strong",[r("a",{attrs:{href:"#modo-para-sobrescrita"}},[a._v("Modo para sobrescrita")])])]),a._v(" "),r("td")]),a._v(" "),r("tr",[r("td",[r("strong",[a._v("Aramzenamento")])]),a._v(" "),r("td",[a._v("Ação a ser realizada se o arquivo já existe")])]),a._v(" "),r("tr",[r("td",[r("strong",[a._v("Salvar cabeçalho")])]),a._v(" "),r("td",[a._v("Salva o cabeçalho, se o formato for CSV")])])])]),a._v(" "),r("p",[r("RouterLink",{attrs:{to:"/pt-br/spark/documentacao-geral/aba-aparencia.html"}},[a._v("Aba Aparência")])],1),a._v(" "),r("h2",{attrs:{id:"definicoes"}},[a._v("Definições")]),a._v(" "),r("h3",{attrs:{id:"formato-de-saida"}},[a._v("Formato de saída")]),a._v(" "),r("p",[a._v("O arquivo pode ter três formatos de saída:")]),a._v(" "),r("ol",[r("li",[a._v("Arquivo de dados "),r("a",{attrs:{href:"https://pt.wikipedia.org/wiki/Comma-separated_values",target:"_blank",rel:"noopener noreferrer"}},[a._v("CSV"),r("OutboundLink")],1),a._v(" (separado por vírgulas).")]),a._v(" "),r("li",[a._v("Arquivo de dados "),r("a",{attrs:{href:"https://pt.wikipedia.org/wiki/JSON",target:"_blank",rel:"noopener noreferrer"}},[a._v("JSON"),r("OutboundLink")],1),a._v(".")]),a._v(" "),r("li",[a._v("Arquivo de dados Parquet.")])]),a._v(" "),r("h3",{attrs:{id:"modo-para-sobrescrita"}},[a._v("Modo para sobrescrita")]),a._v(" "),r("p",[a._v("Existem quatro ações que podem ser tomadas quando salvamos um arquivo com um nome de um arquivo já existente:")]),a._v(" "),r("ol",[r("li",[a._v("Acrescentar dados ao arquivo existente.")]),a._v(" "),r("li",[a._v("Não sobrescrever, gerar erro: nesse caso, o arquivo não é salvo.")]),a._v(" "),r("li",[a._v("Ignorar se existir: nesse caso, o arquivo não é salvo.")]),a._v(" "),r("li",[a._v("Sobrescrever se existir: nesse caso, o arquivo original é perdido.")])]),a._v(" "),r("h2",{attrs:{id:"exemplo-de-utilizacao"}},[a._v("Exemplo de Utilização")]),a._v(" "),r("p",[r("strong",[a._v("Objetivo:")]),a._v("  modificar uma base de dados e gravar sua nova versão."),r("br"),a._v(" "),r("strong",[a._v("Base de Dados:")]),a._v(" "),r("RouterLink",{attrs:{to:"/pt-br/spark/base-de-dados/#titanic"}},[a._v("Titanic")])],1),a._v(" "),r("p",[r("img",{attrs:{src:"/img/spark/entrada_e_saida/salvar_dados/image6.png",alt:"Ler dados"}})]),a._v(" "),r("ol",[r("li",[r("p",[a._v("Adicione uma base de dados por meio da operação "),r("RouterLink",{attrs:{to:"/pt-br/spark/entrada-e-saida/ler-dados.html"}},[a._v("Ler dados")]),a._v(". "),r("br"),a._v(" "),r("img",{attrs:{src:"/img/spark/entrada_e_saida/salvar_dados/image7.png",alt:"Tabela - Ler dados"}})],1)]),a._v(" "),r("li",[r("p",[a._v("Use a operação "),r("RouterLink",{attrs:{to:"/pt-br/spark/manipulacao-de-dados/selecionar-atributos.html"}},[a._v("Selecionar atributos")]),a._v(", selecione os atributos "),r("em",[a._v("“class”")]),a._v(", "),r("em",[a._v("“survived”")]),a._v(", "),r("em",[a._v("“name”")]),a._v(", "),r("em",[a._v("“sex”")]),a._v(" e "),r("em",[a._v("“age”")]),a._v(", que denotam, respectivamente, a classe do passageiro, se sobreviveu ou não ao desastre, seu nome, seu gênero e sua idade."),r("br"),a._v(" "),r("img",{attrs:{src:"/img/spark/entrada_e_saida/salvar_dados/image8.png",alt:"Selecionar Atributos"}})],1)]),a._v(" "),r("li",[r("p",[a._v("Use a operação "),r("strong",[a._v("Salvar Dados")]),a._v(", salve a base de dados resultante na ferramenta, com os seguintes parâmetros:"),r("br"),a._v(" "),r("img",{attrs:{src:"/img/spark/entrada_e_saida/salvar_dados/image4.png",alt:"Salvar Dados"}})])]),a._v(" "),r("li",[r("p",[a._v("Note que a base de dados que continha diversos atributos (10) foi transformada e salva como uma base de 5 atributos. Durante o processo de gravação, o arquivo salvo foi o CSV."),r("br"),a._v("\nA base lida originalmente foi:\n"),r("img",{attrs:{src:"/img/spark/entrada_e_saida/salvar_dados/image3.png",alt:"Base lida"}})]),a._v(" "),r("p",[a._v("A base que foi escrita:"),r("br"),a._v(" "),r("img",{attrs:{src:"/img/spark/entrada_e_saida/salvar_dados/image5.png",alt:"Base escrita"}}),r("br"),a._v(" "),r("img",{attrs:{src:"/img/spark/entrada_e_saida/salvar_dados/image1.png",alt:"Atributos da base escrita"}})]),a._v(" "),r("ul",[r("li",[a._v("Para baixar a base salva, clique no ícone\n"),r("img",{attrs:{src:"/img/spark/entrada_e_saida/salvar_dados/image2.png",alt:"Ícone"}}),a._v("\nno menu  Bases de Dados.")]),a._v(" "),r("li",[a._v("É importante inferir o esquema da nova base.")])])])]),a._v(" "),r("hr"),a._v(" "),r("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])}),[],!1,null,null,null);e.default=s.exports}}]);