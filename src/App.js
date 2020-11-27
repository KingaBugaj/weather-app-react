import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";
import WeatherSearch from "./WeatherSearch";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1></h1>
      <WeatherSearch />
      <div className="Forecast"></div>
    </div>
  );
}

export default App;
