import toast from 'react-hot-toast'
import { useMutation } from 'react-query'

import { queryClient } from '../../../app/config/reactQueryClient'
import { Media } from '../../../core/types/animeType'
import { saveFavorite } from '../services/favourite.service'
import { favouritesQueryKeys } from './query-keys'

export function useSaveFavorite() {
	const mutation = useMutation(saveFavorite, {
		onError() {
			toast.error('hubo un error, contacte al servicio tecnico')
		},
		onSuccess() {
			toast.success('Se ha guardado')
			queryClient.invalidateQueries(favouritesQueryKeys.all())
		},
		onMutate() {
			toast.loading('Cargando...')
		},
	})

	const onSave = (data: Media) => {
		mutation.mutate(data)
	}

	return { onSave }
}
