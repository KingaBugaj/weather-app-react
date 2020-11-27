import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [info, setInfo] = useState({});

  function showWeather(response) {
    setLoaded(true);
    setInfo({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,

      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=62adc1ac7dfc036aa7bc43938cb7257f`;
    axios.get(apiUrl).then(showWeather);
  }
  {
    function updateCity(event) {
      setCity(event.target.value);
    }
    let form = (
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city..."
          onChange={updateCity}
        />
        <button type="submit">Search</button>
      </form>
    );

    if (loaded) {
      return (
        <div>
          {form}
          <h1>
            {city}
            <img className="updated-icon" src={info.icon} alt="Weather icon" />
          </h1>

          <ul>
            <li>Temperature: {Math.round(info.temperature)}°C</li>
            <li>Description: {info.description}</li>
            <li>Humidity: {info.humidity}%</li>
            <li>Wind speed: {info.wind}km/h</li>
          </ul>
          <table className="days">
            <td>
              Monday
              <br />
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="goldenrod"
                size={30}
                animate={true}
              />
              <p>23°</p>
            </td>
            <td>
              Tuesday
              <br />
              <ReactAnimatedWeather
                icon="SNOW"
                color="silver"
                size={30}
                animate={true}
              />
              <p>9°</p>
            </td>
            <td>
              Wednesday
              <br />
              <ReactAnimatedWeather
                icon="PARTLY_CLOUDY_NIGHT"
                color="blue"
                size={30}
                animate={true}
              />
              <p>13°</p>
            </td>
            <td>
              Thursday
              <br />
              <ReactAnimatedWeather
                icon="RAIN"
                color="blue"
                size={30}
                animate={true}
              />
              <p>10°</p>
            </td>
            <td>
              Friday
              <br />
              <ReactAnimatedWeather
                icon="WIND"
                color="blue"
                size={30}
                animate={true}
              />
              <p>20°</p>
            </td>
            <td>
              Saturday
              <br />
              <ReactAnimatedWeather
                icon="SLEET"
                color="blue"
                size={30}
                animate={true}
              />
              <p>17°C</p>
            </td>
          </table>
        </div>
      );
    } else {
      return form;
    }
  }
}
