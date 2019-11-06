import React from 'react';
import axios from 'axios';

export default class Posts extends React.Component {
    state = {
        titulo: '',
        texto: '',
        tag: '',
    }

    handleTitle = event => {
        this.setState({ titulo: event.target.value });
    }
    handleTexto = event => {
        this.setState({ texto: event.target.value });
    }
    handleTag = event => {
        this.setState({ tag: event.target.value });
    }

    enviarPost = event => {
        event.preventDefault();

    const Post = {
        titulo: this.state.titulo,
        texto: this.state.texto,
        tag: this.state.tag
    };

    axios.post(`http://localhost:3001/api/posts/`, Post )
        .then(res => {
            console.log(res);
            console.log(res.data);
            document.location.reload(true);
        })
    }

    render() {
        return (
            <form onSubmit={this.enviarPost}>
                
            </form>
        )
    }
}