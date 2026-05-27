import { TarjetaForm } from "../components/TarjetaForm";

export function TarjetasPage() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm min-h-[500px]">

      <h1 className="text-3xl font-bold text-slate-800 mb-8">
        Tarjetas
      </h1>

      <TarjetaForm />

    </div>
  )
}