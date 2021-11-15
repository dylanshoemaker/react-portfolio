import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import "./App.css"
import Contact from "./components/Contact";
import Work from "./components/Work";
function App() {
 

  return (
    <div>
      <main>
          <Header/>
          
          <Hero/>
          <About/>
          <Work/>
          <Contact/>
      </main>
    </div>
  );
}

export default App;
