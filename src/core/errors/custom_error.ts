const createCustomError = function (name: string, defaultMessage?: string) {
	return class CustomError extends Error {
		constructor(message?: string) {
			super(defaultMessage ?? message)
			this.name = name
		}
	}
}

export const HttpsGraphQlError = createCustomError('HttpsGraphQlError')

export const RoleInvalidError = createCustomError(
	'No tienes acceso a la plataforma'
)
