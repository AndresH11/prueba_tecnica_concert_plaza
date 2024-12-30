import Lottie from 'lottie-react'

import loader from './loading.json'

export function Loader({
	center = false,
	className,
}: {
	center?: boolean
	className?: string
}) {
	return (
		<div className={`flex justify-center ${center ? 'items-center' : ''}`}>
			<Lottie animationData={loader} className={className ?? 'w-28'} />
		</div>
	)
}
