import React, { useEffect, useState } from 'react'
import { useGetWeatherData } from './api'
import SearchBar from './components/SearchBar'
import WeatherReport from './components/WeatherReport'

import './style.css'

export default function SearchWeather() {
	// state
	const [query, setQuery] = useState('')

	// hooks
	const { isLoading, data, error, fetchWeatherData } = useGetWeatherData()

	useEffect(() => {
		fetchWeatherData('bangalore')
	}, [fetchWeatherData])

	// handlers
	const handleCityChange = (city) => setQuery(city)

	const handleSearch = () => {
		fetchWeatherData(query)
		setQuery('')
	}

	// render components
	const renderWeatherReport = () => {
		if (isLoading) return <h4>Loading ...</h4>

		if (error) return <div>{error}</div>

		return <WeatherReport data={data} />
	}

	// return statement
	return (
		<div className="weather-search">
			<div className="main">
				<SearchBar
					value={query}
					onCityChange={handleCityChange}
					onSearch={handleSearch}
				/>
				{renderWeatherReport()}
			</div>
		</div>
	)
}

//
