import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import "./App.css"
function App() {
 

  return (
    <div>
      <main>
          <Header/>
          <Hero/>
          <About/>
      </main>
    </div>
  );
}

export default App;
