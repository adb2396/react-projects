import React from 'react'
import { FaXmark } from 'react-icons/fa6'

import './modal.style.css'

export default function Modal({ isOpen, onClose, header, body, footer }) {
	return (
		isOpen && (
			<div className="modal-overlay">
				<div className="modal">
					<div className="modal-header">
						{header ? header : <h3>Hedaer content</h3>}
						<FaXmark onClick={onClose} className="close-icon" />
					</div>
					<div className="modal-body">
						{body ? body : 'This is the body of the modal'}
					</div>
					<div className="modal-footer">
						{footer ? footer : 'Footer content'}
					</div>
				</div>
			</div>
		)
	)
}
