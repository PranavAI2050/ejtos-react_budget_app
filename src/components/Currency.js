import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
    const { dispatch  } = useContext(AppContext);

    const changeCurrency = (curr_val) => {
        dispatch({
            type: "CHG_CURRENCY",
            payload: curr_val,
        });
    };

    return (
        <div className='alert alert-secondary'>
            Currency{
            <select name="Currency" id="Currency" onChange={event => changeCurrency(event.target.value)}>
                <option value="$">$ Dollar</option>
                <option value="£" selected>£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option> {/* Corrected typo from "Ruppee" to "Rupee" */}
            </select>
}
        </div>
    );
};

export default Currency;
