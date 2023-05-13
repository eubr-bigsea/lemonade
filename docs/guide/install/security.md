# Segurança

## Autenticação

## Usuários, grupos e permissões

## Utilização de HTTPs
É altamente recomendável que você configure o acesso a comunicação dos clientes
com o servidor web do Lemoande com suporte ao protocolo HTTPS. Há duas maneiras 
de fazê-lo:
1. O Lemonade, no seu componente Citrus, traz consigo uma versão do servidor web
Nginx. Você pode configurá-lo para usar um certificado HTTPS.
2. (Recomendável) Use um servidor _proxy_ previamente configurado com suporte a
HTTPS, que simplesmente irá receber as requisições e vai repassá-las para o 
servidor web do Lemonade, mantendo a conexão desde o cliente até o _proxy_ 
criptografada. A comunicação entre o _proxy_ e o servidor web do Lemonade não 
precisa ser critptografada, pois há outras maneiras de garantir a segurança, como
por exemplo, isolando o acesso direto à rede dos servidores e liberando o acesso
somente por meio do _proxy_.


