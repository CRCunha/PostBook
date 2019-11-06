import React from 'react'
import './modalRegister.css'
import CloseIcon from './IMG/close.png'
import Post from './post'

class ModalRegister extends React.Component {
    render(){
        return(
            this.props.show? 
            <div className="modalRegister">
                <div className="containerClose">
                    <div  className="container" id="closeBtn">
                        <img onClick={()=>{this.props.close()}} src={CloseIcon} alt="close" />
                    </div>
                </div>
                <Post />
            </div> : ''
            
        );
    }
}

export default ModalRegister;