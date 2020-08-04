import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'
import Logo from '../../assets/imgs/Logo.png'
import Button from '../Button'

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/" title="Acessar página principal">
        <img className="Logo" src={Logo} alt="Kpopflix" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;