import React from 'react';
import axios from 'axios';
import CardPostHome from './cardPostHome'

export default class Posts extends React.Component {
    state = {
        Posts: []
    }

    componentDidMount() {
        axios.get(`http://localhost:3001/api/posts/`)
            .then(res => {
            const Posts = res.data;
            this.setState({ Posts });
        })
    }

    render() {
        return (
            <>
                { this.state.Posts.map(Posts => <CardPostHome titulo={Posts.titulo} text={Posts.texto} tag={Posts.tag}></CardPostHome>)}
            </>
        )
    }
}