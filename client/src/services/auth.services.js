import axios from 'axios'

export default class services {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true,
    })
  }

  signup = ({ username, password, email, role }) =>
    this.service.post('/signup', { username, password, email, role })

  confirm = ( confirmCode ) => this.service.get(`/confirm/${confirmCode}`)

  login = ({ username, password }) =>
    this.service.post('/login', { username, password })

  logout = () => this.service.post('/logout')

  isLoggedIn = () => this.service.get('/isloggedin')
}
