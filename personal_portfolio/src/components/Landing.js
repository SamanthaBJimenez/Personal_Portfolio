import React from 'react';
import 'react-typist/dist/Typist.css';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop';

const Landing = () => {
    return (
        <div>
            <script>
                dist/standalone/Typist.js
            </script>
            <section id="hero" class="d-flex flex-column justify-content-center align-items-center" style={{"padding": "0"}}>
                <div id="backgroundImg"></div>
                <div class="hero-container aos-init aos-animate" data-aos="fade-in">
                    <h1>Samantha Jimenez</h1>
                    <p style={{"display": "inline-flex"}}>I'm a <span style={{"border-bottom": "3px solid #149ddd"}} class="typed" >
                        <TypistLoop interval={1000}>
                            {[
                            'Engineer',
                            'Designer',
                            'Creator',
                            'Collaborator'
                            ].map(text => <Typist key={text} avgTypingDelay={60} >{text}<Typist.Backspace count={text.length} delay={1000}/></Typist>)}
                        </TypistLoop>
                    </span></p>
                </div>
            </section>
        </div>
    )
}

export default Landing;