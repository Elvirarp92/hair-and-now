import axios from 'axios'

export default class services {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true,
    })
  }

  getUserAppts = (id) => this.service.get(`/getuserappts/${id}`)

  getAppt = (id) => this.service.get(`/getappt/${id}`)

  postNewAppt = ({ services, dates }, salonId) =>
    this.service.post(`/postnewappt/${salonId}`, { services, dates })

  editAppt = ({ services, dates, validated, estimatedEndTime }, id) =>
    this.service.post(`/editappt/${id}`, { services, dates, validated, estimatedEndTime })

  deleteAppt = (id) => this.service.post(`/deleteappt/${id}`)
}
