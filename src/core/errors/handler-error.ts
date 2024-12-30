import { HttpsGraphQlError, RoleInvalidError } from './custom_error'

export function handleError(err: unknown, customMessage?: string): never {
	if (err instanceof HttpsGraphQlError) {
		throw err
	}

	if (err instanceof RoleInvalidError) {
		throw err
	}

	throw new Error(customMessage || 'Algo salio mal, contacte servicio técnico')
}
