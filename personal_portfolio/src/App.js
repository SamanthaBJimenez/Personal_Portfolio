import React from 'react';
import './assets/css/style.css';
import './assets/vendor/boxicons/css/boxicons.css'
import './assets/vendor/boxicons/css/boxicons.min.css'
import './assets/vendor/aos/aos.css'
import './assets/vendor/bootstrap/css/bootstrap.css'
import './assets/vendor/bootstrap/css/bootstrap-reboot.css'
import './assets/vendor/icofont/icofont.min.css';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Landing from './components/Landing';
import avatar from './ImgFiles/avatar.jpeg';
import { Link, Element } from 'react-scroll';
import Contact from './components/Contact';

function App() {

  const collapse = () => {
    let header = document.getElementById("header");
    if (header.style.display !== "block") {
      header.style.display = "block";
    } else {
      header.style.display = "";
    }
  }

  return (
    <div className="App">
      <script src="https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/"></script>
      <script src='./assets/js/main'></script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
      <link rel="stylesheet" href="https://bootstrapmade.com/demo/assets/css/style.css"></link>
      <link rel="stylesheet" href="https://bootstrapmade.com/demo/assets/css/fontello.css"></link>
      <link rel="stylesheet" href="https://bootstrapmade.com/demo/assets/css/normalize.css"></link>
      <link rel='stylesheet' href='https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css'/>
      <style>
        @import url('https://fonts.googleapis.com/css?family=Maven+Pro&display=swap');
      </style>  
      <body class="vsc-initialized" data-aos-easing="ease-in-out-back" data-aos-duration="1000" data-aos-delay="0" data-spy="scroll" data-target="#header" data-offset="50">
        <button
          class="mobile-nav-toggle d-xl-none"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={collapse}
        >
          <span class="navbar-toggler-icon"><i class="icofont-navigation-menu"></i></span>
        </button>
        <div class="show collapse mobile-nav-active" id="navbarSupportedContent">
          <header id="header">
            <div class="d-flex flex-column">
              <div class="profile">
                <img src={avatar} alt="" class="img-fluid rounded-circle"/>
                <h1 class="text-light"><a href="index.html">Samantha Jimenez</a></h1>
                <div class="social-links mt-3 text-center">
                  <a href='https://github.com/SamanthaBJimenez' target="_blank" rel="noopener noreferrer" class="github"><i class="bx bxl-github"></i></a>
                  <a href='mailto:SamanthaB.Jimenez@gmail.com' target="_blank" rel="noopener noreferrer" class="google"><i class="bx bxl-google"></i></a>
                  <a href='https://www.linkedin.com/in/samanthabjimenez/' target="_blank" rel="noopener noreferrer" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                  <a href='https://twitter.com/MannyJimenez_' target="_blank" rel="noopener noreferrer" class="twitter"><i class="bx bxl-twitter"></i></a>
                </div>
              </div>
              <nav class="nav-menu">
                <ul>
                  <li><a class="menuLink"><span><Link to='landing' class="linkA"  activeClass='activeNav' spy={true} smooth={true} duration={500}><i class="bx bx-home"></i>Home</Link></span></a></li>
                  <li><a class="menuLink"><span><Link to='about' class="linkA"  activeClass='activeNav' spy={true} smooth={true} duration={500}><i class="bx bx-user"></i>About</Link></span></a></li>
                  <li><a class="menuLink"><span><Link to='skills' class="linkA"  activeClass='activeNav' spy={true} smooth={true} duration={500}><i class="bx bx-slider"></i>Skills</Link></span></a></li>
                  <li><a class="menuLink"><span><Link to='portfolio' class="linkA"  activeClass='activeNav' spy={true} smooth={true} duration={500}><i class="bx bx-collection"></i>Portfolio</Link></span></a></li>
                  <li><a class="menuLink" ><span><Link to='contact' class="linkA" activeClass='activeNav' spy={true} smooth={true} duration={500}><i class="bx bx-envelope"></i>Contact</Link></span></a></li>
                  <li><a class="menuLink" href="https://drive.google.com/file/d/1aZu3ijxlOe350sGUkNFCc11DT6Jla9dc/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class="bx bx-file"></i> <span>Resume</span></a></li>
                </ul>             
              </nav>
            </div>
          </header>
        </div>
        <Element name="landing"><Landing/></Element>
        <main id="main">
          <section id="about" class="about">
            <Element name='about'><About/></Element>
          </section>
          <section id="skills" class="skills section-bg">
            <Element name='skills'><Skills/></Element>
          </section>
          <section id="portfolio" class="portfolio section-bg">
            <Element name='portfolio'><Portfolio/></Element>
          </section>
          <section id="contact" class="contact" style={{"padding-top": "70px"}}>
            <Element name='contact'><Contact/></Element>
          </section>
        </main>
      </body>
    </div>
  );
}

export default App;
