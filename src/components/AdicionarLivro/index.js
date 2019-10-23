import React from 'react'
import './adicionarLivro.css'
import CardLivro from '../CardLivro'
import CardAdicionar from '../CardAdicionar'

const AdicionarLivro = () => (
    <div className="adicionarLivro">
        <div className="container">
            <CardLivro indent="l1" infos='The Clean Coder' />
            <CardLivro indent="l2" infos='UX Design' />
            <CardAdicionar />
        </div>
    </div>
)

export default AdicionarLivro;