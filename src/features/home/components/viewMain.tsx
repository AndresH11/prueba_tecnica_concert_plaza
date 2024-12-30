import { CustomViewStatus } from '../../../shared/components/customViewStatus'
import { useSaveFavorite } from '../../favourites/hooks/useSaveFavourite'
import { useGetAnimesLastUpdate } from '../hooks/useGetAnimesLastUpdate'
import { useGetAnimesPopulate } from '../hooks/useGetAnimesPopulate'
import { useGetAnimesReleasing } from '../hooks/useGetAnimesReleasing'
import { useGetAnimesTopRated } from '../hooks/useGetAnimesTopRated'
import { PaginatedSection } from './paginatedSection'

export function ViewMain() {
	const getAnimePopulate = useGetAnimesPopulate()
	const getAnimeLastUdate = useGetAnimesLastUpdate()
	const getAnimeteFinished = useGetAnimesReleasing()
	const getAnimeTopRated = useGetAnimesTopRated()

	const { onSave } = useSaveFavorite()

	const isLoadingg =
		getAnimePopulate.isLoading &&
		getAnimeLastUdate.isLoading &&
		getAnimeteFinished.isLoading &&
		getAnimeTopRated.isLoading

	const isErrorr =
		getAnimePopulate.isError ||
		getAnimeLastUdate.isError ||
		getAnimeteFinished.isError ||
		getAnimeTopRated.isError
	return (
		<CustomViewStatus isError={isErrorr} isLoading={isLoadingg}>
			<div className="space-y-8">
				<PaginatedSection
					data={getAnimePopulate.data!}
					isLoading={getAnimePopulate.isLoading}
					nextPage={() => getAnimePopulate.setPage(getAnimePopulate.page + 1)}
					onSave={onSave}
					page={getAnimePopulate.page}
					previousPage={() =>
						getAnimePopulate.setPage(getAnimePopulate.page - 1)
					}
					title="Popular"
				/>
				<PaginatedSection
					data={getAnimeLastUdate.data!}
					isLoading={getAnimeLastUdate.isLoading}
					nextPage={() => getAnimeLastUdate.setPage(getAnimeLastUdate.page + 1)}
					onSave={onSave}
					page={getAnimeLastUdate.page}
					previousPage={() =>
						getAnimeLastUdate.setPage(getAnimeLastUdate.page - 1)
					}
					title="Actualizado"
				/>

				<PaginatedSection
					data={getAnimeteFinished.data!}
					isLoading={getAnimeteFinished.isLoading}
					nextPage={() =>
						getAnimeteFinished.setPage(getAnimeteFinished.page + 1)
					}
					onSave={onSave}
					page={getAnimeteFinished.page}
					previousPage={() =>
						getAnimeteFinished.setPage(getAnimeteFinished.page - 1)
					}
					title="En emisión"
				/>
				<PaginatedSection
					data={getAnimeTopRated.data!}
					isLoading={getAnimeTopRated.isLoading}
					nextPage={() => getAnimeTopRated.setPage(getAnimeTopRated.page + 1)}
					onSave={onSave}
					page={getAnimeTopRated.page}
					previousPage={() =>
						getAnimeTopRated.setPage(getAnimeTopRated.page - 1)
					}
					title="Mejor valorado"
				/>
			</div>
		</CustomViewStatus>
	)
}
