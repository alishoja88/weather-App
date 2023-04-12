// import React from 'react';
// import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';
// import WeatherIcon from './WeatherIcon';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         minWidth: 150,
//         backgroundColor: 'rgba(255, 255, 255, 0.2)',
//         color: theme.palette.common.white,
//     },
//     icon: {
//         height: 64,
//         width: 64,
//         marginBottom: theme.spacing(2),
//     },
// }));

// const WeatherCaard = ({ day }) => {
//     console.log("aaa", day)
//     const classes = useStyles();

//     const date = new Date(day.dt * 1000);
//     const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
//     const iconCode = day.weather[0].icon;
//     const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

//     return (
//         <Card className={classes.root}>
//             <CardContent>
//                 <Typography variant="h6">{dayOfWeek}</Typography>
//                 <WeatherIcon code={iconCode} className={classes.icon} />
//                 {day.temp && (
//                     <>
//                         <Typography variant="h5">{Math.round(day.temp.max)}°C</Typography>
//                         <Typography variant="subtitle2">/{Math.round(day.temp.min)}°C</Typography>
//                     </>
//                 )}
//             </CardContent>
//         </Card>
//     );
// };

// export default WeatherCaard;

// import React from 'react';
// import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';
// import WeatherIcon from './WeatherIcon';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         minWidth: 150,
//         backgroundColor: 'rgba(255, 255, 255, 0.2)',
//         color: theme.palette.common.black,
//     },
//     icon: {
//         height: 64,
//         width: 64,
//         marginBottom: theme.spacing(2),
//     },
// }));

// const WeatherCard = ({ temp, icon }) => {
//     const classes = useStyles();

//     if (!temp) {
//         return null;
//     }

//     const dayOfWeek = new Date().toLocaleDateString('en-US', { weekday: 'long' });
//     const iconCode = icon;
//     const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

//     return (
//         <Card className={classes.root}>
//             <CardContent>
//                 <Typography variant="h6">{dayOfWeek}</Typography>
//                 <WeatherIcon iconCode={iconCode} className={classes.icon} />
//                 <>
//                     <Typography variant="h5">{Math.round(temp)}°C</Typography>
//                 </>
//             </CardContent>
//         </Card>
//     );
// };

// export default WeatherCard;

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