import React, { useState } from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import "./App.css"
import Contact from "./components/Contact";
import Work from "./components/Work";
import Resume from "./components/Resume";
function App() {
 

  return (
    <div>
      <main>
          <Header/>
          
          <Hero/>
          <About/>
          <Work/>
          <Contact/>
          <Resume/>
      </main>
    </div>
  );
}

export default App;
