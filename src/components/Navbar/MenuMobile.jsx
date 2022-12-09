import { useState } from "react";
import { MdMenu, MdClose, MdLocalMovies, MdKeyboardArrowDown, MdOutlineTv, MdVideoLibrary, MdStars, MdGroup, MdPublic, MdOpenInNew } from "react-icons/md";
import { SiImdb } from "react-icons/si"
import ItemMenuMobile from "./ItemMenuMobile";

function MenuMobile() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <MdMenu className="w-12 h-12 m-2 px-1 hover:bg-neutral-800 rounded-sm transition-all  cursor-pointer text-white" onClick={() => setIsOpen(!isOpen)}></MdMenu>
            <div className={`h-screen w-screen z-50 transition-all duration-500 flex absolute top-0 ${isOpen ? "left-0" : "-left-full"}`}>
            <div className={`w-5/6 bg-neutral-800 drop-shadow-2xl overflow-scroll`}>
                <div className="w-full h-16 flex justify-end bg-slate-400 items-center text-white " style={{ background: "url(src/assets/bg.png)" }}>
                    <MdClose className="rounded-full transition-all m-2 h-12 w-12 p-2 cursor-pointer" onClick={() => setIsOpen(!isOpen)}></MdClose>
                </div>
                <ItemMenuMobile Icon={MdLocalMovies} title={"Films"} children={[{ title: "Calendrier des parutions", href: "/ " }, { title: "Top 250 Films", href: "/ " }]}></ItemMenuMobile>
                <ItemMenuMobile Icon={MdOutlineTv} title={"Séries TV"} children={[{ title: "A la télé et en streaming", href: "/ " }, { title: "Top 250 des séries", href: "/ " }]}></ItemMenuMobile>
                <ItemMenuMobile Icon={MdVideoLibrary} title={"Regarder"} children={[{ title: "Que regarder", href: "/ " }, { title: "Derniers bandes-annonces", href: "/ " }]}></ItemMenuMobile>
                <ItemMenuMobile Icon={MdStars} title={"Prix et événement"} children={[{ title: "Oscars", href: "/ " }, { title: "Lauréats du meilleur film", href: "/ " }]}></ItemMenuMobile>
                <ItemMenuMobile Icon={MdGroup} title={"Célébrités"} children={[{ title: "Nés aujourd'hui", href: "/ " }, { title: "Célébrités les plus populaires", href: "/ " }]}></ItemMenuMobile>
                <ItemMenuMobile Icon={MdPublic} title={"Communauté"} children={[{ title: "Centre d'aide", href: "/ " }, { title: "Zone des contributeurs", href: "/ " }]}></ItemMenuMobile>
                <div className="pl-4 w-full flex mt-10 items-center relative">
                    <div className="flex flex-col overflow-hidden text-ellipsi">
                    <SiImdb className="w-10 text-white"></SiImdb>
                    <p className="text-base text-white">Pour les professionnels du secteur</p>
                    </div>
                    <a><MdOpenInNew className="text-white h-8"></MdOpenInNew></a>
                </div>
            </div>
            <div className="w-1/6" onClick={() => setIsOpen(!isOpen)}></div>
            </div>
        </div>
    )
}

export default MenuMobile;