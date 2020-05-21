import React from 'react'
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button'

import './salonCard.css'

const SalonCard = (props) => {
  console.log(props.salon)
  return (
    <article>
      <h2>{props.salon.name}</h2>
      {props.salon.appointments.length > 0 ? (
        <p>hewwo</p>
      ) : (
        <p>No tienes citas pendientes de gestión</p>
      )}
      <nav className='is-flex is-centered'>
        <Link to={`/packs/create/${props.salon._id}`}>
          <Button className='red-button'>Gestión de servicios</Button>
        </Link>
      </nav>
    </article>
  )
}

export default SalonCard
