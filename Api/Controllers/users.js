    const express = require('express');
const router = express.Router();

const bancoDeDados = require('./bancoDeDados');

// RETORNA TODAS OS USERS
router.get('/', (request, response) => {

    bancoDeDados.conexao.query('SELECT * FROM Users ORDER BY id DESC', (erro, resultado) => {
        if (!erro) {
            response.status(200).json(resultado);
        }
        else {
            response.status(400).json({ erro: erro });
        }
    }); 
});

// CADASTRA UM NOVO USER
router.post('/', (request, response) => {
    let nome = request.body.nome;
    let email = request.body.email;
    let senha = request.body.senha;
    
    bancoDeDados.conexao.query(`insert into Users (nome, email, senha) values ('${nome}', '${email}', '${senha}')`, (erro, resposta) => {
        if (!erro)
            response.status(200).json({ Resposta: resposta });
        else
            response.status(400).json({ Erro: erro }).send();
    });
});

// DELETE POST
router.delete('/:id', (request, response) => {
    let id = request.params.id;

    bancoDeDados.conexao.query(`delete from Posts where '${id}' = id`, (erro, resultado) => {
        if (!erro) {
            response.status(200).json(resultado);
        }
        else {
            response.status(400).json({ erro: erro });
        }
    });
});

module.exports = (api) => api.use('/api/users', router);