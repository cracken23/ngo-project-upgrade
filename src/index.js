import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { createRoot } from "react-dom/client";

import "./style.css";
import Home from "./views/home";
import Contact from "./views/contact";
import About from "./views/about";
import Donation from "./views/donation";
import NotFound from "./views/not-found";
import Header from "./components/headernew";
import Footer from "./components/footer";
import sucess from "./views/sucess";
import Canceled from "./views/Canceled";
import Info from "./views/Info"
//optional
import Admin from "./views/Admin/Admin";
import SideBar from "./views/Admin/SideBar";
import { Redir } from "./views/Redir";

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
{/* test */}
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
