
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import NGOICON from "./Images/GCAHF.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header 
      className={`tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-z-50 tw-transition-all tw-duration-300 tw-z-[999999999] ${
        scrolled ? "tw-bg-white/95 tw-backdrop-blur-md tw-shadow-md" : "tw-bg-white"
      }`}
    >
      <div className="tw-container tw-mx-auto tw-flex tw-justify-between tw-items-center tw-py-3 tw-px-4 md:tw-px-6">
        <Link 
          to="/" 
          className="tw-flex tw-items-center tw-space-x-3 tw-transition-transform tw-duration-300 hover:tw-scale-105"
        >
          <img src={NGOICON} alt="GCAHF Logo" className="tw-h-14 tw-w-14 tw-object-contain" />
          <span className="tw-font-playfair tw-text-lg md:tw-text-xl tw-font-bold tw-text-neutral-dark tw-hidden md:tw-block">
            Geriatric Care and<br/>Health Foundation
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="tw-hidden md:tw-flex tw-items-center tw-space-x-1">
          <NavLink to="/Home" label="Home" active={isActive("/Home")} />
          <NavLink to="/about" label="About" active={isActive("/about")} />
          <NavLink to="/contact" label="Contact" active={isActive("/contact")} />
          <NavLink to="/info" label="Info" active={isActive("/info")} />
          <Link 
            to="/donation" 
            className="tw-ml-2 tw-bg-[#ea5507] hover:tw-bg-[#d4480d] tw-text-white tw-px-5 tw-py-2.5 tw-rounded-lg tw-font-medium tw-transition-all tw-duration-300 hover:tw-shadow-lg hover:tw-transform hover:tw-scale-105"
          >
            Donate
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="tw-flex md:tw-hidden tw-items-center">
          <Link 
            to="/donation" 
            className="tw-mr-3 tw-bg-[#ea5507] tw-text-white tw-px-4 tw-py-2 tw-rounded-lg tw-text-sm tw-font-medium"
          >
            Donate
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="tw-p-2 tw-rounded-full hover:tw-bg-gray-100 tw-transition"
            aria-label="Toggle mobile menu"
          >
            {!mobileMenuOpen ? (
              <svg className="tw-w-6 tw-h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="tw-w-6 tw-h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="tw-fixed tw-inset-0 tw-z-50 tw-bg-white tw-pt-20 tw-px-4 tw-pb-6 tw-shadow-xl tw-overflow-y-auto md:tw-hidden tw-animate-fade-in">
          <div className="tw-space-y-3">
            <MobileNavLink to="/Home" label="Home" />
            <MobileNavLink to="/about" label="About" />
            <MobileNavLink to="/contact" label="Contact" />
            <MobileNavLink to="/info" label="Info" />
            <MobileNavLink to="/donation" label="Donation" highlight />
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ to, label, active }) => (
  <Link
    to={to}
    className={`tw-px-4 tw-py-2 tw-rounded-md tw-transition-all tw-duration-300 tw-font-medium tw-relative ${
      active 
        ? "tw-text-[#000000] tw-font-semibold" 
        : "tw-text-neutral-dark hover:tw-text-[#4CCD99]"
    }`}
  >
    {label}
    {active && (
      <span className="tw-absolute tw-bottom-0 tw-left-1/2 tw-transform tw-translate-x-[-50%] tw-w-1/2 tw-h-0.5 tw-bg-[#4CCD99]"></span>
    )}
  </Link>
);

const MobileNavLink = ({ to, label, highlight }) => (
  <Link
    to={to}
    className={`tw-block tw-py-3 tw-px-4 tw-rounded-lg tw-text-lg tw-font-medium tw-transition-all tw-duration-300 ${
      highlight
        ? "tw-bg-[#ea5507] tw-text-white"
        : "tw-bg-neutral-light/50 tw-text-neutral-dark"
    }`}
  >
    {label}
  </Link>
);

export default Header;
