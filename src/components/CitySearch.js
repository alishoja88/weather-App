import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';



const CitySearch = ({ handleSearch }) => {
    const [cityName, setCityName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSearch(cityName);
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Enter city name"
                value={cityName}
                onChange={(event) => setCityName(event.target.value)}
            />
            <Button type="submit" variant="outlined" color="primary">
                Search
            </Button>
        </form>
    );
};

export default CitySearch;