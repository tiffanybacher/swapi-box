import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonContainer extends Component {
  handleClick = (e) => {
    const { name } = e.target;
    
    this.props.hideFavorites();
    
    this.props.setCardData(name);
  }

  handleFavoritesClick = () => {
    this.props.showFavorites();
  }

  render() {
    return (
      <div className="ButtonContainer">
      <button 
        className="peopleBtn"
        onClick={this.handleClick} 
        name='people'>
        People
      </button>
      <button 
        className="planetsBtn"
        onClick={this.handleClick} 
        name='planets'>
        Planets
      </button>
      <button 
        className="vehiclesBtn"
        onClick={this.handleClick} 
        name='vehicles'>
        Vehicles
      </button>
      <button
        className="favoritesBtn"
        onClick={this.handleFavoritesClick}>
        Favorites
      </button>
      </div>
    );
  }
}

ButtonContainer.propTypes = {
  setCardData: PropTypes.func,
  showFavorites: PropTypes.func,
  hideFavorites: PropTypes.func
}

export default ButtonContainer;