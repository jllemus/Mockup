import React, { Component } from 'react';
import RightComponent from '../Components/RightComponent/rightComponent';
import LeftComponent from '../Components/LeftComponent/leftComponent';
import SearchBar from '../Components/SearchBar/searchBar';
import NavBar from '../Components/NavBar/navBar';
import AddCard from '../Components/AddCard/addCard';
import { MdAdd } from 'react-icons/md';
import '../Components/Cards/card.css';
import './App.css';

class App extends Component {
  state = {
    cards:[
        {
            id: '1', 
            departure: 'Houston, TX', 
            destination: 'New York, NY', 
            tickets: '2', totalValue: '250', 
            date:'Sep-29-19',
            time:'2:28 PM',
            number: '3',

        },
        {
            id: '2', 
            departure: 'Houston, TX', 
            destination: 'New York, NY', 
            tickets: '5', 
            totalValue: '150', 
            date:'Friday 29th 2019',
            time:'2:28 PM',
            number:'5'
        },
        {
            id: '3', 
            departure: 'Houston, TX', 
            destination: 'New York, NY', 
            tickets: '4', 
            totalValue: '50', 
            date:'Sep-29-19',
            time:'2:28 PM',
            number: '1'
             
        }
    ],
    showPopup:true
}

addCard__handler = () => {
  if (this.state.showPopup === true) {
    this.setState({showPopup:false})
  }else{
    this.setState({showPopup:true})
  }
}

addCard = () => {
  const cards = [...this.state.cards];
  const newCard = this.state.cards[0];
  cards.push(newCard);
  this.setState({cards});
  this.addCard__handler( );
}

deleteCard = (index) => {
  const cards = [...this.state.cards];
  cards.splice(index, 1)
  this.setState({cards});
  this.addCard__handler( );
}
  render() {
    return (
        <div className='App'>
              <div className='left-wrapper'>
                <LeftComponent></LeftComponent>
              </div>
              <div className="right-wrapper">
                <NavBar></NavBar>
                <SearchBar></SearchBar>
                <RightComponent state={this.state} ></RightComponent>
              </div>
              <button onClick={this.addCard__handler} className='floating-button'>
                <MdAdd size="3em" color="white"/>
              </button>
              <AddCard 
              showPopup={this.state.showPopup} 
              addCard={this.addCard}
              addCard__handler={this.addCard__handler}
              deleteCard={this.deleteCard}
              />
          </div>   
    );
  }
}

export default App;
