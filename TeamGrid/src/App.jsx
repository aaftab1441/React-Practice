import './App.css'
import TeamGrid from './components/TeamGrid'

function App() {
  const members = [
    {
      id: 1,
      name: 'Jane Cooper',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      role: 'Software Engineer',
    },
    {
      id: 2,
      name: 'Cody Fisher',
      image: 'https://randomuser.me/api/portraits/men/33.jpg',
      role: 'Product Manager',
    },
    {
      id: 3,
      name: 'Esther Howard',
      image: 'https://randomuser.me/api/portraits/men/34.jpg',
      role: 'Marketing Coordinator',
    },
    {
      id: 4,
      name: 'Robert Fox',
      image: 'https://randomuser.me/api/portraits/men/35.jpg',
      role: 'UI/UX Designer',
    },
  ]

  return (
    <>
      <TeamGrid members={members}/>
    </>
  )
}

export default App
