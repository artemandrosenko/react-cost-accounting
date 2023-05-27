import CostForm from './CostForm';
import './NewCost.css';

const NewCost = (props) => {

    const getCostDataFromFormHandler = (costData) => {
        const costDataFromForm = {
            ...costData,
            id: Math.random().toString(),
        };

        // console.log(costDataFromForm);
        props.onAddCost(costDataFromForm);
    }

    return (
        <div className='new-cost'>
            <CostForm onSaveCostData={getCostDataFromFormHandler} />
        </div>
    )
}

export default NewCost;