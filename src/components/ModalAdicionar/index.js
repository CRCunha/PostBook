import React from 'react'
import './modalAdicionar.css'
import CloseIcon from './IMG/close.png'
import Post from './post'

class ModalAdicionar extends React.Component {
    render(){
        return(
            this.props.show? 
            <div className="modalAdicionar">
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

export default ModalAdicionar;