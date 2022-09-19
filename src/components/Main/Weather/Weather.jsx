import React, { Component } from "react";
// import { v4 as uuidv4 } from 'uuid';



class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = { weatherList: this.props.defaultList }
  }




  render() {
    return <div>Weather</div>;
  }
}

export default Weather;
