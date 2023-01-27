import React from 'react'

const Footer = (props) => {
    const { length } = props
  return (
    <footer>
    <p>{length} {length < 2? "item": "items"} on the list</p>
    </footer>
  )
}

export default Footer