import React, { Component } from 'react';
import { MdClose } from 'react-icons/md';
import './addCard.css';

class addCard extends Component {
    render(){
        const style = {
            display: null
        }
        if (this.props.showPopup === true) {
            style.display = 'none';
        }else {
            style.display = null;
        }
        return(
        
        <div className='add-card__container' style={style}>
            <div className="add-card__content">
                <span onClick={this.props.addCard__handler}><MdClose size='1.2em' color='gray'/></span>
                <button onClick={this.props.addCard}>Add New</button>
                <button onClick={this.props.deleteCard.bind(this, 1)}>Delete</button>
                <button onClick={this.props.addCard__handler}> Cancel </button>
            </div>
        </div>
        )
    }
}
    
export default addCard;