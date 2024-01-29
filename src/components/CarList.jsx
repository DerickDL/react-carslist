import { useDispatch, useSelector } from "react-redux"
import { removeCar } from "../store/store";

export default function CarList() {
    const dispatch = useDispatch();

    const cars = useSelector(({ cars: {searchTerm, list} }) => {
       return list.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()) );
    });

    const handleDeleteCar = (id) => {
        dispatch(removeCar(id));
    }

    const renderedList = cars.map((car) => {
        return (
            <div key={car.id}>
                <p>{car.name} - ₱{car.cost}</p>
                <button onClick={() => handleDeleteCar(car.id)}>Delete</button>
            </div>
        )
    });

    return (
        <>
            {renderedList}
        </>
    )
}