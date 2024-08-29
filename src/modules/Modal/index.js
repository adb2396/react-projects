import React, { useState } from 'react'
import Modal from './Modal'

export default function ModalTest() {
	const [isOpen, setIsOpen] = useState(false)

	const handleClose = () => setIsOpen(false)

	const handleOpen = () => setIsOpen(true)

	return (
		<div>
			<button onClick={handleOpen}>Open Modal</button>
			<Modal
				isOpen={isOpen}
				onClose={handleClose}
				body={<div>Hi there!</div>}
			/>
		</div>
	)
}
