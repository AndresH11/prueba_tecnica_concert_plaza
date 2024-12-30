import { Media } from '../types/animeType'

/**
 * Filtra una lista basada en criterios múltiples.
 * @param list - Lista de elementos a filtrar.
 * @param criteria - Criterios de filtrado.
 * @returns Una nueva lista que cumple con los criterios.
 */

export type FilterCriteria = {
	title?: string // Filtro parcial por nombre
	genres?: string[] // Género exacto
	status?: string // Estado
}

export function filterList(list: Media[], criteria: FilterCriteria): Media[] {
	return list.filter(item => {
		const matchesName = criteria.title
			? item.title.english?.toLowerCase().includes(criteria.title.toLowerCase())
			: true

		const matchesGender = criteria.genres
			? item.genres?.some(g => criteria.genres?.includes(g))
			: true

		const matchesState = criteria.status
			? item.status
					?.toLocaleLowerCase()
					.includes(criteria.status.toLocaleLowerCase())
			: true

		return matchesName && matchesGender && matchesState
	})
}
