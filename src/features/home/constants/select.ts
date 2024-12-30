export const STATUS = [
	'CANCELLED',
	'FINISHED',
	'HIATUS',
	'NOT_YET_RELEASED',
	'RELEASING',
]

const GENRES = [
	'Action',
	'Comedy',
	'Sports',
	'Drama',
	'Romance',
	'Slice of Life',
	'Horror',
	'Mystery',
	'Psychological',
	'Thriller',
	'Adventure',
	'Fantasy',
	'Supernatural',
	'Ecchi',
	'Sci-Fi',
	'Mecha',
]

const FORMAT = [
	'MANGA',
	'MOVIE',
	'MUSIC',
	'NOVEL',
	'ONA',
	'ONE_SHOT',
	'OVA',
	'SPECIAL',
	'TV',
	'TV_SHORT',
]

export const SELECT_STATUS_OPTIONS = STATUS.map(status => ({
	value: status,
	label: status,
}))

export const SELECT_GENRES_OPTIONS = GENRES.map(status => ({
	value: status,
	label: status,
}))
export const SELECT_FORMAT_OPTIONS = FORMAT.map(status => ({
	value: status,
	label: status,
}))
