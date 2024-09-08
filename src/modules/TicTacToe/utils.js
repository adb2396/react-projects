export const checkRowMatch = (playerMove) => {
	for (let i = 0; i < playerMove.length; i++) {
		let isRowMatch = true
		for (let j = 1; j < playerMove.length; j++) {
			if (!playerMove[i][j] || playerMove[i][j] !== playerMove[i][j - 1]) {
				isRowMatch = false
			}
		}

		if (isRowMatch) return isRowMatch
	}

	return false
}

export const checkColMatch = (playerMove) => {
	for (let i = 0; i < playerMove.length; i++) {
		let isColMatch = true
		for (let j = 1; j < playerMove[i].length; j++) {
			if (!playerMove[j][i] || playerMove[j][i] !== playerMove[j - 1][i]) {
				isColMatch = false
			}
		}

		if (isColMatch) return isColMatch
	}

	return false
}

export const checkLeftDiagonalMatch = (playerMove) => {
	let i = 1,
		j = 1
	let leftDiagMatch = true

	while (i < playerMove.length && j < playerMove.length) {
		if (!playerMove[i][j] || playerMove[i][j] !== playerMove[i - 1][j - 1]) {
			leftDiagMatch = false
		}
		i++
		j++
	}

	return leftDiagMatch
}

export const checkRightDiagonalMatch = (playerMove) => {
	let i = 1
	let j = playerMove.length - 2
	let rightDiagMatch = true

	while (i < playerMove.length && j >= 0) {
		if (!playerMove[i][j] || playerMove[i][j] !== playerMove[i - 1][j + 1]) {
			rightDiagMatch = false
		}

		i++
		j--
	}

	return rightDiagMatch
}
