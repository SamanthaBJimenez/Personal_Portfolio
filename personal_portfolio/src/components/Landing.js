import React from 'react';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
// import '../css/Landing.css';
import Footer from './Footer';

const Landing = () => {
    return (
        <div>
         {/* <div class='vsc-initialized' data-aos-easing="ease-in-out-back" data-aos duration="1000" data-aos-delay="0">
            <button type="button" class="mobile-nav-toggle d-xl-none"><i class="icofont-navigation-menu"></i></button>

            <header id="header">
    <div class="d-flex flex-column">

      <div class="profile">
        <img src="assets/img/profile-img.jpg" alt="" class="img-fluid rounded-circle"></img>
        <h1 class="text-light"><a href="index.html">Samantha Jimenez</a></h1>
        <div class="social-links mt-3 text-center">
          <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
          <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
          <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
          <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
          <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        </div>
</div>
      <nav class="nav-menu">
        <ul>
          <li class="active"><a href="index.html"><i class="bx bx-home"></i> <span>Home</span></a></li>
          <li class=""><a href="#about"><i class="bx bx-user"></i> <span>About</span></a></li>
          <li><a href="#resume"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
          <li><a href="#portfolio"><i class="bx bx-book-content"></i> Portfolio</a></li>
          <li><a href="#services"><i class="bx bx-server"></i> Services</a></li>
          <li><a href="#contact"><i class="bx bx-envelope"></i> Contact</a></li>

        </ul>
      </nav>
      <button type="button" class="mobile-nav-toggle d-xl-none"><i class="icofont-navigation-menu"></i></button>

    </div>
  </header> */}

            <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
                <div class="hero-container aos-init aos-animate" data-aos="fade-in">
                    <h1>Samantha Jimenez</h1>
                    <p>I'm a <span class="typed" data-typed-items="Developer, Designer, Freelancer, Creator">Photographer</span><span class="typed-cursor typed-cursor--blink">|</span></p>
                </div>
            </section>
        {/* <svg style={{"transform": "scaleY(-1)", "position": "inherit", "top": "-1px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#043322" fill-opacity="1" d="M0,64L720,0L1440,64L1440,320L720,320L0,320Z"></path></svg> */}
        <script>
            dist/standalone/Typist.js
        </script>
            {/* <Typist className='LandingTypist' avgTypingDelay={80}> */}
                {/* Howdy...
                <Typist.Backspace count={7} delay={1000} />
                ey..
                <Typist.Backspace count={4} delay={1500} />
                ello!
                <Typist.Delay ms={1250} />
                <br/>
                My name is Samantha Jimenez.
                <Typist.Delay ms={1000} />
                <br/>
                I'm a Fullstack Web Developer! */}

                {/* Hey!
                <Typist.Delay ms={1250} />
                <br/>
                My name is Samantha Jimenez.
                <Typist.Delay ms={1000} />
                <br/>
                I'm a Full-Stack Web Developer. */}
            {/* </Typist> */}

        </div>
    )
}

export default Landing;