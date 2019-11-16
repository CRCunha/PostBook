const express = require('express');
const router = express.Router();

const bancoDeDados = require('./bancoDeDados');

// CADASTRA UM NOVA DOAÇÃO
router.post('/', (request, response) => {
    let titulo = request.body.titulo;
    let numero = request.body.numero;
    let estado = request.body.estado;
    let nome = request.body.nome;
    let capa = request.body.capa;
    if (titulo && numero && estado && nome && capa) {
        bancoDeDados.conexao.query(`insert into Donations (titulo, numero, estado, nome, capa) values ('${titulo}', '${numero}', '${estado}', '${nome}','${capa}')`, (erro, resposta) => {
            if (!erro)
                response.status(200).json({ Resposta: resposta });
            else
                response.status(400).json({ Erro: erro }).send();
        });
    } else
response.status(404).send( 'Erro na validação dos campos!');
});

// RETORNA TODAS AS DOAÇÕES
router.get('/', (request, response) => {

    bancoDeDados.conexao.query(`select * from Donations Order By id DESC`, (erro, resultado) => {
        if (!erro) {
            response.status(200).json(resultado);
        }
        else {
            response.status(400).json({ erro: erro });
        }
    }); 
});

// DELETE UMA DOAÇÃO
router.delete('/:id', (request, response) => {
    let id = request.params.id;

    bancoDeDados.conexao.query(`delete from Donations where '${id}' = id`, (erro, resultado) => {
        if (!erro) {
            response.status(200).json(resultado);
        }
        else {
            response.status(400).json({ erro: erro });
        }
    });
});

module.exports = (api) => api.use('/api/donation', router);