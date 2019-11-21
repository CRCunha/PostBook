import React from 'react';
import axios from 'axios';
import CardLivrotHome from './cardLivroHome';

export default class Livros extends React.Component {
    state = {
        Livros: []
    }

    componentDidMount() {
        axios.get(`http://192.168.0.9:3001/api/livros/`)
            .then(res => {
            const Livros = res.data;
            this.setState({ Livros });
        })
    }

    render() {
        return (
            <>
                { this.state.Livros.map(Livros => <CardLivrotHome titulo={Livros.titulo} capa={Livros.capa} identificador={Livros.id}></CardLivrotHome>)}
            </>
        )
    }
}