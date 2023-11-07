import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';

function Navbar({ onToggleDarkMode }) {
  const location = useLocation();

  const [toggle, setToggle] = useState(false);


  // Mudar a cor de fundo da Navbar
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener('scroll', changeColor);

  const [scrolling, setScrolling] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    // Função para lidar com o evento de rolagem
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (prevScrollPos < currentScrollPos) {
        // O scroll está indo para baixo, então esconda a navbar
        setScrolling(true);
      } else {
        // O scroll está indo para cima, então mostre a navbar
        setScrolling(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    // Adicione um event listener para o evento de rolagem quando o componente for montado
    window.addEventListener('scroll', handleScroll);

    // Remova o event listener quando o componente for desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const isHomePage = location.pathname === '/';

  return (
    <>
      <header>
        <nav className={`${color ? 'nav-bg' : ''} ${isHomePage ? '' : 'with-bg'} ${scrolling ? 'hidden' : ''}`}>
          <Link to='/' className='logo'>
            <h1>GlowUp<span>.</span></h1>
          </Link>
          <ul className="menu">
            <li><Link to='Sobre'>Sobre Nós</Link></li>
            <li><Link to='Projeto'>Projeto</Link></li>
            <li><Link to='Blog'>Blog</Link></li>
            <li><Link to='Contato'>Contato</Link></li>
          </ul>
          <div className="botoes">
            <button onClick={onToggleDarkMode}><FontAwesomeIcon icon={faLightbulb} className='light' /></button>
            <Link to='Login'><button className="button" id="form-open">Login</button></Link>
            <div className="menu_mobile">
              <FontAwesomeIcon icon={toggle ? faXmark : faBarsStaggered} alt="menu" className='icon' onClick={() => setToggle((prev) => !prev)} />
              <div className={`menu1 ${toggle ? 'open' : ''}`}>
                <ul>
                  <Link to='Login'><button className="button1" id="form-open">Login</button></Link>
                  <li><Link to='Sobre'>Sobre Nós</Link></li>
                  <li><Link to='Contato'>Contato</Link></li>
                  <li><Link to='Projeto'>Projeto</Link></li>
                  <li><Link to='Blog'>Blog</Link></li>
                </ul>
              </div>
              <div className={`bg-menu_mobile ${toggle ? 'show' : ''}`}></div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
