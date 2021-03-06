import React from 'react';
import axios from 'axios';
import BooksCardAdicionar from '../BooksCardAdicionar'

export default class Livros extends React.Component {
    state = {
        Livros: []
    }

    componentDidMount() {
        axios.get(`http://localhost:3001/api/livros/`)
            .then(res => {
            const Livros = res.data;
            this.setState({ Livros });
        })
    }

    render() {
        return (
            <>
                { this.state.Livros.map(Livros => <BooksCardAdicionar titulo={Livros.titulo} capa={Livros.capa} identificador={Livros.id}></BooksCardAdicionar>)}
            </>
        )
    }
}