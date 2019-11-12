import React from 'react';
import axios from 'axios';

export default class Posts extends React.Component {
    state = {
        titulo: '',
        numero: '',
        estado: '',
        email: '',
        capa: '',
    }

    handleTitle = event => {
        this.setState({ titulo: event.target.value });
    }
    handleNumero = event => {
        this.setState({ numero: event.target.value });
    }
    handleEstado = event => {
        this.setState({ estado: event.target.value });
    }
    handleEmail = event => {
        this.setState({ email: event.target.value });
    }
    handleCapa = event => {
        this.setState({ capa: event.target.value });
    }

    enviarPost = event => {
        event.preventDefault();

    const Post = {
        titulo: this.state.titulo,
        numero: this.state.numero,
        estado: this.state.estado,
        email: this.state.email,
        capa: this.state.capa
    };

    axios.post(`http://localhost:3001/api/donation/`, Post )
        .then(res => {
            console.log(res);
            console.log(res.data);
            document.location.reload(true);
        })
    }

    render() {
        return (
            <form onSubmit={this.enviarPost}>
                <input type="text" name="titulo" placeholder="Titulo" autoComplete="off" onChange={this.handleTitle}/>
                <select name="estado" onChange={this.handleEstado}>
                    <option disabled selected value="">Selecione o Estado do Livro</option>
                    <option value="Novo">Novo</option>
                    <option value="Usado">Usado</option>
                    <option value="Velo">Velho</option>
                </select>
                <input type="email" name="email" placeholder="Email" autoComplete="off" onChange={this.handleEmail}/>
                <input type="number" name="numero" placeholder="Numero" autoComplete="off" onChange={this.handleNumero}/>
                <input type="text" name="capa" placeholder="Capa" autoComplete="off" onChange={this.handleCapa} />
                <input type="submit" name="enviar" value="Enviar"/>
            </form>
        )
    }
}