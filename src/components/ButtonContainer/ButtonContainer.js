import React, { Component } from 'react';

class ButtonContainer extends Component {
  handleClick = (e) => {
    const { name } = e.target;

    this.props.setCardData(name);
  }

  render() {
    return (
      <div className="ButtonContainer">
      <button 
        onClick={this.handleClick} 
        name='people'>
        People
      </button>
      <button 
        onClick={this.handleClick} 
        name='planets'>
        Planets
      </button>
      <button 
        onClick={this.handleClick} 
        name='vehicles'>
        Vehicles
      </button>
      </div>
    );
  }
}

export default ButtonContainer;