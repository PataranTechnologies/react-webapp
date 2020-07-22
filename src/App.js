import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";


function App() {
  return (
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
  );
}

export default App;
