import React, { Component } from "react";

class WeatherCard extends Component {
  render() {
    const {dt_txt, weather,main} = this.props.weatherlist
    return <article>
      <p>Hora: {dt_txt}</p>
      <p>Temperatura: {main.temp} Farenheit</p>
      <p>Estado: {weather[0].main}</p>

    </article>
  }
}

export default WeatherCard;
