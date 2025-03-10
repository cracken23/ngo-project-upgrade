
import React from "react";
import PropTypes from "prop-types";
import "./Styles/footer.css";

const Footer = (props) => {
  return (
    <footer className={`footer-container ${props.rootClassName} tw-bg-gradient-to-r tw-from-[#333] tw-to-[#444] tw-py-8 tw-mt-auto`}>
      <div className="container tw-max-w-6xl tw-mx-auto tw-px-4">
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-8">
          <div className="tw-text-white">
            <h3 className="tw-text-xl tw-font-bold tw-mb-4 tw-text-[#4CCD99]">Geriatric Care and Health Foundation</h3>
            <p className="tw-mb-4 tw-text-gray-300">
              Dedicated to enhancing the quality of life for elderly individuals through compassionate care and support.
            </p>
            <p className="tw-text-gray-300">
              &copy; {new Date().getFullYear()} - All Rights Reserved
            </p>
          </div>
          
          <div className="tw-text-white">
            <h3 className="tw-text-xl tw-font-bold tw-mb-4 tw-text-[#4CCD99]">Quick Links</h3>
            <ul className="tw-space-y-2">
              <li>
                <a href="/Home" className="tw-text-gray-300 hover:tw-text-white tw-transition-colors">Home</a>
              </li>
              <li>
                <a href="/about" className="tw-text-gray-300 hover:tw-text-white tw-transition-colors">About Us</a>
              </li>
              <li>
                <a href="/contact" className="tw-text-gray-300 hover:tw-text-white tw-transition-colors">Contact</a>
              </li>
              <li>
                <a href="/donation" className="tw-text-gray-300 hover:tw-text-white tw-transition-colors">Donate</a>
              </li>
            </ul>
          </div>
          
          <div className="tw-text-white">
            <h3 className="tw-text-xl tw-font-bold tw-mb-4 tw-text-[#4CCD99]">Connect With Us</h3>
            <div className="tw-flex tw-space-x-4 tw-mb-4">
              <a
                href="https://www.facebook.com/profile.php?id=100069967083154&sfnsn=wiwspwa&mibextid=RUbZ1f"
                target="_blank"
                rel="noreferrer noopener"
                className="tw-text-gray-300 hover:tw-text-white tw-transition-colors"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 602.2582857142856 1024" className="tw-w-6 tw-h-6">
                  <path fill="currentColor" d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              
              <a
                href={props.linkText2 || "#"}
                target="_blank"
                rel="noreferrer noopener"
                className="tw-text-gray-300 hover:tw-text-white tw-transition-colors"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 877.7142857142857 1024" className="tw-w-6 tw-h-6">
                  <path fill="currentColor" d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
            </div>
            
            <address className="tw-not-italic tw-text-gray-300">
              <p className="tw-mb-2">
                <svg className="tw-w-5 tw-h-5 tw-inline-block tw-mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                Mumbai, India
              </p>
              <p className="tw-mb-2">
                <svg className="tw-w-5 tw-h-5 tw-inline-block tw-mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                info@geriatrichcf.org
              </p>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  l3: "Facebook",
  text5: "Instagram",
  rootClassName: "",
  text4: "Youtube",
  linkText1: "https://example.com",
  linkText: "https://example.com",
  linkText2: "https://example.com",
};

Footer.propTypes = {
  l3: PropTypes.string,
  text5: PropTypes.string,
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
  linkText1: PropTypes.string,
  linkText: PropTypes.string,
  linkText2: PropTypes.string,
};

export default Footer;
