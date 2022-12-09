import { useRef } from "react";
import { useState } from "react";
import { MdClose, MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function SearhcBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState("")
    const inputRef = useRef();
    const navigate = useNavigate();

    function handleClick(ev) {
        ev.preventDefault();
        navigate(`/search?query=${inputValue}`)
        setInputValue("")
    }

    function setOpen() {
        setIsOpen(true)
        inputRef.current.focus();
    }

    return (
        <div className="flex">
            <MdSearch className="text-white h-3/4 w-auto border-none rounded-full p-2 text-center hover:bg-neutral-500 transition-all duration" onClick={setOpen}></MdSearch>
            <div className={`absolute ${isOpen ? "top-0" : "-top-full"} flex items-center left-0 h-full w-full bg-neutral-900 transition-all`}>
                <form className="w-5/6 h-full" onSubmit={handleClick}><input ref={inputRef} className="border-none focus:outline-none bg-neutral-900 h-full text-white text-xl p-4 placeholder:text-neutral-500" value={inputValue} onChange={(ev) => setInputValue(ev.currentTarget.value)} placeholder="Rechercher"></input></form>
                <MdClose className="w-12 h-12  text-white p-4 rounded-full hover:bg-neutral-500 transition-all" onClick={() => setIsOpen(false)}></MdClose>
                </div>
        </div>
    )
}

export default SearhcBar;