export default function Modal({ mensaje, cerrar }) {
  return (
    <div className="fondo-modal">
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="mensaje-modal">
        <p id="mensaje-modal">{mensaje}</p>
        <button onClick={cerrar} autoFocus>Cerrar</button>
      </div>
    </div>
  )
}
