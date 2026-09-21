import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import axios, { AxiosError } from 'axios'
import { useEffect } from 'react'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      console.log(response.data)
      setJokes(response.data)
    })
    .catch((error) => {
      console.log(error) 
    })
  }, [])

  return (
    <>
      <h1>full stack</h1>
      <p>JOKES:{jokes.length}</p>

      {
        jokes.map((joke) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
          ))
        }
      
    </>
  )
}

export default App
