import { handleError } from '../../../core/errors/handler-error'
import { RegisterData } from '../validators/formRegisterValidator'

export const registerService = async (data: RegisterData): Promise<void> => {
	const promise = (ms: number) =>
		new Promise(resuelve => setTimeout(resuelve, ms))

	localStorage.setItem(data.email, JSON.stringify(data))

	try {
		await promise(5000)
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
