import React from 'react'
import './cardLivro.css'

const CardLivro = (props) => (
    <div className="cardLivro">
        <div className="background" id={props.indent}></div>
        <div className="infos">{props.infos}</div>
    </div>
);

// Fazer divisão para controle de exclusão e edição

export default CardLivro;