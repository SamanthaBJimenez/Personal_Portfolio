import React from 'react';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import '../css/Landing.css';

const Landing = () => {
    return (
        <div className='LandingDiv'>
        <script>
            dist/standalone/Typist.js
        </script>
            <Typist>
                Hi.
                <Typist.Backspace count={3} delay={1500} />
                Hey.
                <Typist.Backspace count={4} delay={2000} />
                Hello.
                <Typist.Backspace count={1} delay={1500} />
                !
                <Typist.Delay ms={1500} />
                <br/>
                My name is Samantha Jimenez.
                <Typist.Delay ms={1000} />
                <br/>
                I'm a Fullstack Web Developer!
            </Typist>
        </div>
    )
}

export default Landing;