import React, { useState } from 'react';
import blog1 from '../images/blog1.jpg'
import blog2 from '../images/blog2.jpg'
import blog3 from '../images/blog3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'

function Blog() {
    const [isExpanded, setIsExpanded] = useState(false);


    return (
        <div className='Blog'>
            <h1 className="h1_blog">Blog de Notícias</h1>
            <section className="blog" id="blog1">
                <div className="box1">
                    <div className="title">
                        <div className="text">
                            <h2>Tartarugas se confundem com a iluminação das praias</h2>
                            <h3>Os filhotes de tartaruga, que após o nascimento se dirigem instintivamente para o mar atraídos pela luz da lua, estão cada vez mais desorientados pelas luzes artificiais, indica um estudo publicado pela revista Royal Society Open Science.</h3>
                            <div className="date">
                                <FontAwesomeIcon className='icon' icon={faCalendar} />
                                <p>22 de abril de 2023</p>
                            </div>
                        </div>
                        <img src={blog1} alt="" />
                    </div>
                    <div className="collapsible">
                        <input type="checkbox" id="collapsible-check" />
                        <div className="view">
                            <p>As tartarugas marinhas são animais que dependem da luz natural para se orientar durante a época de reprodução. No entanto, a iluminação artificial nas praias pode afetar o processo de reprodução desses animais. As luzes artificiais podem confundir as tartarugas e fazê-las seguir em direção às áreas iluminadas, em vez de seguir em direção ao mar.<br /><br />

                                Isso pode ter consequências graves para a sobrevivência das tartarugas, pois a luz artificial pode desorientar as fêmeas que procuram locais adequados para depositar seus ovos. Além disso, as tartarugas filhotes também podem ser atraídas pela iluminação artificial das praias, o que pode expô-las a riscos como predadores, obstáculos e desidratação.<br /><br />

                                Por isso, é importante que as autoridades responsáveis adotem medidas para reduzir a poluição luminosa nas praias, como a instalação de luzes de baixa intensidade, redirecionamento da iluminação para locais que não afetem as áreas de reprodução das tartarugas, e ainda a criação de programas de conscientização ambiental para a população local e turistas. Com essas ações, é possível garantir a preservação das tartarugas marinhas e manter a biodiversidade dos ecossistemas costeiros.<br /><br /></p>
                            <a href="https://youtu.be/VZ_ufAcewCs" target="_blank">Clique aqui para assistir um curto vídeo sobre o assunto</a>
                        </div>
                        <div className="botao">
                            <label htmlFor="collapsible-check" id="myLabel" onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? 'Ver menos' : 'Ver mais'}</label>
                        </div>
                    </div>
                </div>
            </section>


            <section className="blog" id="blog2">
                <div className="box1">
                    <div className="title">
                        <div className="text">
                            <h2>A exposição à luz artificial durante a noite pode afetar o ciclo de sono</h2>
                            <h3>Os efeitos negativos da luz artificial pública noturna na saúde das pessoas: riscos de distúrbios do sono, transtornos do humor e doenças metabólicas e cardiovasculares.</h3>
                            <div className="date">
                                <FontAwesomeIcon className='icon' icon={faCalendar} />
                                <p>23 de abril de 2023</p>
                            </div>
                        </div>
                        <img src={blog2} alt="" />
                    </div>
                    <div className="collapsible">
                        <input type="checkbox" id="collapsible-check2" />
                        <div className="view">
                            <p>A exposição à luz artificial pública durante a noite pode afetar a saúde das pessoas. A iluminação artificial pública é projetada para melhorar a visibilidade e a segurança em áreas urbanas durante a noite, mas a iluminação excessiva ou mal direcionada pode ter efeitos negativos na saúde humana.<br /><br />

                                Por exemplo, estudos mostram que a exposição à luz artificial pública durante a noite pode causar perturbações no ritmo circadiano, levando a distúrbios do sono, como insônia, sonolência diurna, redução da qualidade do sono e aumento do risco de desenvolvimento de transtornos do humor, como depressão e ansiedade.<br /><br />

                                Além disso, a exposição excessiva à luz artificial durante a noite pode aumentar a exposição a comprimentos de onda de luz azul, que são especialmente eficazes em suprimir a produção de melatonina e prejudicar o sono. Também pode aumentar o risco de doenças cardiovasculares, metabólicas e até câncer de mama em mulheres.<br /><br />

                                Portanto, é importante que as autoridades responsáveis pela iluminação pública considerem as consequências da exposição à luz artificial durante a noite e adotem medidas para reduzir os efeitos negativos na saúde pública. Essas medidas incluem a utilização de iluminação mais eficiente, com menor intensidade e direcionada para onde é necessária, a fim de reduzir a poluição luminosa e proteger a saúde das pessoas.<br /><br /></p>
                        </div>
                        <div className="botao">
                            <label htmlFor="collapsible-check2" id="myLabel1" onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? 'Ver menos' : 'Ver mais'}</label>
                        </div>
                    </div>
                </div>
            </section>

            <section className="blog3" id="blog3">
                <div className="box1">
                    <div className="title">
                        <div className="text">
                            <h2>Sistemas de luz convencionais podem consumir mais energia do que o necessário</h2>
                            <h3>Adoção de tecnologias de iluminação inteligentes pode reduzir consumo de energia elétrica em até 90% na iluminação pública, aponta estudo.</h3>
                            <div className="date">
                                <FontAwesomeIcon className='icon' icon={faCalendar} />
                                <p>27 de abril de 2023</p>
                            </div>
                        </div>
                        <img src={blog3} alt="" />
                    </div>
                    <div className="collapsible">
                        <input type="checkbox" id="collapsible-check3" />
                        <div className="view">
                            <p>Segundo a Agência Internacional de Energia (AIE), a iluminação pública é responsável por aproximadamente 10% do consumo global de eletricidade. Além disso, o custo operacional da iluminação pública pode representar até 40% do orçamento energético das cidades.<br /><br />

                                Sistemas de luz convencionais, como lâmpadas de vapor de sódio e mercúrio, podem consumir até 50% mais energia do que os sistemas de iluminação LED. Isso ocorre porque as lâmpadas convencionais emitem luz em todas as direções, enquanto a tecnologia LED emite luz em uma única direção, permitindo que uma maior proporção de luz seja direcionada para onde é necessária.<br /><br />

                                Já os sistemas de luz inteligentes, como a iluminação conectada, podem oferecer uma redução ainda maior no consumo de energia elétrica, já que possuem sensores que detectam a presença de pessoas e ajustam a intensidade da luz de acordo com a demanda do ambiente. Isso significa que a iluminação pode ser ajustada automaticamente para uma intensidade menor quando não há pessoas presentes, reduzindo ainda mais o consumo de energia elétrica.<br /><br />

                                De acordo com o Green Building Council, a adoção de sistemas de iluminação inteligentes pode reduzir o consumo de energia elétrica em até 90%, levando a uma redução significativa nos custos de energia elétrica e nas emissões de gases de efeito estufa. Portanto, a adoção de tecnologias de iluminação eficientes e inteligentes é essencial para promover a sustentabilidade urbana e reduzir o impacto ambiental da iluminação pública.<br /><br /></p>
                        </div>
                        <div className="botao">
                            <label htmlFor="collapsible-check3" id="myLabel2" onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? 'Ver menos' : 'Ver mais'}</label>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blog