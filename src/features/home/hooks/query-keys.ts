import { IfilteredData } from '../services/filteredData.service'

interface IPaginated {
	key: string[]
	page: number
}

interface IAnimeFiltered {
	filters: IfilteredData | undefined
	page: number
}

export const animeQueryKeys = {
	allAnimesLastUpdate: () => ['animes_lasUpdate'],
	allAnimesPopulate: () => ['animes_polulate'],
	allAnimesReleasing: () => ['animes_releasing'],
	allAnimesTopRated: () => ['animes_top_rate'],
	animeFiltered: ({ page, filters }: IAnimeFiltered) =>
		['anime_filtered', page, filters] as const,
	paginated: ({ key, page }: IPaginated) => [key, page] as const,
}
