import { useState } from "react";
import { MdKeyboardArrowDown, MdLocalMovies } from "react-icons/md";

function ItemMenuMobile({ title, children, Icon }) {
    const [isActive, setIsActive] = useState(false);
    return (
            <div className="relative">
                <div className={`w-full h-12 flex items-end px-4 py-2 text-white relative cursor-pointer ${isActive ? "text-orange-400" : ""}`} onClick={() => setIsActive(!isActive)}>
                    <MdLocalMovies className="mr-3 h-8"></MdLocalMovies>
                    <span className="text-2xl">{title}</span>
                    <MdKeyboardArrowDown className={`absolute -translate-y-2/4 top-2/4 left-3/4 transition-all rotate-0 ${isActive ? "rotate-180" : ""}`}></MdKeyboardArrowDown>
                </div>
                <div className={`px-4 h-0 overflow-hidden ${isActive ? "block h-56" : ""} transition-all`}>
                    {children.map((child) => {
                        return (
                        <div key={child.title}>
                            <li className="ml-10 my-2 cursor-pointer list-none text-lg text-white">{child.title}</li>
                        </div>
                        )
                    })}</div>
            </div>
    );
}

export default ItemMenuMobile