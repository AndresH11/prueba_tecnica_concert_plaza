import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router'
import { Fragment } from 'react/jsx-runtime'

import { DialogAuthentication } from '../features/authentication/components/dialogAuthentication'
import LoginPage from '../features/authentication/pages/loginPage'
import RegisterPage from '../features/authentication/pages/registerPage'
import { PATHS_AUTHENTICATION } from '../features/authentication/routes'
import DetailsPages from '../features/details/pages/detailsPage'
import FavouritePage from '../features/favourites/pages/favoutitePage'
import { PATHS_FAVOURITES } from '../features/favourites/routes'
import Home from '../features/home/pages/home'
import { ProtectedRoute } from '../shared/components/protectedRoute'
import { NotFound } from '../shared/components/ui/notFound'
import HomeLayout from '../shared/layouts/homeLayout'
import { PUBLIC_ROUTES } from './config/routes'

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Fragment>
			<Route element={<HomeLayout />} path={PUBLIC_ROUTES.home}>
				<Route element={<Home />} path={PUBLIC_ROUTES.home}>
					<Route
						element={<DialogAuthentication />}
						path={PATHS_AUTHENTICATION.summary}>
						<Route
							element={<LoginPage />}
							path={PATHS_AUTHENTICATION.Login()}
						/>
						<Route
							element={<RegisterPage />}
							path={PATHS_AUTHENTICATION.register()}
						/>
					</Route>
				</Route>
				<Route
					element={
						<ProtectedRoute>
							<FavouritePage />
						</ProtectedRoute>
					}
					path={PATHS_FAVOURITES.favourites}
				/>

				<Route element={<DetailsPages />} path={PUBLIC_ROUTES.details} />
			</Route>
			<Route element={<NotFound />} path="*" />
		</Fragment>
	)
)
