import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Work from "./components/Work";
import Resume from "./components/Resume";

function App() {
  return (
    <Router>
      <Header />
      <Hero />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/work" component={Work} />
        {/* <Route path="/contact" component={Contact} /> */}
        <Route path="/resume" component={Resume} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
