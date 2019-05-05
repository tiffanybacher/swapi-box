import React, { Component } from 'react';
import Card from '../Card/Card';

class CardHolder extends Component {
  render() {
    const { category, data } = this.props;

    const cards = data.map(person => {
        return <Card category={category} data={person} />
      });

    return (
      <section className="CardHolder">
        {cards}
      </section>
    );
  }
}

export default CardHolder;