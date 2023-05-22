import './CostItem.css';
import CostDate from './CostDate';

function CostItem(props) {
    // const costDate = new Date(2022, 2, 12);
    // const costName = 'Refrigerator';
    // const costAmount = 999.99;
    
    return (
        <div className='cost-item'>
            {/* <div>{costDate.toISOString()}</div> */}
            <CostDate date={props.date} />
            <div className='cost-item__description'>
                <h2>{props.description}</h2>
                <div className='cost-item__price'>${props.amount}</div>
            </div>
        </div>
    )
}

export default CostItem;