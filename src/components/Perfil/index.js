import React from 'react'
import './perfil.css'
import Logged from './logged'
import NLogged from './nLogged'

class Perfil extends React.Component{

    render(){
        
        let logged = document.cookie
        let comp;

        console.log(document.cookie)

        if(logged === 'isLogged'){
            comp = <Logged />
        }
        else{
            if(logged !== 'isLogged'){
                comp = <NLogged />
            }
        }

        return(
            comp
        )
    }
}


export default Perfil;