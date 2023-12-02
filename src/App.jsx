import React, { useState } from "react";
import Search from "./components/search/Search";

import "./App.css";
import CurrentWeather from "./components/currentWeather/currentWeather";
import Forecast from "./components/forecast/forecast";
import { WEATHER_API, API_KEY } from "./components/search/api";

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split("");

    const weather = fetch(
      `${WEATHER_API}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    const forecast = fetch(
      `${WEATHER_API}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    Promise.all([weather, forecast])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  console.log(currentWeather);
  console.log(forecast);

  return (
    <>
      <div>
        <div>
          <Search onSearchChange={handleSearchChange} />

          {currentWeather && <CurrentWeather data={currentWeather} />}

          {forecast && <Forecast data={forecast} />}
        </div>
      </div>
    </>
  );
}

export default App;
