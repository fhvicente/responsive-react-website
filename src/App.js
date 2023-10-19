import React from 'react'

import { Footer, Blog, Possibility, Features, What, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';



const App = () => {
  return (
    <div class='App'>
      <div class='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <What />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
