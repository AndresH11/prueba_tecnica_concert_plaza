import { Route } from '../../core/types/routesTypes'
import { favouriteRoutes } from '../../features/favourites/routes'
import {
	PATH_PREFIX_DETAILS,
	PATH_PREFIX_HOME,
} from '../constants/pathsPrefixConstant'

export const PUBLIC_ROUTES = {
	home: PATH_PREFIX_HOME,
	details: PATH_PREFIX_DETAILS,
}

export const protectedRoutes: Route[] = [...favouriteRoutes]
