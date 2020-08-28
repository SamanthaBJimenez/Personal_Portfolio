import React from 'react';
import './assets/css/style.css';
import './assets/vendor/boxicons/css/boxicons.css'
import './assets/vendor/boxicons/css/boxicons.min.css'
import './assets/vendor/aos/aos.css'
import './assets/vendor/bootstrap/css/bootstrap.css'
import './assets/vendor/bootstrap/css/bootstrap-reboot.css'
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import ContactLinks from './components/ContactLinks';
// import Error from './components/Error';
import Landing from './components/Landing';
import Footer from './components/Footer';
import avatar from './ImgFiles/avatar.jpeg';
// import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


function App() {

  return (
    <div className="App">
      <script src="https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/"></script>
      <link rel="stylesheet" href="https://bootstrapmade.com/demo/assets/css/style.css"></link>
      <link rel="stylesheet" href="https://bootstrapmade.com/demo/assets/css/fontello.css"></link>
      <link rel="stylesheet" href="https://bootstrapmade.com/demo/assets/css/normalize.css"></link>
      {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/> */}
      {/* <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script> */}
      <link rel='stylesheet' href='https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css'/>
      <style>
        @import url('https://fonts.googleapis.com/css?family=Maven+Pro&display=swap');
      </style>  
      <body class="vsc-initialized" data-aos-easing="ease-in-out-back" data-aos-duration="1000" data-aos-delay="0">
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
                <li class="active menuLink"><a href="index.html"><i class="bx bx-home"></i> <span class="linkA">Home</span></a></li>
                <li class=""><a class="menuLink" /*href="#about"*/><span><i class="bx bx-user"></i><Link class="linkA" onClick={() => scroller.scrollTo('about', {
                  duration: 2500,
                  delay: 100,
                  smooth: true})
                }>About</Link></span></a></li>
                <li><a class="menuLink" /*href="#skills"*/><span><i class="bx bx-slider"></i><Link class="linkA" onClick={() => scroller.scrollTo('skills', {
                  duration: 2500,
                  delay: 100,
                  smooth: true})
                }>Skills</Link></span></a></li>
                <li><a class="menuLink" /*href="#projects"*/><span><i class="bx bx-collection"></i><Link class="linkA" onClick={() => scroller.scrollTo('portfolio', {
                  duration: 2500,
                  delay: 100,
                  smooth: true})
                }>Portfolio</Link></span></a></li>
                <li><a class="menuLink" /*href="#portfolio"*/><span><i class="bx bx-envelope"></i>  <Link class="linkA"  onClick={() => scroller.scrollTo('contact', {
                  duration: 2500,
                  delay: 100,
                  smooth: true})
                }>Contact</Link></span></a></li>
              <li><a class="menuLink" href="https://drive.google.com/file/d/1aZu3ijxlOe350sGUkNFCc11DT6Jla9dc/view?usp=sharing" target="_blank"><i class="bx bx-file"></i> <span>Resume</span></a></li>
            </ul>             
          </nav>
        </div>
      </header>
      <Element><Landing/></Element>
        <main id="main">
          <section id="about" class="about">
            <About/>
          </section>
          <section id="skills" class="skills section-bg">
            <Skills/>
          </section>
          <section id="portfolio" class="portfolio section-bg">
            <Portfolio/>
          </section>
          <section id="contact" class="contact">
            <ContactLinks/>
          </section>
        </main>
      </body>
    </div>
  );
}

export default App;
