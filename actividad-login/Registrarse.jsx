import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Pestanas from './Pestanas'
import Modal from './Modal'

export default function Registrarse() {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [mostrarModal, setMostrarModal] = useState(false)
  const navegar = useNavigate()

  function enviar(evento) {
    evento.preventDefault()
    if (!nombre.trim() || !correo.trim() || !contrasena.trim()) return
    setMostrarModal(true)
  }

  function aceptar() {
    setNombre('')
    setCorreo('')
    setContrasena('')
    setMostrarModal(false)
    navegar('/login')
  }

  return (
    <main className="login">
      <div className="login-contenedor">
        <Pestanas pagina="registro" />
        <div className="login-formulario">
          <h2>Registrarse</h2>
          <p>Salvador Rico</p>
          <form onSubmit={enviar}>
            <input aria-label="Nombre" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
            <input type="email" aria-label="Correo electrónico" placeholder="Correo electrónico" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
            <input type="password" aria-label="Contraseña" placeholder="Contraseña" value={contrasena} onChange={(e) => setContrasena(e.target.value)} required />
            <button type="submit">Registrarse</button>
          </form>
        </div>
      </div>
      {mostrarModal && <Modal aceptar={aceptar} />}
    </main>
  )
}
