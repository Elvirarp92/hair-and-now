import React from 'react'
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button'

import './salonCard.css'

const SalonCard = (props) => {
  return (
    <article>
      <h2>{props.salon.name}</h2>
      {props.salon.appointments.length > 0 ? (
        props.salon.appointments.map((elm, idx) =>
          elm.validated ? null : (
            <div key={idx} className='is-flex service-container'>
              <div>
                {elm.services[0].services.map((elm, idx) => (
                  <p key={idx}>{elm.name}</p>
                ))}
                <hr />
                {elm.dates.map((elm, idx) => (
                  <p key={idx}>{new Date(Date.parse(elm)).toLocaleString()}</p>
                ))}
              </div>
              <Link to={`/appointment/edit/${elm._id}`}>
                <Button className='red-button'>Gestionar cita</Button>
              </Link>
            </div>
          )
        )
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
