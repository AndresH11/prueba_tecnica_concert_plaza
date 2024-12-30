export type AnimeModel = {
	Page: Page
}

type Page = {
	media: Media[]
}

export type Media = {
	id: number
	title: Title
	coverImage: CoverImage
	bannerImage: string
	format: string
	status: string
	meanScore: number
	description: string
	updatedAt: number
	startDate: EndDateClass
	endDate: EndDateClass
	genres: string[]
	episodes: number
	season: string
	studios: Studios
	siteUrl: string
}

type CoverImage = {
	medium: string
}

type EndDateClass = {
	year: number | null
}

type Title = {
	english: null | string
}

type Studios = {
	nodes: [
		{
			name: string
		}
	]
}
