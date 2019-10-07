import React, { Component } from 'react';
import home from '../../Images/house.png';
import like from '../../Images/like-1.png';
import placeHolder from '../../Images/placeholder-2.png';
import starkCoreLogo from '../../Images/45134462.png';
import SwButton from './switchButton/switchButton';
import './leftComponent.css';

class LeftComponent extends Component {
    state = {
        images:{starkCoreLogo, home, like, placeHolder}
    }

    render(){
        return(
            <section className='sidebar-component'> 
                <div className="sidebar-component__logo">
                    <img className='sidebar-component__image' alt=''src={starkCoreLogo}></img>
                    <p>Smart Filters</p>
                </div>
                <div className='sidebar-component__switchs'>
                    <SwButton image={this.state.images.home}/>
                    <SwButton image={this.state.images.like}/>
                    <SwButton image={this.state.images.placeHolder}/>
                </div> 
                <div className="sidebar-component__status-section">
                    <p>Status</p>
                    <input type="text" name="name" className='sidebar-component__search'/>
                    <p className='sidebar-component__status'>DELIVERED</p>
                </div>
            </section>
        )
    }
}

export default LeftComponent;