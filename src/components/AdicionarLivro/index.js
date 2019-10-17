import React from 'react'
import './adicionarLivro.css'
import IconSearch from './IMG/search.png'
import CardLivro from '../CardLivro'
import CardAdicionar from '../CardAdicionar'

const AdicionarLivro = () => (
    <div className="adicionarLivro">
        <div className="container">
            <div className="searchBar">
                <form action="" method="POST">
                    <input type="text" name="search" id=""/>
                </form>
                <div className="iconSearch">
                    <img src={IconSearch} alt="iconSearch" />
                </div>
            </div>
            <div className="cards">
                <CardLivro title="Titulo1" description="descrição do livro 1"/>
                <CardLivro title="Titulo2" description="descrição do livro 2"/>
                <CardAdicionar />
            </div>
        </div>
    </div>
)

export default AdicionarLivro;