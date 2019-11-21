const express = require('express');
const router = express.Router();

const bancoDeDados = require('./bancoDeDados');

// CADASTRA UM NOVO POST
router.post('/', (request, response) => {
    let titulo = request.body.titulo;
    let texto = request.body.texto;
    let tag = request.body.tag;
    
    bancoDeDados.conexao.query(`insert into Posts (titulo, texto, tag) values ('${titulo}', '${texto}', '${tag}')`, (erro, resposta) => {
        if (!erro)
            response.status(200).json({ Resposta: resposta });
        else
            response.status(400).json({ Erro: erro }).send();
    });
});

// RETORNA TODAS OS POSTS
router.get('/', (request, response) => {

    bancoDeDados.conexao.query('SELECT * FROM Posts ORDER BY id DESC', (erro, resultado) => {
        if (!erro) {
            response.status(200).json(resultado);
        }
        else {
            response.status(400).json({ erro: erro });
        }
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

module.exports = (api) => api.use('/api/posts', router);