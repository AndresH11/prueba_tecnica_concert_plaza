import { lazy } from 'react'

import { PATH_PREFIX_HOME } from '../../app/constants/pathsPrefixConstant'
import { Route } from '../../core/types/routesTypes'
import { DialogAuthentication } from './components/dialogAuthentication'

const PATH_PREFIX_AUTHENTICATION = 'authentication'

export const PATHS_AUTHENTICATION = {
	summary: `${PATH_PREFIX_HOME}${PATH_PREFIX_AUTHENTICATION}` as const,
	Login: () => `${PATHS_AUTHENTICATION.summary}/login` as const,
	register: () => `${PATHS_AUTHENTICATION.summary}/register` as const,
}

export const authenticationRoutes: Route[] = [
	{
		key: 'route-authentication',
		path: `${PATHS_AUTHENTICATION.summary}`,
		Component: DialogAuthentication,
		children: [
			{
				key: 'route-authentication-login',
				path: PATHS_AUTHENTICATION.Login(),
				Component: lazy(() => import('./pages/loginPage')),
			},
			{
				key: 'route-authentication-register',
				path: PATHS_AUTHENTICATION.register(),
				Component: lazy(() => import('./pages/registerPage')),
			},
		],
	},
]
