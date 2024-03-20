import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget ,remaining,currency} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const {dispatch} = useContext(AppContext);
    const handleBudgetChange = (event) => {
        if(event.target.value<budget-remaining){
            alert("You cannot reduce the Budget Value Lower Than the Spending");
            return;
        }
        if(event.target.value<=20000){
            setNewBudget(event.target.value);
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget,
            });
        }else{
            alert("The maximum Budget Reached");
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency} {newBudget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
