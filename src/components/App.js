import React, { useState, useEffect } from "react"
import "../styles/App.css"
import Form from "./Form"
import Result from "./Result"

const APIKey = "4ff8452d7fae0d40de5e0efd30f5b637"

function App() {
  const [inputValue, setInputValue] = useState("")
  const [error, setError] = useState(true)
  const [weather, setWeather] = useState(null)

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    if (inputValue === "") return

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${APIKey}&units=metric`

    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw Error("Couldn't find the city")
      })
      .then((data) => {
        setError(false)
        setWeather(data)
      })
      .catch(() => {
        console.clear()
        setError(true)
        setWeather(null)
      })
  }, [inputValue])

  return (
    <div className='App'>
      <div className='wrapper'>
        <h1 className='title'>Weather App</h1>
        <Form value={inputValue} change={handleInputChange} />
        <Result value={inputValue} error={error} weather={weather} />
      </div>
    </div>
  )
}

export default App
