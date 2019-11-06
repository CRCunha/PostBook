import React from 'react'
import './perfilLoginRegister.css'
import ModalRegister from '../ModalRegister'

class PerfilLoginRegister extends React.Component {
    constructor(props){
        super(props);
        this.state = {dialog: false};
        this.hideDialog = this.hideDialog.bind(this);
    }
    hideDialog(){
        this.setState({dialog: false})
    }
    showDialog(){
        this.setState({dialog: true})
    }

    render(){
        return(
            <div>
                <div className="btnLogin" id="btn">Login</div>
                <div className="btnRegister" id="btn" onClick={()=>{this.showDialog()}}>Register</div>
                <ModalRegister show={this.state.dialog} close={this.hideDialog} />
            </div>
        )
    }
}

export default PerfilLoginRegister;