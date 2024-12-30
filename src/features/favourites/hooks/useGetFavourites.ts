import { useQuery } from 'react-query'

import { getFavorites } from '../services/favourite.service'
import { favouritesQueryKeys } from './query-keys'

export function useGetFavorite() {
	const { data, isError, isLoading } = useQuery({
		queryKey: favouritesQueryKeys.all(),
		queryFn: getFavorites,
	})

	return { data, isError, isLoading }
}
