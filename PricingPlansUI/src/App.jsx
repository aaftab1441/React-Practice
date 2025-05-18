import './App.css'
import Pricing from './componenets/Pricing'

function App() {
  const data = [
    {
      title: 'Basic',
      price: 9,
      features: ['Feature A', 'Feature B'],
    },
    {
      title: 'Pro',
      price: 29,
      features: ['Feature A', 'Feature B', 'Feature C'],
      isPopular: true,
    },
    {
      title: 'Enterprise',
      price: 99,
      features: ['Feature A', 'Feature B', 'Feature C', 'Feature D'],
    },
  ];
  
  return (
    <>
      <Pricing plans={data} />
    </>
  )
}

export default App
