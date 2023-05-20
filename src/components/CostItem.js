import './CostItem.css';

function CostItem() {
    return (
        <div className='cost-item'>
            <div>March 12 2022</div>
            <div className='cost-item__description'>
                <h2>Refrigerator</h2>
                <div className='cost-item__price'>$999.99</div>
            </div>
        </div>
    )
}

export default CostItem;