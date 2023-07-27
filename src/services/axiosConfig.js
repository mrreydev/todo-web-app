import axios from 'axios'
export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
})

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')

    if (config.headers === undefined) {
      config.headers = {}
    }

    if (token) {
      config.headers.Authorization =  `Bearer ${token}`
    }

    return config
  }
)
