import { Fragment } from 'react/jsx-runtime'

import { Media } from '../../../core/types/animeType'
import { CardItemAnime } from '../../../shared/components/cardItemAnime'
import { useDeleteFavorite } from '../hooks/useDeleteFavourite'

interface SECTIONANIME {
	animeList: Media[]

	title: string
}

export function SectionAnime({ animeList, title }: SECTIONANIME) {
	const { onDelete } = useDeleteFavorite()
	return (
		<Fragment>
			<h2 className="text-4xl font-bold">{title}</h2>
			<div className="flex items-center gap-5 flex-wrap pb-4 ">
				{animeList.map(anime => (
					<CardItemAnime fun={onDelete} genericData={anime} key={anime.id} />
				))}
			</div>
		</Fragment>
	)
}
