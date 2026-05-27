import { NavLink } from "react-router-dom"

const menuItems = [
  {
    label: "Dashboard",
    path: "/",
  },
  {
    label: "Informe Semanal",
    path: "/informe-semanal",
  },
  {
    label: "Movimientos",
    path: "/movimientos",
  },
  {
    label: "Tarjetas",
    path: "/tarjetas",
  },
  {
    label: "Planes Futuros",
    path: "/planes-futuros",
  },
  {
    label: "Objetivos",
    path: "/objetivos",
  },
  {
    label: "Inversiones",
    path: "/inversiones",
  },
]

export function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-6">

      <h1 className="text-2xl font-bold mb-10">
        Sistema Contable
      </h1>

      <nav>
        <ul className="space-y-3">

          {menuItems.map((item) => (

            <li key={item.path}>

              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `
                  block
                  p-3
                  rounded-lg
                  transition-all
                  ${
                    isActive
                      ? "bg-slate-700"
                      : "hover:bg-slate-800"
                  }
                `
                }
              >
                {item.label}
              </NavLink>

            </li>

          ))}

        </ul>
      </nav>

    </aside>
  )
}