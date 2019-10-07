import React from 'react';
import DateComponent from './DateComponent/dateComponent';
import TripComponent from './TripComponent/tripComponent';
import OrdersComponent from './OrdersComponent/ordersComponent';
import { MdCheck } from 'react-icons/md';
import '../Cards/card.css';
const card = (props) => {
    return(
     <div className='card-container'>
        <div className="card-container__check">
            <MdCheck color="white"/>
        </div>
        <div className='card-container__card'>
            <DateComponent date={props.date} time={props.time}/>
            <TripComponent departure={props.departure} destination={props.destination}/>
            <OrdersComponent value={props.value} number={props.number}/>
        </div>
    </div>
    )
};

export default card;