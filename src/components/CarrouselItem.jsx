import { useGetMovieByIdQuery } from "../services/movies";
import { getVideoUrl } from "../utils/getVideoUrl";
import {BsFillBookmarkFill} from "react-icons/bs"

function CarrousselItem({ idMovie, isShow }) {
    const { data, error, isLoading } = useGetMovieByIdQuery(idMovie);
    // console.log(data);
    return (
        <div className={`text-white flex-col ${isShow ? "flex": "hidden"}`}>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <a href={data.homepage} className="w-full">
                    <iframe className="h-40 w-full" src={getVideoUrl(data.videos.results[0].key, data.videos.results[0].site)} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <div className="flex items-center -translate-y-6">
                        <div className="relative">
                        <img src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`} className="w-24 h-36" ></img>
                        <BsFillBookmarkFill className="absolute top-0 -left-1 w-6/12 h-auto"></BsFillBookmarkFill>
                        </div>
                        <div className="ml-3">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="h-12 w-auto" viewBox="0 0 24 24" fill="currentColor"><path d="M10.803 15.932l4.688-3.513a.498.498 0 0 0 0-.803l-4.688-3.514a.502.502 0 0 0-.803.402v7.026c0 .412.472.653.803.402z"></path><path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-1c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z"></path></svg>
                            <h2 className="text-lg font-bold">{data.title}</h2>
                        </div>
                    </div>
                </a>
            ) : null}
        </div>
    )
}

export default CarrousselItem;

