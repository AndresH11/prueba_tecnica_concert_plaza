import './App.css'

import { Toaster } from 'react-hot-toast'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router'

import { queryClient } from './config/reactQueryClient'
import { router } from './router'
import { store } from './store/userStore'

function App() {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
				<Toaster
					position="top-right"
					toastOptions={{
						duration: 3000,
					}}
				/>
				<ReactQueryDevtools />
			</QueryClientProvider>
		</Provider>
	)
}

export default App
