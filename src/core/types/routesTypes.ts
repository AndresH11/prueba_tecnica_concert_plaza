type JSX = () => JSX.Element

export type Route = {
	Component: JSX | React.LazyExoticComponent<JSX>
	children?: Route[]
	key: string
	path: string
}
