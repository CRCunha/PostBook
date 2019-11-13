/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react'
import './cardDonation.css'

const CardDonation = (props) => (
    <div className="cardDonation">
        <div className="leftContent">
            <div className="infos">
                <div className="content">{props.titulo}</div>
                <div className="content">(53) {props.numero}</div>
                <div className="content">{props.nome}</div>
                <div className="content" className={props.estado}>{props.estado}</div>
            </div>
        </div>
        <div id={props.estado} className="rightContent">
            <div className="book">
                <img src={props.capa} alt="capa" />
            </div>
        </div>
    </div>
)   

export default CardDonation