import { CircularProgressbar } from 'react-circular-progressbar'
import { FaHeart } from 'react-icons/fa'
import { IoIosArrowBack } from 'react-icons/io'
import { NavLink, useNavigate } from 'react-router'

import { PATH_PREFIX_HOME } from '../../../app/constants/pathsPrefixConstant'
import { Tag } from '../../../shared/components/tag'
import { DetailsType } from '../types/detailsType'

export const BannerDetails = (props: DetailsType) => {
	const navigate = useNavigate()

	const toNavigate = () => {
		navigate(PATH_PREFIX_HOME)
	}

	return (
		<div className="relative w-full  pb-10 place-content-center px-8">
			{/* Imagen de fondo con difuminado */}
			<div
				className="absolute inset-0 bg-cover bg-center"
				style={{
					backgroundImage: `url(${props.Media.bannerImage})`, // Cambia esta ruta por la de tu imagen
				}}>
				<div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/50 to-transparent"></div>
			</div>

			{/* Contenido del banner */}
			<button
				className="hover:text-customYellow relative text-white my-10"
				onClick={() => toNavigate()}
				type="button">
				<IoIosArrowBack size={35} />
			</button>
			<div className="text-white z-10 relative grid grid-cols-10">
				<div className="col-span-2 place-items-center hidden lg:block">
					<img
						alt="image"
						className="h-72 max-w-56"
						src={props.Media.coverImage?.medium}
					/>
					<NavLink
						className="w-full bg-customYellow text-center text-white py-3 rounded-lg hover:bg-yellow-600 max-w-56 mt-4 block"
						target="_blank"
						to={props.Media.siteUrl}
						type="submit">
						Continue
					</NavLink>
				</div>
				<div className="col-span-10 lg:col-span-8 px-7 lg:px-8 place-self-start max-w-5xl">
					<h1 className="text-4xl font-bold">
						{props.Media.title.english ?? 'Sin titulo'}
					</h1>
					<div className="text-sm font-normal flex space-x-4">
						<p>{props.Media.startDate.year ?? 'None'}</p>
						<p>-</p>
						<p>{props.Media.endDate.year ?? 'None'}</p>
					</div>
					<div className="my-2">
						<p className="text-xs font-normal">
							Formato:{' '}
							<b className="text-customYellow">
								{props.Media.format ?? 'None'}
							</b>
						</p>
						<p className="text-xs font-normal">
							Episodios:{' '}
							<b className="text-customYellow">
								{props.Media.episodes ?? 'None'}
							</b>
						</p>
						<p className="text-xs font-normal">
							Estado:{' '}
							<b className="text-customYellow">
								{props.Media.status ?? 'None'}
							</b>
						</p>
						<p className="text-xs font-normal">
							Temporada:{' '}
							<b className="text-customYellow">
								{props.Media.season ?? 'None'}
							</b>
						</p>
					</div>

					<div className="flex items-center gap-2 flex-wrap">
						<p className="text-lg font-normal">Estudios:</p>
						{props.Media.studios.nodes?.map(node => (
							<Tag className="text-[#F1CB51] text-sm border border-[#F1CB51]">
								{node.name}
							</Tag>
						))}
					</div>

					<p className="text-2xl font-bold">Overview:</p>
					<p className="text-sm font-normal h-40 overflow-hidden text-ellipsis">
						{props.Media.description ?? 'Sin descripción'}
					</p>
					<div className="flex justify-between items-center mt-10">
						<div className="flex justify-center items-center space-x-4">
							<CircularProgressbar
								backgroundPadding={0}
								className="w-20 h-20"
								maxValue={100}
								text={`${props.Media.meanScore}%`}
								value={props.Media.meanScore}
							/>
							<p className="text-sm font-bold">Users Score</p>
						</div>
						<FaHeart color="#FFFFFF" size={36} />
					</div>
					<div className="flex gap-4 flex-wrap max-w-lg justify-center items-center mx-auto mt-7">
						{props.Media.genres?.map((gen, index) => (
							<Tag
								className="text-[#F1CB51] text-sm border border-[#F1CB51]"
								key={index}>
								{gen}
							</Tag>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
