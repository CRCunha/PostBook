import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        titulo: '',
        capa: '',
        tag: ''
    }

    handleTitle = event => {
        this.setState({ titulo: event.target.value });
    }
    handleCapa = event => {
        this.setState({ capa: event.target.value });
    }
    handleTag = event => {
        this.setState({ tag: event.target.value });
    }

    cadastrarLivro = event => {
        event.preventDefault();

    const livro = {
        titulo: this.state.titulo,
        capa: this.state.capa,
        tag: this.state.tag
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
                <select placeholder="Selecione a Tag do Livro" name="tag" onChange={this.handleTag}>
                    <option disabled selected value="">Selecione a Tag do Livro</option>
                    <option value="Programação">Programação</option>
                    <option value="Ficção">Ficção</option>
                    <option value="Crônica">Crônica</option>
                    <option value="Romance">Romance</option>
                    <option value="Ação">Ação</option>
                    <option value="Terror">Terror</option>
                    <option value="Ciências">Ciências</option>
                    <option value="Comédia">Comédia</option>
                </select>
                <input type="submit" name="enviar" value="Enviar"/>
            </form>
        )
    }
}