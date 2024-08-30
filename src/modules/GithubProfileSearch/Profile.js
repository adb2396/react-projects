import React from 'react'

export default function Profile({ userData }) {
	return (
		<div className="profile-container">
			<div>
				<img
					src={userData.avatar_url}
					alt={userData.name}
					width={100}
					height={100}
				/>
			</div>

			<div className="profile-table">
				<div className="row">
					<div>Name:</div>
					<div>{userData.name}</div>
				</div>
				<div className="row">
					<div>Loaction:</div>
					<div>{userData.location}</div>
				</div>
				<div className="row">
					<div>Followers:</div>
					<div>{userData.followers}</div>
				</div>
				<div className="row">
					<div>Following:</div>
					<div>{userData.following}</div>
				</div>
				<div className="row">
					<div>Public Repos:</div>
					<div>{userData.public_repos}</div>
				</div>
				<div className="row">
					<div>Url:</div>
					<div>
						<a href={userData.html_url} target="_blank" rel="noreferrer">
							{userData.html_url}
						</a>
					</div>
				</div>
				<div className="row">
					<div>Joined on:</div>
					<div>{new Date(userData.created_at).toDateString()}</div>
				</div>
			</div>
		</div>
	)
}

/**
 * {
    "login": "adb2396",
    "id": 48707136,
    "node_id": "MDQ6VXNlcjQ4NzA3MTM2",
    "avatar_url": "https://avatars.githubusercontent.com/u/48707136?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/adb2396",
    "html_url": "https://github.com/adb2396",
    "followers_url": "https://api.github.com/users/adb2396/followers",
    "following_url": "https://api.github.com/users/adb2396/following{/other_user}",
    "gists_url": "https://api.github.com/users/adb2396/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/adb2396/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/adb2396/subscriptions",
    "organizations_url": "https://api.github.com/users/adb2396/orgs",
    "repos_url": "https://api.github.com/users/adb2396/repos",
    "events_url": "https://api.github.com/users/adb2396/events{/privacy}",
    "received_events_url": "https://api.github.com/users/adb2396/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Akshay Bhamare",
    "company": null,
    "blog": "",
    "location": "Nashik, Maharashtra (India) ",
    "email": null,
    "hireable": true,
    "bio": null,
    "twitter_username": null,
    "public_repos": 32,
    "public_gists": 0,
    "followers": 4,
    "following": 14,
    "created_at": "2019-03-19T05:43:43Z",
    "updated_at": "2024-08-24T08:02:06Z"
}
 * 
 */
