import React from 'react'
import './booksCard.css'
import Excluir from './IMG/excluir.png'

const BooksCard = (props) => (
    <>
        <div className="booksCard" id={props.identificador}>
            <img src={props.capa} alt="capa" />
            <div className="excluir">
                <img src={Excluir} alt="excluir"  id="excluir"/>
            </div>
        </div>
    </>
);

export default BooksCard; 