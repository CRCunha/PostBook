import React from 'react'
import './perfil.css'
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import LogOut from './IMG/logout.png'

const logged = () => (
    <>
        <div className="perfil">
            <div className="containerPerfil">
                <div className="containers" id="avatar" >
                    <div className="containerComponent">
                        <TextField id="standard-basic" fullWidth label="Avatar:" />
                        <button>Enviar</button>
                    </div>
                </div>
                <div className="containers" id="email" >
                    <div className="containerComponent">
                        <TextField id="standard-basic" fullWidth label="Email:" />
                        <button>Enviar</button>
                    </div>
                </div>
                <div className="containers" id="senha" >
                    <div className="containerComponent">
                        <TextField id="standard-basic"  fullWidth label="Senha:" />
                        <button>Enviar</button>
                    </div>
                </div>
                <div className="containers" id="name" >
                    <div className="containerComponent">
                        <TextField id="standard-basic" fullWidth label="Nome:" color='green' />
                        <button>Enviar</button>
                    </div>
                </div>
            </div>
            <Fab className="logout" color="primary" aria-label="add">
                <img src={LogOut} alt="logout" />
            </Fab>
        </div>
    </>
)

export default logged;
