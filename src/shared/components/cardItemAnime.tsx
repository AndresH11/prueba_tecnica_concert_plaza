import { format } from '@formkit/tempo'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { FaHeart } from 'react-icons/fa'
import { NavLink } from 'react-router'

import { PATH_PREFIX_DETAILS } from '../../app/constants/pathsPrefixConstant'
import { Media } from '../../core/types/animeType'

interface CARDITEMANIME<T> {
	fun: (data: Media) => void
	genericData: T
}

export const CardItemAnime = <T,>({ genericData, fun }: CARDITEMANIME<T>) => {
	const data = genericData as Media
	const path = `${PATH_PREFIX_DETAILS}?${data.id}`

	const dateFormat = format(new Date(data.updatedAt), { date: 'short' })

	const onClick = () => {
		fun(data)
	}

	return (
		<div className="max-w-52 bg-backgroundAside rounded-lg text-white space-y-2.5 pb-2 flex-none">
			<NavLink to={path}>
				<img
					className="h-56 object-cover rounded-tr-lg rounded-tl-lg"
					src={data.coverImage.medium}
				/>
			</NavLink>
			<div className="space-y-2.5 mx-2.5">
				<p className="text-sm font-bold">
					{data.title.english ?? 'Sin titulo'}
				</p>
				<p className="text-xs font-normal">
					Date update: <b className="text-customYellow">{dateFormat}</b>
				</p>
				<p className="text-xs font-normal">
					Formato: <b className="text-customYellow">{data.format}</b>
				</p>
				<p className="text-xs font-normal">
					Episodios: <b className="text-customYellow">{data.episodes}</b>
				</p>
				<p className="text-xs font-normal">
					Estado: <b className="text-customYellow">{data.status}</b>
				</p>

				<div className="flex justify-center items-center space-x-10">
					<div className="space-y-2.5">
						<p className="text-xs font-normal">Raiting</p>
						<CircularProgressbar
							backgroundPadding={0}
							className="w-7 h-7"
							maxValue={100}
							text={`${data.meanScore}%`}
							value={data.meanScore}
						/>
					</div>
					<div className="flex flex-col justify-center items-center space-y-2.5">
						<p className="text-xs font-normal">Favorito</p>
						<button onClick={onClick} type="button">
							<FaHeart color="#FFFFFF" size={25} />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
