import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (      
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/fotoActulizada.jpg" alt />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
                Hi, My name is Javier Segovia and I'm a software Enginner with experience at companies like
                Secretaria de Administracion, Tv Zac Ntr, Metals and Supplies. As well as varios opensource projects.
                I'm passionate about using my skills to build innovative and user-friendly applications that make a 
                positive impact on people's lives.
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  {/* <span>Caminito Encantado </span><br /> */}
                  {/* <span>Col. la escondida, Fraccionamiento Paseos del Valle<br /> */}
                  {/* Zacatecas, Zac. Mex, C.P: 98173 */}
                  <span>Xaresi Software</span><br />
                  <span>Cell-Phone: (+52) 492-181-9566</span><br />
                  <span>Email: j.segovia.baez@gmail.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}