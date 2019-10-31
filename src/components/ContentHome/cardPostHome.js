import React from 'react'
import './cardPostHome.css'

const CardPostHome = (props) => (
    <div className="cardPostHome">
        <div className="tag" id={props.tag}>{props.tag}</div>
        <div className="texto">{props.text}</div>
    </div>
);

export default CardPostHome;