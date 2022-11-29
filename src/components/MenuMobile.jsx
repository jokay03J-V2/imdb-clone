import { useState } from "react";
import { MdMenu, MdClose, MdLocalMovies, MdKeyboardArrowDown } from "react-icons/md";
import ItemMenuMobile from "./ItemMenuMobile";

function MenuMobile() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <MdMenu className="w-12 h-12 m-1 px-1 hover:bg-neutral-800 rounded-sm transition-all  cursor-pointer text-white" onClick={() => setIsOpen(!isOpen)}></MdMenu>
            <div className={`transition-all duration-500 w-4/6 h-screen absolute top-0 ${isOpen ? "left-0" : "-left-full"} bg-neutral-800 drop-shadow-2xl`}>
                <div className="w-full h-16 flex justify-end bg-slate-400 items-center text-white" style={{ background: "url(src/assets/bg.png)" }}>
                    <MdClose className="rounded-full transition-all m-2 h-12 w-12 p-2 cursor-pointer" onClick={() => setIsOpen(!isOpen)}></MdClose>
                </div>
                <ItemMenuMobile Icon={<MdLocalMovies></MdLocalMovies>} title={"Films"} children={[{ title: "test", href: "/ "}]}></ItemMenuMobile>
                <ItemMenuMobile Icon={<MdLocalMovies></MdLocalMovies>} title={"Films"} children={[{ title: "Calendrier des parutions", href: "/ "},{ title: "Calendrier des parutions", href: "/ "}]}></ItemMenuMobile>

            </div>
        </>
    )
}

export default MenuMobile;