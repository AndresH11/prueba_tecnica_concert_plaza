import { graphqlClient } from '../../../app/config/graphqlClient'
import { handleError } from '../../../core/errors/handler-error'
import { AnimeModel, Media } from '../../../core/types/animeType'
import { MediaSort } from '../constants/mediaSort'
import { GET_ANIMES } from '../graphql/queries/queryAnime'

interface QUERYGETANIME {
	page: number
}

export const getAnimesTopRated = async ({
	page,
}: QUERYGETANIME): Promise<Media[]> => {
	try {
		const animes = (await graphqlClient.request(GET_ANIMES, {
			page,
			perPage: 10,
			sort: MediaSort.SCORE_DESC,
			status: null,
		})) as AnimeModel

		return animes.Page.media
	} catch (error) {
		throw handleError(error)
	}
}
