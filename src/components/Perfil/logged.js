import React from 'react'
import './perfil.css'
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import LogOut from './IMG/logout.png'
import Button from '@material-ui/core/Button';

export default class logged extends React.Component{

    handleCookies = () => {
        document.cookie  = ''
        window.location = 'http://localhost:3000/perfil'
    }

    render() {
        return(
        <div className="perfil">
            <div className="containerPerfil">
                <div className="containers" id="avatar" >
                    <div className="containerComponent">
                        <TextField autoComplete='off' id="standard-basic" fullWidth label="Avatar:" />
                        <Button variant="outlined">Enviar</Button>
                    </div>
                </div>
                <div className="containers" id="email" >
                    <div className="containerComponent">
                        <TextField autoComplete='off' id="standard-basic" fullWidth label="Email:" />
                        <Button variant="outlined">Enviar</Button>
                    </div>
                </div>
                <div className="containers" id="senha" >
                    <div className="containerComponent">
                        <TextField autoComplete='off' id="standard-basic"  fullWidth label="Senha:" />
                        <Button variant="outlined">Enviar</Button>
                    </div>
                </div>
                <div className="containers" id="name" >
                    <div className="containerComponent">
                        <TextField autoComplete='off' id="standard-basic" fullWidth label="Nome:" color='green' />
                        <Button variant="outlined">Enviar</Button>
                    </div>
                </div>
            </div>
            <Fab className="logout" color="primary" aria-label="add">
                <img src={LogOut} alt="logout" onClick={this.handleCookies} />
            </Fab>
        </div>
        )
    }   
}
