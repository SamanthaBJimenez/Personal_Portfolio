import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactLinks from './components/ContactLinks';
// import Landing from './components/Landing';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
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
          
        <Route path="*">
          <Error/>
        </Route>
      </Switch> 
    </div>
  );
}

export default App;
