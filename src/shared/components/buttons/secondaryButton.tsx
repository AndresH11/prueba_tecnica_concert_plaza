interface ISecondaryButton {
	children: React.ReactNode
	disabled?: boolean
	onClick: () => void
}

export default function SecondaryButton({
	children,
	disabled = false,
	onClick,
}: ISecondaryButton) {
	return (
		<button
			className="px-6 py-2 rounded-full  text-white bg-[#343434] hover:bg-gray-200 hover:text-[#343434]"
			disabled={disabled}
			onClick={onClick} //onClick={onClean}
			type="button">
			{children}
		</button>
	)
}
