import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Upload from './pages/Upload/upload'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-red-400">
        <Upload/>
      </div>
    </>
  )
}

export default App
