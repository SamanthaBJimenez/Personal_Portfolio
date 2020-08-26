import React from 'react';
// import Typist from 'react-typist';
// import 'react-typist/dist/Typist.css';
import avatar from './../ImgFiles/avatar.jpeg';
// import '../css/About.css';
import Footer from './Footer';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


const About = () => {
    return (
        <div class="container">

        <div class="section-title">
          <h2>About</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row">
          <div class="col-lg-4 aos-init aos-animate" data-aos="fade-right">
            <img src="assets/img/profile-img.jpg" class="img-fluid" alt=""></img>
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content aos-init aos-animate" data-aos="fade-left">
            <h3>Full Stack Software Engineer.</h3>
            <p class="font-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="icofont-rounded-right"></i> <strong>Birthday:</strong> 25 March 19XX</li>
                  <li><i class="icofont-rounded-right"></i> <strong>Website:</strong> www.example.com</li>
                  <li><i class="icofont-rounded-right"></i> <strong>Phone:</strong> +123 456 7890</li>
                  <li><i class="icofont-rounded-right"></i> <strong>City:</strong> Brooklyn, NY</li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="icofont-rounded-right"></i> <strong>Age:</strong> 30</li>
                  <li><i class="icofont-rounded-right"></i> <strong>Degree:</strong> Master</li>
                  <li><i class="icofont-rounded-right"></i> <strong>PhEmailone:</strong> email@example.com</li>
                  <li><i class="icofont-rounded-right"></i> <strong>Freelance:</strong> Available</li>
                </ul>
              </div>
            </div>
            <p>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
            </p>
          </div>
        </div>

      </div>

        // <div className='AboutDiv'>
        //     <Element id="About"/>
        //     <div className='avatar'>
        //         {avatar}
        //     </div>
        //     <div class='jumbotron jumbotron-fluid' /*style={{"padding": "40vh 33vw 7vh 10vw", "margin-bottom": "0px"}}*/>
        //         <div class='container-fluid'>
        //             <p class='display-3' /*style={{'font-size': '5rem', 'line-height': '.5'}}*/>about me</p>
        //             <p class='lead'>This is where I will be writing a lot of information about myself, what brought me to software engineering, and what I am interested in. This is where I tell everyone a little bit about myself. I hope to find enough things to fill this up.</p>
        //         </div>
        //     </div>

            /* <Typist className='AboutTypist' avgTypingDelay={60}>
                <Typist.Delay ms={1200} />
                Hey, my name is Samantha Jimenez.
                <Typist.Delay ms={1200} />
                <br/>
                I am a New York City born Fullstack Web Developer currently<br/>based in Brooklyn. 
                <Typist.Delay ms={1350} />
                .. for now.
                <Typist.Delay ms={1200} />
                <br/>
                <br/>
                When I'm not coding you can find me biking through the city,
                <br/> 
                <Typist.Delay ms={400} /> 
                hiking with my Husky, <Typist.Delay ms={400} /> or traveling the world with friends.
            </Typist> */
            /* <Footer/> */
        /* </div> */
    )
}

export default About;