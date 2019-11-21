import React from 'react';
import axios from 'axios';
import CardUsers from '../CardUsers'

export default class Posts extends React.Component {
    state = {
        Posts: []
    }

    componentDidMount() {
        axios.get(`http://192.168.0.9:3001/api/users/`)
            .then(res => {
            const Posts = res.data;
            this.setState({ Posts });
        })
    }

    render() {
        return (
            <>
                { this.state.Posts.map(Posts => <CardUsers nome={Posts.nome} email={Posts.email} avatar={Posts.avatar} identificador={Posts.id}></CardUsers>)}
            </>
        )
    }
}