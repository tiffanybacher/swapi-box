import React, { Component } from 'react';
import { getCardData } from '../../apiCalls';
import CardHolder from '../CardHolder/CardHolder';

class MainContainer extends Component {
  state = {
    category: '',
    data: '',
    CardHolderShown: false
  }

  handleClick = (e) => {
    const { name } = e.target;

    return getCardData(name)
      .then(data => this.setState({ 
        category: name,
        data: data.results,
        CardHolderShown: true
      }));
  }

  render() {
    if (this.state.CardHolderShown) {
      var cardHolder = 
        <CardHolder 
          category={this.state.category} 
          data={this.state.data} />
    }

    return (
      <main className="MainContainer">
        <button 
          onClick={this.handleClick} 
          name='people'>
          People
        </button>
        <button 
          onClick={this.handleClick} 
          name='planets'>
          Planets
        </button>
        <button 
          onClick={this.handleClick} 
          name='vehicles'>
          Vehicles
        </button>
        {cardHolder}
      </main>
    );
  }
}

export default MainContainer;