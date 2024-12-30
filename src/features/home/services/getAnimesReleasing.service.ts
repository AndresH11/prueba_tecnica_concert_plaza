import { graphqlClient } from '../../../app/config/graphqlClient'
import { MediaStatus } from '../../../core/constants/mediaStatus'
import { handleError } from '../../../core/errors/handler-error'
import { AnimeModel, Media } from '../../../core/types/animeType'
import { GET_ANIMES } from '../graphql/queries/queryAnime'

interface QUERYGETANIME {
	page: number
}

export const getAnimesReleasing = async ({
	page,
}: QUERYGETANIME): Promise<Media[]> => {
	try {
		const animes = (await graphqlClient.request(GET_ANIMES, {
			page,
			perPage: 10,
			status: MediaStatus.RELEASING,
			sort: null,
		})) as AnimeModel

		return animes.Page.media
	} catch (error) {
		throw handleError(error)
	}
}
