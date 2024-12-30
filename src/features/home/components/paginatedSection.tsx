import { Fragment } from 'react/jsx-runtime'

import { Loader } from '../../../assets/lottie/loader'
import { Media } from '../../../core/types/animeType'
import PrimaryButton from '../../../shared/components/buttons/primaryButton'
import SecondaryButton from '../../../shared/components/buttons/secondaryButton'
import { CardItemAnime } from '../../../shared/components/cardItemAnime'

interface SECTIONANIME {
	data: Media[]
	isLoading: boolean
	nextPage: () => void
	onSave: (data: Media) => void
	page: number
	previousPage: () => void
	title: string
}

export const PaginatedSection = ({
	title,
	data,
	isLoading,
	page,
	nextPage,
	previousPage,
	onSave,
}: SECTIONANIME) => (
	<Fragment>
		<div className="flex items-center justify-between flex-wrap">
			<h2 className="text-2xl font-bold mb-4">{title}</h2>
			<div className="flex items-center gap-2 mb-2">
				<SecondaryButton disabled={page === 1} onClick={previousPage}>
					Anterior
				</SecondaryButton>
				<span>Page: {page}</span>
				<PrimaryButton disabled={page === 5} onClick={nextPage}>
					Siguiente
				</PrimaryButton>
			</div>
		</div>
		<div className="flex space-x-4 pb-4 overflow-x-scroll scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-corner-rounded-full scrollbar-thumb-customYellow scrollbar-track-bgScrollBarTrack">
			{isLoading ? (
				<Loader />
			) : (
				data?.map(anime => (
					<CardItemAnime fun={onSave} genericData={anime} key={anime.id} />
				))
			)}
		</div>
	</Fragment>
)
