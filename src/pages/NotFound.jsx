import { useEffect } from "react";
import { useNavigate } from "react-router";

function ErrorPage() {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "404 Error - IMdb"
    }, [])

    function handleClick() {
        navigate("/imdb-clone/")
    }
    
    return (<div className="w-full h-full flex flex-col items-center justify-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" alt="imdb logo" className="w-auto h-36"></img>
        <h1 className="text-3xl my-6">404 page non trouvée</h1>
        <button className="ring-offset-2 ring-2 ring-black bg-yellow-400 rounded-sm flex items-center p-1" onClick={handleClick}>retourner à l'accueil</button>
    </div>)
}

export default ErrorPage;