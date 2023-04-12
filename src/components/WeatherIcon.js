import React from 'react';

const WeatherIcon = ({ iconCode, size = 64 }) => {
    const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
    return (
        <img
            src={iconUrl}
            alt="Weather Icon"
            width={size}
            height={size}
            style={{ display: 'block', margin: '0 auto' }}
        />
    );
};

export default WeatherIcon;