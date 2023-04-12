import React from 'react';
import { Typography } from '@material-ui/core';

const WeatherForecastItem = ({ day }) => {
    if (!day || !day.temp) {
        return null;
    }

    const date = new Date(day.dt * 1000);
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
    const iconUrl = `http://openweathermap.org/img/w/${day.weather[0].icon}.png`;

    return (
        <div className="forecast-item">
            <Typography variant="subtitle2" gutterBottom>
                {dayOfWeek}
            </Typography>
            <img src={iconUrl} alt={day.weather[0].description} />
            <Typography variant="subtitle2" gutterBottom>
                {Math.round(day.temp.max)}° / {Math.round(day.temp.min)}°
            </Typography>
        </div>
    );
};
export default WeatherForecastItem;