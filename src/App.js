import WeatherSearch from "./WeatherSearch";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div>
      <div className="App">
        <h1>Weather App</h1>
        <WeatherSearch />
        <div className="Forecast"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
