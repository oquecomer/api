const express = require('express'); //chamando o Express
const app = express();   //criando instancia do express


app.use((req, res, next) => {
    res.status(200).send({
        mensagem: 'Ok, estou ouvindo'
    });
});
//consumindo o método, requisição, resposta e chamar outro metodo

module.exports = app; 