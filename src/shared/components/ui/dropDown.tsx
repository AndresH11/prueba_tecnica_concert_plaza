import { AnimatePresence, motion } from 'framer-motion'

interface DropdownProps {
	children: React.ReactNode
	isOpen: boolean
}

const dropdown = {
	visible: { opacity: 1 },
	hidden: { opacity: 0 },
}

export function Dropdown({ isOpen, children }: DropdownProps) {
	return (
		<AnimatePresence>
			{isOpen ? (
				<motion.div
					animate="visible"
					exit="hidden"
					initial="hidden"
					variants={dropdown}>
					{children}
				</motion.div>
			) : null}
		</AnimatePresence>
	)
}
