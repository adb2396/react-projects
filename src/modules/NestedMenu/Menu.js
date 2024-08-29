import { useState } from 'react'
import { FaCircleChevronDown, FaCircleChevronUp } from 'react-icons/fa6'
import './menu.styles.css'

function Menu({ list }) {
	const [currentChildren, setCurrChildren] = useState({})

	const handleToggle = (title) => {
		setCurrChildren((prevState) => ({
			...prevState,
			[title]: !prevState[title],
		}))
	}

	return (
		<ul className="list">
			{list.map((item) => (
				<li key={item.title}>
					<div className="list-item" onClick={() => handleToggle(item.title)}>
						{item.subMenu && (
							<span>
								{!currentChildren[item.title] > 0 ? (
									<FaCircleChevronDown />
								) : (
									<FaCircleChevronUp />
								)}
							</span>
						)}
						<p>
							<span>{item.title}</span>
						</p>
					</div>
					{item.subMenu &&
						item.subMenu.length > 0 &&
						currentChildren[item.title] && <Menu list={item.subMenu} />}
				</li>
			))}
		</ul>
	)
}

export default Menu
