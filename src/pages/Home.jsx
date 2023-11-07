import bg_img from '../images/background.png'
import question from '../images/Questions.png'
import team from '../images/team1.png'
import blog1 from '../images/blog1.jpg'
import blog2 from '../images/blog2.jpg'
import blog3 from '../images/blog3.png'
import ilu1 from '../images/ilu1.jpg'
import ilu3 from '../images/ilu3.jpg'
import ilu5 from '../images/ilu5.jpg'
import ilu6 from '../images/ilu6.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faShieldHalved, faPowerOff, faWifi, faBolt, faDatabase, faBarsProgress } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'
import Contato from '../components/Contato'

function Home() {
  const scrollToSection = () => {
    // Encontre a âncora da seção desejada pelo seu ID
    const section = document.getElementById('inicio'); // Substitua 'sua-secao' pelo ID da sua seção

    if (section) {
      // Use o método scrollIntoView para rolar até a seção
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='Home'>
      <section className="section1">
        <img src={bg_img} alt="Iluminação inteligente" className='bg-img' />
        <div className="box1">
          <h1><span>GlowUp,</span><br />transformando sua cidade com eficiência energética e sustentabilidade.</h1>
          <button onClick={scrollToSection} type="button">Saiba mais <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
      </section>

      <section className="section2 sec" id="inicio">
        <div className="box2">
          <div className="text1">
            <h1>O que é iluminação inteligente pública?</h1>
            <p>A Iluminação Inteligente Pública é muito mais do que apenas luzes nas ruas. É uma revolução no modo como as cidades iluminam seus espaços públicos, tornando-os mais eficientes, seguros e sustentáveis. Imagine uma cidade onde a luz se adapta às necessidades do momento, economizando energia e criando ambientes mais acolhedores.</p>
          </div>
          <img src={question} alt="" />
        </div>
      </section>

      <section className="section3">
        <div className="box3">
          <h3>Estudos de Caso</h3>
          <h1>Por que deveriamos adotar esse sistema?</h1>
          <img src={ilu5} className='main-bg-img' alt="" />
          <div className="colunas">
            <div className="cases">
              <img src={ilu3} className='bg-img' alt="" />
              <div className="case">
                <FontAwesomeIcon className='icon' icon={faPowerOff} />
                <h2>Economia de energia</h2>
                <p>A adoção de sistemas de iluminação inteligente pode reduzir os custos de energia em até 50%, resultando em economias significativas. Por exemplo, Los Angeles economizou US$ 8 milhões após a implantação desse sistema.</p>
              </div>
            </div>
            <div className="cases">
              <img src={ilu5} className='bg-img' alt="" />
              <div className="case">
                <FontAwesomeIcon className='icon p2' icon={faLightbulb} />
                <h2>Redução da poluição luminosa</h2>
                <p>A iluminação inteligente direciona a luz apenas onde necessário e ajusta a intensidade conforme necessário, reduzindo a poluição luminosa. Em Tucson, Arizona, a poluição luminosa foi reduzida em 63%.</p>
              </div>
            </div>
            <div className="cases">
              <img src={ilu6} className='bg-img' alt="" />
              <div className="case">
                <FontAwesomeIcon className='icon' icon={faShieldHalved} />
                <h2>Melhoria da segurança pública</h2>
                <p>Sistemas de iluminação inteligente melhoram a segurança ao iluminar áreas específicas, detectar atividades suspeitas e alertar autoridades. Barcelona viu uma redução de 50% na criminalidade em uma área após a adoção desse sistema.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section4">
        <div className="box4">
          <img src={team} alt="" />
          <div className="text">
            <h3>Sobre nós</h3>
            <p>Queremos tornar a iluminação pública inteligente uma realidade para o Brasil. Somos uma equipe apaixonada e dedicada em fornecer soluções de iluminação pública eficientes e sustentáveis que possam contribuir para um país mais moderno, seguro e sustentável. Acreditamos que nossa tecnologia de ponta pode oferecer uma solução mais econômica e eficiente para a iluminação pública, e estamos comprometidos em tornar isso possível para todas as cidades brasileiras.</p>
            <Link to='Sobre'><button><FontAwesomeIcon icon={faArrowRight} /></button></Link>
          </div>
        </div>
      </section>

      <section className="section5 sec">
        <div className="box5">
          <img src={ilu1} alt="" />
          <div className="titulo">
            <h3>Recursos</h3>
            <h1>Nossos principais recursos</h1>
            <p>Bem-vindo ao futuro da iluminação pública! Nossas soluções de iluminação inteligente são projetadas para tornar as cidades mais seguras, eficientes e conectadas. Descubra os recursos que estão transformando as áreas urbanas em lugares mais vibrantes e sustentáveis.</p>
          </div>
          <div className="recursos">
            <div className="recurso">
              <div className="nome">
                <div className="sensor1 icons">
                  <FontAwesomeIcon className='sensor icon' icon={faWifi} />
                </div>
                <h2>Sensoriamento Inteligente</h2>
              </div>
              <p>Nossas luminárias são equipadas com sensores avançados que respondem ao ambiente em tempo real. Isso significa que a iluminação se adapta automaticamente às condições de luminosidade e presença, economizando energia durante a noite e garantindo segurança.</p>
            </div>
            <div className="recurso">
              <div className="nome">
                <div className="icons">
                  <FontAwesomeIcon className='icon' icon={faBolt} />
                </div>
                <h2>Eficiência Energética</h2>
              </div>
              <p>Reduza sua pegada de carbono e economize recursos valiosos com luminárias de LED altamente eficientes. Nossas soluções de iluminação pública ajudam a alcançar metas de sustentabilidade, reduzindo os custos operacionais.</p>
            </div>
            <div className="recurso">
              <div className="nome">
                <div className="icons">
                  <FontAwesomeIcon className='icon' icon={faDatabase} />
                </div>
                <h2>Integração de Dados</h2>
              </div>
              <p>Nossa tecnologia se integra perfeitamente aos sistemas de gerenciamento de tráfego, segurança e monitoramento. Isso permite que os municípios coletem dados valiosos para melhorar o planejamento urbano e a tomada de decisões.</p>
            </div>
            <div className="recurso">
              <div className="nome">
                <div className="icons">
                  <FontAwesomeIcon className='icon' icon={faBarsProgress} />
                </div>
                <h2>Controle Remoto Avançado</h2>
              </div>
              <p>Ganhe o controle total da iluminação pública com nossa plataforma de gerenciamento remoto. Ajuste o brilho, programe horários de operação e monitore o desempenho de todas as luminárias a partir de qualquer lugar, garantindo eficiência energética e economia de recursos.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section6 sec">
        <div className="box6">
          <h3>Blog</h3>
          <h1>Notícias</h1>
          <div className="mini-box">
            <div className="col-3">
              <img src={blog1} alt="" />
              <div className="conteudo">
                <p>22 abril 2023</p>
                <h2>Tartarugas se confundem com a iluminação das praias</h2>
                <a href="/Blog">Saiba mais<FontAwesomeIcon className='icon' icon={faArrowRight} /></a>
              </div>
            </div>
            <div className="linha"></div>
            <div className="col-3">
              <img src={blog2} alt="" />
              <div className="conteudo">
                <p>23 abril 2023</p>
                <h2>A exposição à luz artificial durante a noite pode afetar o ciclo de sono</h2>
                <a href="/Blog">Saiba mais<FontAwesomeIcon className='icon' icon={faArrowRight} /></a>
              </div>
            </div>
            <div className="linha"></div>
            <div className="col-3">
              <img src={blog3} alt="" />
              <div className="conteudo">
                <p>27 abril 2023</p>
                <h2>Sistemas de luz convencionais podem consumir mais energia do que o necessário</h2>
                <a href="/Blog">Saiba mais<FontAwesomeIcon className='icon' icon={faArrowRight} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contato />
    </div>
  )
}

export default Home