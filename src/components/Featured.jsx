import { useGetMoviesTopRatedQuery } from "../services/movies";
import BestRatedItem from "./BestRatedItem";
import TitleCategory from "./TitleCategory";

function Featured() {
    const { data, isLoading, error } = useGetMoviesTopRatedQuery();
    return (
        <div>
            <TitleCategory title={"mieux noté"}></TitleCategory>
            {error ? (
                <>Oh no, there was an error
                {console.log(error)}
                </>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <ul className="flex w-fit h-fit overflow-auto">
                    {data.results.map((movie) => <BestRatedItem backdrop={movie.backdrop_path}></BestRatedItem>)}
                </ul>
            ) : null}
        </div>
    )
}

export default Featured;