import "./App.css";

function App() {

  const name = "Nicholas K. Liu";
  const age = 9;
  const favorite_animal = "Penguin"

  return (
    <div className="card">
      <h1>My Name Card</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Favorite animal: {favorite_animal}</p>
    </div>
  );
}

export default App;
