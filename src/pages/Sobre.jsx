import React from 'react'
import group from '../images/Group-video.png'
import net from '../images/net.png'
import ilu2 from '../images/ilu2.jpeg'
import ilu9 from '../images/ilu9.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLightbulb, faSeedling, faThumbsUp, faScaleBalanced, faHandshake, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';

function Sobre() {
  return (
    <div className='Sobre'>
      <section className="section1 sec">
        <div className="text">
          <h3>Missão</h3>
          <h1>Iluminar o futuro com sustentabilidade e inspiração</h1>
          <p>Na GlowUp, nossa missão é simples e poderosa: estamos comprometidos em iluminar o caminho para um futuro mais sustentável e inspirador. Acreditamos no poder da iluminação para transformar vidas e comunidades, liderando a revolução da iluminação inteligente. Junte-se a nós enquanto trabalhamos incansavelmente para criar um amanhã mais brilhante.</p>
        </div>
        <img className='col-2' src={ilu2} alt="" />
      </section>

      <section className="section2 sec">
        <img src={ilu9} className='col-2' alt="" />
        <div className="text">
          <h3>História</h3>
          <h1>Cinco amigos, uma visão inovadora</h1>
          <p>Somos um grupo de cinco amigos apaixonados por tecnologia que, juntos, identificamos uma necessidade premente. Vimos que o mundo carecia de soluções inovadoras de iluminação inteligente que pudessem tornar nossas cidades mais eficientes e sustentáveis. Assim, decidimos unir nossas forças e fundar a GlowUp. Desde então, nossa amizade e compromisso com essa visão de suprir essa carência têm nos impulsionado a criar um amanhã mais brilhante e inspirador.</p>
        </div>
      </section>

      <section className="section3 sec">
        <h3>Equipe</h3>
        <h1>Conheça a nossa equipe</h1>
        <div className="box">
          <div className="left">
            <div className="equipe">
              <FontAwesomeIcon className='icon' icon={faUser} />
              <div className="text">
                <h2>Arthur Petrin</h2>
                <p>RM: 98735</p>
              </div>
            </div>
            <div className="equipe">
              <FontAwesomeIcon className='icon' icon={faUser} />
              <div className="text">
                <h2>Gabriel Rocha</h2>
                <p>RM: 550788</p>
              </div>
            </div>
            <div className="equipe">
              <FontAwesomeIcon className='icon' icon={faUser} />
              <div className="text">
                <h2>Gustavo Calce</h2>
                <p>RM: 550638</p>
              </div>
            </div>
            <div className="equipe">
              <FontAwesomeIcon className='icon' icon={faUser} />
              <div className="text">
                <h2>Júlia Marques</h2>
                <p>RM: 98680</p>
              </div>
            </div>
            <div className="equipe">
              <FontAwesomeIcon className='icon' icon={faUser} />
              <div className="text">
                <h2>Matheus Gusmão</h2>
                <p>RM: 550826</p>
              </div>
            </div>
          </div>
          <div className="right">
            <img src={group} alt="" />
          </div>
        </div>
      </section>

      <section className="section4 sec">
        <h3>valores</h3>
        <h1>Nossos valores</h1>
        <div className="box">
          <div className="valores">
            <div className="icon">
              <FontAwesomeIcon icon={faLightbulb} />
            </div>
            <h2>Inovação</h2>
            <p>Buscamos constantemente a inovação em tudo o que fazemos, desde o desenvolvimento de novas tecnologias até a criação de soluções personalizadas para nossos clientes.</p>
          </div>
          <div className="valores">
            <div className="icon">
              <FontAwesomeIcon icon={faSeedling} />
            </div>
            <h2>Sustentabilidade</h2>
            <p>Acreditamos que é nossa responsabilidade agir com responsabilidade ambiental e promover soluções sustentáveis que reduzam o impacto no meio ambiente.</p>
          </div>
          <div className="valores">
            <div className="icon">
              <FontAwesomeIcon icon={faThumbsUp} />
            </div>
            <h2>Qualidade</h2>
            <p>Nós nos esforçamos para garantir que nossos produtos e serviços sejam da mais alta qualidade, atendendo aos mais altos padrões e requisitos de nossos clientes.</p>
          </div>
          <div className="valores">
            <div className="icon">
              <FontAwesomeIcon icon={faScaleBalanced} />
            </div>
            <h2>Ética</h2>
            <p>Mantemos altos padrões éticos em tudo o que fazemos, desde a transparência em nossas relações com os clientes até a integridade em nossas práticas de negócios.</p>
          </div>
          <div className="valores">
            <div className="icon">
              <FontAwesomeIcon icon={faHandshake} />
            </div>
            <h2>Comprometimento</h2>
            <p>Estamos comprometidos em fornecer soluções de iluminação pública inteligente confiáveis ​​e eficazes que atendam às necessidades de nossos clientes e ajudem a melhorar a qualidade de vida das comunidades em que atuamos.</p>
          </div>
          <div className="valores">
            <div className="icon">
              <FontAwesomeIcon icon={faPuzzlePiece} />
            </div>
            <h2>Colaboração</h2>
            <p>Acreditamos no poder da colaboração e trabalhamos em parceria com nossos clientes e outros stakeholders para alcançar soluções inovadoras e eficazes. Valorizamos a diversidade de ideias e perspectivas e estamos sempre abertos a ouvir e aprender com os outros.</p>
          </div>
        </div>
      </section>

      <section className="section5 sec">
        <div className="box">
          <img src={net} alt="" />
          <div className="text">
            <h3>sustentabilidade</h3>
            <h1>Compromisso com a sustentabilidade</h1>
            <p>Na GlowUp, a sustentabilidade está no centro do nosso compromisso. Buscamos a eficiência energética, utilizamos tecnologia LED de alta eficiência, reduzimos a poluição luminosa e priorizamos materiais sustentáveis. Além disso, promovemos a conscientização e a educação sobre práticas sustentáveis e estabelecemos parcerias estratégicas para alcançar nossos objetivos. Nossa missão é iluminar o futuro com responsabilidade e respeito pelo nosso planeta.</p>
          </div>
        </div>
      </section>

      <section className="section6 sec">
        <h1>Trabalhe conosco!</h1>
        <a href="/Contato"><button>Contate-nos</button></a>
      </section>

    </div>
  )
}

export default Sobre