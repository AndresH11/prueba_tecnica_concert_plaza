import toast from 'react-hot-toast'
import { useMutation } from 'react-query'

import { queryClient } from '../../../app/config/reactQueryClient'
import { Media } from '../../../core/types/animeType'
import { deleteFavorite } from '../services/favourite.service'
import { favouritesQueryKeys } from './query-keys'

export function useDeleteFavorite() {
	const mutation = useMutation(deleteFavorite, {
		onError() {
			toast.error('hubo un error')
		},
		onSuccess() {
			toast.success('Se ha eliminado')
			queryClient.invalidateQueries(favouritesQueryKeys.all())
		},
		onMutate() {
			toast.loading('Cargando...')
		},
	})

	const onDelete = (data: Media) => {
		mutation.mutate(data.id)
	}

	return { onDelete }
}
