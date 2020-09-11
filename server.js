const http = require('http'); //importa o http
const app = require('./app'); //requisita o app.js
const port = process.env.PORT || 3000; //armazenar a porta do serviço, pegando pela variavel PORT ou a porta 3000
const server = http.createServer(app); //cria o servidor e recebe os argumentos do app
server.listen(port); //para ouvir a porta em localhost, localhost:3000
