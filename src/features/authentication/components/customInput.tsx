interface INPUT {
	error?: string
	props: React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	>
}

export function Input({ props, error }: INPUT) {
	return (
		<>
			<input
				className={`w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-customYellow ${
					error ? 'border-red-600 border-2' : null
				}`}
				{...props}
			/>
			{error ? <p className="text-red-600 font-bold text-sm">{error}</p> : null}
		</>
	)
}
