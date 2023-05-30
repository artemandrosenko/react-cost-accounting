import React, { useState } from 'react';
import CostForm from './CostForm';
import './NewCost.css';

const NewCost = (props) => {

    const [isFormVisible, setIsFormVisible] = useState(false);

    const getCostDataFromFormHandler = (costData) => {
        const costDataFromForm = {
            ...costData,
            id: Math.random().toString(),
        };

        // console.log(costDataFromForm);
        props.onAddCost(costDataFromForm);
        setIsFormVisible(false);
    }

    const inputCostDataHandler = () => {
        setIsFormVisible(true);
    }

    const cancelCostHandler = () => {
        setIsFormVisible(false);
    }
    return (
        <div className='new-cost'>
            {!isFormVisible && <button onClick={inputCostDataHandler}>Add New Cost</button>}
            {isFormVisible && <CostForm onSaveCostData={getCostDataFromFormHandler} onCancel={cancelCostHandler}/>}
        </div>
    )
}

export default NewCost;