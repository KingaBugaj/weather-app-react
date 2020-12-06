import React, { useState } from "react";
import WeatherSearch from "./WeatherSearch";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div>
      <div className="App">
        <div className="contaier">
          <h1>Weather App</h1>
          <WeatherSearch />
          <div className="Forecast"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
