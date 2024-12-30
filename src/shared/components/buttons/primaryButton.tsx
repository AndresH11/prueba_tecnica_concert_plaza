interface IPrimaryButton {
	children: React.ReactNode
	disabled?: boolean
	onClick: () => void
}

export default function PrimaryButton({
	children,
	disabled = false,
	onClick,
}: IPrimaryButton) {
	return (
		<button
			className="px-6 py-2 rounded-full  text-white bg-customYellow hover:bg-yellow-600"
			disabled={disabled}
			onClick={onClick}
			type="button">
			{children}
		</button>
	)
}
