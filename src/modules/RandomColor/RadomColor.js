import React, { useCallback, useEffect, useState } from 'react'
import { generateHexColor, generateRGBColor } from './utils'

function RandomColor() {
	// constants
	const colorTypeEnum = {
		HEX: 'hex',
		RGB: 'rgb',
	}

	const [color, setColor] = useState('#000000')
	const [colorType, setColorType] = useState(colorTypeEnum.HEX)

	// handlers
	function handleSwitchHexColor() {
		setColorType(colorTypeEnum.HEX)
	}

	function handleSwitchRGBColor() {
		setColorType(colorTypeEnum.RGB)
	}

	const handleGenrateColor = useCallback(
		function () {
			let newColor = ''

			if (colorType === colorTypeEnum.HEX) {
				newColor = generateHexColor()
			} else {
				newColor = generateRGBColor()
			}

			setColor(newColor)
		},
		[colorType, colorTypeEnum.HEX]
	)

	// useEffect
	useEffect(() => {
		handleGenrateColor()
	}, [colorType, handleGenrateColor])

	return (
		<div
			style={{
				width: '100vw',
				height: '100vh',
				background: color,
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-start',
				alignItems: 'center',
			}}
		>
			<div>
				<button type="button" onClick={handleSwitchRGBColor}>
					RGB Color
				</button>
				<button type="button" onClick={handleSwitchHexColor}>
					HEX Color
				</button>
				<button type="button" onClick={handleGenrateColor}>
					Generate Color
				</button>
			</div>

			<div
				style={{
					height: '100%',
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					alignItems: 'center',
					color: 'white',
					fontSize: '60px',
				}}
			>
				<p>{colorType === colorTypeEnum.HEX ? 'HEX Color' : 'RGB Color'}</p>
				<p>{color}</p>
			</div>
		</div>
	)
}

export default RandomColor
