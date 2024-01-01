import React from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import WeatherIcon from './WeatherIcon';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 150,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        color: theme.palette.common.black,
    },
    icon: {
        height: 64,
        width: 64,
        marginBottom: theme.spacing(2),
    },
}));

const WeatherCaard = ({ day, temp, icon }) => {
    const classes = useStyles();

    if (!temp) {
        return null;
    }

    const dayOfWeek = new Date(day).toLocaleDateString('en-US', { weekday: 'long' });
    const iconCode = icon;
    const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h6">{dayOfWeek}</Typography>
                <WeatherIcon iconCode={iconCode} className={classes.icon} />
                <>
                    <Typography variant="h5">{Math.round(temp)}°C</Typography>
                </>
            </CardContent>
        </Card>
    );
};

export default WeatherCaard;