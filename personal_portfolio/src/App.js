import React from 'react';
import './assets/css/style.css';
import './assets/vendor/boxicons/css/boxicons.css'
import './assets/vendor/boxicons/css/boxicons.min.css'
import './assets/vendor/aos/aos.css'
import './assets/vendor/bootstrap/css/bootstrap.css'
import './assets/vendor/bootstrap/css/bootstrap-reboot.css'
// import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/icofont/icofont.min.css';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
// import Error from './components/Error';
import Landing from './components/Landing';
import Footer from './components/Footer';
import avatar from './ImgFiles/avatar.jpeg';
// import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
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
      {/* <script src="src/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script> */}
      {/* <script src="src/assets/vendor/jquery/jquery.min.js"></script> */}

      {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/> */}
  <script src='./assets/js/main'></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
      <link rel="stylesheet" href="https://bootstrapmade.com/demo/assets/css/style.css"></link>
      <link rel="stylesheet" href="https://bootstrapmade.com/demo/assets/css/fontello.css"></link>
      <link rel="stylesheet" href="https://bootstrapmade.com/demo/assets/css/normalize.css"></link>
      {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/> */}
      {/* <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script> */}
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
                <a href='https://github.com/SamanthaBJimenez' target="_blank" class="github"><i class="bx bxl-github"></i></a>
                <a href='mailto:SamanthaB.Jimenez@gmail.com' target="_blank" class="google"><i class="bx bxl-google"></i></a>
                <a href='https://www.linkedin.com/in/samanthabjimenez/' target="_blank" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                <a href='https://twitter.com/MannyJimenez_' target="_blank" class="twitter"><i class="bx bxl-twitter"></i></a>
              </div>
            </div>
            <nav class="nav-menu">
              <ul>
                <li class=""><a class="menuLink"><span><Link to='landing' class="linkA"  activeClass='activeNav' spy={true} smooth={true} duration={500} onClick={() => scroller.scrollTo('landing', {
                  duration: 2500,
                  delay: 100,
                  smooth: true})
                }><i class="bx bx-home"></i>Home</Link></span></a></li>
                <li class=""><a class="menuLink"><span><Link to='about' class="linkA"  activeClass='activeNav' spy={true} smooth={true} duration={500} onClick={() => scroller.scrollTo('about', {
                  duration: 2500,
                  delay: 100,
                  smooth: true})
                }><i class="bx bx-user"></i>About</Link></span></a></li>
                <li><a class="menuLink"><span><Link to='skills' class="linkA"  activeClass='activeNav' spy={true} smooth={true} duration={500} onClick={() => scroller.scrollTo('skills', {
                  duration: 2500,
                  delay: 100,
                  smooth: true})
                }><i class="bx bx-slider"></i>Skills</Link></span></a></li>
                <li><a class="menuLink"><span><Link to='portfolio' class="linkA"  activeClass='activeNav' spy={true} smooth={true} duration={500} onClick={() => scroller.scrollTo('portfolio', {
                  duration: 2500,
                  delay: 100,
                  smooth: true})
                }><i class="bx bx-collection"></i>Portfolio</Link></span></a></li>
                <li><a class="menuLink" ><span><Link to='contact' class="linkA" activeClass='activeNav' spy={true} smooth={true} duration={500} onClick={() => scroller.scrollTo('contact', {
                  duration: 2500,
                  delay: 100,
                  smooth: true})
                }><i class="bx bx-envelope"></i>Contact</Link></span></a></li>
              <li><a class="menuLink" href="https://drive.google.com/file/d/1aZu3ijxlOe350sGUkNFCc11DT6Jla9dc/view?usp=sharing" target="_blank"><i class="bx bx-file"></i> <span>Resume</span></a></li>
            </ul>             
          </nav>
        </div>
        {/* <button
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
        </button> */}
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
          <section id="contact" class="contact">
            <Element name='contact'><Contact/></Element>
          </section>
        </main>
      </body>
      {/* <script src="assets/vendor/jquery/jquery.min.js"></script> */}
      {/* <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script> */}
      {/* <script src="assets/vendor/jquery.easing/jquery.easing.min.js"></script> */}
      {/* <script src="assets/vendor/php-email-form/validate.js"></script> */}
      {/* <script src="assets/vendor/waypoints/jquery.waypoints.min.js"></script> */}
      {/* <script src="assets/vendor/counterup/counterup.min.js"></script> */}
      {/* <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script> */}
      {/* <script src="assets/vendor/venobox/venobox.min.js"></script> */}
      {/* <script src="assets/vendor/owl.carousel/owl.carousel.min.js"></script> */}
      {/* <script src="assets/vendor/typed.js/typed.min.js"></script> */}
      {/* <script src="assets/vendor/aos/aos.js"></script> */}
      {/* <script src="assets/js/main.js"></script> */}
    </div>
  );
}

export default App;
