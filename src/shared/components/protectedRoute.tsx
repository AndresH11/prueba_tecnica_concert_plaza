import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'

import { RootState } from '../../app/store/userStore'

//import { useAuth } from '@/context/auth/AuthContext'
//import { useResidentialComplex } from '@/features/ResidentialComplex/hooks/useResidentialComplex'

//import { Loader } from './ui/Lotties/Loader'

export function ProtectedRoute({
	children,
}: {
	children: JSX.Element
}): JSX.Element {
	const { user, isLoggedIn } = useSelector((state: RootState) => state.user)

	if (!isLoggedIn && !user) {
		return <Navigate replace to="/" />
	}
	return children
}
