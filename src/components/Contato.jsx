import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInbox, faPhone, faEnvelope, faAddressCard } from '@fortawesome/free-solid-svg-icons'

function Contato() {

  useEffect(() => {
    const inputs = document.querySelectorAll('.contact-input');

    const handleFocus = (e) => {
      e.target.parentNode.classList.add('focus');
      e.target.parentNode.classList.add('not-empty');
    };

    const handleBlur = (e) => {
      if (e.target.value === '') {
        e.target.parentNode.classList.remove('not-empty');
      }
      e.target.parentNode.classList.remove('focus');
    };

    inputs.forEach((ipt) => {
      ipt.addEventListener('focus', handleFocus);
      ipt.addEventListener('blur', handleBlur);
    });

    // Remova os ouvintes de eventos quando o componente for desmontado
    return () => {
      inputs.forEach((ipt) => {
        ipt.removeEventListener('focus', handleFocus);
        ipt.removeEventListener('blur', handleBlur);
      });
    };
  }, []); // O array vazio assegura que o efeito só é executado uma vez, quando o componente é montado

  return (
    <section className="Contato sec" id="contato">
      <div className="box7">
        <div className="box_contato">
          <div className="title1">
            <h1>Contate-nos<span>.</span></h1>
            <h2>Informações de contato</h2>
          </div>
          <form action="contato.html" method="post" className="contact-form">
            <div className="input-wrap">
              <input className="contact-input" autoComplete="off" name="First Name" type="text" required />
              <label>Nome</label>
              <FontAwesomeIcon className='icon' icon={faAddressCard} />
            </div>
            <div className="input-wrap">
              <input className="contact-input" autoComplete="off" name="Last Name" type="text" required />
              <label>Sobrenome</label>
              <FontAwesomeIcon className='icon' icon={faAddressCard} />
            </div>
            <div className="input-wrap w-100">
              <input className="contact-input" autoComplete="off" name="Email" type="email" required />
              <label>Email</label>
              <FontAwesomeIcon className='icon' icon={faEnvelope} />
            </div>
            <div className="input-wrap w-100">
              <input className="contact-input" pattern="[0-9]{10,11}" maxLength="11" autoComplete="off" name="Number" type="tel" required />
              <label>Telefone</label>
              <FontAwesomeIcon className='icon' icon={faPhone} />
            </div>
            <div className="input-wrap w-100">
              <textarea name="Message" autoComplete="off" className="contact-input"></textarea>
              <label>Message</label>
              <FontAwesomeIcon className='icon' icon={faInbox} />
            </div>
            <input type="submit" value="Enviar" className="btn1 w-100" />
          </form>
        </div>
        <hr />
        <div className="text">
          <h1>Trabalhe conosco!</h1>
          <h4>envie um e-mail: <a href="">contato@glowup.com</a></h4>
        </div>
      </div>
      <div className="linha"><hr /></div>
    </section>
  )
}

export default Contato