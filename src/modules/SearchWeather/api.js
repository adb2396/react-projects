import { useCallback, useState } from 'react'

export function useGetWeatherData() {
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState('')
	const [data, setData] = useState(null)

	const fetchWeatherData = useCallback(async function (params) {
		try {
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${params}&appid=${process.env.REACT_APP_WEATHER_API_ID}`
			)

			const json = await response.json()

			setData(json)
			setIsLoading(false)
		} catch (error) {
			setError(`Something went wrong! ${error}`)
			setIsLoading(false)
		}
	}, [])

	return { isLoading, error, data, fetchWeatherData }
}
