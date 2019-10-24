import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        titulo: '',
        capa: '',
    }

    handleTitle = event => {
        this.setState({ titulo: event.target.value });
    }
    handleCapa = event => {
        this.setState({ capa: event.target.value });
    }

    cadastrarLivro = event => {
        event.preventDefault();

    const livro = {
        titulo: this.state.titulo,
        capa: this.state.capa
    };

    axios.post(`http://localhost:3001/api/livros/`,  livro )
        .then(res => {
            console.log(res);
            console.log(res.data);
            document.location.reload(true);
        })
    }

    render() {
        return (
            <form onSubmit={this.cadastrarLivro}>
                <input type="text" name="titulo" placeholder="Titulo" autoComplete="off" onChange={this.handleTitle}/>
                <input type="text" name="capa" placeholder="Capa" autoComplete="off" onChange={this.handleCapa}/>
                <input type="submit" name="enviar" value="Enviar"/>
            </form>
        )
    }
}