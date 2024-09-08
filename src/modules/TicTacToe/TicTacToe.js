import React, { useCallback, useEffect, useState } from 'react'

import './style.css'
import {
	checkColMatch,
	checkLeftDiagonalMatch,
	checkRightDiagonalMatch,
	checkRowMatch,
} from './utils'

export default function TicTacToe() {
	const [currPlayer, setCurrPlayer] = useState('o')
	const [message, setMessage] = useState('')
	const [isDisabled, setIsDisabled] = useState(false)
	const [playerMove, setPlayerMove] = useState([
		['', '', ''],
		['', '', ''],
		['', '', ''],
	])

	const validatePlayerWin = useCallback(() => {
		/**
		 * Winnine patterns (1D array)
		 * [
		 * 	[0, 1, 2],
		 * 	[3, 4, 5],
		 * 	[6, 7, 8],
		 * 	[0, 3, 6],
		 * 	[1, 4, 7],
		 * 	[2, 5, 8],
		 * 	[0, 4, 8]
		 * 	[2, 4, 6]
		 * ]
		 */

		const isRowMatch = checkRowMatch(playerMove)
		const isColMatch = checkColMatch(playerMove)
		const isLeftDiagMatch = checkLeftDiagonalMatch(playerMove)
		const isRightDiagMatch = checkRightDiagonalMatch(playerMove)

		return isRowMatch || isColMatch || isLeftDiagMatch || isRightDiagMatch
	}, [currPlayer])

	// handlers
	const handleResetGame = () => {
		setCurrPlayer('o')
		setMessage('')
		setIsDisabled(false)
		setPlayerMove(() => [
			['', '', ''],
			['', '', ''],
			['', '', ''],
		])
	}

	const handleButtonClick = (e) => {
		const { x, y } = e.target.dataset
		const xVal = parseInt(x, 10)
		const yVal = parseInt(y, 10)

		if (playerMove[xVal][yVal] !== '') return

		setPlayerMove((prevState) => {
			const newMove = [prevState[0], prevState[1], prevState[2]]
			newMove[xVal][yVal] = currPlayer
			return newMove
		})

		setMessage(currPlayer === 'o' ? "Player X's turn" : "Player O's turn")
		setCurrPlayer(currPlayer === 'o' ? 'x' : 'o')
	}

	useEffect(() => {
		const isWinnner = validatePlayerWin()

		if (isWinnner) {
			setMessage(`Player ${currPlayer === 'o' ? 'X' : 'O'} Won!!`)
			setIsDisabled(true)
		}
	}, [currPlayer, validatePlayerWin])

	return (
		<div className="tic-tac-toe">
			<h2 className="tic-tac-toe-header">Tic Tac Toe</h2>
			<div className="wrapper">
				{Array(3)
					.fill(0)
					.map((_, xIdx) => (
						<div className="row" key={`${xIdx}`}>
							{Array(3)
								.fill(0)
								.map((_, yIdx) => (
									<button
										key={`${xIdx}${yIdx}`}
										type="button"
										data-x={xIdx}
										data-y={yIdx}
										onClick={handleButtonClick}
										disabled={isDisabled}
									>
										{playerMove[xIdx][yIdx]}
									</button>
								))}
						</div>
					))}
			</div>
			<p className="message">{message}</p>
			<div className="button-container">
				<button type="button" onClick={handleResetGame}>
					Reset Game
				</button>
			</div>
		</div>
	)
}
