import React from 'react';
import axios from 'axios';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
export default class Posts extends React.Component {
    state = {
        nome: '',
        email: '',
        senha: '',
    }

    handleNome = event => {
        this.setState({ nome: event.target.value });
    }
    handleEmail = event => {
        this.setState({ email: event.target.value });
    }
    handleSenha = event => {
        this.setState({ senha: event.target.value });
    }

    enviarPost = event => {
        event.preventDefault();

    const Post = {
        nome: this.state.nome,
        email: this.state.email,
        senha: this.state.senha
    };

    axios.post(`http://localhost:3001/api/users/`, Post )
        .then(res => {
            console.log(res);
            console.log(res.data);
            document.location.reload(true);
        })
    }

    render() {
        return (
            <form onSubmit={this.enviarPost}>
                <TextField  type="text" autoComplete='off' className='input' id="standard-basic" label="Nome"  onChange={this.handleNome}/>
                <TextField  type="email" autoComplete='off' className='input' id="standard-basic" label="Email"  onChange={this.handleEmail}/>
                <TextField  type="password" autoComplete='off' className='input' id="standard-basic" label="Senha"  onChange={this.handleSenha}/>
                <Button type="submit" className="buttonSubmit" variant="outlined" >Enviar</Button>
            </form>
        )
    }
}