import PetCard from "./components/PetCard"
import "./App.css"
function App() {
  return (
    <div className="pets">
  <PetCard name="Buddy" emoji="🐶" food="bones" />
  <PetCard name="Whiskers" emoji="🐱" food="fish" />
  <PetCard name="Goldie" emoji="🐠" food="flakes" />
    </div>
  )
}

export default App
