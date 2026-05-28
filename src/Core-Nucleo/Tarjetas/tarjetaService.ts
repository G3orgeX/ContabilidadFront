import type { Tarjeta } from "../../domain/Entities/Tarjeta"
import { api } from "../Api/api"

export const tarjetasService = {

  async obtenerTarjetas() {

    const response =
      await api.get<Tarjeta[]>("/Tarjetas")

    return response.data
  }

}