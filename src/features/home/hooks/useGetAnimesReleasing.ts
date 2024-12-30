import { useState } from 'react'
import { useQuery } from 'react-query'

import { Media } from '../../../core/types/animeType'
import { getAnimesReleasing } from '../services/getAnimesReleasing.service'
import { animeQueryKeys } from './query-keys'

export function useGetAnimesReleasing() {
	const [page, setPage] = useState<number>(1)

	const { data, isLoading, isError, isSuccess } = useQuery<Media[]>({
		queryKey: animeQueryKeys.paginated({
			key: animeQueryKeys.allAnimesReleasing(),
			page: page,
		}),
		queryFn: async () => getAnimesReleasing({ page: page }),
	})

	return { data, isLoading, isError, isSuccess, page, setPage }
}
