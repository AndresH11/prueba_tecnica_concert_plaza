import { graphqlClient } from '../../../app/config/graphqlClient'
import { GET_DETAILS } from '../graphql/queries/detailsQuery'
import { DetailsType } from '../types/detailsType'

export async function getDetails(id: number): Promise<DetailsType> {
	try {
		const details = (await graphqlClient.request(GET_DETAILS, {
			mediaId: id,
		})) as DetailsType

		return details
	} catch (error) {
		throw new Error(error as string)
	}
}
