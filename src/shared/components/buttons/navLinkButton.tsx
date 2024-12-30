import { NavLink, NavLinkRenderProps } from 'react-router'

interface NAVLINKBUTTON {
	path: string
	text: string
}

export function NavLinkButton({ path, text }: NAVLINKBUTTON) {
	const styleNavLink = ({ isActive }: NavLinkRenderProps) =>
		`px-6 py-2 rounded-full  text-white ${
			isActive
				? 'bg-customYellow hover:bg-yellow-600'
				: 'bg-[#343434] hover:bg-gray-200 hover:text-[#343434]'
		} `

	return (
		<NavLink className={styleNavLink} to={path}>
			{text}
		</NavLink>
	)
}
