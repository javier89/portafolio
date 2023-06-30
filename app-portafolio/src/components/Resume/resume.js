import React, { Component } from 'react'

export default class Resume extends Component {
  render() {
    return (
      <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1><span>Education</span></h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <h3>Master</h3>
              <p className="info">Maestria en Sistemas Computacionales <span>•</span> <em className="date">Finished</em></p>
              <p>
                
              </p>
            </div>
          </div> {/* item end */}
          <div className="row item">
            <div className="twelve columns">
              <h3>University</h3>
              <p className="info">Ingeniero en Sistemas Computacionales <span>•</span> <em className="date">Titled</em></p>
              <p>
                
              </p>
            </div>
          </div> {/* item end */}
        </div> {/* main-col end */}
      </div> {/* End Education */}
      {/* Work
    ----------------------------------------------- */}
      <div className="row work">
        <div className="three columns header-col">
          <h1><span>Work</span></h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <h3>Secretaria de Administración del Estado de Zacatecas</h3>
              <p className="info">Developer Web <span>•</span> <em className="date">May 2019 - December 2021</em></p>
              <p>
                Responsabilidades, colaborar con el equipo de desarrolladores del area de informatica en la construccion y mantenimiento
                de sitios web a traves de codigo, asegurandonos que la navegacion sea facil para el usuario. De igual manera me encuentro 
                familiarizado con lenguajes de progrmacion como lo son: php, yii2. Asi como bases de datos relacionales como lo es: Mysql.
              </p>
            </div>
          </div> {/* item end */}
          <div className="row item">
            <div className="twelve columns">
              <h3>Tv Zac NTR S.A. de C.V.</h3>
              <p className="info">Soporte Tecnico<span>•</span> <em className="date">November 2018 - April 2019</em></p>
              <p>
                Responsabilidades, instalar y configurar la tecnologia a ser empleada en la empresa, es decir, los equipos, sistmas operativos,
                programas y aplicaciones. Realizar el mantenimiento periodico de sistemas, brindar asistencia a los empleados o 
                clientes acerca de tecnologia, y realizar diagnosticos del mal funcionamiento del hadware y el software.
              </p>
            </div>
          </div> {/* item end */}
          <div className="row item">
            <div className="twelve columns">
              <h3>Metals & Supplies de Mexico S.A de C.V.</h3>
              <p className="info">Auxiliar Informatica<span>•</span><em className="date">October 2016 - Febrary 2018</em></p>
              <p>
                Encargado de administrar, dar mantenimiento y soporte a los sistemas computacionales, equipo de computo, infraestructura 
                de red, actualizacion y manejo de bases de datos, configuracion y soporte a correos electronicos, servidores y pagina web.
              </p>
            </div>
          </div> {/* item end */}
          <div className="row item">
            <div className="twelve columns">
              <h3>Instituto Electoral de Zacatecas</h3>
              <p className="info"> Desarrollador de Software<span>•</span><em className="date">Febrary 2015 - April 2016  </em></p>
              <p>
                Auxiliar en la implementacion de sistemas informaticos de tipo electoral y administrativo, a travez del desarrollo de diversos 
                sistemas, base de datos y configuracion de redes, para facilitar los procedimiento electorales y adminitrativos del instituto.
              </p>
            </div>
          </div> {/* item end */}
          <div className="row ite,">
            <div className="twelve columns">
              <h3>Instituto Electoral del Distrito Federal </h3>
              <p className="info">Auxiliar Depatamento de Gestion y Analisis de Instrumentos Electorales<span>•</span><em className="date">Febrero 2015 - Septiembre 2015</em></p>
              <p>
                Auxiliar en controlar la integridad de las bases de datos del padron electoral y la lista nominal y la confidencialidad de su manejo; apoyar 
                en el desarrollo de procedimientos estadisticos y muestrales que, en su caso, permitan a la comision de organizacion y 
                geografia electoral.
              </p>
            </div>
          </div> {/* item end*/}
        </div> {/* main-col end */}
      </div> {/* End Work */}
      {/* Skills
    ----------------------------------------------- */}
      <div className="row skill">
        <div className="three columns header-col">
          <h1><span>Skills</span></h1>
        </div>
        <div className="nine columns main-col">
          <h2>Programning Languajes &amp; Tools</h2><br/>
          <div className="bars">
            <ul className="skills">
              <li><span className="bar-expand python" /><em>Python</em></li>
              <li><span className="bar-expand java" /><em>Java</em></li>
              <li><span className="bar-expand ruby" /><em>Ruby</em></li>
              <li><span className="bar-expand git" /><em>Git & Github</em></li>
              <li><span className="bar-expand html5" /><em>HTML5</em></li>
              <li><span className="bar-expand css" /><em>CSS</em></li>
              <li><span className="bar-expand javascript" /><em>JavaScript</em></li>
              <li><span className="bar-expand jquery" /><em>jQuery</em></li>
              <li><span className="bar-expand docker"/><em>Docker</em></li>
            </ul>
          </div>
        </div>
      </div> 
    </section>
    )
  }
}

