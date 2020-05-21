import axios from 'axios'

export default class services {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:5000/api', //or http://hair-and-now.herokuapp.com/api
      withCredentials: true,
    })
  }

  getUserAppts = (id) => this.service.get(`/getuserappts/${id}`)

  getAppt = (id) => this.service.get(`/getappt/${id}`)

  postNewAppt = ({ services, dates }, salonId) =>
    this.service.post(`/postnewappt/${salonId}`, { services, dates })

  editAppt = ({ services, dates, validated}, id) => this.service.post(`/editappt/${id}`, { services, dates, validated })

  deleteAppt = (id) => this.service.post(`/deleteappt/${id}`)
}
