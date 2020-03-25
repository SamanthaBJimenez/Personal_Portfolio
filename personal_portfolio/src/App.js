import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactLinks from './components/ContactLinks';
import Error from './components/Error';
import Landing from './components/Landing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <link rel='stylesheet' href='https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css'/>
      <style>
        @import url('https://fonts.googleapis.com/css?family=Maven+Pro&display=swap');
      </style>    
      <Navbar/>
      <Switch>
        <Route exact path={"/about"}>
          <About/>
        </Route>
        <Route exact path={"/skills"}>
          <Skills/>
        </Route>
        <Route exact path={"/projects"}>
          <Projects/>
        </Route>
        {/* <Route exact path={"/resume"}>
          <Resume/>
        </Route> */}
        <Route exact path={"/contact"}>
          <ContactLinks/>
        </Route>
        <Route exact path={"/"}>
          <Landing/>
        </Route>
          
        <Route path="*">
          <Error/>
        </Route>
      </Switch> 
      <Footer/>
    </div>
  );
}

export default App;
