import React from 'react'
import './adicionarLivro.css'
import ListarLivros from '../ListarLivros'
import CardAdicionar from '../CardAdicionar'

const AdicionarLivro = () => (
    <div className="adicionarLivro">
        <div className="container">
            <ListarLivros />
            <CardAdicionar />
        </div>
    </div>
)

export default AdicionarLivro;