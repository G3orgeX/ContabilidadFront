import { BrowserRouter, Routes, Route } from "react-router-dom"
import { DashboardPage } from "../../modules/Dashboard/Presentations/Pages/DashboardPage"
import { DashboardLayout } from "../../shared/layout/DashBoardLayout"
import { TarjetasPage } from "../../modules/Tarjetas/Presentations/Pages/TarjetaPage"

export function AppRouter() {
  return (
    <BrowserRouter>

      <DashboardLayout>

        <Routes>

          <Route
            path="/"
            element={<DashboardPage />}
          />

          <Route
            path="/Tarjetas"
            element={<TarjetasPage />}
          />

        </Routes>

      </DashboardLayout>

    </BrowserRouter>
)
}