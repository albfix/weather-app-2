import React, { useState } from 'react';

import Conditions from '../conditions/conditions';

import classes from './forecast.module.css';

const Forecast = () => {

    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');

    let [responseObj, setResponseObj] = useState({});

    const uriEncodedCity = encodeURIComponent(city);

    function getForecast(e) {
        e.preventDefault()
        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "4c48adc6cbmsh29e445de926b8a7p176d96jsna87ea16aec24"
            }
        })
            .then(response => response.json())
            .then(response => {
                setResponseObj(response)
            })
    }
    return (
        <div>
            <h2>Find Current Weather Conditions</h2>
            <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    className={classes.textInput}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"

                        onChange={(e) => setUnit(e.target.value)}
                    />
                    Fahrenheit
                </label>
                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                    />
                    Celcius
                </label>
                <button className={classes.Button} type="submit">Get Forecast</button>
            </form>
            <Conditions
                responseObj={responseObj}
            />
        </div>
    )
}
export default Forecast;