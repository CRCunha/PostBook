import React from 'react';
import axios from 'axios';
import BooksCard from '../BooksCard'

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
                { this.state.Livros.map(Livros => <BooksCard titulo={Livros.titulo}></BooksCard>)}
            </>
        )
    }
}