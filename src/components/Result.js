import React from "react"
import "../styles/Result.css"

const Result = ({ value, error, weather }) => {
  const city = value
  let content = null
  let errorBox = null
  console.log(weather)
  const setUTCTime = (time) => {
    let hour = formatTime(time.getUTCHours())
    let minutes = formatTime(time.getUTCMinutes())
    let seconds = formatTime(time.getUTCSeconds())

    return `${hour}:${minutes}:${seconds}`
  }

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time
  }

  if (!error && weather !== null && city.length > 0) {
    const date = new Date().toLocaleString()
    const temp = weather.main.temp.toFixed(1)
    const sunriseTime = setUTCTime(
      new Date((weather.sys.sunrise + weather.timezone) * 1000)
    )

    const sunsetTime = setUTCTime(
      new Date((weather.sys.sunset + weather.timezone) * 1000)
    )

    const wind = weather.wind.speed
    const pressure = weather.main.pressure

    const img = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`

    content = (
      <div className='info'>
        <h3 className='city'>
          <img className='img' src={img} alt='' /> Results for{" "}
          <span>{city}</span>
        </h3>
        <h4 className='date'>Dataset for the day and hour: {date}</h4>
        <h4 className='temp'>Current temperature: {temp}&#8451;</h4>
        <h4 className='sunriseTime'>
          Sunrise today (local time): {sunriseTime}
        </h4>
        <h4 className='sunsetTime'>Sunset today (local time): {sunsetTime}</h4>
        <h4 className='wind'>Current wind force: {wind} m/s</h4>
        <h4 className='pressure'>Current pressure: {pressure} hPa</h4>
      </div>
    )
  }

  if (city.length > 0) {
    errorBox = (
      <div className='info'>
        We doesn't have info about <span>{city}</span>
      </div>
    )
  } else {
    errorBox = null
  }

  return <div className='result'>{error ? errorBox : content}</div>
}

export default Result
