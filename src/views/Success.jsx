
import React from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from "react-router-dom";
import NGOICON from './../components/Images/GCAHF.png';

const Success = () => {
  const history = useHistory();
  
  return (
    <div className="tw-min-h-[80vh] tw-flex tw-flex-col tw-items-center tw-justify-center tw-p-6 tw-bg-gradient-to-br tw-from-[#f8f9fa] tw-to-[#f1f1f1] tw-fade-in">
      <Helmet>
        <title>Donation Successful - GCAHF</title>
        <meta name="description" content="Thank you for your donation to Geriatric Care and Health Foundation." />
        <link rel="icon" href={NGOICON} />
      </Helmet>
      
      <div className="tw-max-w-2xl tw-mx-auto tw-bg-white tw-p-10 tw-rounded-2xl tw-shadow-xl tw-text-center tw-zoom-in">
        <div className="tw-mb-8">
          <div className="tw-bg-[#4CCD99]/10 tw-w-24 tw-h-24 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-mx-auto tw-mb-6">
            <img src={NGOICON} alt="GCAHF Logo" className="tw-h-16 tw-w-16" />
          </div>
          
          <div className="tw-w-16 tw-h-16 tw-bg-[#4CCD99]/20 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-mx-auto tw-mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="tw-h-8 tw-w-8 tw-text-[#4CCD99]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        
        <h1 className="tw-text-4xl tw-font-bold tw-mb-4 tw-font-playfair tw-text-[#333]">Thank You For Your Donation!</h1>
        
        <p className="tw-text-xl tw-mb-8 tw-text-gray-600">
          Your generous contribution helps us continue our mission of providing care and support to elderly individuals in need.
        </p>
        
        <div className="tw-bg-[#f9f9f9] tw-p-6 tw-rounded-xl tw-mb-8 tw-border tw-border-gray-100">
          <p className="tw-font-medium tw-text-gray-700">
            A confirmation receipt has been sent to your email address.
            Please keep it for your tax records.
          </p>
        </div>
        
        <div className="tw-space-y-4">
          <button 
            onClick={() => history.push("/Home")} 
            className="tw-bg-[#ea5507] hover:tw-bg-[#d4480d] tw-text-white tw-font-bold tw-py-3 tw-px-8 tw-rounded-lg tw-shadow-lg tw-transition-all tw-duration-300"
          >
            Return to Home
          </button>
          
          <p className="tw-text-gray-600 tw-mt-4">
            If you have any questions, please <a href="/contact" className="tw-text-[#4CCD99] hover:tw-underline">contact us</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Success;
