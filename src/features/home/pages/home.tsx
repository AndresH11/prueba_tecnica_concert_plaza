import { Fragment, useRef } from 'react'
import { CgSearch } from 'react-icons/cg'
import { Outlet } from 'react-router'
import { SelectInstance } from 'react-select'

import { getRandomNumber } from '../../../core/utils/randomNumber'
import { CustomViewStatus } from '../../../shared/components/customViewStatus'
import { CustomSelect } from '../../../shared/components/selects/customSelect'
import { Banner } from '../components/banner'
import { ViewFilter } from '../components/viewFilter'
import { ViewMain } from '../components/viewMain'
import {
	SELECT_FORMAT_OPTIONS,
	SELECT_GENRES_OPTIONS,
	SELECT_STATUS_OPTIONS,
} from '../constants/select'
import { useFilteredData } from '../hooks/useFilteredData'
import { useGetAnimesPopulate } from '../hooks/useGetAnimesPopulate'

export default function Home() {
	const getAnimePopulate = useGetAnimesPopulate()

	const {
		data,
		onFilter,
		setPage,
		page,
		onClean,
		isFilter,
		isError,
		isLoading,
	} = useFilteredData()

	const filterRefs = useRef({
		search: null as HTMLInputElement | null,
		genre: null as SelectInstance<{ value: string; label: string }> | null,
		status: null as SelectInstance<{ value: string; label: string }> | null,
		format: null as SelectInstance<{ value: string; label: string }> | null,
	})

	const randomNumber = getRandomNumber(0, 10)

	const onoFilter = () => {
		const genre =
			filterRefs.current.genre?.state.ariaSelection?.value?.label ?? null
		const status =
			filterRefs.current.status?.state.ariaSelection?.value?.label ?? null
		const format =
			filterRefs.current.format?.state.ariaSelection?.value?.label ?? null
		const search = filterRefs.current.search?.value ?? null
		onFilter(status!, format!, genre!, search!)
	}

	const handleClear = () => {
		if (filterRefs.current.search) filterRefs.current.search.value = ''
		if (filterRefs.current.genre) filterRefs.current.genre.clearValue()
		if (filterRefs.current.status) filterRefs.current.status.clearValue()
		if (filterRefs.current.format) filterRefs.current.format.clearValue()
		onClean()
	}

	return (
		<Fragment>
			{getAnimePopulate.data ? (
				<Banner {...getAnimePopulate.data[randomNumber]} />
			) : null}
			<main className="flex flex-col lg:flex-row bg-backgroundMain text-white overflow-hidden">
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
					<p className="text-base text-white font-bold">Formato</p>

					<CustomSelect
						menuPosition="fixed"
						options={SELECT_FORMAT_OPTIONS}
						ref={val => (filterRefs.current.format = val)}
					/>

					<div className="flex items-center gap-2">
						<button
							className="px-6 py-2 rounded-full  text-white bg-customYellow hover:bg-yellow-600"
							onClick={onoFilter}
							type="button">
							Filtrar
						</button>

						<button
							className="px-6 py-2 rounded-full  text-white bg-[#343434] hover:bg-gray-200 hover:text-[#343434]"
							onClick={handleClear}
							type="button">
							Limpiar
						</button>
					</div>
				</aside>
				<section className="p-4 flex-1 overflow-hidden">
					{isFilter ? (
						<CustomViewStatus isError={isError} isLoading={isLoading}>
							{data?.length != 0 ? (
								<ViewFilter
									data={data}
									onNexPage={() => setPage(page + 1)}
									onPreviousPage={() => setPage(page - 1)}
									page={page}
								/>
							) : (
								<p className="text-xl">No se encontró resultado</p>
							)}
						</CustomViewStatus>
					) : (
						<ViewMain />
					)}
				</section>
			</main>
			<Outlet />
		</Fragment>
	)
}
