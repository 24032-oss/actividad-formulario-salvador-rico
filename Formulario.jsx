import { useState } from 'react'
import Modal from './Modal'
import './formulario.css'

export default function Formulario() {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [edad, setEdad] = useState('')
  const [mensaje, setMensaje] = useState('')

  function enviar(evento) {
    evento.preventDefault()

    if (!nombre.trim() || !correo.trim() || !edad.trim()) {
      setMensaje('Por favor, completa todos los campos.')
      return
    }

    setMensaje('Tu información se envió correctamente.')
    setNombre('')
    setCorreo('')
    setEdad('')
  }

  return (
    <>
      <h1>Formulario</h1>
      <p>Salvador Rico</p>
      <form onSubmit={enviar} noValidate>
        <label htmlFor="nombre">Nombre</label>
        <input id="nombre" value={nombre} onChange={(evento) => setNombre(evento.target.value)} />

        <label htmlFor="correo">Correo</label>
        <input id="correo" type="email" value={correo} onChange={(evento) => setCorreo(evento.target.value)} />

        <label htmlFor="edad">Edad</label>
        <input id="edad" type="number" value={edad} onChange={(evento) => setEdad(evento.target.value)} />

        <button type="submit">Enviar</button>
      </form>
      {mensaje && <Modal mensaje={mensaje} cerrar={() => setMensaje('')} />}
    </>
  )
}
