import { useNavigate, useRouteError } from "react-router";

function ErrorBoundary() {
    let error = useRouteError();
    const navigate = useNavigate();
    console.error(error);

    function handleClick() {
        navigate("/imdb-clone/")
    }

    return (<div className="w-full h-full flex flex-col items-center justify-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" alt="imdb logo" className="w-auto h-36"></img>
        <h1 className="text-3xl mt-6">une erreur est survenue.</h1>
        <h1 className="text-xl my-2">veuillez regarder la console.</h1>
        <button className="ring-offset-2 ring-2 ring-black bg-yellow-400 rounded-sm flex items-center p-1" onClick={handleClick}>retourner à l'accueil</button>
    </div>)
}

export default ErrorBoundary;