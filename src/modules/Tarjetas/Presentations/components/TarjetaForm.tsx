import { useState } from "react"

export function TarjetaForm() {

  const [tipo, setTipo] = useState("")
  const [nombre, setNombre] = useState("")
  const [propietario, setPropietario] = useState("")
  const [diaCierre, setDiaCierre] = useState(1)
  const [activo, setActivo] = useState(true)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const tarjeta = {
      tipo,
      nombre,
      propietario,
      diaCierre,
      activo
    }

    console.log(tarjeta)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-xl"
    >

      <div>
        <label className="block mb-2 font-medium">
          Tipo
        </label>

        <input
          type="text"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="
            w-full
            border
            border-slate-300
            rounded-lg
            p-3
          "
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">
          Nombre
        </label>

        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="
            w-full
            border
            border-slate-300
            rounded-lg
            p-3
          "
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">
          Propietario
        </label>

        <input
          type="text"
          value={propietario}
          onChange={(e) => setPropietario(e.target.value)}
          className="
            w-full
            border
            border-slate-300
            rounded-lg
            p-3
          "
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">
          Día de cierre
        </label>

        <input
          type="number"
          value={diaCierre}
          onChange={(e) =>
            setDiaCierre(Number(e.target.value))
          }
          className="
            w-full
            border
            border-slate-300
            rounded-lg
            p-3
          "
        />
      </div>

      <div className="flex items-center gap-3">

        <input
          type="checkbox"
          checked={activo}
          onChange={(e) => setActivo(e.target.checked)}
        />

        <label>
          Activa
        </label>

      </div>

      <button
        type="submit"
        className="
          bg-slate-900
          text-white
          px-6
          py-3
          rounded-lg
          hover:bg-slate-800
        "
      >
        Guardar tarjeta
      </button>

    </form>
  )
}