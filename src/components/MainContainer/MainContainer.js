import React, { Component } from 'react';
import { getCardData } from '../../apiCalls';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
import CardHolder from '../CardHolder/CardHolder';

class MainContainer extends Component {
  state = {
    category: '',
    data: '',
    CardHolderShown: false
  }

  setCardData = (name) => {
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
        <ButtonContainer 
          setCardData={this.setCardData} />
        {cardHolder}
      </main>
    );
  }
}

export default MainContainer;