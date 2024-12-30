import { useQuery } from 'react-query'

import { getDetails } from '../services/getDetails.service'
import { DetailsType } from '../types/detailsType'
import { detailsQuerykey } from './query-keys'

export function useGetDetails(id: number) {
	const { data, isError, isLoading } = useQuery<DetailsType>({
		queryKey: detailsQuerykey.details(id),
		queryFn: async () => getDetails(id),
	})

	return { data, isError, isLoading }
}
