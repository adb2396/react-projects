import { useState } from 'react'

export function useGoogleSerach() {
	const [isLoading, setIsLoading] = useState(false)
	const [data, setData] = useState([])
	const [error, setError] = useState('')

	async function fetchData(query) {
		if (!query) {
			setData([])
			return
		}

		try {
			const response = await fetch(
				`https://dummyjson.com/users/search?q=${query}&limit=10&select=firstName,lastName`
			)
			const json = await response.json()

			if (json && json.users) {
				setData(json.users)
			}
			setIsLoading(false)
		} catch (error) {
			setError(`Something went wrong! ${error}`)
			setIsLoading(false)
		}
	}

	return [{ data, isLoading, error }, { fetchData }]
}
