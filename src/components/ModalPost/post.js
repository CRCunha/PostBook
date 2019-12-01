import React from 'react';
import axios from 'axios';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

    handleClose = () => {
        this.setOpen(false);
    };

    handleOpen = () => {
        this.setOpen(true);
    };


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
                <TextField autoComplete='off' className='input' id="standard-basic" label="Titulo"  onChange={this.handleTitle}/>
            
                <Select className='inputSelect' labelId="demo-simple-select-label" id="demo-simple-select" onChange={this.handleTag}>
                    <MenuItem value='book'>Book</MenuItem>
                    <MenuItem value='comment'>Comment</MenuItem>
                    <MenuItem value='other'>Other</MenuItem>
                    <MenuItem value='admin'>Admin</MenuItem>
                </Select>
                
                <TextField autoComplete='off' className='input' id="standard-basic" label="Texto"  onChange={this.handleTexto}/>

                <Button className="buttonSubmit" type="submit" variant="outlined">Enviar</Button>
            </form>
        )
    }
}