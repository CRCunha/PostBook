import React from 'react'
import './cardDonationAdicionar.css'
import ModalDonation from '../ModalDonation'
import Adicionar from './IMG/add.png'

class CardDonationAdicionar extends React.Component {
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
                <div className="cardDonationAdicionar ">
                    <img onClick={()=>{this.showDialog()}} src={Adicionar} alt="adicionar" />
                </div> 
                <ModalDonation show={this.state.dialog} close={this.hideDialog} />
            </>
        );
    }
}

export default CardDonationAdicionar;