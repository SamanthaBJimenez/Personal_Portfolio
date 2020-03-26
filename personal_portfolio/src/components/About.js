import React from 'react';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import '../css/About.css';
import Footer from './Footer';
import doggie from '../ImgFiles/doggie2.jpeg';
import whereAmI from '../ImgFiles/whereAmI.jpeg';
import hiking from '../ImgFiles/hiking.jpeg';

const About = () => {
    return (
        <div className='AboutDiv'>
            <Typist className='AboutTypist' avgTypingDelay={60}>
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
                {/* <Typist.Backspace count={1} delay={1000} /> */}
            </Typist>
            <div class="container-all">
                <div class="container">
                    <img className='aboutImg flip doggo' src={doggie} alt='photoOfHusky'/>
                    <span className='title'>Meet Nova</span>
                    <span class='text'>She is a super friendly 4 year old Siberian Husky.</span>
                </div>
                <div class="container">
                    <img className='aboutImg flip amsterdam' src={whereAmI} alt='whereAmI'/>
                    <span class="title">Amsterdam, Netherlands</span>
                    <span class="text">I love taking trips and am flexible with relocating for a great opportunity.</span>
                </div>
                <div class="container">
                    <img className='aboutImg hiking' src={hiking} alt='hikingWithHusky'/>
                    <span class='title'>Hiking with Nova</span>
                    <span class='text'>Taking a break and getting some fresh air helps me unwind after a long coding session.</span>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default About;