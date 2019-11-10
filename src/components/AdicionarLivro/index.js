import React from 'react'
import './adicionarLivro.css'
import ListarLivrosAdicionar from '../ListarLivrosAdicionar'
import CardAdicionar from '../CardAdicionar'

const AdicionarLivro = () => (
    <div className="adicionarLivro">
        <div className="container">
            <CardAdicionar />
            <ListarLivrosAdicionar />
        </div>
    </div>
)

export default AdicionarLivro;