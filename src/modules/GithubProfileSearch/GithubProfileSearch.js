import React, { useState } from 'react'
import { useGetUserProfile } from './api'
import Profile from './Profile'

import './github.style.css'

export default function GithubProfileSearch() {
	// constants

	// state
	const [userName, setUserName] = useState('')

	// hooks
	const [state, actions] = useGetUserProfile()

	// handlers
	const handleUserNameChange = (e) => {
		setUserName(e.target.value)
	}

	const handleSendClick = () => {
		// fetchUser
		actions.fetchData(userName)
		setUserName('')
	}

	// render functions
	const renderUserInfo = () => {
		if (state.isLoading) return <div>Loading ...</div>

		if (state.error) return <div>{state.error}</div>

		return <Profile userData={state.data} />
	}

	return (
		<div className="profile-search-container">
			<div>
				<input
					type="text"
					value={userName}
					placeholder="Enter username ex: adb2396"
					onChange={handleUserNameChange}
				/>
				<button type="button" onClick={handleSendClick}>
					Send
				</button>
			</div>
			<div>{renderUserInfo()}</div>
		</div>
	)
}
