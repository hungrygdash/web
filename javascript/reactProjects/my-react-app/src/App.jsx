import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <h1>My first react app.</h1>
    <p>I know lots of code but this is my first time making a react app!</p>
   </div>
  )
}

export default App
