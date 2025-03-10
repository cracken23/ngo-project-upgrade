
import React from 'react';
import { Helmet } from 'react-helmet';
import DonateSLD from '../components/donate-sld';
import './Styles/donation.css';
import NGOICON from './../components/Images/GCAHF.png';

const Donation = (props) => {
  return (
    <div className="donation-container">
      <Helmet>
        <title>Donation - GCAHF</title>
        <meta name="description" content="Support the Geriatric Care and Health Foundation. Your donation helps us provide high-quality care for older adults."/>
        <meta name="keywords" content="Donation, Geriatric Care, Health Foundation, Support"/>
        <meta property="og:title" content="Donation - Geriatric Care and Health Foundation"/>
        <meta property="og:description" content="Support the Geriatric Care and Health Foundation. Your donation helps us provide high-quality care for older adults."/>
        <meta property="og:url" content="https://geriatrichcf.com/donation"/>
        <link rel="icon" href={NGOICON} />
      </Helmet>
      
      <div className="tw-max-w-5xl tw-mx-auto tw-px-4 tw-py-8">
        <div className="tw-text-center tw-mb-10">
          <h1 className="tw-text-4xl tw-font-playfair tw-font-bold tw-mb-4">Support Our Mission</h1>
          <p className="tw-text-lg tw-max-w-2xl tw-mx-auto">
            Your generous donations enable us to provide essential care and support to elderly individuals in need.
            Every contribution makes a difference in enhancing their quality of life.
          </p>
        </div>

        <div className="tw-bg-white tw-rounded-2xl tw-shadow-lg tw-overflow-hidden tw-mb-12">
          <div className="donation-container2 tw-p-4">
            <DonateSLD rootClassName="donate-sld-root-class-name"></DonateSLD>
          </div>
        </div>
        
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8 tw-mb-12">
          <div className="tw-bg-white tw-p-6 tw-rounded-xl tw-shadow-md tw-border-l-4 tw-border-secondary">
            <h2 className="tw-text-2xl tw-font-playfair tw-font-bold tw-mb-4">Tax Benefits</h2>
            <p className="tw-mb-2">
              All Donations to Geriatric Care and Health Foundation are 50% Tax Exempt under section 80G of IT Act, 1961
            </p>
            <p className="tw-text-sm tw-text-gray-600">
              You will receive a tax receipt for your donation via email.
            </p>
          </div>
          
          <div className="tw-bg-white tw-p-6 tw-rounded-xl tw-shadow-md tw-border-l-4 tw-border-primary">
            <h2 className="tw-text-2xl tw-font-playfair tw-font-bold tw-mb-4">Corporate Giving</h2>
            <p className="tw-mb-2">
              We welcome partnerships with businesses and organizations who share our commitment to elderly care.
            </p>
            <p className="tw-text-sm tw-text-gray-600">
              For information about corporate donations, please contact us at info@geriatrichcf.org
            </p>
          </div>
        </div>
        
        <div className="tw-bg-neutral-light tw-p-8 tw-rounded-xl tw-shadow-md">
          <h2 className="tw-text-2xl tw-font-playfair tw-font-bold tw-mb-6 tw-text-center">How Your Donation Helps</h2>
          
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-6">
            <DonationImpact 
              number="1"
              title="Healthcare" 
              description="Provides medical services and health checkups for elderly individuals" 
            />
            
            <DonationImpact 
              number="2"
              title="Nutrition" 
              description="Ensures proper nutrition and meals for elderly residents" 
            />
            
            <DonationImpact 
              number="3"
              title="Support" 
              description="Provides emotional and social support through various activities" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper component for donation impact cards
const DonationImpact = ({ number, title, description }) => (
  <div className="tw-bg-white tw-p-6 tw-rounded-lg tw-shadow-sm tw-text-center tw-transition-transform tw-duration-300 hover:tw-transform hover:tw-scale-105">
    <div className="tw-w-12 tw-h-12 tw-rounded-full tw-bg-primary tw-text-white tw-flex tw-items-center tw-justify-center tw-font-bold tw-text-xl tw-mx-auto tw-mb-4">
      {number}
    </div>
    <h3 className="tw-text-xl tw-font-playfair tw-font-bold tw-mb-3">{title}</h3>
    <p className="tw-text-gray-600">{description}</p>
  </div>
);

export default Donation;
