import { useState } from 'react'
import { useQuery } from 'react-query'

import { Media } from '../../../core/types/animeType'
import { getAnimesTopRated } from '../services/getAnimesTopRated.service'
import { animeQueryKeys } from './query-keys'

export function useGetAnimesTopRated() {
	const [page, setPage] = useState<number>(1)

	const { data, isLoading, isError, isSuccess } = useQuery<Media[]>({
		queryKey: animeQueryKeys.paginated({
			key: animeQueryKeys.allAnimesTopRated(),
			page: page,
		}),
		queryFn: async () => getAnimesTopRated({ page: page }),
	})

	return { data, isLoading, isError, isSuccess, page, setPage }
}
