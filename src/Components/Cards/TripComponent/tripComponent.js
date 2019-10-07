import React from 'react';
import { MdExpandMore } from 'react-icons/md';
import { FiSend } from 'react-icons/fi';
import './tripComponent.css';

const tripComponent = (props) => {
    return (
        <div className='trip-component__container'>
            <div className='trip-component__icon'>
                <FiSend color='grey' size='1.5em'/>
            </div>
            <div className='trip-component__itinerary'>
                <p className='text-secondary'>{props.departure}</p>
                <MdExpandMore size='2.5em'color="orange"/>
                <p className='text-secondary'>{props.destination}</p>
            </div>
        </div>
        
    )
}

export default tripComponent;