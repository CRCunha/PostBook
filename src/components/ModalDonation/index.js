import React from 'react'
import './modalDonation.css'
import CloseIcon from './IMG/close.png'
import Post from './post'

class ModalDonation extends React.Component {
    render(){
        return(
            this.props.show? 
            <div className="modalDonation">
                <div className="containerClose">
                    <div  className="container">
                        <img onClick={()=>{this.props.close()}} src={CloseIcon} alt="close" />
                    </div>
                </div>
                <Post />
            </div> : ''
            
        );
    }
}

export default ModalDonation;