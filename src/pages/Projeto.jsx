import React from 'react'
import exemplo1 from '../images/exemplo1.jpg'
import exemplo2 from '../images/exemplo2.jpg'
import exemplo3 from '../images/exemplo3.jpg'
import ilu15 from '../images/ilu15.jpg'
import ilu12 from '../images/ilu12.jpg'

function Projeto() {
  return (
    <div className='Projeto'>
      <section class="section1 sec">
        <div className="text">
          <h3>Inovação e Tecnologia</h3>
          <h1>Transformando o Presente e Moldando o Futuro</h1>
          <p>Na GlowUp, a inovação e a tecnologia estão no cerne do nosso compromisso. Nossa busca incessante por soluções inovadoras de iluminação inteligente nos coloca na vanguarda da indústria. De sistemas de gerenciamento remoto a sensores avançados, cada projeto que empreendemos é uma demonstração do nosso compromisso com a excelência tecnológica. Acreditamos que a inovação é a força motriz para criar ambientes mais seguros, eficientes e sustentáveis, hoje e para as gerações futuras. Venha conosco nessa jornada, onde a inovação ilumina o caminho para um futuro mais inspirador.</p>
        </div>
        <img src={ilu15} alt="" />
      </section>

      <section class="section2 sec">
        <img src={ilu12} alt="" />
        <div className="text">
          <h3>Resultados e Benefícios</h3>
          <h1>O Que Nos Define</h1>
          <p>Na GlowUp, nossos projetos falam por si. Eles transformam comunidades, economizam dinheiro, aumentam a segurança, têm um impacto positivo no meio ambiente e são reconhecidos globalmente. Nossa marca é construída sobre resultados e benefícios tangíveis para nossos clientes e o mundo.</p>
        </div>
      </section>

      <section class="section3 sec">
        <h3>casos de sucesso</h3>
        <h1>Alguns exemplos famosos</h1>
        <div class="box">
          <div class="casos">
            <img src={exemplo1} alt="" />
            <div className="text">
              <h2>Cidade de Los Angeles</h2>
              <p>Em Los Angeles, o sistema de iluminação inteligente permitiu que a cidade controlasse a iluminação de forma mais eficiente, ajustando o nível de iluminação com base nas condições climáticas e de tráfego. Isso levou a uma economia de energia de cerca de 63%, reduzindo significativamente a emissão de gases de efeito estufa.</p>
            </div>
          </div>
          <div className="linha"></div>
          <div class="casos">
            <img src={exemplo2} alt="" />
            <div className="text">
              <h2>Cidade de Singapura</h2>
              <p>Em Singapura, a tecnologia de iluminação pública inteligente foi usada para ajudar a cidade a se tornar mais inteligente e conectada. O sistema de iluminação foi integrado a outras tecnologias, como sensores e câmeras de vigilância, criando uma rede inteligente que ajuda a melhorar a segurança pública e o gerenciamento do tráfego. Além disso, a cidade pôde economizar energia, reduzindo o consumo de eletricidade em cerca de 25%.</p>
            </div>
          </div>
          <div className="linha"></div>
          <div class="casos">
            <img src={exemplo3} alt="" />
            <div className="text">
              <h2>Cidade de Barcelona</h2>
              <p>Em Barcelona, a implementação do sistema de iluminação inteligente levou a uma economia de energia significativa, reduzindo o consumo de eletricidade em mais de 30%. Além disso, a cidade pôde melhorar a qualidade da iluminação pública, aumentando a segurança nas ruas e proporcionando um ambiente mais agradável para os moradores e visitantes.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section4 sec">
        <h1>A luz da inovação pode iluminar um mundo melhor para todos!</h1>
        <p>A luz é um símbolo de esperança e inovação, desde os tempos antigos até os dias de hoje. Ela ilumina nosso caminho, abre portas para oportunidades e nos conecta. Através da iluminação inteligente, podemos tornar nossas casas e cidades mais seguras, sustentáveis e eficientes, catalisando mudanças significativas na sociedade e inspirando um futuro melhor para todos.</p>
      </section>
    </div>
  )
}

export default Projeto