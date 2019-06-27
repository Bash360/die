import React, { Component } from 'react'
import './die.css';
class Die extends Component {

  render() { 
    return (<i className={`Die fas fa-dice-${this.props.face}${this.props.rolling?" rolling":''}`}></i> );
  }
}
 
export default Die;
