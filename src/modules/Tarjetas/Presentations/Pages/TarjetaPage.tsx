import { useEffect, useState } from "react";
import { TarjetaForm } from "../components/TarjetaForm";
import { tarjetasService } from "../../../../Core-Nucleo/Tarjetas/tarjetaService";
import type { Tarjeta } from "../../../../domain/Entities/Tarjeta";

export function TarjetasPage() {
  const [tarjetas, setTarjetas] = useState<Tarjeta[]>([]);

  const cargarTarjetas = async () => {
    try {
      const data = await tarjetasService.obtenerTarjetas();

      setTarjetas(data);
    } catch (error) {
      console.error(error);
    }
  };

  // CUANDO CARGA LA PÁGINA
  useEffect(() => {
    console.log("Entró al useEffect")
    cargarTarjetas();
  }, []);

  return (
    <div>

      <h1>Tarjetas</h1>

      {tarjetas.map((tarjeta) => (

        <div key={tarjeta.id}>

          <p>{tarjeta.nombre}</p>

        </div>

      ))}

    </div>
  )
}