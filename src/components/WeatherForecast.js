import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import WeatherForecastItem from './WeatherForecastItem';

const WeatherForecast = ({ forecastData }) => {
    return (
        <div className="weather_forecast">
            <Typography variant="h5" component="h3">
                5-Day Forecast
            </Typography>
            <Grid container spacing={2}>
                {forecastData.list.map((data, index) => (
                    < WeatherForecastItem key={index} day={data} />
                ))}
            </Grid>
        </div>
    );
};

export default WeatherForecast;