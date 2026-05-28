import { Outlet } from "react-router-dom"
import { Sidebar } from "./Sidebar"

export function DashboardLayout() {
  return (
    <div className="flex">

      <Sidebar />

      <main className="flex-1 bg-slate-100 min-h-screen p-8">

        <Outlet />

      </main>

    </div>
  )
}
