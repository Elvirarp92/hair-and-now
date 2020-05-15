import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

import './homeMap.css'

import Marker from './../../../ui/marker/marker'

const defaultProps = {
  center: { lat: 37.393024, lng: -5.980655 },
  zoom: 16,
}

class HomeMap extends Component {
  constructor() {
    super()
    this.state = {
      center: { lat: 37.393024, lng: -5.980655 },
    }
  }

  render() {
    return (
      <article className="salon-map">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyBYZzf1A-amv8Qf-GiLFQ_18owJVbaABYg',
            language: 'es',
          }}
          defaultCenter={defaultProps.center}
          center={this.state.center}
          defaultZoom={defaultProps.zoom}>
          <Marker lat={37.392964} lng={-5.980054} name="My Marker" color="blue" />
        </GoogleMapReact>
      </article>
    )
  }
}

export default HomeMap
