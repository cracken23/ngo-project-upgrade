
import React from "react";
import { Link } from "react-router-dom";
import NGOICON from "./Images/GCAHF.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="tw-bg-gradient-to-b tw-from-[#2a2a2a] tw-to-[#222] tw-text-white tw-py-12 tw-mt-auto">
      <div className="tw-container tw-mx-auto tw-px-4 md:tw-px-6">
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-10">
          <div>
            <div className="tw-flex tw-items-center tw-space-x-3 tw-mb-4">
              <img src={NGOICON} alt="GCAHF" className="tw-h-12 tw-w-12" />
              <span className="tw-font-playfair tw-text-lg tw-font-bold">GCAHF</span>
            </div>
            <p className="tw-text-gray-300 tw-mb-6 tw-max-w-md">
              Dedicated to enhancing the quality of life for elderly individuals through compassionate care and support.
            </p>
            <p className="tw-text-gray-400">
              &copy; {currentYear} Geriatric Care and Health Foundation. All Rights Reserved.
            </p>
          </div>
          
          <div>
            <h3 className="tw-text-xl tw-font-bold tw-mb-4 tw-text-[#4CCD99]">Quick Links</h3>
            <ul className="tw-space-y-3">
              <FooterLink to="/Home" label="Home" />
              <FooterLink to="/about" label="About Us" />
              <FooterLink to="/contact" label="Contact" />
              <FooterLink to="/donation" label="Donate" />
              <FooterLink to="/info" label="Info" />
            </ul>
          </div>
          
          <div>
            <h3 className="tw-text-xl tw-font-bold tw-mb-4 tw-text-[#4CCD99]">Contact Us</h3>
            <address className="tw-not-italic tw-text-gray-300 tw-space-y-3">
              <p className="tw-flex tw-items-start">
                <svg className="tw-w-5 tw-h-5 tw-mr-3 tw-mt-1 tw-text-[#4CCD99]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Fiza Apartment, B-001, Plot No 195, near MSEB OFFICE, Sector 12B, Bonkode, Kopar Khairane, Navi Mumbai, Maharashtra 400709</span>
              </p>
              <p className="tw-flex tw-items-center">
                <svg className="tw-w-5 tw-h-5 tw-mr-3 tw-text-[#4CCD99]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>vijaykumarsgaikwad@gmail.com</span>
              </p>
              <p className="tw-flex tw-items-center">
                <svg className="tw-w-5 tw-h-5 tw-mr-3 tw-text-[#4CCD99]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91-9869166157</span>
              </p>
            </address>
            
            <div className="tw-mt-6">
              <h4 className="tw-text-lg tw-font-bold tw-mb-3">Connect With Us</h4>
              <div className="tw-flex tw-space-x-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=100069967083154&sfnsn=wiwspwa&mibextid=RUbZ1f"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="tw-text-gray-300 hover:tw-text-white tw-transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="tw-w-6 tw-h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3A5 5 0 0 0 10 7v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="tw-text-gray-300 hover:tw-text-white tw-transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="tw-w-6 tw-h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4Z"></path>
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"></path>
                    <path d="M16.5 7.5C16.5 8.05228 16.0523 8.5 15.5 8.5C14.9477 8.5 14.5 8.05228 14.5 7.5C14.5 6.94772 14.9477 6.5 15.5 6.5C16.0523 6.5 16.5 6.94772 16.5 7.5Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, label }) => (
  <li>
    <Link 
      to={to} 
      className="tw-text-gray-300 hover:tw-text-white tw-transition-colors hover:tw-translate-x-1 tw-inline-block"
    >
      <span className="tw-mr-2">›</span>{label}
    </Link>
  </li>
);

export default Footer;
