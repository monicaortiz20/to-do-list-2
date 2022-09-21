import React, { Component } from "react";
import WeatherCard from './WeatherCard'
import { v4 as uuidv4 } from 'uuid';



class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {weatherlist: this.props.defaultList, 
    city: this.props.city || "Madrid"}    
    
  }

  async componentDidMount(){
    this.getWeather();
    
  }

  getWeather = async() => {
    let city = this.state.city
    const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?&q='+city+'&appid=24bea49290aa5895b56cca71d6f3e584');
    const data = await response.json();

    this.setState({
      weatherlist:data.list
    })
  }

  paintCards(){
    return this.state.weatherlist.map((card,i)=><WeatherCard weatherlist={card} key={uuidv4()} />)
   }


  handleCity = async (event) => {
   event.preventDefault();
   const city = event.target.city.value //trae el valor de input

   this.setState({city:city}) //state city

   this.getWeather();
  
  }



  render() {
    return (
      <section className="weather-section">
        <h1>Weather</h1>
        <form onSubmit={this.handleCity}>
          <label htmlFor="city">Ciudad:</label>
          <input type="text" id="city" name="city" />
          <button className="btn-search" onClick={this.getWeather} type="submit" value="Buscar">Buscar</button>
        </form>

        <h3>Tiempo en {this.state.city}</h3>
        {this.paintCards()}

      </section>

    );

  }
}

Weather.defaultProps = {
  defaultList: []
}

export default Weather;
