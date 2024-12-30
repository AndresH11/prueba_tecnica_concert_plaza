import { graphqlClient } from '../../../app/config/graphqlClient'
import { handleError } from '../../../core/errors/handler-error'
import { AnimeModel, Media } from '../../../core/types/animeType'
import { GET_ANIME_BY_FILTER } from '../graphql/queries/queryFilter'

export interface IfilteredData {
	format: string | null
	genre: string | null
	page: number
	perPage: number
	search: string | null
	status: string
}

export async function filteredData(
	data: IfilteredData | undefined
): Promise<Media[]> {
	if (data == undefined) return []
	try {
		const animes = (await graphqlClient.request(GET_ANIME_BY_FILTER, {
			page: data.page,
			perPage: data.perPage,
			status: data.status,
			search: data.search!.length > 0 ? data.search : null,
			format: data.format,
			genre: data.genre,
		})) as AnimeModel

		return animes.Page.media
	} catch (error) {
		throw handleError(error)
	}
}
