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

  getResidentsData() {
    const { data } = this.props;

    data.residents.forEach(residentURL => {
      return getSubData(residentURL)
        .then(resident => {
          let residents;

          if (!this.state.residents) {
            residents = [resident.name];
          } else {
            residents = [...this.state.residents, resident.name];
          }

          this.setState({ residents });
        })
        .catch(error => this.setState({
          errorStatus: 'Failed to load resident data'
        }));
    });

  }

  render() {
    let subData;

    if (this.state.category === 'people') {
      this.getSpeciesData();
      this.getHomeworldData();
      
      const { species } = this.state || '';
      const { name } = this.state.homeworld || '';
      const { population } = this.state.homeworld || '';

      subData = 
        <div className="subData">
          <h3>Species: {species}</h3>
          <h3>Homeworld: {name}</h3>
          <h3>Population: {population}</h3>
          <button>Save</button>
        </div>
    } else if (this.state.category === 'planets') {
      // this.getResidentsData();
    
      // const { residents } = this.state || [];
      // const residentList = residents.map(resident => {
        // return <p>{resident}</p>
      const { population, terrain, climate } = this.props.data;

      subData = 
        <div className="subData">
          <h3>Population: {population}</h3>
          <h3>Terrain: {terrain}</h3>
          <h3>Climate: {climate}</h3>
          {/*<h3>Residents: {}</h3>*/}
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