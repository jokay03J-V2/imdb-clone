import { getYearsFromDate } from "../utils/getYearsFromDate";

function SearchItem({ title, backdrop, release_date }) {
    return (<li className="w-full">{title} {getYearsFromDate(release_date)}</li>)
}

export default SearchItem;