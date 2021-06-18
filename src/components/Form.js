import React from "react"
import "../styles/Form.css"

const Form = ({ value, change }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault()
    let field = document.createElement("input")
    field.setAttribute("type", "text")
    field.style.position = "absolute"
    field.style.opacity = 0
    const appElement = document.querySelector(".App")
    appElement.prepend(field)

    setTimeout(function () {
      field.focus()
      setTimeout(function () {
        appElement.removeChild(field)
      }, 50)
    }, 50)
  }

  return (
    <form onSubmit={handleOnSubmit} className='form'>
      <input
        className='search-bar'
        onChange={(e) => change(e)}
        value={value}
        id='city'
        name='city'
        type='text'
        placeholder='Type city...'
      />
    </form>
  )
}

export default Form
