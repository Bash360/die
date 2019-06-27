import React, { Component } from 'react';
import Die from './Die';
import { tsImportEqualsDeclaration } from '@babel/types';
class RollDie extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three'
    ,'four','five','six']
  }
  constructor(props) {
    super(props);
    this.state = { die1: 'one', die2: 'one',isRolling:false}
    this.roll = this.roll.bind(this);
  }
  roll() { 
    let newDie = this.props.sides[ Math.floor(Math.random() * this.props.sides.length)];
    let newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];

    let timeout = setTimeout(() => {
      this.setState({isRolling:false});
    }, 1000)
    this.setState({ die1: newDie, die2: newDie2,isRolling:true});
  }
  render() { 
    return ( 
      <div>
        <Die face={this.state.die1} rolling={this.state.isRolling} />
        <Die face={this.state.die2} rolling={this.state.isRolling}  />
        <button disabled={this.state.isRolling} onClick={this.roll}>{this.state.isRolling?"Rolling....":"not rolling"}</button>
      </div>
     );
  }
}
 
export default RollDie;