import React from 'react'
import './cardGrupoAdicionar.css'
import ModalGrupo from '../ModalGrupo'
import Add from './IMG/add.png'

class CardGrupoAdicionar extends React.Component {
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
            <>  
                <div className="cardGrupoAdicionar">
                    <img onClick={()=>{this.showDialog()}} src={Add} alt="Adicionar Grupo" />
                </div>
                <ModalGrupo show={this.state.dialog} close={this.hideDialog} />
            </>
        );
    }
}
export default CardGrupoAdicionar