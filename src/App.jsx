import { useState } from 'react'
import './App.css';
import ButtonDemo from './examples/ButtonDemo';
function App() {
  const [count, setCount] = useState(0)

  return (
    <><h1 className="text-3xl font-bold underline">
      It's working!
    </h1>
    <ButtonDemo></ButtonDemo>
    </>
  )
}

export default App
