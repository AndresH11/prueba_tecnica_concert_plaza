import { IoArrowBackCircleOutline } from 'react-icons/io5'
import { Outlet, useLocation, useNavigate } from 'react-router'

import { PATH_PREFIX_HOME } from '../../../app/constants/pathsPrefixConstant'
import { NavLinkButton } from '../../../shared/components/buttons/navLinkButton'

export default function LoginLayout() {
	const navigate = useNavigate()
	const locacion = useLocation()

	const toHomeNavigation = () => {
		navigate(PATH_PREFIX_HOME)
	}

	const imageName =
		locacion.pathname === '/authentication/register' ? 'image1' : 'image2'

	return (
		<div className="max-w-4xl bg-black/10 backdrop-blur-sm rounded-3xl border border-white grid grid-cols-2 p-6">
			<section>
				<span className="text-white font-bold text-sm hover:text-customYellow">
					<button onClick={toHomeNavigation} type="button">
						<IoArrowBackCircleOutline className="inline" size={20} /> Back
					</button>
				</span>
				<div className="flex justify-center items-center mb-8 space-x-2 rounded-full mt-4">
					<NavLinkButton
						path={`${PATH_PREFIX_HOME}authentication/register`}
						text="Sign up"
					/>
					<NavLinkButton
						path={`${PATH_PREFIX_HOME}authentication/login`}
						text="Log In"
					/>
				</div>
				<Outlet />
			</section>
			<section className="bg-backgroundInput justify-items-center px-10 pt-10 rounded-r-3xl relative overflow-hidden">
				<h2 className="text-4xl font-bold mb-4 text-white">
					Welcome back to{' '}
					<span className="text-customYellow">Quickbet Movies!</span>
				</h2>
				<p className="text-white mb-8 text-xl">
					🎬 Ready to dive into the world of unlimited entertainment? Enter your
					credentials and let the cinematic adventure begin!
				</p>
				<img
					alt="figure"
					className="absolute -bottom-52 right-0 left-0"
					loading="lazy"
					src={`/public/images/${imageName}.webp`}
				/>
			</section>
		</div>
	)
}
