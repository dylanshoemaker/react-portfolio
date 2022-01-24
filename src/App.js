import React from "react";
import { BrowserRouter as HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

import Header from "./components/Header";
import Icons from './components/Icons';
import SinglePage from "./components/SinglePage";
function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Header/>
      <Switch>
        <Route exact path='/' component={SinglePage}/>
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/resume" component={Resume} />
        <Route path="/*" component={SinglePage}/>
      </Switch>
      <Icons />
      <Footer/>
    </HashRouter>
  );
}

export default App;
