
import React, { useState } from "react";
import PropTypes from "prop-types";
import Newbtn from "./newbtn";
import "./Styles/headernew.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import NGOICON from "./Images/GCAHF.png";

const Headernew = (props) => {
  const history = useHistory();
  const [Mobile, setMobile] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobile(!Mobile);
  };

  return (
    <header className="headernew-container tw-sticky tw-top-0 tw-z-50 tw-bg-white tw-shadow-md">
      <div data-thq="thq-navbar" className="headernew-navbar-interactive tw-py-3">
        <div 
          className="tw-flex tw-items-center tw-cursor-pointer tw-transition-transform tw-duration-300 hover:tw-scale-105" 
          onClick={() => history.push("/")}
        >
          <img
            src={NGOICON}
            alt="GCAHF Logo"
            className="tw-h-16 tw-w-16 tw-object-contain tw-mx-4"
          />
        </div>
        
        <h1 className="headernew-text tw-text-center tw-max-w-48 tw-font-playfair tw-text-lg md:tw-text-xl tw-font-bold tw-text-[#333] tw-hidden md:tw-block">
          Geriatric Care and Health Foundation
        </h1>

        <div data-thq="thq-navbar-nav" className="headernew-desktop-menu tw-hidden md:tw-flex">
          <nav className="headernew-links tw-flex tw-items-center tw-gap-1">
            <Newbtn
              onClick="/Home"
              button1="Home"
              rootClassName="newbtn-root-class-name"
            />
            <Newbtn
              onClick="/about"
              rootClassName="newbtn-root-class-name"
            />
            <Newbtn
              onClick="/contact"
              button1="Contact"
              rootClassName="newbtn-root-class-name2"
            />
            <Newbtn
              onClick="/info"
              button1="Info"
              rootClassName="newbtn-root-class-name1"
            />
          </nav>
        </div>
        
        <div className="headernew-buttons">
          <button
            onClick={() => history.push("/donation")}
            className="tw-bg-[#ea5507] hover:tw-bg-white tw-text-white hover:tw-text-[#ea5507] tw-px-6 tw-py-3 tw-rounded-md hover:tw-border-[#ea5507] tw-border-2 tw-border-transparent hover:tw-drop-shadow-lg hover:-tw-translate-y-1 tw-transition-all tw-duration-300 tw-font-bold"
          >
            Donate
          </button>
        </div>
        
        <div className="headernew-burger-menu md:tw-hidden tw-cursor-pointer tw-p-2 tw-rounded-full hover:tw-bg-gray-100" onClick={toggleMobileMenu}>
          <svg viewBox="0 0 1024 1024" className="headernew-icon tw-w-8 tw-h-8 tw-text-[#333]">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        
        {Mobile && (
          <div className="tw-z-[100] tw-p-8 tw-top-0 tw-left-0 tw-fixed tw-flex tw-flex-col tw-w-full tw-h-full tw-bg-[#fdf0ed]">
            <div className="headernew-nav">
              <div className="headernew-top tw-flex tw-justify-between tw-items-center">
                <div className="tw-flex tw-items-center tw-gap-3">
                  <img src={NGOICON} alt="GCAHF Logo" className="tw-h-12 tw-w-12" />
                  <span className="tw-font-bold tw-text-xl tw-font-playfair">GCAHF</span>
                </div>
                <div 
                  data-thq="thq-close-menu" 
                  className="headernew-close-menu tw-h-10 tw-w-10 tw-cursor-pointer tw-bg-white tw-rounded-full tw-flex tw-items-center tw-justify-center tw-shadow-md hover:tw-bg-gray-100" 
                  onClick={toggleMobileMenu}
                >
                  <svg viewBox="0 0 1024 1024" className="tw-h-6 tw-w-6 tw-text-[#333]">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              
              <nav className="headernew-links1 tw-mt-10 tw-flex tw-flex-col tw-gap-4">
                <NavLink 
                  text="Home" 
                  onClick={() => { history.push("/Home"); toggleMobileMenu(); }} 
                />
                <NavLink 
                  text="About" 
                  onClick={() => { history.push("/about"); toggleMobileMenu(); }} 
                />
                <NavLink 
                  text="Contact" 
                  onClick={() => { history.push("/Contact"); toggleMobileMenu(); }} 
                />
                <NavLink 
                  text="Info" 
                  onClick={() => { history.push("/Info"); toggleMobileMenu(); }} 
                />
                <NavLink 
                  text="Donation" 
                  onClick={() => { history.push("/Donation"); toggleMobileMenu(); }} 
                  isSpecial={true}
                />
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Helper component for mobile navigation links
const NavLink = ({ text, onClick, isSpecial = false }) => (
  <button 
    onClick={onClick} 
    className={`tw-text-lg tw-font-medium tw-border-solid tw-rounded-md tw-px-4 tw-py-3 tw-cursor-pointer tw-shadow-md tw-transition-all tw-duration-300 tw-text-left
      ${isSpecial 
        ? "tw-bg-[#ea5507] tw-text-white hover:tw-bg-[#d14a06]" 
        : "tw-bg-white hover:tw-bg-[#4CCD99] hover:tw-text-white"} 
      hover:tw-translate-x-2 hover:tw-scale-105`}
  >
    {text}
  </button>
);

Headernew.defaultProps = {
  ngo: "Contact",
  text: "Text",
};

Headernew.propTypes = {
  ngo: PropTypes.string,
  text: PropTypes.string,
};

export default Headernew;
