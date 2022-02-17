import DataContext from "../context/DataContext";
import { useContext } from "react";

const SearchFilter = () => {
    const {search, setSearch} = useContext(DataContext);
    return (
        <input
            type="text"
            placeholder="Search Menu Item"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    );
}

export default SearchFilter;