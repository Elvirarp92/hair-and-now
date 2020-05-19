import axios from 'axios'

export default class services {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:5000/api', //or http://hair-and-now.herokuapp.com/api
      withCredentials: true,
    })
  }

  getPacks = (salonId) => this.service.get(`/getpacks/${salonId}`)

  getPack = (id) => this.service.get(`/getpack/${id}`)

  postNewPack = ({ services, price }, salonId) =>
    this.service.post(`/postnewpack/${salonId}`, { services, price })

  editPack = ({ services, price }, id) => this.service.post(`/editpack/${id}`, { services, price })

  deletePack = (id) => this.service.post(`/deletepack/${id}`)
}
