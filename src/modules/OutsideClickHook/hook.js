import { useEffect } from 'react'

export function useOutsideClick(ref, handler) {
	useEffect(() => {
		const handleClickEvent = (event) => {
			if (!ref.current || ref.current.contains(event.target)) return

			handler(event.target)
		}

		document.addEventListener('mousedown', handleClickEvent)
		document.addEventListener('touchstart', handleClickEvent)

		return () => {
			// clean up
			document.removeEventListener('mousedown', handleClickEvent)
			document.removeEventListener('touchstart', handleClickEvent)
		}
	}, [handler, ref])
}
