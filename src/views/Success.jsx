
import React from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from "react-router-dom";
import NGOICON from './../components/Images/GCAHF.png';

const Success = () => {
  const history = useHistory();
  
  return (
    <div className="tw-min-h-[70vh] tw-flex tw-flex-col tw-items-center tw-justify-center tw-p-6">
      <Helmet>
        <title>Donation Successful - GCAHF</title>
        <meta name="description" content="Thank you for your donation to Geriatric Care and Health Foundation." />
        <link rel="icon" href={NGOICON} />
      </Helmet>
      
      <div className="tw-max-w-2xl tw-mx-auto tw-bg-white tw-p-8 tw-rounded-xl tw-shadow-lg tw-text-center">
        <div className="tw-mb-6">
          <img src={NGOICON} alt="GCAHF Logo" className="tw-h-24 tw-mx-auto" />
        </div>
        
        <h1 className="tw-text-4xl tw-font-playfair tw-font-bold tw-mb-4 tw-text-secondary">Thank You For Your Donation!</h1>
        
        <p className="tw-text-lg tw-mb-6">
          Your generous contribution helps us continue our mission of providing care and support to elderly individuals in need.
        </p>
        
        <div className="tw-bg-[#f9f9f9] tw-p-4 tw-rounded-lg tw-mb-6">
          <p className="tw-font-medium tw-text-neutral-dark">
            A confirmation receipt has been sent to your email address.
          </p>
        </div>
        
        <button 
          onClick={() => history.push("/Home")} 
          className="tw-bg-primary hover:tw-bg-primary-dark tw-text-white tw-font-bold tw-py-2 tw-px-6 tw-rounded-lg tw-transition-all tw-duration-300"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default Success;
