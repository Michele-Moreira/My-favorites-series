import { Link, NavLink } from 'react-router'

function Header() {
  return (
    <header>
      <div className="texto-negrito">
        <Link to="/" className="texto-negrito">MINHAS SÉRIES FAVORITAS</Link>
      </div>

      <div className="menu-direita">
        <NavLink to="/criticas" className="texto-negrito">CRÍTICAS</NavLink>
      </div>
    </header>
  )
}

export default Header