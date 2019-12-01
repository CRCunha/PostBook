import React from 'react';
import axios from 'axios';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
export default class Posts extends React.Component {
    state = {
        email: '',
        senha: '',
        nome: 'Teste',
    }

    handleEmail = event => {
        this.setState({ email: event.target.value });
    }
    
    handleSenha = event => {
        this.setState({ senha: event.target.value });
    }

    handleLogin = event => {
        this.setState({nome: this.state.email})
        console.log(this.state.nome)
    }

    Login = event => {
        event.preventDefault();

        document.cookie = 'isLogged';

    const Post = {
        email: this.state.email,
        senha: this.state.senha
    }

    axios.post(`http://localhost:3001/api/users/${this.state.email}`, Post)
        .then(res => {
            console.log(res.data)
        })
        window.location.reload()
    }

    render() {
        return (
            <>
                <form onSubmit={this.Login}>
                    <TextField  type="email" autoComplete='off' className='input' id="standard-basic" label="Email"  onChange={this.handleEmail}/>
                    <TextField  type="password" autoComplete='off' className='input' id="standard-basic" label="Senha"  onChange={this.handleSenha}/>
                    <Button type="submit" className="buttonSubmit" variant="outlined" >Enviar</Button>
                </form>
            </>
        )
    }
}