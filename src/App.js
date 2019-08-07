import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from "./Components/Nav";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import './App.css';


function App () {
  return (
  <div className = "App">
    <Nav />
    <Switch>
     <Route exact path='/' component={Home}/>
     <Route exact path='/About' component={About}/>
     <Route exact path='/Contact' component={Contact}/>
    </Switch>
    <Footer />
  </div>
  );
}

export default App;
