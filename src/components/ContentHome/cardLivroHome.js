import React from 'react'
import './cardLivroHome.css'

const CardLivrotHome = (props) => (
    <div className="cardLivroHome">
        <div className="capa">
            <img src={props.capa} alt="capa" />
        </div>
        <div className="titulo">{props.titulo}</div>
    </div>
);

export default CardLivrotHome;