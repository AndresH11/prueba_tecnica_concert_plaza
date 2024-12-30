import { Fragment } from 'react/jsx-runtime'

import { Media } from '../../../core/types/animeType'
import PrimaryButton from '../../../shared/components/buttons/primaryButton'
import SecondaryButton from '../../../shared/components/buttons/secondaryButton'
import { CardItemAnime } from '../../../shared/components/cardItemAnime'
import { useSaveFavorite } from '../../favourites/hooks/useSaveFavourite'

interface IViewFilter {
	data: Media[] | undefined
	onNexPage: () => void
	onPreviousPage: () => void
	page: number
}

export function ViewFilter({
	data,
	onNexPage,
	onPreviousPage,
	page,
}: IViewFilter) {
	const { onSave } = useSaveFavorite()

	return (
		<Fragment>
			<div className="flex items-center gap-2 mb-2">
				<SecondaryButton disabled={page === 1} onClick={onPreviousPage}>
					Anterior
				</SecondaryButton>
				<span>Page: {page}</span>
				<PrimaryButton disabled={page === 5} onClick={onNexPage}>
					Siguiente
				</PrimaryButton>
			</div>
			<h1 className="text-3xl font-bold mb-4">Filtro</h1>
			<div className="flex flex-wrap gap-4 pb-4">
				{data?.map(anime => (
					<CardItemAnime fun={onSave} genericData={anime} key={anime.id} />
				))}
			</div>
		</Fragment>
	)
}
