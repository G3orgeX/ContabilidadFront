import { api } from "../Api/api"

import type {
  LoginRequest,
  LoginResponse
} from "./types"

export const authService = {

  async login(data: LoginRequest) {

    const response =
      await api.post<LoginResponse>(
        "/Auth/login",
        data
      )

    return response.data
  }

}