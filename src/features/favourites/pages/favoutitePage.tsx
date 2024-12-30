import { useRef, useState } from 'react'
import { CgSearch } from 'react-icons/cg'
import { SelectInstance } from 'react-select'

import { Media } from '../../../core/types/animeType'
import { FilterCriteria, filterList } from '../../../core/utils/filterList'
import PrimaryButton from '../../../shared/components/buttons/primaryButton'
import SecondaryButton from '../../../shared/components/buttons/secondaryButton'
import { CustomViewStatus } from '../../../shared/components/customViewStatus'
import { CustomSelect } from '../../../shared/components/selects/customSelect'
import {
	SELECT_GENRES_OPTIONS,
	SELECT_STATUS_OPTIONS,
} from '../../home/constants/select'
import { SectionAnime } from '../components/SectionAnime'
import { useGetFavorite } from '../hooks/useGetFavourites'
export default function FavouritePage() {
	const { data, isError, isLoading } = useGetFavorite()
	const [listFilter, setListFilter] = useState<Media[]>([])
	const [isFilter, setIsFilter] = useState<boolean>(false)

	const filterRefs = useRef({
		search: null as HTMLInputElement | null,
		genre: null as SelectInstance<{ value: string; label: string }> | null,
		status: null as SelectInstance<{ value: string; label: string }> | null,
	})

	const onFilter = () => {
		const genre =
			filterRefs.current.genre?.state.ariaSelection?.value?.label ?? null
		const status =
			filterRefs.current.status?.state.ariaSelection?.value?.label ?? undefined
		const search = filterRefs.current.search?.value ?? undefined

		const criteria: FilterCriteria = {
			title: search,
			genres: genre ? [genre] : undefined,
			status,
		}
		const result = filterList(data!, criteria)
		setIsFilter(true)
		setListFilter(result)
	}

	const handleClear = () => {
		if (filterRefs.current.search) filterRefs.current.search.value = ''
		if (filterRefs.current.genre) filterRefs.current.genre.clearValue()
		if (filterRefs.current.status) filterRefs.current.status.clearValue()
		setIsFilter(false)
		setListFilter([])
	}

	return (
		<main className="flex flex-col lg:flex-row bg-backgroundMain text-white overflow-hidden min-h-screen">
			{/* Sidebar */}
			<aside className="w-full lg:w-64 bg-backgroundAside space-x-0 p-4 flex flex-col space-y-4  lg:flex-col md:items-center lg:items-start lg:space-y-4 lg:space-x-0">
				<p className="text-base text-white font-bold">Buscar</p>
				<div className="flex justify-between items-center p-2 rounded-lg bg-[#1C1C1C] text-white placeholder-gray-400">
					<input
						className="bg-backgroundInput focus:outline-none w-full"
						placeholder="Search"
						ref={val => (filterRefs.current.search = val)}
						type="text"
					/>
					<CgSearch color="#F6F6F6" />
				</div>
				<p className="text-base text-white font-bold">Genero</p>
				<CustomSelect
					menuPosition="fixed"
					options={SELECT_GENRES_OPTIONS}
					ref={val => (filterRefs.current.genre = val)}
				/>

				<p className="text-base text-white font-bold">Estado</p>
				<CustomSelect
					menuPosition="fixed"
					options={SELECT_STATUS_OPTIONS}
					ref={val => (filterRefs.current.status = val)}
				/>

				<div className="flex items-center gap-2">
					<PrimaryButton onClick={onFilter}>Filtrar</PrimaryButton>

					<SecondaryButton onClick={handleClear}>Limpiar</SecondaryButton>
				</div>
			</aside>
			<section className="p-4 flex-1 overflow-hidden">
				<CustomViewStatus isError={isError} isLoading={isLoading}>
					{isFilter ? (
						listFilter.length > 0 ? (
							<SectionAnime animeList={listFilter} title="Favorites" />
						) : (
							<p className="text-xl">No se ha encontrado resultado</p>
						)
					) : (
						<SectionAnime animeList={data!} title="Favorites" />
					)}
				</CustomViewStatus>
			</section>
		</main>
	)
}
