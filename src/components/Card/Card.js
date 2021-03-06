import React, { Component } from 'react';
import { getSubData } from '../../apiCalls';
import PropTypes from 'prop-types';

class Card extends Component {
  state = {
    category: this.props.category,
    name: this.props.data.name,
    id: this.props.data.created,
    isFave: false
  }

  componentDidMount() {
    if (this.state.category === 'people') {
      this.getSpeciesData();
      this.getHomeworldData();
    } else if (this.state.category === 'planets') {
      const { population, terrain, climate } = this.props.data;

      this.setState({
        population,
        terrain,
        climate 
      });

      this.getResidentsData();
    } else if (this.state.category === 'vehicles') {
      const { model, vehicle_class, passengers } = this.props.data;

      this.setState({
        model,
        vehicleClass: vehicle_class,
        passengers
      });
    }
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
          homeworld: data.name,
          population: data.population
      }))
      .catch(error => this.setSate({
        errorStatus: 'Error adding homeworld data'
      }));
  }

  getResidentsData() {
    const { data } = this.props;

    return Promise.all(data.residents.map(residentURL => getSubData(residentURL)))
      .then(residentsData => {
        const residents = residentsData.map(resident => resident.name);
        
        this.setState({ residents });
      })
      .catch(error => this.setState({errorStatus: 'Failed to load residents data'}))
  }

  handleSave = () => {
    if (!this.state.isFave) {
      this.setState({ isFave: true }, () => 
        this.props.addToFavorites(this.state));
    } else {
      this.props.removeFromFavorites(this.state.id);
      this.setState({ isFave: false });
    }
  }

  render() {
    let subData;

    if (this.state.category === 'people') {
      const { species, homeworld, population } = this.state;
    
      subData = 
        <div className="subData">
          <h3>Species: {species}</h3>
          <h3>Homeworld: {homeworld}</h3>
          <h3>Population: {population}</h3>
        </div>
    } else if (this.state.category === 'planets') {
      const { residents, population, terrain, climate } = this.state;

      let residentList;

      if (residents) {
        residentList = residents.join(', ');
      }

      subData = 
        <div className="subData">
          <h3>Population: {population}</h3>
          <h3>Terrain: {terrain}</h3>
          <h3>Climate: {climate}</h3>
          <h3>Residents: {residentList}</h3>
        </div>
    } else if (this.state.category === 'vehicles') {
      const { model, vehicleClass, passengers } = this.state;
     
      subData =
        <div>
          <h3>Model: {model}</h3>
          <h3>Class: {vehicleClass}</h3>
          <h3>Passengers: {passengers}</h3>
        </div>
    }

    let btnText;
    let btnClass;

    if (this.state.isFave) {
      btnText = 'Saved';
      btnClass = 'saved';
    } else {
      btnText = 'Save';
      btnClass = null;
    }

    return (
      <article 
        className="Card">
        <button 
          className={btnClass}
          onClick={this.handleSave}>
          {btnText}
        </button>
        <h2>{this.state.name}</h2>
        {subData}
      </article>
    );
  }
}

Card.propTypes = {
  category: PropTypes.string,
  data: PropTypes.object,
  addToFavorites: PropTypes.func,
  removeFromFavorites: PropTypes.func
}

export default Card;