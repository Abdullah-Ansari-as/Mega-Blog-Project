
import './App.css'

function App() { 
  const name = import.meta.env.VITE_APPWRITE_URL;
  return (
    <>
     <h1>I love {name}</h1>
    </>
  )
}

export default App
