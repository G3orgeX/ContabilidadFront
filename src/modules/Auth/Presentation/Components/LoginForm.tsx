import { useState } from "react";
import { authService } from "../../../../Core-Nucleo/Auth/authService";
import { authStorage } from "../../../../Core-Nucleo/Auth/authStorage";
import { useNavigate } from "react-router-dom";
export function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await authService.login({
        email,
        password,
      });

      authStorage.setToken(response.token);
       // Redirección
    navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block mb-2 font-medium">Correo Electrónico</label>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <label className="block mb-2 font-medium">Contraseña</label>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="
            w-full
            border
            border-slate-300
            rounded-lg
            p-3
          "
        />
      </div>

      <button
        type="submit"
        className="
          w-full
          bg-slate-900
          text-white
          py-3
          rounded-lg
          hover:bg-slate-800
        "
      >
        Ingresar
      </button>
    </form>
  );
}
