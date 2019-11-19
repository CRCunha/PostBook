const express = require('express');
const router = express.Router();

const bancoDeDados = require('./bancoDeDados');


// CADASTRA UM NOVO LIVRO
router.post('/', (request, response) => {
    let titulo = request.body.titulo;
    let capa = request.body.capa;
    let tag = request.body.tag;
    if (titulo && capa && tag) {
        bancoDeDados.conexao.query(`insert into Livros (titulo, capa, tag) values (?, ?, ?)`, [titulo, capa, tag],  (erro, resposta) => {
            if (!erro)
                response.status(200).json({ Resposta: resposta });
            else
                response.status(400).json({ Erro: erro }).send();
        });
    } else
response.status(404).send( 'Erro na validação dos campos!');
});

// RETORNA TODAS OS LIVROS
router.get('/', (request, response) => {

    bancoDeDados.conexao.query(`select * from Livros ORDER BY id DESC`, (erro, resultado) => {
        if (!erro) {
            response.status(200).json(resultado);
        }
        else {
            response.status(400).json({ erro: erro });
        }
    }); 
});

// DELETE LIVRO
router.delete('/:id', (request, response) => {
    let id = request.params.id;

    bancoDeDados.conexao.query(`delete from Livros where ? = id`, [id], (erro, resultado) => {
        if (!erro) {
            response.status(200).json(resultado);
        }
        else {
            response.status(400).json({ erro: erro });
        }
    });
});

module.exports = (api) => api.use('/api/livros', router);
