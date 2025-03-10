
import React from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./style.css";
import Home from "./views/home.jsx";
import Contact from "./views/contact.jsx";
import About from "./views/about.jsx";
import Donation from "./views/donation.jsx";
import NotFound from "./views/not-found.jsx";
import Header from "./components/headernew";
import Footer from "./components/footer";
import sucess from "./views/sucess.jsx";
import Canceled from "./views/Canceled.jsx";
import Info from "./views/Info";
import { Redir } from "./views/Redir.jsx";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route component={Home} exact path="/Home" />
        <Route component={Contact} exact path="/contact" />
        <Route component={About} exact path="/about" />
        <Route component={Donation} exact path="/donation" />
        <Route component={sucess} exact path="/Success" />
        <Route component={Canceled} exact path="/Canceled" />
        <Route component={Redir} exact path="/"/>
        <Route component={Info} exact path="/info" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
      <Footer />
    </Router>
  );
};

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("app");
  if (container) {
    const root = createRoot(container);
    root.render(<App />);
  } else {
    console.error("Element with id 'app' not found");
  }
});

export default App;
