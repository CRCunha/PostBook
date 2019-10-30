import React from 'react'
import './cardPostAdicionar.css'
import Add from './IMG/add.png'
import ModalPost from '../ModalPost'

class CardPostAdicionar extends React.Component {
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
                <div className="cardPostAdicionar">
                    <img onClick={()=>{this.showDialog()}} src={Add} alt="Adicionar card" />
                </div>
                <ModalPost show={this.state.dialog} close={this.hideDialog}/>
            </>
        );
    }
}

export default CardPostAdicionar;