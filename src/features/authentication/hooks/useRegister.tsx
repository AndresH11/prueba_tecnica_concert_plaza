import toast from 'react-hot-toast'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router'

import { PATHS_AUTHENTICATION } from '../routes'
import { registerService } from '../services/register.service'
import { LoginData } from '../validators/formLoginValidator'

export function useRegister() {
	const navigate = useNavigate()

	const mutation = useMutation(registerService, {
		onError(error) {
			const err = error as Error
			toast.error(err.message)
		},
		onSuccess() {
			toast.success(`Se ha resgistrado con exito`)
			navigate(PATHS_AUTHENTICATION.Login(), { replace: true })
		},
		onMutate() {
			toast.loading('Cargando...')
		},
	})

	const onMutation = (data: LoginData) => {
		mutation.mutate(data)
	}

	return { onMutation }
}
