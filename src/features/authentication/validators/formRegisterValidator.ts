import {
	email,
	InferOutput,
	minLength,
	object,
	parse,
	pipe,
	string,
	trim,
} from 'valibot'

export const RegisterSchema = object({
	email: pipe(
		string('Solo se permite datos de tipo string'),
		minLength(8, 'El email debe tener mas de 8 caracteres'),
		trim(),
		email('El email no es valido')
	),
	password: pipe(
		string('Solo se permite datos de tipo string'),
		minLength(8, 'La contraseña debe terner mas de 8 caracteres'),
		trim()
	),
})

export type RegisterData = InferOutput<typeof RegisterSchema>

// Throws error for `email` and `password`
//parse(LoginSchema, { email: '', password: '' })

// Returns data as { email: string; password: string }
parse(RegisterSchema, {
	email: 'example@example.com',
	password: '*************',
})
