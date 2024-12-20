import axios from 'axios'

const axiosAuthInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AUTH_URL,
  withCredentials: true
})

const axiosAPIInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true
})

export { axiosAuthInstance, axiosAPIInstance }
