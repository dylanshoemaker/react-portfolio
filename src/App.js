import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
function App() {
  const [categories] = useState([
    { name: "About" },
    { name: "Portfolio" },
    { name: "Contact Me" },
    { name: "Resume" },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Router>
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Header>
      <main>
        <div>
          <Hero></Hero>
          <Switch>
            <Route exact path="/react-portfolio" component={About} />
            <Route path="/about" component={About} />
            <Route path="/Portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
          </Switch>
          <Footer></Footer>
        </div>
      </main>
      </Router>
    </div>
  );
}

export default App;
