import { DashboardLayout } from "../../shared/layout/DashBoardLayout"
export function InicioPagina() {
  return (
    <DashboardLayout>
      <div className="bg-white rounded-2xl shadow-sm p-10 min-h-[500px]">
        <h1 className="text-3xl font-bold text-slate-800">
          Dashboard
        </h1>
      </div>
    </DashboardLayout>
  )
}