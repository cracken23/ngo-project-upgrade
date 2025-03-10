
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Styles/donate-sld.css";
import axios from "../Axios/axios";
import PuffLoader from "react-spinners/PuffLoader";

const DonateSLD = (props) => {
  const [amount, SetAmount] = useState("");
  const [spinner, SetSpinner] = useState(false);
  const [errmsg, Seterrmsg] = useState("");

  const RazorpayButton = () => {
    useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://cdn.razorpay.com/static/embed_btn/bundle.js';
      script.async = true;
      document.body.appendChild(script);
    }, []);
  
    return (
      <div 
        className="razorpay-embed-btn" 
        data-url="https://pages.razorpay.com/pl_O0XaJRlaAzn9vB/view" 
        data-text="Donate Now" 
        data-color="#528FF0" 
        data-size="large"
      />
    );
  };

  return (
    <div className={`donate-sld-container ${props.rootClassName} tw-max-w-3xl tw-mx-auto tw-p-8 tw-rounded-xl tw-shadow-lg tw-bg-gradient-to-br tw-from-white tw-to-[#f5f5f5]`}>
      <div className="donate-sld-container1 tw-text-center">
        <h2 className="donate-sld-text tw-text-3xl tw-font-bold tw-mb-6 tw-text-[#333] tw-relative tw-inline-block">
          {props.text2}
          <span className="tw-block tw-h-1 tw-w-1/2 tw-bg-[#ea5507] tw-mx-auto tw-mt-2"></span>
        </h2>
        
        <p className="tw-text-lg tw-mb-8 tw-text-gray-700 tw-max-w-xl tw-mx-auto">
          Your generous donation helps us provide essential services and care to elderly individuals in need. Every contribution makes a difference in the lives of seniors.
        </p>
        
        <div className="tw-mb-8">
          <p className="tw-text-gray-600 tw-mb-4">{props.text}</p>
          
          {spinner ? (
            <div className="tw-flex tw-justify-center tw-my-4">
              <PuffLoader loading={spinner} color="#ea5507" size={60} />
            </div>
          ) : (
            <RazorpayButton />
          )}
          
          {errmsg && (
            <p className="tw-text-red-500 tw-mt-2">{errmsg}</p>
          )}
        </div>
        
        <div className="tw-bg-[#f8f8f8] tw-p-6 tw-rounded-lg tw-border-l-4 tw-border-[#ea5507] tw-text-left tw-mb-6">
          <h3 className="tw-font-bold tw-text-xl tw-mb-2">Tax Benefits</h3>
          <p className="tw-text-gray-700">{props.text1}</p>
        </div>
        
        <div className="tw-bg-[#f8f8f8] tw-p-6 tw-rounded-lg tw-mt-8">
          <h3 className="tw-font-bold tw-text-xl tw-mb-4">How Your Donation Helps</h3>
          <div className="tw-grid md:tw-grid-cols-3 tw-gap-4 tw-text-left">
            <div className="tw-p-4 tw-bg-white tw-rounded-lg tw-shadow-sm">
              <div className="tw-bg-[#4CCD99] tw-text-white tw-rounded-full tw-w-10 tw-h-10 tw-flex tw-items-center tw-justify-center tw-mb-2">1</div>
              <h4 className="tw-font-bold tw-mb-1">Healthcare</h4>
              <p className="tw-text-sm tw-text-gray-600">Provides medical services and health checkups</p>
            </div>
            <div className="tw-p-4 tw-bg-white tw-rounded-lg tw-shadow-sm">
              <div className="tw-bg-[#4CCD99] tw-text-white tw-rounded-full tw-w-10 tw-h-10 tw-flex tw-items-center tw-justify-center tw-mb-2">2</div>
              <h4 className="tw-font-bold tw-mb-1">Nutrition</h4>
              <p className="tw-text-sm tw-text-gray-600">Ensures proper nutrition for elderly individuals</p>
            </div>
            <div className="tw-p-4 tw-bg-white tw-rounded-lg tw-shadow-sm">
              <div className="tw-bg-[#4CCD99] tw-text-white tw-rounded-full tw-w-10 tw-h-10 tw-flex tw-items-center tw-justify-center tw-mb-2">3</div>
              <h4 className="tw-font-bold tw-mb-1">Support</h4>
              <p className="tw-text-sm tw-text-gray-600">Provides emotional and social support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DonateSLD.defaultProps = {
  button1: "Next",
  button3: "Rs.1000",
  rootClassName: "",
  text1: "All Donations to Geriatric Care and Health Foundation are 50% Tax Exempt under section 80G of IT Act, 1961",
  text: "Minimum Amount should be Rs. 300/-",
  button2: "Rs.500",
  text2: "Donate",
  button: "Rs.250",
};

DonateSLD.propTypes = {
  button1: PropTypes.string,
  button3: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  button2: PropTypes.string,
  text2: PropTypes.string,
  button: PropTypes.string,
};

export default DonateSLD;
