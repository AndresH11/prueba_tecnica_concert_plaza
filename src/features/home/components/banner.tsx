import { CircularProgressbar } from 'react-circular-progressbar'
import { FaHeart } from 'react-icons/fa'

import { Media } from '../../../core/types/animeType'

export const Banner = (props: Media) => {
	return (
		<div className="relative w-full h-[436px] pb-10">
			{/* Imagen de fondo con difuminado */}
			<div
				className="absolute inset-0 bg-cover bg-center"
				style={{
					backgroundImage: `url(${props.bannerImage})`, // Cambia esta ruta por la de tu imagen
				}}>
				<div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/50 to-transparent"></div>
			</div>

			{/* Contenido del banner */}
			<div className="relative z-10 h-full flex items-center px-6">
				<div className=" text-white space-y-4 absolute bottom-0 left-0 right-0 flex items-center justify-between px-10 flex-wrap lg:flex-nowrap">
					<div className="max-w-2xl text-4xl">
						<h1 className="mb-4 font-bold ">
							{props.title.english ?? 'Sin titulo'}
						</h1>
						<p className="text-sm h-40 overflow-hidden text-ellipsis whitespace-break-spaces">
							{props.description}
						</p>
					</div>
					<div className="flex items-center space-x-12">
						<FaHeart color="#FFFFFF" size={36} />
						<CircularProgressbar
							backgroundPadding={0}
							className="w-20 h-20"
							maxValue={100}
							text={`${props.meanScore}%`}
							value={props.meanScore}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
