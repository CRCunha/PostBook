import React from 'react'
import './cardUsers.css'

const CardUsers = (props) => (
    <div className="cardUsers">
        <div className="avatar">
            <img src={props.avatar} alt="avatar" />
        </div>
        <div className="nome">Welcome {props.nome}</div>
    </div>
);

export default CardUsers;