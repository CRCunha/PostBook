import React from 'react'
import './cardDonation.css'

const CardDonation = () => (
    <div className="cardDonation">
        <div className="leftContent">
            <div className="infos">
                <div className="content">Titulo:</div>
                <div className="content">Numero:</div>
                <div className="content">Email:</div>
                <div className="content">Estado:</div>
            </div>
        </div>
        <div className="rightContent">
            <div className="book"></div>
        </div>
    </div>
)   

export default CardDonation