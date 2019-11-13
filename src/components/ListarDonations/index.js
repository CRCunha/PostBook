import React from 'react';
import axios from 'axios';
import CardDonation from '../CardDonation'

export default class Posts extends React.Component {
    state = {
        Posts: []
    }

    componentDidMount() {
        axios.get(`http://localhost:3001/api/donation/`)
            .then(res => {
            const Posts = res.data;
            this.setState({ Posts });
        })
    }

    render() {
        return (
            <>
                { this.state.Posts.map(Posts => <CardDonation titulo={Posts.titulo} numero={Posts.numero} estado={Posts.estado} nome={Posts.nome} capa={Posts.capa} ></CardDonation>)}
            </>
        )
    }
}