import React, { Component } from "react";
// import { v4 as uuidv4 } from 'uuid';



class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = { pronostico: this.props.defaultList }
  }

  async componentDidMount(city){
    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=24bea49290aa5895b56cca71d6f3e584`);
    const data = await response.json();
    console.log('esto es data', data)

    this.setState({
      data
    })
    console.log('componentDidMount');
  }

  componentDidUpdate(prevProps, prevState){   //componente para cuando termine derenderizar datos del fetch, que salga como hecho. Notificar actualización
    console.log('prevProps: ', prevProps, 'prevState: ', prevState)
    console.log('componentDidUpdate');
  }

  componentWillUnmount(){
    console.log('componentWillUnmount');
}






  addCard = (event) => {
    event.preventDefault();
    const city = event.target.city.value;

    const newCard = {city};
    this.setState({pronostico:[...this.state.pronostico, newCard]})
  }

  render() {
    return (
      <section>
        <h1>Weather</h1>
        <form onSubmit={this.addCard}>
          <label htmlFor="city">Ciudad:</label>
          <input type="text" id="city" name="city" />
          <button type="submit" value="Buscar">Buscar</button>
        </form>
      </section>

    );

  }
}

Weather.defaultProps = {
  defaultList: []
}

export default Weather;
