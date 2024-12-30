import { useState } from 'react'
import { useQuery } from 'react-query'

import { Media } from '../../../core/types/animeType'
import { filteredData, IfilteredData } from '../services/filteredData.service'
import { animeQueryKeys } from './query-keys'

export function useFilteredData() {
	const [filters, setFilters] = useState<IfilteredData>()
	const [isFilter, setIsFilter] = useState<boolean>(false)
	const [page, setPage] = useState<number>(1)
	const query = useQuery<Media[]>({
		queryKey: animeQueryKeys.animeFiltered({ page: page, filters: filters }),
		queryFn: async () => filteredData(filters),
	})

	const onFilter = (
		status: string,
		format: string,
		genre: string,
		search: string
	) => {
		const filter: IfilteredData = {
			search,
			page: page,
			perPage: 5,
			status: status ?? 'FINISHED',
			format: format ?? null,
			genre: genre ?? null,
		}

		setIsFilter(true)

		setFilters(filter)
	}

	const onClean = () => {
		const filter: IfilteredData = {
			search: null,
			page: 1,
			perPage: 5,
			status: 'FINISHED',
			format: null,
			genre: null,
		}
		setIsFilter(false)
		setFilters(filter)
	}

	return { ...query, filters, setPage, page, onFilter, onClean, isFilter }
}
