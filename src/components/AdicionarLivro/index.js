import React from 'react'
import './adicionarLivro.css'
import CardLivro from '../CardLivro'
import CardAdicionar from '../CardAdicionar'

const AdicionarLivro = () => (
    <div className="adicionarLivro">
        <div className="container">
            <CardLivro />
            <CardLivro />
            <CardAdicionar />
        </div>
    </div>
)

export default AdicionarLivro;