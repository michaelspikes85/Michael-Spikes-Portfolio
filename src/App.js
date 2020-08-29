import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container';

import About from './views/About';
import Portfolio from './views/Portfolio';
import Contact from './views/Contact';

import './styles/App.css'

function App() {
  return (
      <Router className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Container>
              <About />
            </Container>
          </Route>
          <Route exact path="/portfolio">
            <Container>
              <Portfolio />
            </Container>
          </Route>
          <Route exact path="/contact">
            <Container>
              <Contact />
            </Container>
          </Route>
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
