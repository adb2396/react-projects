import React from 'react'
import data from './data.json'
import Menu from './Menu'

import './menu.styles.css'

function NestedMenu() {
	return (
		<div className="nested-menu-container">
			<h2>Menu</h2>
			<div className="menu-container">
				<Menu list={data.menu} />
			</div>
		</div>
	)
}

export default NestedMenu
