const mysql = require('mysql');

let conexao = mysql.createConnection(
    {
        host: 'localhost',
        // port: '81',
        database: 'postbook',
        user: 'root',
        password: '',
        charset: 'utf8'
    });

if (conexao.state != 'authenticated')
    conexao.connect();

module.exports = {
    conexao: conexao
}
