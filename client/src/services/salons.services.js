import axios from 'axios'

export default class services {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:5000/api', //or http://hair-and-now.herokuapp.com/api
      withCredentials: true,
    })
  }

  getSalons = () => this.service.get('/getsalons/search')
  getSalon = (salonId) => this.service.get(`/getsalon/${salonId}`)
  createSalon = ({ name, type, address, schedule }) => this.service.post(`/postnewsalon`, { name, type, address, schedule })

}
