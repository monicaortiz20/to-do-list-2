import React, { Component } from "react";
import WeatherCard from './WeatherCard'
import { v4 as uuidv4 } from 'uuid';



class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {weatherlist: this.props.defaultList}

    
  }

  async componentDidMount(){
    this.getWeather();
    
  }

  getWeather = async(city='Madrid') => {
    const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?&q='+city+'&appid=24bea49290aa5895b56cca71d6f3e584');
    const data = await response.json();
    console.log('esto es data.list', data.list)

    this.setState({
      weatherlist:data.list
    })
  }

paintCards(){
  return this.state.weatherlist.map((card,i)=><WeatherCard weatherlist={card} key={uuidv4()} />)
 }


  render() {
    return (
      <section>
        <h1>Weather</h1>
        <form onSubmit={this.addCard}>
          <label htmlFor="city">Ciudad:</label>
          <input type="text" id="city" name="city" />
          <button onClick={this.getWeather} type="submit" value="Buscar">Buscar</button>
        </form>

        {this.paintCards()}

      </section>

    );

  }
}

Weather.defaultProps = {
  defaultList: []
}

export default Weather;
