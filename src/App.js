import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Homepage from "./routes/Homepage/Homepage";
import About from "./routes/About/About";
import Services from "./routes/Services/Services";
import Blog from "./routes/Blog/Blog";
import Contact from "./routes/Contact/Contact";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Header/>
    <Switch>
      <Route path="/" exact>
        <Homepage/>
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/blog">
        <Blog/>
      </Route>
      <Route path="/services">
        <Services/>
      </Route>
      <Route path="/contact">
        <Contact/>
      </Route>
      <Redirect to="/"/>
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
