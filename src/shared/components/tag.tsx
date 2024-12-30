import classNames from 'classnames'

interface TagProps {
	children: React.ReactNode
	className?: string
	icon?: React.ReactNode
}

export function Tag({ children, className, icon: Icon }: TagProps) {
	const customClass = classNames(
		'py-1 px-3 items-center inline-flex text-xs font-semibold whitespace-nowrap rounded-md gap-1',
		className
	)

	return (
		<div className={customClass}>
			{Icon}
			{children}
		</div>
	)
}
