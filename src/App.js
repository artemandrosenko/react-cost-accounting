import CostItem from "./components/CostItem";

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
  
  return (
    <div>
      <h1>Let's start learning React!</h1>
      <CostItem date={costs[0].date} description={costs[0].description} amount={costs[0].amount} />
      <CostItem date={costs[1].date} description={costs[1].description} amount={costs[1].amount} />
      <CostItem date={costs[2].date} description={costs[2].description} amount={costs[2].amount} />
    </div>
  );
}

export default App;
