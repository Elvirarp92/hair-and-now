import React from 'react'
import { Link } from 'react-router-dom'

const SalonList = (props) => {
  return (
    <section>
      {props.salons.map((elm) => (
        <p key={elm._id}>
          <Link to={`/salons/${elm._id}`}>
            {elm.name}
          </Link>
        </p>
      ))}
    </section>
  )
}

export default SalonList
