export type DetailsType = {
	readonly Media: Media
}

type Media = {
	readonly id: number
	readonly title: Title
	readonly coverImage: CoverImage
	readonly bannerImage: null
	readonly description: string
	readonly meanScore: number
	readonly status: null
	readonly episodes: null
	readonly genres: string[]
	readonly season: null
	readonly siteUrl: string
	readonly endDate: EndDate
	readonly startDate: StartDate
	readonly format: string
	readonly studios: Studios
	readonly relations: Relations
}

type CoverImage = {
	readonly medium: string
}

type EndDate = {
	readonly year: number
}

type StartDate = {
	readonly year: number
}

type Relations = {
	readonly edges: Edge[]
}

type Edge = {
	readonly node: Node
}

type Node = {
	readonly media: MediaClass
}

type MediaClass = {
	readonly id: number
	readonly title: Title
	readonly format: string
	readonly episodes: null | number
	readonly status: null | string
	readonly meanScore: number
	readonly description: string | null
	readonly bannerImage: null
	readonly coverImage: CoverImage
	readonly updatedAt: number
}

type Title = {
	readonly english: string | null
}

type Studios = {
	nodes: Nodes[]
}

type Nodes = {
	name: string
}
