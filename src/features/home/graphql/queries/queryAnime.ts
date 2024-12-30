import { gql } from 'graphql-request'

export const GET_ANIMES = gql`
	query ($page: Int, $perPage: Int, $sort: [MediaSort], $status: MediaStatus) {
		Page(page: $page, perPage: $perPage) {
			media(sort: $sort, status: $status) {
				id
				title {
					english
				}
				format
				episodes
				status
				meanScore
				description
				bannerImage
				updatedAt
				coverImage {
					medium
				}
				updatedAt
			}
		}
	}
`
