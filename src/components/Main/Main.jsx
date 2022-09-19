import React, { Component } from "react";
import { Route, Routes } from 'react-router-dom'
import Home from './Home';
import ItemList from './ItemList';
import Weather from './Weather';
import NotFound from '../NotFound';


export class Main extends Component {
  render() {
    return (
    <main>
      <Routes>
        <Route element = {<Home/>} path={"/"} />
        <Route element = {<ItemList/>} path={"/todo"} />
        <Route element = {<Weather/>} path={"/weather"} />
        <Route element = {<NotFound/>} path={"*"} />
      </Routes>
      </main>
    )
  }
}

export default Main;
