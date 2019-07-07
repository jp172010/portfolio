import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import Main from './components/Main';

class App extends React.Component {
  render() {
  return (
    <Wrapper>
    <Navbar/>
    <Main/>
    <Footer/>
    </Wrapper>
  )
}}

export default App;
