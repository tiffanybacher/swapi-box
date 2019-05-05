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
    const { category, data } = this.props;
    const name = data.name;

    if (category === 'people') {
      this.getSpeciesData();
      this.getHomeworldData();

      var subData = 
        <div className="subData">
          <h3>Species: {species}</h3>
          {//<h3>Homeworld: {homeworld}</h3>}
          }
          {//<h3>Population: {population}</h3>
          }
          <button>Save</button>
        </div>
    }

    return(
      <article className='Card'>
        <h2>{name}</h2>
        {subData}
      </article>
    );
  }
}

export default Card;