function BestRatedItem({ backdrop }) {
    return ( <li className="h-48">
        {console.log(backdrop)}
        <img src={`https://image.tmdb.org/t/p/original/${backdrop}`} className="h-full"></img>
    </li>)
}

export default BestRatedItem;