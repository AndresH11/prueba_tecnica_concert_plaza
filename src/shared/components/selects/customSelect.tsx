/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Select from 'react-select'

export const CustomSelect = React.forwardRef<any, any>((props, ref) => {
	return (
		<Select
			className="text-sm capitalize font-medium w-full my-react-select-container"
			classNamePrefix="my-react-select"
			ref={ref}
			{...props}
			theme={theme => ({
				...theme,
				colors: {
					...theme.colors,
					primary: ' rgb(255 83 59)',
				},
			})}
		/>
	)
})
