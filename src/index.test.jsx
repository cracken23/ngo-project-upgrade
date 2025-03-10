// FILEPATH: /C:/Users/anasf/OneDrive/Desktop/code/NGO/Ngo-Website/Ngo-Website/src/index.test.js
import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./index";
import Contact from "./views/contact";
import About from "./views/about";
import Donation from "./views/donation";
import Home from "./views/home";
import GMap from "./components/GoogleMaps.jsx"
import Footer from "./components/footer";
import NavigationLinks from "./components/navigation-links.js"
import Headernew from "./components/headernew";
import Newbtn from "./components/newbtn";
import TeamBanner from "./components/team-banner";
import NotFound from "./views/not-found";
import Contacttemp from "./components/contacttemp.js";
import DonateSLD from "./components/donate-sld.js";
import axios from "./Axios/axios.js";
jest.mock("@lottiefiles/react-lottie-player", () => {
  return {
    Player: () => <div>Mock Player</div>,
  };
});
jest.mock("react-leaflet", () => {
  return {
    TileLayer: () => <div>MOCK</div>,
    MapContainer: () => <div>Mock</div>,
    Marker: () => <div>Mock</div>,
    Popup:()=><div>Mock</div>,
  };
});
test("renders without crashing", () => {
  render(<App />);
});
test("Home loaded",()=>{
    render(<Home/>)
})
// test("Contact loaded",()=>{
//     render(<Contact/>)
// })
test("About loaded",()=>{
    render(<About/>)
})
test("Donation loaded",()=>{
    render(<Donation/>)
})
test("Maps Working",()=>{
    render(<GMap/>)
})
test("Footer Working",()=>{
    render(<Footer/>)
})
test("Header Working",()=>{
    render(<Headernew/>)
})
test("Nav link Working",()=>{
    render(<NavigationLinks/>)
})
test("Button Working",()=>{
    render(<Newbtn/>)
})
test("banner Working",()=>{
    render(<TeamBanner/>)
})
test("404 Working",()=>{
    render(<NotFound/>)
})
test("Contact temp Working",()=>{
    render(<Contacttemp/>)
})
test("Donationslid working",()=>{
    render(<DonateSLD/>)
})



