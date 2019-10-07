import React, { Component }from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import Card from '../Cards/card';
import '../RightComponent/rightComponent.css';

class RightComponent extends Component {
    render(){
        return(
        <Scrollbars style={{width:'100%', height: '62%'}}>
            <div className='cards-component__container'>
                {this.props.state.cards.map((cards) => {
                    return <Card 
                    key={cards.id} 
                    departure={cards.departure} 
                    destination={cards.destination} 
                    value={cards.totalValue}
                    date={cards.date}
                    time={cards.time}
                    number={cards.number}/>
                })}
            </div>
        </Scrollbars>
        );
    }
}

export default RightComponent;