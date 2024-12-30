import { GraphQLClient } from 'graphql-request'

const endPoint = 'https://graphql.anilist.co'

export const graphqlClient = new GraphQLClient(endPoint, {
	cache: 'default',
	method: 'POST',
	excludeOperationName: true,
})
