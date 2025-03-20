
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import NGOICON from './../components/Images/GCAHF.png';

const NotFound = () => {
  return (
    <div className="tw-min-h-[80vh] tw-flex tw-flex-col tw-items-center tw-justify-center tw-p-6 tw-bg-gradient-to-br tw-from-[#f8f9fa] tw-to-[#f1f1f1] tw-fade-in">
      <Helmet>
        <title>404 - Page Not Found | GCAHF</title>
        <meta name="description" content="The page you are looking for does not exist." />
        <link rel="icon" href={NGOICON} />
      </Helmet>
      
      <div className="tw-max-w-2xl tw-mx-auto tw-bg-white tw-p-10 tw-rounded-2xl tw-shadow-xl tw-text-center tw-zoom-in">
        <div className="tw-mb-8">
          <div className="tw-w-24 tw-h-24 tw-rounded-full tw-bg-gray-100 tw-flex tw-items-center tw-justify-center tw-mx-auto tw-mb-6">
            <svg className="tw-w-12 tw-h-12 tw-text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        
        <h1 className="tw-text-7xl tw-font-bold tw-mb-4 tw-font-playfair tw-text-[#ea5507]">404</h1>
        <h2 className="tw-text-2xl tw-font-bold tw-mb-6 tw-text-gray-700">Page Not Found</h2>
        
        <p className="tw-text-xl tw-mb-8 tw-text-gray-600">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <div className="tw-space-y-4">
          <Link 
            to="/Home" 
            className="tw-bg-[#4CCD99] hover:tw-bg-[#3ba57a] tw-text-white tw-font-bold tw-py-3 tw-px-8 tw-rounded-lg tw-shadow-lg tw-transition-all tw-duration-300 tw-inline-block"
          >
            Return to Home
          </Link>
          
          <p className="tw-text-gray-600 tw-mt-6">
            If you think this is a mistake, please <Link to="/contact" className="tw-text-[#ea5507] hover:tw-underline">contact us</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
