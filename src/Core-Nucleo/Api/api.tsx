import axios from "axios"
import { authStorage } from "../Auth/authStorage"

export const api = axios.create({
  baseURL: "https://localhost:7154/api",
})
// INTERCEPTOR JWT
api.interceptors.request.use(

  (config) => {

    const token =
      authStorage.getToken()

    if (token) {

      config.headers.Authorization =
        `Bearer ${token}`
    }

    return config
  },

  (error) => {
    return Promise.reject(error)
  }

)