import { NavLink, NavLinkRenderProps, Outlet } from 'react-router'

import { PATH_PREFIX_HOME } from '../../app/constants/pathsPrefixConstant'
import { PATHS_FAVOURITES } from '../../features/favourites/routes'
import { ProfileHeader } from '../components/ui/profileHeader'

export default function HomeLayout() {
	const styleNavLink = ({ isActive }: NavLinkRenderProps) =>
		isActive
			? 'text-customYellow hover:text-gray-200'
			: 'text-white  hover:text-[#343434]'

	return (
		<div>
			<header className="bg-black text-customWhite flex justify-between items-center p-4">
				<div className="flex items-center space-x-24">
					<div className="text-xl font-bold">Quickbet</div>
					<nav className="flex space-x-4">
						<NavLink className={styleNavLink} to={PATH_PREFIX_HOME}>
							Home
						</NavLink>
						<NavLink className={styleNavLink} to={PATHS_FAVOURITES.favourites}>
							Favorites
						</NavLink>
					</nav>
				</div>
				<ProfileHeader />
			</header>
			<Outlet />
		</div>
	)
}
