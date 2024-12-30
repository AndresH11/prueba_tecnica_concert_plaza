import { QueryClient } from 'react-query'

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			cacheTime: Infinity,
			refetchOnReconnect: false,
			refetchOnWindowFocus: false,
			retry: false,
			staleTime: Infinity,
		},
	},
})
