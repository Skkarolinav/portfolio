import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Navigation from './components/header/navigation/Navigation';
import Home from './components/content/home/Home'
import About from './components/content/about/About'
import Skills from './components/content/skills/Skills'
import Projects from './components/content/projects/Projects'
import Contact from './components/content/contact/Contact'
import Footer from './components/footer/Footer';
import ArrowUp from './components/header/navigation/ArrowUp'

class App extends Component {
  state = {  }

  render() { 
    return (
      <Router>
        <div className = 'app'>
          <header>
            <Navigation />
          </header>
          <main>
            <section className = 'content'>
              <ArrowUp />
              <Home />  
              <About />       
              <Skills />
              <Projects />
              <Contact />
            </section>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    );
  }
}
 
export default App;