import React from 'react'
import "./cardPost.css"
import axios from 'axios'

export default class CardPost extends React.Component{
    state = {
        id: '',
    }

    handleChange = event => {
        this.setState({ id: event.target.value });
    }
    
    handleSubmit = event => {
        event.preventDefault();

        axios.delete(`http://localhost:3001/api/posts/${this.props.identificador}`)
            .then(res => {
            console.log(res);
            console.log(res.data);
        })
        document.location.reload(true);
    }

    render() {
        return(
            <div className="cardPost" id={this.props.identificador}>
                <div className="cardHeader">
                    <div className="containerC">
                        <div className="tag" id={this.props.tag}>{this.props.tag}</div>
                        <div className="data">{this.props.data}</div>
                    </div>
                </div>
                <div className="title">
                    <div className="container">{this.props.titulo}</div>
                </div>
                <div className="texto">
                    <div className="container">{this.props.text}</div>
                </div>
                <div className="delete">
                    <div className="containerE">
                        <form onSubmit={this.handleSubmit}>
                            <input type="hidden" id="id" name="id" value={this.props.identificador} onChange={this.handleChange} />
                            <input type="submit" name="enviarExcluir" value=""/>                       
                        </form>
                    </div>  
                </div>
            </div>
        )
    }
}
