import React from 'react';
import axios from 'axios';

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
                <input type="text" placeholder="Nome" onChange={this.handleNome} autoComplete="off"/>
                <input type="email" placeholder="Email" onChange={this.handleEmail} autoComplete="off"/>
                <input type="password" placeholder="Senha" onChange={this.handleSenha} autoComplete="off"/>
                <input type="submit" value="Registrar"/>
            </form>
        )
    }
}