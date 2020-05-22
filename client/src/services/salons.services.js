import axios from 'axios'

export default class services {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true,
    })
  }

  getSalons = (queryString) => this.service.get(`/getsalons/search${queryString}`)
  getSalon = (salonId) => this.service.get(`/getsalon/${salonId}`)
  createSalon = ({ name, type, address, schedule }) => this.service.post(`/postnewsalon`, { name, type, address, schedule })

}
