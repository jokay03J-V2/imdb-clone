import { MdMenu, MdSearch } from "react-icons/md"
import MenuMobile from "./MenuMobile";

function NavBar() {

    return (
        <nav className="w-full bg-neutral-900 h-16 flex justify-start items-center text-4xl">
            {/* <img src="src/assets/logo.svg" className="h-12 w-5/6"></img> */}
            <MenuMobile></MenuMobile>
            <ul className="w-full h-16 flex items-center justify-between list-none">
                <li className="h-16 flex items-center justify-center"><img src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" className="h-3/4 py-1 mr-4"></img></li>
                <li className="h-16 flex items-center justify-center"><MdSearch className="text-white h-3/4 w-auto border-none rounded-full p-2 text-center hover:bg-neutral-500 transition-all duration"></MdSearch></li>
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
