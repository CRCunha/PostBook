import React from 'react'
import './perfil.css'

const logged = () => (
    <>
        <div className="perfil">
            <div className="containerPerfil">
                <div className="containers" id="avatar" />
                <div className="containers" id="email" />
                <div className="containers" id="senha" />
                <div className="containers" id="name" />
            </div>
        </div>
    </>
)

export default logged;
