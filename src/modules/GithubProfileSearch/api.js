import { useEffect, useState } from 'react'

export function useGetUserProfile() {
	// state
	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState('')

	async function fetchData(userName = 'adb2396') {
		try {
			const response = await fetch(`https://api.github.com/users/${userName}`)
			const json = await response.json()

			setData(json)
			setIsLoading(false)
		} catch (error) {
			setError(`Something went wrong! ${error}`)
			setIsLoading(false)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	return [{ isLoading, data, error }, { fetchData }]
}
