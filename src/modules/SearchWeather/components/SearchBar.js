import React from 'react'

export default function SearchBar({ value, onCityChange, onSearch }) {
	return (
		<div className="search-container">
			<input
				name="city"
				type="text"
				placeholder="Enter city name Ex. Bengaluru"
				value={value}
				onChange={(e) => onCityChange(e.target.value)}
			/>
			<button type="button" onClick={onSearch}>
				Search
			</button>
		</div>
	)
}
