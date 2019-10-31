import React from 'react'
import './booksCard.css'

const BooksCard = (props) => (
    <div className="booksCard" id={props.identificador}>
        <img src={props.capa} alt="capa" />
    </div>
);

export default BooksCard; 