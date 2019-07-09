import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import Main from './components/Main';
import Portfolio from './components/Portfolio'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
  return (
    <Wrapper>
      <Router>
    <Navbar/>
    <Switch>
      <Route exact path="/" render={() => (<Main/>)}/>
      <Route exact path="/portfolio" render={() => (<Portfolio/>)}/>
      <Route exact path="/contact" render={() => (<Main/>)}/>
    </Switch>
    </Router>
    <Footer/>
    </Wrapper>
  )
}}

export default App;
