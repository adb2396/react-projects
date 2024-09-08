import React from 'react'

export default function WeatherReport({ data }) {
	const getDateString = () => {
		return new Date().toLocaleDateString('en-us', {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		})
	}

	return (
		<div className="report-container">
			<h2 className="city-name">
				{data.name}, {data.sys.country}
			</h2>
			<div>{getDateString()}</div>
			<div>
				<h2>{data.main.temp}</h2>
				<p>{data.weather[0].description}</p>
			</div>
			<div className="speed-humidity">
				<div>
					<div>{data.wind.speed}</div>
					<h5>Wind</h5>
				</div>
				<div>
					<div>{data.main.humidity}</div>
					<h5>Humidity</h5>
				</div>
			</div>
		</div>
	)
}

/**
 * {
    "coord": {
        "lon": 77.6033,
        "lat": 12.9762
    },
    "weather": [
        {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 295.32,
        "feels_like": 295.76,
        "temp_min": 294.99,
        "temp_max": 295.65,
        "pressure": 1011,
        "humidity": 83,
        "sea_level": 1011,
        "grnd_level": 910
    },
    "visibility": 10000,
    "wind": {
        "speed": 6.19,
        "deg": 265,
        "gust": 11.88
    },
    "clouds": {
        "all": 100
    },
    "dt": 1725817014,
    "sys": {
        "type": 2,
        "id": 2094842,
        "country": "IN",
        "sunrise": 1725755929,
        "sunset": 1725800162
    },
    "timezone": 19800,
    "id": 1277333,
    "name": "Bengaluru",
    "cod": 200
}
 */
