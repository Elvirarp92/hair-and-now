import axios from 'axios'

export default class services {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:5000/api',
      withCredentials: true,
    })
  }

  getSalons = () => this.service.get('/getsalons/search');
  getSalon = salonId => this.service.get(`/getsalon/${salonId}`)

}
