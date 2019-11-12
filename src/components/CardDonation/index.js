import React from 'react'
import './cardDonation.css'

const CardDonation = (props) => (
    <div className="cardDonation">
        <div className="leftContent">
            <div className="infos">
                <div className="content">{props.titulo}</div>
                <div className="content">{props.numero}</div>
                <div className="content">{props.email}</div>
                <div className="content">{props.estado}</div>
            </div>
        </div>
        <div className="rightContent">
            <div className="book">
                <img src={props.capa} alt="capa" />
            </div>
        </div>
    </div>
)   

export default CardDonation