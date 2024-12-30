import { gql } from 'graphql-request'

export const GET_ANIME_BY_FILTER = gql`
	query (
		$page: Int
		$perPage: Int
		$search: String
		$format: MediaFormat
		$status: MediaStatus
		$genre: String
	) {
		Page(page: $page, perPage: $perPage) {
			media(search: $search, format: $format, status: $status, genre: $genre) {
				id
				title {
					english
				}
				coverImage {
					medium
				}
				bannerImage
				description
				updatedAt
				meanScore
				status
				episodes
				genres
				season
				siteUrl
				format
				startDate {
					year
				}
				endDate {
					year
				}
			}
		}
	}
`
