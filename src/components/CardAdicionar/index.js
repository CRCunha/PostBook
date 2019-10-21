import React from 'react'
import './cardAdicionar.css'
import AddIcon from './IMG/add.png'
import ModalAdicionar from '../ModalAdicionar'

class CardAdiconar extends React.Component {
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
                <div className="cardAdicionar">
                    <img onClick={()=>{this.showDialog()}} src={AddIcon} alt="addIcon" />
                </div>
                <ModalAdicionar show={this.state.dialog} close={this.hideDialog}/>
            </>
        );
    }
}

export default CardAdiconar;