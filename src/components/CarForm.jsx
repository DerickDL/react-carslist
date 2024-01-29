import { useDispatch, useSelector } from "react-redux";
import { addCar, changeCost, changeName } from "../store/store";

export default function CarForm() {
    const dispatch = useDispatch();

    const { name, cost } = useSelector((state) => {
        return {
            name: state.form.name,
            cost: state.form.cost
        }
    });

    const handleNameChange = (e) => {
        dispatch(changeName(e.target.value));
    }

    const handleCostChange = (e) => {
        dispatch(changeCost(parseInt(e.target.value) || 0));
    }

    const handleSubmitCar = (e) => {
        e.preventDefault();
        dispatch(addCar({ name, cost }));
    }

    return (
        <>
            <form onSubmit={handleSubmitCar}>
                <label>Name</label>
                <input value={name} onChange={handleNameChange} />
                <label>Cost</label>
                <input value={cost || ''} onChange={handleCostChange} type="number"/>
                <button onClick={handleSubmitCar}>Add Car</button>
            </form>
        </>
    )
}