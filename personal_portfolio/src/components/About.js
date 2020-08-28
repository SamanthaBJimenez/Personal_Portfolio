import React from 'react';
// import Typist from 'react-typist';
// import 'react-typist/dist/Typist.css';
import avatar from './../ImgFiles/avatar.jpeg';
import aboutImg from './../ImgFiles/about.jpeg';
import Footer from './Footer';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


const About = () => {
    return (
        <div class="container">
            <div class="section-title">
                <h2>About</h2>
                <p>Brooklyn-born afro-latina with a passion for building and creating beautiful and functional applications.</p>
            </div>
            <div class="row">
                <div class="col-lg-4 aos-init aos-animate" data-aos="fade-right" style={{"height": "30vh", "overflow": "hidden", "margin-left": "15px"}}>
                    <img src={aboutImg} class="about_img" alt=""></img>
                </div>
                <div class="col-lg-8 pt-4 pt-lg-0 content aos-init aos-animate" data-aos="fade-left">
                    <h3>Full Stack Software Engineer.</h3>
                    <p class="font-italic">
                        I aspired to have a career I was passionate about and never looked back.
                    </p>
                    <p>
                        I'm a former Secretary of an elementary school in South Williamburg. I originally went to college for Accounting but decided to take some time to find a career path I was more passionate about. After extensive research I discovered that software engineering was a field that combined the analytical skills I’ve developed so far in my career, with my desire to build and create. Since then I discovered Pursuit, a software engineering fellowship, and have grown to appreciate all things full stack. 
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