import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import { DashboardLayout } from "../../shared/layout/DashBoardLayout"

import { DashboardPage } from "../../modules/Dashboard/Presentations/Pages/DashboardPage"

import { TarjetasPage } from "../../modules/Tarjetas/Presentations/Pages/TarjetaPage"
import { LoginPage } from "../../modules/Auth/Presentation/pages/LoginPage"
export function AppRouter() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route element={<DashboardLayout />}>

          <Route
            path="/Dashboard"
            element={<DashboardPage />}
          />

          <Route
            path="/tarjetas"
            element={<TarjetasPage />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  )
}