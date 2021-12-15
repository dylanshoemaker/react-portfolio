import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Homepage from "./components/Homepage";
import Header from "./components/Header";
import Icons from './components/Icons';
function App() {
  return (
    <Router basename="/react-portfolio">
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/resume" component={Resume} />
      </Switch>
      <Icons />
      <Footer/>
    </Router>
  );
}

export default App;
