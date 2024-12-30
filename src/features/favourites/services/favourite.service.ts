import { Media } from '../../../core/types/animeType'

const FAVORITES_KEY = 'favorites'

const promise = (ms: number) =>
	new Promise(resuelve => setTimeout(resuelve, ms))

export async function saveFavorite(data: Media): Promise<void> {
	try {
		await promise(2000)
		const favoritesString = localStorage.getItem(FAVORITES_KEY) as string
		if (favoritesString) {
			const favoritesParse = JSON.parse(favoritesString) as Media[]
			favoritesParse.push(data)
			localStorage.setItem(FAVORITES_KEY, JSON.stringify(favoritesParse))
		} else {
			localStorage.setItem(FAVORITES_KEY, JSON.stringify([data]))
		}
	} catch (error) {
		throw new Error(error as string)
	}
}

export async function getFavorites(): Promise<Media[]> {
	try {
		await promise(2000)
		const favoritesString = localStorage.getItem(FAVORITES_KEY) as string
		if (!favoritesString) return []
		const data = JSON.parse(favoritesString) as Media[]
		return data
	} catch (error) {
		throw new Error(error as string)
	}
}

export async function deleteFavorite(id: number): Promise<void> {
	try {
		await promise(2000)
		const favoritesString = localStorage.getItem(FAVORITES_KEY) as string
		if (favoritesString) {
			const favoritesParse = JSON.parse(favoritesString) as Media[]
			const favoritesFilter = favoritesParse.filter(item => item.id !== id)
			localStorage.setItem(FAVORITES_KEY, JSON.stringify(favoritesFilter))
		}
	} catch (error) {
		throw new Error(error as string)
	}
}
