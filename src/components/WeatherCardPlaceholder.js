import React from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 150,
        backgroundColor: 'black',
        color: theme.palette.common.white,
    },
}));

const WeatherCardPlaceholder = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h6">Loading...</Typography>
            </CardContent>
        </Card>
    );
};

export default WeatherCardPlaceholder;