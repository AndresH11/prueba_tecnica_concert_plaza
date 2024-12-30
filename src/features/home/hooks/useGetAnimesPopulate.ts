import { useState } from 'react'
import { useQuery } from 'react-query'

import { Media } from '../../../core/types/animeType'
import { getAnimesPolulate } from '../services/getAnimesPopulate.service'
import { animeQueryKeys } from './query-keys'

export function useGetAnimesPopulate() {
	const [page, setPage] = useState<number>(1)
	const { data, isLoading, isError, isSuccess } = useQuery<Media[]>({
		queryKey: animeQueryKeys.paginated({
			key: animeQueryKeys.allAnimesPopulate(),
			page: page,
		}),
		queryFn: async () => getAnimesPolulate({ page: page }),
	})

	return { data, isLoading, isError, isSuccess, page, setPage }
}
