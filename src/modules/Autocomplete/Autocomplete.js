import React, { useEffect, useState } from 'react'
import { useGoogleSerach } from './api'

import './style.css'

export default function Autocomplete() {
	// state
	const [query, setQuery] = useState('')

	// hook
	const [state, actions] = useGoogleSerach()

	// handlers
	const handleSerachChange = (e) => setQuery(e.target.value)
	const handleSerachSelect = (e) => setQuery(e.target.innerText)

	useEffect(() => {
		let timeout = setTimeout(() => {
			actions.fetchData(query)
		}, 100)

		return () => {
			clearTimeout(timeout)
		}
	}, [query])

	// render function
	const renderSerachList = () => {
		if (state.isLoading) return <div>Loading ...</div>

		if (state.error) return <div>{state.error}</div>

		return state.data?.map((item) => (
			<div
				key={item.id}
				onClick={handleSerachSelect}
			>{`${item.firstName} ${item.lastName}`}</div>
		))
	}

	return (
		<div className="app-container">
			<div className="autocomplete-container">
				<input
					type="text"
					value={query}
					onChange={handleSerachChange}
					placeholder="Search here ..."
				/>
				<div className="serach-list">{renderSerachList()}</div>
			</div>
		</div>
	)
}
