📧 API de Envio de E-mail com Node.js
Uma API robusta e minimalista desenvolvida em Node.js para servir como um microserviço de envio de e-mails. Ideal para conectar seu frontend a um serviço de e-mail de forma segura e desacoplada.

✨ Funcionalidades Principais
📤 Recepção Flexível de Dados: Aceita payloads JSON com todas as informações necessárias para o envio (destinatário, assunto, corpo em texto e HTML, etc.).

🔌 Conexão SMTP Segura: Estabelece uma conexão segura com qualquer servidor de e-mail SMTP, utilizando as melhores práticas de autenticação.

🚀 Envio Simples e Direto: Processa a requisição e realiza o envio do e-mail de forma assíncrona e eficiente.

🔐 Gerenciamento de Credenciais: Utiliza variáveis de ambiente para proteger suas credenciais de e-mail, mantendo-as seguras e fora do código-fonte.

🛠️ Tecnologias Utilizadas
Node.js: Ambiente de execução JavaScript no servidor.

Express.js: Framework para a criação do servidor e gerenciamento de rotas.

Nodemailer: A biblioteca mais popular de Node.js para o envio de e-mails.

Dotenv: Módulo para carregar variáveis de ambiente a partir de um arquivo .env.

🔧 Instalação e Configuração
Siga os passos abaixo para ter a API rodando em seu ambiente local.

Pré-requisitos
Node.js (versão 18 ou superior)

npm ou Yarn

Passo a Passo
Clone o repositório:

git clone https://www.github.com/adalto95/Controla-Estoque.git
cd seu-repositorio


Instale as dependências:

npm install


Configure as variáveis de ambiente: Crie um arquivo chamado .env na raiz do projeto e preencha com as suas credenciais SMTP. Você pode usar o arquivo .env.example (se houver) como base.

# .env - Credenciais do Servidor de E-mail

EMAIL_HOST=smtp.seudominio.com
EMAIL_PORT=587
EMAIL_USER=seu-email@seudominio.com
EMAIL_PASS=sua-senha-de-app-ou-principal


▶️ Como Usar
Com tudo configurado, inicie o servidor com o comando:

npm start


Por padrão, a API estará disponível em http://localhost:3000.

Endpoint de Envio
A API possui um único endpoint para o envio de e-mails:

POST /send-email

Este endpoint recebe um corpo em formato JSON para processar o envio.

Exemplo de Corpo da Requisição
{
  "to": "destinatario@exemplo.com",
  "subject": "Olá da API 👋",
  "text": "Este é o corpo do e-mail em texto simples.",
  "html": "<strong>Este é o corpo do e-mail em HTML.</strong>"
}


to: Endereço de e-mail do destinatário.

subject: Assunto do e-mail.

text: Corpo do e-mail em texto simples (usado como fallback).

html: Corpo do e-mail em formato HTML (renderizado preferencialmente pelos clientes de e-mail).

Respostas da API
✅ Sucesso (200 OK)
Se o e-mail for enviado com sucesso, a API retornará:

{
  "message": "E-mail enviado com sucesso!"
}


❌ Erro (500 Internal Server Error)
Em caso de falha na autenticação ou conexão com o servidor SMTP, a resposta será:

{
  "error": "Falha ao enviar e-mail. Verifique os logs do servidor."
}


🤝 Contribuições
Contribuições são muito bem-vindas! Se você tem alguma ideia para melhorar este projeto, sinta-se à vontade para abrir uma issue para discussão ou um pull request com suas alterações.

Faça um fork do projeto.

Crie uma nova branch (git checkout -b feature/sua-feature).

Faça o commit das suas alterações (git commit -m 'Adiciona nova feature').

Faça o push para a branch (git push origin feature/sua-feature).

Abra um Pull Request.

📝 Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.
