import React, { Component } from 'react';
import { getCardData } from '../../apiCalls';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
import CardHolder from '../CardHolder/CardHolder';
import PropTypes from 'prop-types';

class MainContainer extends Component {
  state = {
    category: '',
    data: '',
    CardHolderShown: false,
    favoritesShown: false
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

  showFavorites = () => {
    this.setState({ favoritesShown: true });
  }

  hideFavorites = () => {
    this.setState({ favoritesShown: false });
  }

  render() {
    if (this.state.CardHolderShown) {
      var cardHolder = 
        <CardHolder 
          category={this.state.category} 
          data={this.state.data}
          addToFavorites={this.props.addToFavorites}
          removeFromFavorites={this.props.removeFromFavorites}
          favoritesShown={this.state.favoritesShown}
          favorites={this.props.favorites} />
    }

    return (
      <main className="MainContainer">
        <ButtonContainer 
          setCardData={this.setCardData}
          showFavorites={this.showFavorites}
          hideFavorites={this.hideFavorites} />
        {cardHolder}
      </main>
    );
  }
}

MainContainer.propTypes = {
  addToFavorites: PropTypes.func,
  removeFromFavorites: PropTypes.func,
  favorites: PropTypes.array
}

export default MainContainer;