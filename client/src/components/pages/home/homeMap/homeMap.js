import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import SalonService from './../../../../services/salons.services'

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
      salons: [],
    }
    this.salonService = new SalonService()
  }

  initGeocoder = ({ maps }) => {
    this.geocoder = new maps.Geocoder()
    console.log('geocoder initializated!')
  }

  getAllSalons = () => {
    this.salonService
      .getSalons()
      .then((response) => this.setState({ salons: response.data }))
      .catch((err) => console.log(err))
  }

  componentDidMount = () => this.getAllSalons()

  generateMarkers(salon) {
    let address = `${salon.address.street} ${salon.address.number} ${salon.address.zipcode} ${salon.address.town}`
    this.geocoder.geocode({ address: address }, (results, status) => {
      if (status === 'OK') {
        return (
          <Marker
            position={results[0].geometry.location}
            name={salon.name}
            color="blue"
          />
        )
      } else {
        alert('Geocode was not successful for the following reason: ' + status)
      }
    })
  }

  render() {
    return (
      <article className="salon-map">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyBYZzf1A-amv8Qf-GiLFQ_18owJVbaABYg',
            language: 'es',
          }}
          yesIWantToUseGoogleMapApiInternals={true}
          onGoogleApiLoaded={this.initGeocoder}
          defaultCenter={defaultProps.center}
          center={this.state.center}
          defaultZoom={defaultProps.zoom}>
          {this.state.salons.forEach((salon) => this.generateMarkers(salon))}
        </GoogleMapReact>
      </article>
    )
  }
}

export default HomeMap
