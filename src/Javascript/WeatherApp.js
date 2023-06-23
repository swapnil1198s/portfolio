import React, {useState, useEffect} from "react";
import axios from "axios";
import PlacesAutocomplete , { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import "../Stylesheets/WeatherApp.css"
import { FaArrowLeft } from "react-icons/fa";
import moment from 'moment-timezone';

const WeatherApp = ({setState}) => {
    const [adress, setAdress] = useState("");
    const [weatherData, setWeatherData] = useState(null);

    //Function that gets weather data from the server.js file
    const fetchWeather = async (lat, lon) =>{
        try{
            const {data} = await axios.get(`https://40kscn18l6.execute-api.us-east-2.amazonaws.com/deployWeatherAPI/lambda-weather-api-call?lat=${lat}&lon=${lon}`);
            console.log(data)
            setWeatherData(data)
        }
        catch(error){
            console.log(error);
        }
    }

    //function that is triggred when the user selects one of the suggested adresses
    const selectAdress = async value => {
        try{
            const results = await geocodeByAddress(value); //Get geo code data from Google API using the address string
            const latLon = await getLatLng(results[0]); //Get the lat and longitude of the selected adress
            setAdress(value); //Set adress to selected value
            fetchWeather(latLon.lat, latLon.lng); // fetch weather for this particular lat and long
        }
        catch(error){
            console.log(error);
        }
    }

    const kelvinToFahrenheit = kelvin => {
        return (((kelvin - 273.15) * 9/5) +32).toFixed(2);
    }

    const kelvinToCelsius = kelvin => {
        return (kelvin - 273.15).toFixed(2);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
    return(
        <div className="weather_app">
            <div className="home_btn" onClick={()=>setState('home')}>
                    <FaArrowLeft/>
            </div>
            <PlacesAutocomplete
                value={adress}
                onChange={setAdress}
                onSelect={selectAdress}
            >
                {({getInputProps, suggestions, getSuggestionItemProps, loading})=>(
                    <div className="adress_input">
                        <div id="input_div">
                            <input id="input_box" {...getInputProps({ placeholder: 'Enter Location' })}/>
                        </div>
                        <div className="suggestions">
                            {loading?<div className="loading">...Loading</div>: null}
                            {suggestions.map((suggestion, index) => {
                                const style = {
                                    backgroundColor: suggestion.active? '#e3df8f' : '#fff',
                                    textAlign: 'left',
                                    padding: '10px',
                                };
                                return(
                                    <div {...getSuggestionItemProps(suggestion, {style})} key={index}>
                                        {suggestion.description}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    
                )}
            </PlacesAutocomplete>
            {weatherData && (
                <div className="weather_view">
                    <h1>{kelvinToFahrenheit(weatherData.current.temp)}<sup>&deg;</sup>F</h1>
                    <h2>Hourly Forecast</h2>
                    <div className="hourly_forecast">
                        {weatherData.hourly.map((hour, index) => {
                            const date = new Date((hour.dt) * 1000);
                            const hours = date.toLocaleString();
                            const minutes = "0" + date.getMinutes();
                            const formattedTime = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });;

                            return (
                                <div key={index} className="hourly_item">
                                    <h4>Time: {formattedTime}</h4>
                                    <p>{kelvinToFahrenheit(hour.temp)}&deg;F</p>
                                    <p>Chance of rain:<br/> {(hour.pop * 100).toFixed(2)}%</p>
                                    <p>Weather: {hour.weather[0].main}</p>
                                </div>
                            );
                        })}

                    </div>
                </div>)}
        </div>
    );
}

export default WeatherApp;
