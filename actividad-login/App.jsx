import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Inicio from './Inicio'
import IniciarSesion from './IniciarSesion'
import Registrarse from './Registrarse'
import './login.css'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<IniciarSesion />} />
        <Route path="/registro" element={<Registrarse />} />
      </Routes>
    </BrowserRouter>
  )
}
