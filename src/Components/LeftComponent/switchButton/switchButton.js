import React from 'react';
import Switch from '@material-ui/core/Switch';
import './switchButton.css';

const swButton = (props) => {
    return <div className='switch-component__container'>
                <img src={props.image} className='switch-component__image' alt='switchImage'/>
                <Switch checked={true} className='switch-component__switch'></Switch>
            </div>
}

export default swButton;