import { useState } from 'react'
import { useQuery } from 'react-query'

import { Media } from '../../../core/types/animeType'
import { getAnimesLastUpdate } from '../services/getAnimesLastUpdate.service'
import { animeQueryKeys } from './query-keys'

export function useGetAnimesLastUpdate() {
	const [page, setPage] = useState<number>(1)
	const { data, isLoading, isError, isSuccess } = useQuery<Media[]>({
		queryKey: animeQueryKeys.paginated({
			key: animeQueryKeys.allAnimesLastUpdate(),
			page: page,
		}),
		queryFn: async () => getAnimesLastUpdate({ page: page }),
	})
	return { data, isLoading, isError, isSuccess, page, setPage }
}
