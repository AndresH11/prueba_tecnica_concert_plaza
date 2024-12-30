import { useLocation } from 'react-router'
import { Fragment } from 'react/jsx-runtime'

import { CardItemAnime } from '../../../shared/components/cardItemAnime'
import { CustomViewStatus } from '../../../shared/components/customViewStatus'
import { useSaveFavorite } from '../../favourites/hooks/useSaveFavourite'
import { BannerDetails } from '../components/bannerDetail'
import { useGetDetails } from '../hooks/useGetDetails'
import { DetailsType } from '../types/detailsType'

export default function DetailsPages() {
	const location = useLocation()
	const id = location.search.split('?')[1]

	const { data, isError, isLoading } = useGetDetails(Number(id))

	return (
		<CustomViewStatus isError={isError} isLoading={isLoading}>
			<div className="bg-backgroundMain text-white">
				<BannerDetails {...data!} />
			</div>
			<div className="px-10 pt-4 bg-backgroundMain text-white">
				<SectionAnime animeList={data!} title="Relacionados" />
			</div>
		</CustomViewStatus>
	)
}

interface SECTIONANIME {
	animeList: DetailsType
	title: string
}

const SectionAnime = ({ animeList, title }: SECTIONANIME) => {
	const { onSave } = useSaveFavorite()
	return (
		<Fragment>
			<h2 className="text-2xl font-bold mb-4">{title}</h2>
			<div className="flex flex-wrap gap-4 pb-4">
				{animeList.Media.relations.edges.length > 0 ? (
					animeList.Media.relations.edges.map(anime => (
						<CardItemAnime
							fun={onSave}
							genericData={anime.node}
							key={anime.node.media?.id}
						/>
					))
				) : (
					<p>No hay relacionados</p>
				)}
			</div>
		</Fragment>
	)
}
