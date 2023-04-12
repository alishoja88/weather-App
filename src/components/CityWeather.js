import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloud, faCloudRain, faSnowflake } from '@fortawesome/free-solid-svg-icons';
// eslint-disable-next-line no-unused-vars
import moment from 'moment-timezone';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    cityName: {
        fontSize: 48,
        fontWeight: 700,
        marginBottom: theme.spacing(2),
    },
    weatherIcon: {
        fontSize: 96,
        marginBottom: theme.spacing(2),
    },
    temperature: {
        fontSize: 72,
        fontWeight: 700,
        marginBottom: theme.spacing(2),
    },
}));

const CityWeather = ({ city, weatherData }) => {
    const classes = useStyles();

    const getWeatherIcon = () => {
        if (weatherData.weather[0].main === 'Clear') {
            return faSun;
        } else if (weatherData.weather[0].main === 'Clouds') {
            return faCloud;
        } else if (weatherData.weather[0].main === 'Rain') {
            return faCloudRain;
        } else if (weatherData.weather[0].main === 'Snow') {
            return faSnowflake;
        }
    };

    return (
        <div className={classes.root}>
            <Typography variant="h1" className={classes.cityName}>
                {city.name}, {city.country}
            </Typography>
            {weatherData && (
                <>
                    <FontAwesomeIcon icon={getWeatherIcon()} className={classes.weatherIcon} />
                    <Typography variant="h2" className={classes.temperature}>
                        {Math.round(weatherData.main.temp)}&deg;C
                    </Typography>
                    <Typography variant="body1">
                        {weatherData.weather[0].description}
                    </Typography>
                    <Typography variant="body1">
                        Wind: {Math.round(weatherData.wind.speed)} m/s
                    </Typography>
                    <Typography variant="body1">
                        Humidity: {weatherData.main.humidity}%
                    </Typography>
                </>
            )}
        </div>
    );
};

CityWeather.propTypes = {
    city: PropTypes.object.isRequired,
    weatherData: PropTypes.object,
};

export default CityWeather;