import { RoleInvalidError } from '../../../core/errors/custom_error'
import { handleError } from '../../../core/errors/handler-error'
import { User } from '../../../core/types/userType'
import { LoginData } from '../validators/formLoginValidator'

export const LoginService = async (data: LoginData): Promise<User> => {
	const promise = (ms: number) =>
		new Promise(resuelve => setTimeout(resuelve, ms))

	try {
		await promise(5000)

		const credential = localStorage.getItem(data.email)
		if (!credential) throw new RoleInvalidError('Invalid credentials')

		const user = JSON.parse(credential) as LoginData

		if (user.password !== data.password)
			throw new RoleInvalidError('Invalid credentials')

		return {
			id: 'soidjfsoidfjsdoifj',
			name: 'Andres',
			email: data.email,
			token: 'osjfsoifjsoid',
		}
	} catch (error) {
		handleError(error)
	}
}

/* 
  new Promise((resuelve, reject) =>
			setTimeout(() => {
				reject(new RoleInvalidError('No tienes permisos para acceder'))
			}, ms)
		)
  */
