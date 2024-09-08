import React, { useRef, useState } from 'react'
import { useOutsideClick } from './hook'

export default function OutsideClickHook() {
	// state
	const [showContent, setShowContent] = useState(false)

	// ref
	const contentRef = useRef()

	// hooks
	useOutsideClick(contentRef, () => setShowContent(false))

	// handlers
	const handlerShowContent = () => setShowContent(true)

	return (
		<div
			style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
		>
			{showContent ? (
				<div
					ref={contentRef}
					style={{
						border: '1px solid black',
						padding: 20,
						textAlign: 'center',
					}}
				>
					<h1>This the content</h1>
					<p>To disable the content click outside of the content container</p>
				</div>
			) : (
				<button type="button" onClick={handlerShowContent}>
					Show content
				</button>
			)}
		</div>
	)
}
