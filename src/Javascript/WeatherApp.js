import React, {useState, useEffect} from "react";
import axios from "axios";

const WeatherApp = () => {
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeather = async () =>{
        try{
            const response = await axios.get(`http://localhost:8000/weather`);
            setWeatherData(response.data);
        }
        catch(error){
            console.log(error);
        }
    };

    useEffect(() => {
        fetchWeather();
      }, []);

    const kelvinToFahrenheit = (kelvin) => {
        return ((kelvin - 273.15) * 9/5 + 32).toFixed(2);
    }
    
    return(
        <div className="weather_app">
            {weatherData && (
                <div>
                    <h2>Current Temperature: {kelvinToFahrenheit(weatherData.current.temp)}&deg;F</h2>
                    <h3>Minimum Temperature for today: {kelvinToFahrenheit(weatherData.daily[0].temp.min)}&deg;F</h3>
                    <h3>Maximum Temperature for today: {kelvinToFahrenheit(weatherData.daily[0].temp.max)}&deg;F</h3>
                </div>
            )}
        </div>
    );
};

export default WeatherApp;
