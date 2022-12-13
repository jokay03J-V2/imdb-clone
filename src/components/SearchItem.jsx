import { getYearsFromDate } from "../utils/getYearsFromDate";
import { TbMovieOff } from "react-icons/tb"

function SearchItem({ title, poster_path, release_date }) {
    return (<li className="w-full flex flex-col my-3">
        <div className="flex">
            {poster_path ? <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} className="h-auto w-12"></img> : 
            <div className="w-12 h-16 flex justify-center items-center p-4"><TbMovieOff className="w-full h-auto"></TbMovieOff></div>
            }
            <div className="flex flex-col justify-center ml-1">
                <h3 className="font-bold">{title}</h3>
                <div className="h-fit w-fit text-sm">{release_date ? getYearsFromDate(release_date) : "aucune date trouvée"}</div>
            </div>
        </div>
        <div className="mt-2 h-0.5 w-full bg-neutral-300"></div>
    </li>)
}

export default SearchItem;