import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import Card from './Card';
import cards from './Card/cards.json'

export class ItemList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      cards
    }
  }

  paintCards(){
    return this.state.cards.map((card,i)=><Card cards={card} key={uuidv4()} delete={() => this.deleteCard(i)} />)
  }

  deleteItemList = () => this.setState({cards:[]})

  resetCards = () => this.setState({cards:cards})

  deleteCard = (i) => {
    const remainingCards = this.state.cards.filter((card,j) => i !==j)
    this.setState({cards:remainingCards})
  }

  addCard = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const description = event.target.description.value;
    const time = event.target.time.value;

    const newCard = {name, description, time};
    this.setState({cards:[...this.state.cards, newCard]})
  }

  render() {
    return (
      <section>
        <h1>Añadir tarea</h1>
        <form onSubmit={this.addCard}>
          <label htmlFor="name">Name:</label><br />
          <input type="text" id="name" name="name" /><br /><br />
          <label htmlFor="description">Description:</label><br />
          <input type="text" id="description" name="description" /><br /><br />
          <label htmlFor="time">Time:</label><br />
          <input type="text" id="time" name="time" /> <br /><br />
          <input type="submit" value="Añadir" />
        </form>

        <h1>Tareas actuales:</h1>
        {this.paintCards()}

        {this.state.cards.length?
        <button onClick={this.deleteItemList}>Borrar tareas</button>
        :""} 

        <button onClick = {this.resetCards}>Recargar tareas</button>

      </section>


    )
    
  }
}

export default ItemList;
