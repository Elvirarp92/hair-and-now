import React from 'react'
import { Link } from 'react-router-dom'

const SalonCard = (props) => {
  return (
    <section>
      <h2>{props.salon.name}</h2>
    </section>
  )
}

export default SalonCard