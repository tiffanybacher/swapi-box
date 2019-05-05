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

  setCardData = (category) => {
    return getCardData(category)
      .then(data => this.setState({ 
        category,
        data: data.results,
        CardHolderShown: true
      }))
      .catch(error => this.setState({
        errorStatus: `Failed to load ${category} data`
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