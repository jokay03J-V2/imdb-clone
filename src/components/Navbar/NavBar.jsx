import { MdMenu, MdSearch } from "react-icons/md"
import { useNavigate } from "react-router-dom";
import MenuMobile from "./MenuMobile";
import SearhcBar from "../SearchBar";

function NavBar() {
    const navigate = useNavigate();
    return (
        <nav className="w-full bg-neutral-900 h-16 flex justify-start items-center text-4xl relative">
            <MenuMobile></MenuMobile>
            <ul className="w-full h-16 flex items-center justify-between list-none">
                <li className="h-16 flex items-center justify-center"><img src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" alt="imdb logo" className="h-3/4 py-1 mr-4" onClick={() => navigate("/")}></img></li>
                <li className="h-16 flex items-center justify-center"><SearhcBar></SearhcBar></li>
                <li className="h-16 flex items-center justify-center text-base text-white px-2 font-bold">Se connecter</li>
                <li className="h-16 flex items-center justify-center text-base px-4 font-bold">
                    <select className="uppercase border-none appearance-none bg-transparent text-white focus:outline-none">
                        <option className="bg-transparent">fr</option>
                    </select>

                </li>
            </ul>
        </nav>
    )
}

export default NavBar;
