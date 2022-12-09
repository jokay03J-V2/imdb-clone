import { MdStarRate } from "react-icons/md";

function BestRatedItem({ backdrop, title, vote }) {
    return (<li className="h-48 w-80 relative">
        <img src={`https://image.tmdb.org/t/p/original/${backdrop}`} className="h-5/6 w-full"></img>
        <div className="absolute top-0 left-0 text-white text-left w-full">
            <div className="flex items-center absolute left-2">{vote} / 10 <MdStarRate className="mx-3 text-yellow-500"></MdStarRate></div>
        </div>
            <div className="text-base text-white w-full">{title}</div>
    </li>)
}

export default BestRatedItem;