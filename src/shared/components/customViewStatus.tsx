import { Loader } from '../../assets/lottie/loader'

interface CUSTOMVIEWSTATUS {
	children: React.ReactNode
	isError: boolean
	isLoading: boolean
}

export function CustomViewStatus({
	isError,
	isLoading,
	children,
}: CUSTOMVIEWSTATUS) {
	if (isLoading) return <Loader className="w-screen h-screen" />
	if (isError)
		return (
			<div className="h-screen w-screen flex justify-center items-center">
				<p className="text-xl text-white">
					Hubo un error contacte a servicios técnico
				</p>
			</div>
		)

	return children
}
