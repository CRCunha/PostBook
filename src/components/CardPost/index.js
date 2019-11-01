import React from 'react'
import "./cardPost.css"

const CardPost = (props) => (
    <div className="cardPost" id={props.identificador}>
        <div className="cardHeader">
            <div className="containerC">
                <div className="tag" id={props.tag}>{props.tag}</div>
                <div className="data">{props.data}</div>
            </div>
        </div>
        <div className="title">
            <div className="container">{props.titulo}</div>
        </div>
        <div className="texto">
            <div className="container">{props.text}</div>
        </div>
    </div>
);

export default CardPost