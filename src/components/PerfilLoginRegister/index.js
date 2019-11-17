import React from 'react'
import './perfilLoginRegister.css'
import ModalRegister from '../ModalRegister'
import ModalLogin from '../ModalLogin'

class PerfilLoginRegister extends React.Component {
    constructor(props){
        super(props);
        this.state = {dialog: false};
        this.hideDialogReg = this.hideDialogReg.bind(this);
        this.hideDialogLog = this.hideDialogLog.bind(this);
    }
    hideDialogReg(){
        this.setState({dialogReg: false})
    }
    showDialogReg(){
        this.setState({dialogReg: true})
    }

    hideDialogLog(){
        this.setState({dialogLog: false})
    }
    showDialogLog(){
        this.setState({dialogLog: true})
    }


    render(){
        return(
            <div>
                <div className="btnLogin" id="btn" onClick={()=>{this.showDialogLog()}}>Login</div>
                <div className="btnRegister" id="btn" onClick={()=>{this.showDialogReg()}}>Register</div>
                <ModalRegister show={this.state.dialogReg} close={this.hideDialogReg} />
                <ModalLogin show={this.state.dialogLog} close={this.hideDialogLog}/>
            </div>
        )
    }
}

export default PerfilLoginRegister;