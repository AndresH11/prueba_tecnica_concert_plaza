import { lazy } from 'react'

import { PATH_PREFIX_HOME } from '../../app/constants/pathsPrefixConstant'
import { Route } from '../../core/types/routesTypes'

const PATH_PREFIX_FAVOURITES = 'favourites'

export const PATHS_FAVOURITES = {
	favourites: `${PATH_PREFIX_HOME}${PATH_PREFIX_FAVOURITES}` as const,
}

export const favouriteRoutes: Route[] = [
	{
		key: 'route-favourite',
		path: PATHS_FAVOURITES.favourites,
		Component: lazy(() => import('./pages/favoutitePage')),
	},
]
