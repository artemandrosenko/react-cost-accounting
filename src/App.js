// import React from "react";
import Costs from "./components/Costs/Costs";

function App() {

  const costs = [
    {
      date: new Date(2022, 2, 12),
      description: 'Refrigerator',
      amount: 999.99,
    },
    {
      date: new Date(2022, 11, 25),
      description: 'Asus VivoBook',
      amount: 700.99,
    },
    {
      date: new Date(2022, 4, 17),
      description: 'iPhone',
      amount: 1300.99,
    },
  ];
  
  // How JSX works:
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h1', {}, "Let's start learning React!"),
  //   React.createElement(Costs, {costs: costs})

  // );

  return (
    <div>
      <h1>Let's start learning React!</h1>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
