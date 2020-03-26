import React from 'react';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import '../css/Landing.css';
import Footer from './Footer';

const Landing = () => {
    return (
        <div className='LandingDiv'>
        <script>
            dist/standalone/Typist.js
        </script>
            <Typist className='LandingTypist' avgTypingDelay={80}>
                Howdy...
                <Typist.Backspace count={7} delay={1000} />
                ey..
                <Typist.Backspace count={4} delay={1500} />
                ello!
                <Typist.Delay ms={1250} />
                <br/>
                My name is Samantha Jimenez.
                <Typist.Delay ms={1000} />
                <br/>
                I'm a Fullstack Web Developer!
            </Typist>
            <Footer/>
        </div>
    )
}

export default Landing;