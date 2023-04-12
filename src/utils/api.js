const API_KEY = "30ca9bd4de0cf53e6687844723c0cc50";
export const getWeatherData = async (cityName) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const getForecastData = async (cityName) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const getWeatherAndForecastData = async (cityName) => {
    try {
        const [weatherData, forecastData] = await Promise.all([
            getWeatherData(cityName),
            getForecastData(cityName),
        ]);

        if (!weatherData || !forecastData) {
            return null;
        }

        const city = weatherData.name;
        const data = { city, weatherData, forecastData };
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
};



