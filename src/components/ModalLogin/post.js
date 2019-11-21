import React from 'react';
import axios from 'axios';

export default class Posts extends React.Component {
    state = {
        email: '',
        senha: '',
    }
    handleEmail = event => {
        this.setState({ email: event.target.value });
    }
    handleSenha = event => {
        this.setState({ senha: event.target.value });
    }

    Login = event => {
        event.preventDefault();

    const Get = {
        email: this.state.email,
        senha: this.state.senha
    };

    axios.get(`http://localhost:3001/api/users/${this.state.email}`, Get)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }

    render() {
        return (
            <form onSubmit={this.Login}>
                <input type="email" placeholder="Email" onChange={this.handleEmail} autocomplete="off"/>
                <input type="password" placeholder="Senha" onChange={this.handleSenha} autocomplete="off"/>
                <input type="submit" value="Logar"/>
            </form>
        )
    }
}