import React, { useEffect, useRef, useState } from "react"
import { useGetProducts } from "./api"

import "./styles.css"

export default function ScrollIndicator() {
	// constants
	const URL = "https://dummyjson.com/products?limit=100"

	// ref
	const scrollRef = useRef(null)

	// state
	const [scrolledFromTop, setScrolledFromTop] = useState(0)

	// hooks
	const { data, isLoading, error } = useGetProducts(URL)

	const handleScroll = () => {
		const scrolledValue =
			document.body.scrollTop || document.documentElement.scrollTop
		const height =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight

		setScrolledFromTop((scrolledValue / height) * 100)
	}

	// useEffect
	useEffect(() => {
		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	console.log(scrolledFromTop, scrollRef?.current?.scrollHeight)

	if (isLoading) return <div>Loading ... </div>

	if (error) return <div>{error}</div>

	return (
		<div className="scroll-container" ref={scrollRef}>
			<div className="scroller" style={{ width: `${scrolledFromTop}%` }} />
			<h3 className="header">List of Products</h3>
			<div className="products">
				{data.map(({ title }) => (
					<p>{title}</p>
				))}
			</div>
		</div>
	)
}
