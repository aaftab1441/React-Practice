import './App.css'
import Testimonials from './components/Testimonials'

function App() {
  const data = [
    {
      name: "Sarah Johnson",
      role: "Marketing Specialist",
      comment: "This product is fantastic! It has greatly improved my workflow.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Michael Smith",
      role: "Project Manager",
      comment: "Excellent service and support. Highly recommend this company.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Emily Davis",
      role: "Graphic Designer",
      comment: "The quality and attention to detail are outstanding.",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  return (
    <>
      <Testimonials testimonials={data} />
    </>
  )
}

export default App
