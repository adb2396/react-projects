import { useCallback, useEffect, useState } from 'react'

export function useGetProducts(url) {
	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState('')

	// fetchdata
	const fetchData = useCallback(async () => {
		try {
			const response = await fetch(url)
			const json = await response.json()

			if (json && json.products && json.products.length > 0) {
				setData(json.products)
				setIsLoading(false)
			}
		} catch (error) {
			setError(`Something went wrong! ${error}`)
			setIsLoading(false)
		}
	}, [url])

	useEffect(() => {
		fetchData()
	}, [fetchData])

	return { data, isLoading, error }
}
