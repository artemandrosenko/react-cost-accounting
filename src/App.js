import React, { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COST = [
  {
    id: 'c1',
    date: new Date(2022, 2, 12),
    description: 'Refrigerator',
    amount: 999.99,
  },
  {
    id: 'c2',
    date: new Date(2022, 11, 25),
    description: 'Asus VivoBook',
    amount: 700.99,
  },
  {
    id: 'c3',
    date: new Date(2022, 4, 17),
    description: 'iPhone',
    amount: 1300.99,
  },
];

const App = () => {

  const [costs, setCosts] = useState(INITIAL_COST);

  // How JSX works:
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h1', {}, "Let's start learning React!"),
  //   React.createElement(Costs, {costs: costs})

  // );
  const addCostHandler = (newCost) => {
    // console.log(newCost);
    
    setCosts(prevCosts => [newCost, ...prevCosts]);

  };

  return (
    <div>
      <h1>Let's start learning React!</h1>
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
