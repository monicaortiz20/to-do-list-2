import React, { Component } from "react";
import './Card.css'
export class Card extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name:this.props.cards.name
    }
  }


  render() {

    const {description, time} = this.props.cards

    return (
      <article>
        <h2>{this.state.name}</h2>
        <h3>{description}</h3>
        <p>Time: {time} </p>
        <button onClick = {this.props.delete}>Borrar</button>
      </article>

    )
    
    
  }
}

export default Card;
