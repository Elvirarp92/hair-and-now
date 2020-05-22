import React from 'react'
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

import './salonList.css'

const SalonList = (props) => {
  return (
    <Card as='section' style={{ width: '18rem' }}>
      <ListGroup variant='flush'>
        {props.salons.map((elm) => (
          <Link key={elm._id} to={`/salons/${elm._id}`}>
            <ListGroup.Item className='salon-card'>{elm.name}</ListGroup.Item>
          </Link>
        ))}
      </ListGroup>
    </Card>
  )
}

export default SalonList
