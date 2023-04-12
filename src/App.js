import React, { useState } from 'react';
import './App.css';
import { getWeatherAndForecastData } from './utils/api';
import CitySearch from './components/CitySearch';
import CityWeather from './components/CityWeather';
import WeatherForecast from './components/WeatherForecast';
import WeatherCards from './components/WeatherCards';

function App() {
  const [city, setCity] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const handleSearch = async (cityName) => {
    const data = await getWeatherAndForecastData(cityName);
    if (data === null) {
      setCity(null);
      setWeatherData(null);
      setForecastData(null);
    } else {
      setCity(data.weatherData);
      setWeatherData(data.weatherData);
      setForecastData(data.forecastData);
    }
  };

  return (
    <div className="App">
      <CitySearch handleSearch={handleSearch} />
      {city && (
        <>
          <CityWeather city={city} weatherData={weatherData} />
          <WeatherForecast forecastData={forecastData} />
          <WeatherCards forecastData={forecastData} />
        </>
      )}
    </div>
  );
}

export default App;