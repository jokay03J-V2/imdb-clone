import { useSearchParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import NavBar from "../components/Navbar/NavBar";
import SearchItem from "../components/SearchItem";
import { useGetMoviesByNameQuery } from "../services/movies";

function SearchPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const { data, isLoading, error } = useGetMoviesByNameQuery(searchParams.get("query"));
    return (<div className="flex flex-col items-center w-full h-full">
        <NavBar></NavBar>
        {isLoading ? <LoadingSpinner></LoadingSpinner> :
            error ? <div>une erreur est survenue</div> :
                data ?
                    <div className="w-full h-full">
                        <div className="px-4">
                            <h2 className="text-3xl p-6 pl-0 first-letter:uppercase">rechercher « {searchParams.get("query")} »</h2>
                            <h3 className="mb-4 relative first-letter:uppercase text-2xl px-4 font-bold before:absolute before:w-1 before:h-8 before:bg-yellow-400 before:top-0 before:left-0">titres</h3>
                            <ul>
                                {data.results.map((movie) => <SearchItem key={movie.id} title={movie.title} poster_path={movie.poster_path} release_date={movie.release_date} movie={movie}></SearchItem>)}
                            </ul>
                        </div>
                    </div> :
                    null}
    </div>)
}

export default SearchPage;