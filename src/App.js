import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Homepage from "./components/Homepage";
import Header from "./components/Header";
function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path="/about" component={About} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/resume" component={Resume} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
