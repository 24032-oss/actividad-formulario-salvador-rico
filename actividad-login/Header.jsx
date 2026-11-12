import { Link } from 'react-router-dom'
import { UserRound } from 'lucide-react'

export default function Header() {
  return (
    <header>
      <Link to="/">Inicio</Link>
      <Link to="/login" aria-label="Iniciar sesión"><UserRound size={24} /></Link>
    </header>
  )
}
