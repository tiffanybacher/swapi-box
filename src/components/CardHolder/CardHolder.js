import React, { Component } from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

class CardHolder extends Component {
  render() {
    let { category, data } = this.props;

    if (this.props.favoritesShown) {
      data = this.props.favorites;
    }

    const cards = data.map(item => {
        return <Card 
          category={category} 
          data={item} 
          addToFavorites={this.props.addToFavorites}
          removeFromFavorites={this.props.removeFromFavorites}
          key={item.created} />
      });

    return (
      <section className="CardHolder">
        {cards}
      </section>
    );
  }
}

CardHolder.propTypes = {
  category: PropTypes.string,
  data: PropTypes.array,
  addToFavorites: PropTypes.func,
  removeFromFavorites: PropTypes.func,
  favoritesShown: PropTypes.bool,
  favorites: PropTypes.array
}

export default CardHolder;