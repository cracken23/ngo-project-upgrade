
import React from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from "react-router-dom";
import NGOICON from './../components/Images/GCAHF.png';

const Canceled = () => {
  const history = useHistory();
  
  return (
    <div className="tw-min-h-[80vh] tw-flex tw-flex-col tw-items-center tw-justify-center tw-p-6 tw-bg-gradient-to-br tw-from-[#f8f9fa] tw-to-[#f1f1f1] tw-fade-in">
      <Helmet>
        <title>Donation Canceled - GCAHF</title>
        <meta name="description" content="Your donation to Geriatric Care and Health Foundation was canceled." />
        <link rel="icon" href={NGOICON} />
      </Helmet>
      
      <div className="tw-max-w-2xl tw-mx-auto tw-bg-white tw-p-10 tw-rounded-2xl tw-shadow-xl tw-text-center tw-zoom-in">
        <div className="tw-mb-8">
          <div className="tw-bg-gray-100 tw-w-24 tw-h-24 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-mx-auto tw-mb-6">
            <img src={NGOICON} alt="GCAHF Logo" className="tw-h-16 tw-w-16" />
          </div>
          
          <div className="tw-w-16 tw-h-16 tw-bg-gray-100 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-mx-auto tw-mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="tw-h-8 tw-w-8 tw-text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
        
        <h1 className="tw-text-4xl tw-font-bold tw-mb-4 tw-font-playfair tw-text-[#333]">Donation Canceled</h1>
        
        <p className="tw-text-xl tw-mb-8 tw-text-gray-600">
          Your donation transaction was canceled. No charges have been made.
        </p>
        
        <div className="tw-bg-[#f9f9f9] tw-p-6 tw-rounded-xl tw-mb-8 tw-border tw-border-gray-100">
          <p className="tw-font-medium tw-text-gray-700">
            If you encountered any issues during the donation process, please feel free to contact us.
            We're here to help!
          </p>
        </div>
        
        <div className="tw-space-y-4">
          <button 
            onClick={() => history.push("/donation")} 
            className="tw-bg-[#ea5507] hover:tw-bg-[#d4480d] tw-text-white tw-font-bold tw-py-3 tw-px-8 tw-rounded-lg tw-shadow-lg tw-transition-all tw-duration-300"
          >
            Try Again
          </button>
          
          <button 
            onClick={() => history.push("/Home")} 
            className="tw-block tw-w-full tw-mt-4 tw-bg-transparent tw-text-gray-600 hover:tw-text-[#4CCD99] tw-font-medium tw-transition-colors tw-duration-300"
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Canceled;
