import React, { Component } from 'react';
import Header from "./components/Header/header";
import About from "./components/About/about";
import Resume from "./components/Resume/resume";
// import Portfolio from "./components/Portfolio/portfolio";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Testimonials from './components/Testimonials/testimonials';


class App extends Component{
  render(){
    return(
      <div className="App">
        <Header />
        <About />
        <Resume />
         {/* <Portfolio />*/}
        <Testimonials />
        <Contact />
        <Footer /> 
      </div>
    );
  }
}

export default App;
