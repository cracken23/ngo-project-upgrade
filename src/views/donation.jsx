
import React from 'react';
import { Helmet } from 'react-helmet';
import DonateSLD from '../components/donate-sld';
import './Styles/donation.css';
import NGOICON from './../components/Images/GCAHF.png';

const Donation = (props) => {
  return (
    <div className="donation-container tw-fade-in">
      <Helmet>
        <title>Donation - GCAHF</title>
        <meta name="description" content="Support the Geriatric Care and Health Foundation. Your donation helps us provide high-quality care for older adults."/>
        <meta name="keywords" content="Donation, Geriatric Care, Health Foundation, Support"/>
        <meta property="og:title" content="Donation - Geriatric Care and Health Foundation"/>
        <meta property="og:description" content="Support the Geriatric Care and Health Foundation. Your donation helps us provide high-quality care for older adults."/>
        <meta property="og:url" content="https://geriatrichcf.com/donation"/>
        <link rel="icon" href={NGOICON} />
      </Helmet>
      
      {/* Hero Banner */}
      <div className="tw-bg-gradient-to-br tw-from-[#ffefe6] tw-to-[#fff5ef] tw-py-16 tw-px-4 tw-mb-12">
        <div className="tw-max-w-5xl tw-mx-auto tw-text-center">
          <h1 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-mb-6 tw-font-playfair tw-text-[#e59d76]">
            Support Our Mission
          </h1>
          <p className="tw-text-xl tw-max-w-3xl tw-mx-auto tw-mb-4 tw-text-neutral-medium">
            Your generous donations enable us to provide essential care and support to elderly individuals in need.
            Every contribution makes a significant difference in enhancing their quality of life.
          </p>
        </div>
      </div>

      <div className="tw-max-w-5xl tw-mx-auto tw-px-4 tw-mb-16">
        <div className="tw-bg-white tw-rounded-2xl tw-shadow-xl tw-overflow-hidden tw-border tw-border-gray-100">
          <div className="tw-p-6 md:tw-p-8">
            <DonateSLD rootClassName="donate-sld-root-class-name"></DonateSLD>
          </div>
        </div>
      </div>
        
      <div className="tw-max-w-6xl tw-mx-auto tw-px-4 tw-mb-16">
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8">
          <div className="tw-bg-white tw-p-8 tw-rounded-xl tw-shadow-lg tw-border-t-4 tw-border-[#e59d76] tw-h-full tw-transform hover:tw-translate-y-[-5px] tw-transition-all tw-duration-300">
            <h2 className="tw-text-2xl tw-font-bold tw-mb-4 tw-font-playfair tw-text-[#e59d76]">Tax Benefits</h2>
            <p className="tw-text-lg tw-mb-3">
              All Donations to Geriatric Care and Health Foundation are 50% Tax Exempt under section 80G of IT Act, 1961
            </p>
            <p className="tw-text-neutral-medium">
              You will receive a tax receipt for your donation via email.
            </p>
          </div>
          
          <div className="tw-bg-white tw-p-8 tw-rounded-xl tw-shadow-lg tw-border-t-4 tw-border-[#4CCD99] tw-h-full tw-transform hover:tw-translate-y-[-5px] tw-transition-all tw-duration-300">
            <h2 className="tw-text-2xl tw-font-bold tw-mb-4 tw-font-playfair tw-text-[#4CCD99]">Corporate Giving</h2>
            <p className="tw-text-lg tw-mb-3">
              We welcome partnerships with businesses and organizations who share our commitment to elderly care.
            </p>
            <p className="tw-text-neutral-medium">
              For information about corporate donations, please contact us at info@geriatrichcf.org
            </p>
          </div>
        </div>
      </div>
        
      <div className="tw-max-w-6xl tw-mx-auto tw-px-4 tw-mb-20">
        <div className="tw-bg-gradient-to-br tw-from-[#f8f9fa] tw-to-[#f1f1f1] tw-p-10 tw-rounded-2xl tw-shadow-lg">
          <h2 className="tw-text-3xl tw-font-bold tw-mb-10 tw-text-center tw-font-playfair">How Your Donation Helps</h2>
          
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-8">
            <DonationImpact 
              number="1"
              title="Healthcare" 
              description="Provides medical services and health checkups for elderly individuals" 
              color="#e59d76"
            />
            
            <DonationImpact 
              number="2"
              title="Nutrition" 
              description="Ensures proper nutrition and meals for elderly residents" 
              color="#4CCD99"
            />
            
            <DonationImpact 
              number="3"
              title="Support" 
              description="Provides emotional and social support through various activities" 
              color="#ea5507"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper component for donation impact cards
const DonationImpact = ({ number, title, description, color }) => (
  <div className="tw-bg-white tw-p-6 tw-rounded-xl tw-shadow-md tw-text-center tw-transition-all tw-duration-300 hover:tw-transform hover:tw-scale-105 hover:tw-shadow-lg">
    <div 
      className="tw-w-16 tw-h-16 tw-rounded-full tw-text-white tw-flex tw-items-center tw-justify-center tw-font-bold tw-text-2xl tw-mx-auto tw-mb-4"
      style={{ backgroundColor: color }}
    >
      {number}
    </div>
    <h3 className="tw-text-xl tw-font-bold tw-mb-3 tw-font-playfair">{title}</h3>
    <p className="tw-text-neutral-medium">{description}</p>
  </div>
);

export default Donation;
