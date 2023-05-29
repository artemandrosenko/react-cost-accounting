import CostItem from "./CostItem";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import "./Costs.css";
import React, { useState } from "react";

function Costs(props) {
  const [selectedYear, setSelectedYear] = useState("2022");

  const yearChangeHandler = (year) => {
    console.log(year);
    setSelectedYear(year);
  };

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        {props.costs.map((cost) => (
          <CostItem
            date={cost.date}
            description={cost.description}
            amount={cost.amount}
          />
        ))}
        {/* <CostItem
          date={props.costs[0].date}
          description={props.costs[0].description}
          amount={props.costs[0].amount}
        />
        <CostItem
          date={props.costs[1].date}
          description={props.costs[1].description}
          amount={props.costs[1].amount}
        />
        <CostItem
          date={props.costs[2].date}
          description={props.costs[2].description}
          amount={props.costs[2].amount}
        /> */}
      </Card>
    </div>
  );
}

export default Costs;
