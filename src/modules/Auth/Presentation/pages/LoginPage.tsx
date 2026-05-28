import { LoginForm } from "../Components/LoginForm"

export function LoginPage() {
  return (
    <div className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-slate-100
    ">

      <div className="
        bg-white
        p-10
        rounded-2xl
        shadow-sm
        w-full
        max-w-md
      ">

        <h1 className="
          text-3xl
          font-bold
          text-slate-800
          mb-8
          text-center
        ">
          Iniciar Sesión
        </h1>

        <LoginForm />

      </div>

    </div>
  )
}