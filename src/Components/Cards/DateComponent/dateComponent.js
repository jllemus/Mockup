import React from 'react';
import './dateComponent.css';

const dateComponent = (props) => {
    return(
        <div className='date-container'>
            <p className='text-secondary'>{props.date}</p>
            <p className='text-secondary'>{props.time}</p>
        </div>
    )
}

export default dateComponent;