import classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import { createPortal } from 'react-dom'
import { Fragment } from 'react/jsx-runtime'

interface DialogProps {
	children: React.ReactNode
	containerClassName: string
}

const backdrop = {
	visible: { opacity: 1 },
	hidden: { opacity: 0 },
}

const modal = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: { delay: 0.1 },
	},
}

export default function CustomDialog({
	children,
	containerClassName,
}: DialogProps) {
	const containerClass = classNames('rounded-lg relative', containerClassName)

	return (
		<AnimatePresence>
			<Fragment>
				{createPortal(
					<motion.div
						animate="visible"
						className="fixed inset-0 bg-black/20 z-50 w-full h-full place-items-center grid"
						exit="hidden"
						id="modal"
						initial="hidden"
						variants={backdrop}>
						<motion.div className={containerClass} variants={modal}>
							{children}
						</motion.div>
					</motion.div>,
					document.body
				)}
			</Fragment>
		</AnimatePresence>
	)
}
