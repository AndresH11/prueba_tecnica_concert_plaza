import { valibotResolver } from '@hookform/resolvers/valibot'
import { useMemo } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Form } from 'react-router'

import { Input } from '../components/customInput'
import { useLogin } from '../hooks/useLogin'
import { LoginData, LoginSchema } from '../validators/formLoginValidator'

export default function LoginPage() {
	const { onMutation } = useLogin()
	const schema = useMemo(() => LoginSchema, [])
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginData>({ resolver: valibotResolver(schema) })

	const onSubmit: SubmitHandler<LoginData> = data => onMutation(data)

	return (
		<div className="max-w-96 mx-auto">
			<h3 className="text-lg font-semibold text-white mb-4">
				We love having you back
			</h3>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<div className="mb-4">
					<label className="block text-white mb-2" htmlFor="email">
						Email
					</label>
					<Input
						error={errors.email?.message}
						props={{
							id: 'email',
							placeholder: 'Enter your email',
							type: 'email',
							...register('email'),
						}}
					/>
				</div>
				<div className="mb-6">
					<label className="block text-white mb-2" htmlFor="password">
						Password
					</label>

					<Input
						error={errors.password?.message}
						props={{
							id: 'password',
							placeholder: 'Enter your password',
							type: 'password',
							...register('password'),
						}}
					/>
				</div>
				<button
					className="w-full bg-customYellow text-white py-3 rounded-lg hover:bg-yellow-600"
					type="submit">
					Loguear
				</button>
			</Form>
			<p className="text-center text-white text-sm mt-4">
				For any questions, reach out to{' '}
				<a
					className="text-customYellow underline"
					href="mailto:support@quickbetmovies.com">
					support@quickbetmovies.com
				</a>
			</p>
		</div>
	)
}
