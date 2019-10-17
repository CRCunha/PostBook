import React from 'react'
import './cardLivro.css'

const CardLivro = (props) => (
    <div className="cardLivro">
        <div className="cardTop">
            <div className="container">
                <div className="icon"></div>
            </div>
        </div>
        <div className="title">
            <div className="container">{props.title}</div>
        </div>
        <div className="infos">
            <div className="container">{props.description}</div>
        </div>
    </div>
);

export default CardLivro;