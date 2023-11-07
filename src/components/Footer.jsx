import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faFacebook, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <footer>
      <div className="colunas">
        <div className="logo">
          <a href="index.html"><h1>GlowUp<span>.</span></h1></a>
        </div>
        <p>© 2023 GlowUp. <br />Todos os direitos reservados. </p>
        <div className="icons">
          <FontAwesomeIcon className="icon" icon={faGithub} />
          <FontAwesomeIcon className="icon" icon={faLinkedin} />
          <FontAwesomeIcon className="icon" icon={faFacebook} />
          <FontAwesomeIcon className="icon" icon={faXTwitter} />
          <FontAwesomeIcon className="icon" icon={faInstagram} />
        </div>
      </div>
      <div className="colunas">
        <h2>Entre em contato</h2>
        <p>Rua das Flores, 123<br /> - Bairro Novo Horizonte<br />
          Cidade, Santa Maria, São Paulo<br /><br />
          contato@glowup.com<br /><br />
          +55 (11) 98765-4321
        </p>
      </div>
      <div className="saiba colunas">
        <h2>Saiba mais</h2>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="Sobre">Sobre nós</Link></li>
          <li><Link to="Projeto">Projeto</Link></li>
          <li><Link to="Blog">Blog</Link></li>
          <li><Link to="Contato">Contato</Link></li>
        </ul>
      </div>
      <div className="colunas">
        <h2>Nosso Newsletter</h2>
        <p>Se inscreva em nosso newsletter<br /> para receber notícias e mais informações<br /> sobre nós em seu e-mail.</p>
        <form className='subscribe-form'>
          <div className="subscribeBox">
            <FontAwesomeIcon className='icon' icon={faEnvelope} />
            <input type="email" placeholder="Digite seu e-mail" />
          </div>
          <button type="submit"><p>Inscreva-se</p><FontAwesomeIcon className='enviar' icon={faArrowRight} /></button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
