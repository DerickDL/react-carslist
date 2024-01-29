import { useDispatch, useSelector } from "react-redux"
import { changeSearchTerm } from "../store/store";

export default function CarSearch() {
    const dispatch = useDispatch();

    const searchTerm = useSelector((state) => {
        return state.cars.searchTerm;
    })

    const handleSearchTermChange = (e) => {
        dispatch(changeSearchTerm(e.target.value));
    }

    return (
        <>
            <input value={searchTerm} onChange={handleSearchTermChange} />
        </>
    )
}