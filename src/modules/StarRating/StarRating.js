import { FaStar } from 'react-icons/fa6'
import './styles.css'
import { useState } from 'react'

function StarRating() {
	const numOfStars = 6

	const [hoveredStar, setHoveredStar] = useState(-1)
	const [clickedStar, setClickedStar] = useState(-1)

	const handleMouseOver = (index) => setHoveredStar(index)

	const handleMouseOut = (index) => {
		if (index === 0 && hoveredStar === 0) {
			setHoveredStar(-1)
			return
		}

		setHoveredStar(clickedStar)
	}

	const handleStarClick = (index) => setClickedStar(index)

	return (
		<div className="star-rating">
			<div>
				{new Array(numOfStars).fill(0).map((_, index) => (
					<FaStar
						key={index}
						fill={index <= hoveredStar ? 'yellow' : 'black'}
						fontSize={40}
						onMouseOver={() => handleMouseOver(index)}
						onMouseOut={() => handleMouseOut(index)}
						onClick={() => handleStarClick(index)}
						style={{ cursor: 'pointer' }}
					/>
				))}
			</div>
			{hoveredStar >= 0 ? <p>Rating Given: {clickedStar + 1}</p> : null}
		</div>
	)
}

export default StarRating
