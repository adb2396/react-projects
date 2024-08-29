import { useCallback, useEffect, useState } from 'react'

export function useGetImages(url) {
	// state
	const [isLoading, setIsLoading] = useState(true)
	const [data, setData] = useState(null)
	const [error, setError] = useState('')

	const fetchImages = useCallback(
		async function () {
			// setIsLoading(true);
			try {
				const response = await fetch(url)
				const json = await response.json()
				setData(json)
				setIsLoading(false)
			} catch (error) {
				setError(`Error occured! ${error}`)
				setIsLoading(false)
			}
		},
		[url]
	)

	useEffect(() => {
		fetchImages()
	}, [fetchImages])

	return { isLoading, data, error }
}
