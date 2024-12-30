import { gql } from 'graphql-request'

export const GET_DETAILS = gql`
	query ($mediaId: Int) {
		Media(id: $mediaId) {
			id
			title {
				english
			}
			coverImage {
				medium
			}
			bannerImage
			description
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
			studios {
				nodes {
					name
				}
			}
			relations {
				edges {
					node {
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
						coverImage {
							medium
						}
						updatedAt
					}
				}
			}
		}
	}
`
