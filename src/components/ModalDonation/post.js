import React from 'react';
import axios from 'axios';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
export default class Posts extends React.Component {
    state = {
        titulo: '',
        numero: '',
        estado: '',
        nome: '',
        capa: '',
    }

    handleTitle = event => {
        this.setState({ titulo: event.target.value });
    }
    handleNumero = event => {
        this.setState({ numero: event.target.value });
    }
    handleEstado = event => {
        this.setState({ estado: event.target.value });
    }
    handleNome = event => {
        this.setState({ nome: event.target.value });
    }
    handleCapa = event => {
        this.setState({ capa: event.target.value });
    }

    enviarPost = event => {
        event.preventDefault();

    const Post = {
        titulo: this.state.titulo,
        numero: this.state.numero,
        estado: this.state.estado,
        nome: this.state.nome,
        capa: this.state.capa
    };

    axios.post(`http://localhost:3001/api/donation/`, Post )
        .then(res => {
            console.log(res);
            console.log(res.data);
            document.location.reload(true);
        })
    }

    render() {
        return (
            <form onSubmit={this.enviarPost}>
                <TextField autoComplete='off' className='input' id="standard-basic" label="Titulo"  onChange={this.handleTitle}/>
                <Select className='input' className="inputSelect" labelId="demo-simple-select-label" id="demo-simple-select" onChange={this.handleEstado}>
                    <MenuItem value='Novo'>Novo</MenuItem>
                    <MenuItem value='Usado'>Usado</MenuItem>
                    <MenuItem value='Velho'>Velho</MenuItem>
                </Select>
                <TextField type='number' autoComplete='off' className='input' id="standard-basic" label="Numero"  onChange={this.handleNumero}/>
                <TextField autoComplete='off' className='input' id="standard-basic" label="Nome"  onChange={this.handleNome}/>
                <TextField autoComplete='off' className='input' id="standard-basic" label="Capa"  onChange={this.handleCapa}/>
                <Button className="buttonSubmit" type="submit" variant="outlined">Enviar</Button>
            </form>
        )
    }
}