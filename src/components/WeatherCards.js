import React from 'react';
import WeatherCaard from './WeatherCaard';
import WeatherCardPlaceholder from './WeatherCardPlaceholder';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
}));

const WeatherCards = ({ forecastData }) => {
    const classes = useStyles();

    const dataByDate = forecastData?.list?.reduce((acc, item) => {
        const date = new Date(item.dt * 1000).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
        const temp = item.main.temp;

        if (!acc[date]) {
            acc[date] = { date, temps: [], icon: item.weather[0].icon };
        }

        acc[date].temps.push(temp);
        return acc;
    }, {});

    const weatherCards = Object.values(dataByDate || {})
        .slice(0, 5)
        .map((data) => (
            <WeatherCaard
                key={data.date}
                day={data.date}
                temp={data.temps.reduce((a, b) => a + b) / data.temps.length}
                icon={data.icon}
            />
        ));

    return <div className={classes.container}>{weatherCards.length > 0 ? weatherCards : <WeatherCardPlaceholder />}</div>;
};

export default WeatherCards;