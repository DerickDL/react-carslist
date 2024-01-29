import { useSelector } from "react-redux";

export default function CarValue() {

    const value = useSelector(({ cars: {searchTerm, list} }) => {
        return list
            .filter((car) => 
                car.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .reduce((acc, car) =>  acc += car.cost, 0)
     });

    return (
        <> 
            <h1>Total Cost: ₱{value}</h1>
        </>
    )
}