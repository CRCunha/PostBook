import React from 'react'
import './modalPost.css'
import CloseIcon from './IMG/close.png'
import Post from './post'

class ModalPost extends React.Component {
    render(){
        return(
            this.props.show? 
            <div className="modalPost">
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

export default ModalPost;