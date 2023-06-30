import React,{ Component } from 'react';

export default class header extends Component{
    render(){
        return(
            <header id="home">
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                    <ul id="nav" className="nav">
                        <li class="current"><a class="smoothscroll" href="#home">Home</a></li>
                        <li><a class="smoothscroll" href="#about">About</a></li>
                        <li><a class="smoothscroll" href="#resume">Resume</a></li>
                        {/* <li><a class="smoothscroll" href="#works">Works</a></li> */}
                        <li><a class="smoothscroll" href="#testimonials">Testimonials</a></li>
                        <li><a class="smoothscroll" href="#contact">Contact</a></li>
                    </ul> {/* fin ul */}
                </nav> {/* Fin nav-wrap */}
                <div className="row banner">
                    <div className='banner-text'>
                        <h1 className="responsive-headline">Hi, I'm Javier Segovia </h1>
                        <p>Developer, Maker & Designer</p>
                        <h3>I'm Mexico based<span> Frontend Developer</span> creating awesome Web and Mobile App's whit <span>React and Nodejs</span>.
                            Let's <a className='smoothscroll' href='#about'>start scrolling</a> and learn more <a className="smoothscroll" href='#about'>about me</a>.
                        </h3>
                        <hr />
                        <ul className="social">
                            <li><a rel="noopener noreferrer" target="_blank" href="https://github.com/javier89"><i className="fa fa-github" /></a></li>
                            <li><a rel="noopener noreferrer" target='_blank' href='https://www.linkedin.com/in/javier-segovia/'><i className="fa fa-linkedin" /></a></li>
                        </ul>
                    </div>
                </div>
                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
                </p>
            </header>
        );
    }
}