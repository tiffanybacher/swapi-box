import React, { Component } from 'react';
import { getSubData } from '../../apiCalls';

class Card extends Component {
  state = {
    category: this.props.category,
    name: this.props.data.name
  }

  getSpeciesData() {
    const { data } = this.props;

    return getSubData(data.species)
      .then(data => this.setState({
        species: data.name
      }))
      .catch(error => this.setState({
        errorStatus: 'Error adding species data'
      }));
  }

  getHomeworldData() {
    const { data } = this.props;

    return getSubData(data.homeworld)
      .then(data => this.setState({ 
          homeworld: {
            name: data.name, 
            population: data.population
          } 
      }))
      .catch(error => this.setSate({
        errorStatus: 'Error adding homeworld data'
      }));
  }

  render() {
    if (this.state.category === 'people') {
      this.getSpeciesData();
      this.getHomeworldData();
      
      const { species } = this.state || '';
      const { name } = this.state.homeworld || '';
      const { population } = this.state.homeworld || '';

      var subData = 
        <div className="subData">
          <h3>Species: {species}</h3>
          <h3>Homeworld: {name}</h3>
          <h3>Population: {population}</h3>
          <button>Save</button>
        </div>
    }

    return (
      <article className='Card'>
        <h2>{this.state.name}</h2>
        {subData}
      </article>
    );
  }
}

export default Card;