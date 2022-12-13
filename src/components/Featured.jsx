import { useGetMoviesTopRatedQuery } from "../services/movies";
import BestRatedItem from "./BestRated/BestRatedItem";
import TitleCategory from "./TitleCategory";

function Featured() {
    const { data, isLoading, error } = useGetMoviesTopRatedQuery();
    return (
        <div>
            <TitleCategory title={"mis en avant aujourd'hui"}></TitleCategory>
            {error ? (
                <>Oh no, there was an error
                </>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <ul className="grid grid-flow-col grid-cols-none w-full h-fit overflow-auto scroll-smooth gap-4 px-4">
                    {data.results.map((movie) => <BestRatedItem key={movie.id} backdrop={movie.backdrop_path} title={movie.title} vote={movie.vote_average}></BestRatedItem>)}
                </ul>
            ) : null}
        </div>
    )
}

export default Featured;