

import type { ReactNode } from "react"
import { Sidebar } from "./Sidebar"

interface Props {
  children: ReactNode
}

export function DashboardLayout({ children }: Props) {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 bg-slate-100 min-h-screen p-8">
        {children}
      </main>
    </div>
  )
}