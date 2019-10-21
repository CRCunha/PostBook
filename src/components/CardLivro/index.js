import React from 'react'
import './cardLivro.css'

const CardLivro = (props) => (
    <div className="cardLivro">
        <div className="container">
            <div className="cardTitle">{props.title}</div>
            <div className="cardImage">
                <div className="image"></div>
            </div>
        </div>
    </div>
);

export default CardLivro;