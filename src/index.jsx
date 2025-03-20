
import React from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./style.css";
import Home from "./views/Home";
import Contact from "./views/Contact";
import About from "./views/About";
import Donation from "./views/Donation";
import NotFound from "./views/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Success from "./views/Success";
import Canceled from "./views/Canceled";
import Info from "./views/Info";
import { Redir } from "./views/Redir.jsx";

const App = () => {
  return (
    <Router>
      <div className="tw-flex tw-flex-col tw-min-h-screen">
        <Header />
        <main className="tw-flex-grow tw-pt-20">
          <Switch>
            <Route component={Home} exact path="/Home" />
            <Route component={Contact} exact path="/contact" />
            <Route component={About} exact path="/about" />
            <Route component={Donation} exact path="/donation" />
            <Route component={Success} exact path="/Success" />
            <Route component={Canceled} exact path="/Canceled" />
            <Route component={Redir} exact path="/"/>
            <Route component={Info} exact path="/info" />
            <Route component={NotFound} path="**" />
            <Redirect to="**" />
          </Switch>
        </main>
        <Footer />
      </div>
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
