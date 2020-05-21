import axios from 'axios'

export default class services {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:5000/api', //or http://hair-and-now.herokuapp.com/api
      withCredentials: true,
    })
  }

  getServices = () => this.service.get(`/getservices`)
}
