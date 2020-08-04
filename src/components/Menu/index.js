import React from 'react';
import './Menu.css';
import Logo from '../../assets/imgs/Logo.png';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/" title="Acessar página principal">
        <img className="Logo" src={Logo} alt="Kpopflix" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;