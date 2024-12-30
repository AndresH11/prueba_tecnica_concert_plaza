import { motion } from 'framer-motion'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router'

import { logout } from '../../../app/slices/userSlice'
import { RootState } from '../../../app/store/userStore'
import { PATHS_AUTHENTICATION } from '../../../features/authentication/routes'
import { Dropdown } from './dropDown'

export function ProfileHeader() {
	const [openDropdown, setOpenDropdown] = useState(false)
	const dispatch = useDispatch()
	const { user, isLoggedIn } = useSelector((state: RootState) => state.user)

	const handleLogout = () => {
		dispatch(logout())
	}

	return (
		<section className="relative px-2">
			<motion.button
				className="flex items-center gap-2 px-4 py-1 rounded-3xl"
				onBlur={() => setOpenDropdown(false)}
				onFocus={() => setOpenDropdown(true)}
				whileHover={{
					scale: 1.05,
				}}>
				<img
					alt="Imagen de la persona autenticada"
					className="w-10 h-10 rounded-full"
					src="https://img.freepik.com/foto-gratis/ilustracion-fondo-abstracto-formas-diseno-multicolor-generadas-ia_188544-15582.jpg"
				/>
				<div className="hidden flex-col md:flex text-grayCustom text-darkText">
					<span className="font-semibold">{user?.name ?? 'Anonimo'}</span>
					<span className="text-sm font-medium">
						{user?.email ?? 'anonimo@anonimo.com'}
					</span>
				</div>
			</motion.button>
			<div className="absolute z-50 w-96 mr-2 md:mr-0 md:w-full top-full mt-3 right-1/2 translate-x-1/2  md:left-1/2 md:-translate-x-1/2">
				<Dropdown isOpen={openDropdown}>
					<div className="px-6 py-4 bg-black border rounded-md shadow-md bg-darkCustom border-none">
						<div className="pt-4">
							{!isLoggedIn ? (
								<NavLink
									className="text-sm font-semibold transition-colors whitespace-nowrap text-darkText"
									to={PATHS_AUTHENTICATION.Login()}>
									Iniciar sesion
								</NavLink>
							) : (
								<button
									className="text-sm font-semibold transition-colors whitespace-nowrap text-darkText"
									onClick={handleLogout}
									type="button">
									Cerrar Sesión
								</button>
							)}
						</div>
					</div>
				</Dropdown>
			</div>
		</section>
	)
}
