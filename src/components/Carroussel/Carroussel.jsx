import { useState } from "react";
import { useEffect } from "react";
import { useGetTrendingMoviesQuery } from "../../services/movies";
import CarrousselItem from "./CarrouselItem";

function Carroussel() {
    const [carrousselSelected, setCarrousselSelected] = useState(0)
    const { data, error, isLoading } = useGetTrendingMoviesQuery()

    useEffect(() => {
        let interval;
        if (!isLoading) {
            interval = setInterval(() => changeCarroussel(), 5000)
        }
        return () => interval ? clearInterval(interval) : null;
    }, [isLoading])

    const changeCarroussel = () => {
        setCarrousselSelected((current) => {
            if (!data.results[current + 1]) {
                return setCarrousselSelected(0)
            }
            return current + 1
        })
    }


    return (
        <div className="w-full h-80 bg-black text-white p-2">
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <div>
                    {data.results.map((movie, index) =>
                        <CarrousselItem key={movie.id} isShow={index === carrousselSelected} idMovie={movie.id} title={movie.title} imageSrc={movie.poster_path}></CarrousselItem>
                    )}
                </div>
            ) : null}
            <div className="font-bold text-xl first-letter:uppercase h-fit ml-2 -translate-y-6">parcourir les bandes-annonces {">"}</div>
        </div>
    )
}

export default Carroussel;