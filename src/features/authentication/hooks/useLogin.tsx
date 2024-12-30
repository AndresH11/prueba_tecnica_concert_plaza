import toast from 'react-hot-toast'
import { useMutation } from 'react-query'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'

import { PATH_PREFIX_HOME } from '../../../app/constants/pathsPrefixConstant'
import { login } from '../../../app/slices/userSlice'
import { LoginService } from '../services/login.service'
import { LoginData } from '../validators/formLoginValidator'

export function useLogin() {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const mutation = useMutation(LoginService, {
		onError(error) {
			const err = error as Error
			toast.error(err.message)
		},
		onSuccess(data) {
			dispatch(login(data))
			toast.success(`Bienvenido ${data.name}`)
			navigate(PATH_PREFIX_HOME, { replace: true })
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
