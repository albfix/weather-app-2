import React from 'react';
const conditions = (props) => {
    return (
        <div>
            {props.responseObj.cod === 200 ?
                <div>
                    <p><strong>{props.responseObj.name}</strong></p>
                    <p>Temperature is: {Math.round(props.responseObj.main.temp)} degrees.</p>
                    <p>Condition: {props.responseObj.weather[0].description}.</p>
                    <p>Wind speed: {props.responseObj.wind.speed}.</p>
                    <p>Humidity: {props.responseObj.main.humidity}.</p>
                </div>
                : null
            }
        </div>
    )
}
export default conditions;