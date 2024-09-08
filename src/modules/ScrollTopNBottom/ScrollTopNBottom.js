import React, { useRef } from 'react'
import { useGetProducts } from '../ScrollIndicator/api'

import './style.css'

export default function ScrollTopNBottom() {
	// constants
	const URL = 'https://dummyjson.com/products?limit=100'

	// ref
	const bottomRef = useRef(null)

	const { data, isLoading, error } = useGetProducts(URL)

	// handlers
	const handleGoToBottom = () => {
		bottomRef.current.scrollIntoView({ behavior: 'smooth' })
	}

	const handleGoToTop = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		})
	}

	if (isLoading) return <h3>Loading ...</h3>

	if (error) return <div>Something Went Wrong! {error}</div>

	return (
		<div className="scroll-top-bottom-wrapper">
			<h1>Scroll Top & Bottom Feature</h1>
			<h4>This is top of the page</h4>
			<button type="button" onClick={handleGoToBottom}>
				Go to Bottom
			</button>
			<ul>
				{data?.map((product) => (
					<li>{product.title}</li>
				))}
			</ul>
			<button type="button" onClick={handleGoToTop}>
				Go to Top
			</button>
			<h4 ref={bottomRef}>This is bottom of the page</h4>
		</div>
	)
}
