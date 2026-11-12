import { useNavigate } from 'react-router-dom'

export default function Pestanas({ pagina }) {
  const navegar = useNavigate()

  return (
    <div className="login-pestanas">
      <button className={pagina === 'login' ? 'activo' : ''} onClick={() => navegar('/login')}>Iniciar sesión</button>
      <button className={pagina === 'registro' ? 'activo' : ''} onClick={() => navegar('/registro')}>Registrarse</button>
    </div>
  )
}
