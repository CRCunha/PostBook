import React from 'react';
import axios from 'axios';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
                <TextField autoComplete='off' className='input' id="standard-basic" label="Titulo"  onChange={this.handleTitle}/>
                <TextField autoComplete='off' className='input' id="standard-basic" label="Capa"  onChange={this.handleCapa}/>
                <Select className='inputSelect' labelId="demo-simple-select-label" id="demo-simple-select" onChange={this.handleTag}>
                    <MenuItem value='Programação'>Programação</MenuItem>
                    <MenuItem value='Ficção'>Ficção</MenuItem>
                    <MenuItem value='Crônica'>Crônica</MenuItem>
                    <MenuItem value='Romance'>Romance</MenuItem>
                    <MenuItem value='Ação'>Ação</MenuItem>
                    <MenuItem value='Terror'>Terror</MenuItem>
                    <MenuItem value='Ciências'>Ciências</MenuItem>
                    <MenuItem value='Comédia'>Comédia</MenuItem>
                </Select>
                <Button className="buttonSubmit" type="submit" variant="outlined">Enviar</Button>
            </form>
        )
    }
}