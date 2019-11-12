import React from 'react'
import './booksCard.css'
import axios from 'axios'

export default class BooksCardCardPost extends React.Component{
    state = {
        id: '',
    }

    handleChange = event => {
        this.setState({ id: event.target.value });
    }
    
    handleSubmit = event => {
        event.preventDefault();

        axios.delete(`http://localhost:3001/api/livros/${this.props.identificador}`)
            .then(res => {
            console.log(res);
            console.log(res.data);
        })
        document.location.reload(true);
    }

    render(){
        return(
        <>
            <div className="booksCard" id={this.props.identificador}>
                <img src={this.props.capa} alt="capa" />
                <div className="excluir">
                    <form onSubmit={this.handleSubmit}>
                        <input type="hidden" value={this.props.identificador} onChange={this.handleChange} />
                        <input type="submit" name="enviarExcluir" value=""/> 
                    </form>
                </div>
            </div>
        </>
        )
    }
}
