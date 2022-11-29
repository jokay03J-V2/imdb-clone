import {MdMenu } from "react-icons/md"
import MenuMobile from "./MenuMobile";

function NavBar() {

    return (
        <div className="w-full bg-neutral-900 h-16 flex justify-start items-center text-4xl relative">
            {/* <img src="src/assets/logo.svg" className="h-12 w-5/6"></img> */}
            <MenuMobile></MenuMobile>
            <ul className="list-none"></ul>
        </div>
    )
}

export default NavBar;