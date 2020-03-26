import React from 'react';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import '../css/About.css';
import Footer from './Footer';

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
                    <img src="https://bit.ly/2PvlS8Z" alt=""/>
                    <span class="title">Lorem ipsum dolor</span>
                    <span class="text">Morbi diam viverra mattis sociis magna, habitasse penatibus non lectus</span>
                </div>
                <div class="container">
                    <img src="https://bit.ly/2PXNumM" alt=""/>
                    <span class="title">Lorem ipsum dolor</span>
                    <span class="text">Morbi diam viverra mattis sociis magna, habitasse penatibus non lectus</span>
                </div>
                <div class="container">
                    <img src="https://bit.ly/2KbUszm" alt=""/>
                    <span class="title">Lorem ipsum dolor</span>
                    <span class="text">Morbi diam viverra mattis sociis magna, habitasse penatibus non lectus</span>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default About;