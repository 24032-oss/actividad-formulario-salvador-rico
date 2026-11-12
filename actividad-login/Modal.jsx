export default function Modal({ aceptar }) {
  return (
    <div className="fondo-modal">
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="mensaje-modal">
        <p id="mensaje-modal">Registro completado correctamente.</p>
        <button onClick={aceptar} autoFocus>Aceptar</button>
      </div>
    </div>
  )
}
