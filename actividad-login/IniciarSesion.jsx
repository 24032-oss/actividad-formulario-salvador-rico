import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Pestanas from './Pestanas'

export default function IniciarSesion() {
  const [correo, setCorreo] = useState('')
  const [contrasena, setContrasena] = useState('')
  const navegar = useNavigate()

  function enviar(evento) {
    evento.preventDefault()
    if (!correo.trim() || !contrasena.trim()) return
    setCorreo('')
    setContrasena('')
    navegar('/')
  }

  return (
    <main className="login">
      <div className="login-contenedor">
        <Pestanas pagina="login" />
        <div className="login-formulario">
          <h2>Iniciar sesión</h2>
          <p>Salvador Rico</p>
          <form onSubmit={enviar}>
            <input type="email" aria-label="Correo electrónico" placeholder="Correo electrónico" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
            <input type="password" aria-label="Contraseña" placeholder="Contraseña" value={contrasena} onChange={(e) => setContrasena(e.target.value)} required />
            <button type="submit">Iniciar sesión</button>
          </form>
        </div>
      </div>
    </main>
  )
}
