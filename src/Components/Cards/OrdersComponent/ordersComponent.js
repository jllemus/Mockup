import React from 'react';
import { MdLocalShipping } from 'react-icons/md';
import '../OrdersComponent/ordersComponent.css';

const ordersComponent =  (props) => {
    return(
        <div className='orders-component__container'>
            <div className='orders-component__icon'>
                <MdLocalShipping color='grey' size='3em'/>
            </div>
            <div className='orders-component__value'>
                <h3 className='text-secondary' >{props.value}</h3>
            </div>
            <div className='orders-component-number__container'>
                <div className='orders-component__number'>
                    <p>{props.number}</p>
                </div>
            </div>
        </div>
        
    )
}

export default ordersComponent;