import React from 'react';

const Skills = () => {
    return (
        <div class="container">
            <div class="section-title">
                <h2>Skills</h2>
                <p>These are a few of the technical competencies I've developed so far on my tech journey. I look forward to growing my collection of skills.</p>
            </div>
            <div class="skills-content">
                <div className='iconDiv'>
                    <i className='devicon-javascript-plain icon'></i>
                    <div class="progress">
                        <span class="skill">javascript</span>
                    </div>
                </div>
                <div className='iconDiv'>
                    <i className='devicon-css3-plain icon'></i>
                    <div class="progress">
                        <span class="skill">css</span>
                    </div>
                </div>
                <div className='iconDiv'>
                    <i className='devicon-express-original icon'></i>
                    <div class="progress">
                        <span class="skill">express</span>
                    </div>
                </div>
                <div className='iconDiv'>
                    <i className='devicon-git-plain icon'></i>
                    <div class="progress">
                        <span class="skill">git</span>
                    </div>
                </div>
                <div className='iconDiv'>
                    <i className='devicon-github-plain icon'></i>
                    <div class="progress">
                        <span class="skill">github</span>
                    </div>
                </div>
                <div className='iconDiv'>
                    <i className='devicon-html5-plain icon'></i>
                    <div class="progress">
                        <span class="skill">html</span>
                    </div>
                </div>
                <div className='iconDiv'>
                    <i className='devicon-nodejs-plain icon'></i>
                    <div class="progress">
                        <span class="skill">nodejs</span>
                    </div>
                </div>
                <div className='iconDiv'>
                    <i className='devicon-postgresql-plain icon'></i>
                    <div class="progress">
                        <span class="skill">postgres</span>
                    </div>
                </div>
                <div className='iconDiv'>
                    <i className='devicon-react-original icon'></i>
                    <div class="progress">
                        <span class="skill">react</span>
                    </div>
                </div>
                <div className='iconDiv'>
                    <i className='devicon-visualstudio-plain icon'></i>
                    <div class="progress">
                        <span class="skill">visual studio</span>
                    </div>
                </div>
                <div className='iconDiv'>
                    <i className='devicon-trello-plain icon'></i>
                    <div class="progress">
                        <span class="skill">trello</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;