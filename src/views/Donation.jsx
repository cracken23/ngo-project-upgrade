import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import NGOICON from './../components/Images/GCAHF.png';
import giftimg from './Images/IMG_1698.jpg';

const Donation = () => {
  return (
    <div className="tw-fade-in">
      <Helmet>
        <title>Donation - GCAHF</title>
        <meta name="description" content="Support the Geriatric Care and Health Foundation. Your donation helps us provide high-quality care for older adults."/>
        <meta name="keywords" content="Donation, Geriatric Care, Health Foundation, Support"/>
        <meta property="og:title" content="Donation - Geriatric Care and Health Foundation"/>
        <meta property="og:description" content="Support the Geriatric Care and Health Foundation. Your donation helps us provide high-quality care for older adults."/>
        <meta property="og:url" content="https://geriatrichcf.com/donation"/>
        <link rel="icon" href={NGOICON} />
      </Helmet>
      
      {/* Hero Section */}
      <section className="tw-relative tw-h-[60vh] tw-w-full tw-overflow-hidden">
        <div 
          className="tw-absolute tw-inset-0 tw-bg-cover tw-bg-center tw-bg-no-repeat"
          style={{ backgroundImage: `url(${giftimg})` }}
        ></div>
        <div className="tw-absolute tw-inset-0 tw-bg-black tw-opacity-50"></div>
        
        <div className="tw-absolute tw-inset-0 tw-flex tw-flex-col tw-items-center tw-justify-center tw-text-white tw-px-4 tw-text-center">
          <h1 className="tw-text-4xl md:tw-text-6xl tw-font-bold tw-mb-6 tw-slide-up tw-font-playfair">
            Support Our Mission
          </h1>
          <div className="tw-h-1 tw-w-24 tw-bg-white tw-mx-auto tw-mb-6"></div>
          <p className="tw-text-xl tw-max-w-3xl tw-mx-auto tw-mb-10 tw-text-gray-100">
            Your generous donations enable us to provide essential care and support to elderly individuals in need.
            Every contribution makes a significant difference in enhancing their quality of life.
          </p>
        </div>
      </section>
      
      {/* Donation Form */}
      <section className="tw-py-20">
        <div className="tw-container tw-mx-auto tw-px-4">
          <div className="tw-max-w-4xl tw-mx-auto tw-bg-white tw-rounded-2xl tw-shadow-lg tw-overflow-hidden">
            <div className="tw-p-10">
              <h2 className="tw-text-3xl tw-font-bold tw-mb-6 tw-text-center tw-font-playfair">Make a Donation</h2>
              <div className="tw-h-1 tw-w-24 tw-bg-[#ea5507] tw-mx-auto tw-mb-10"></div>
              
              <p className="tw-text-gray-600 tw-text-center tw-mb-10">
                Your generous contribution helps us provide essential services and care to elderly individuals in need. 
                Every donation makes a difference in the lives of seniors. Minimum amount for donation is Rs. 300/-.
              </p>
              
              <div className="tw-mb-12">
                <div className="tw-flex tw-justify-center">
                  <div 
                    className="razorpay-embed-btn tw-w-full tw-max-w-md" 
                    data-url="https://pages.razorpay.com/pl_O0XaJRlaAzn9vB/view" 
                    data-text="Donate Now" 
                    data-color="#ea5507" 
                    data-size="large"
                  />
                </div>
              </div>
              
              <div className="tw-bg-[#f8f8f8] tw-p-6 tw-rounded-lg tw-border-l-4 tw-border-[#ea5507] tw-mb-8">
                <h3 className="tw-font-bold tw-text-xl tw-mb-2 tw-font-playfair">Tax Benefits</h3>
                <p className="tw-text-gray-700">
                  All Donations to Geriatric Care and Health Foundation are 50% Tax Exempt under section 80G of IT Act, 1961. 
                  You will receive a tax receipt for your donation via email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Donation Impact */}
      <section className="tw-py-20 tw-bg-neutral-light">
        <div className="tw-container tw-mx-auto tw-px-4">
          <div className="tw-text-center tw-mb-16">
            <h2 className="tw-text-3xl tw-font-bold tw-mb-4 tw-font-playfair">How Your Donation Helps</h2>
            <div className="tw-h-1 tw-w-24 tw-bg-[#4CCD99] tw-mx-auto tw-mb-6"></div>
            <p className="tw-text-gray-600 tw-max-w-3xl tw-mx-auto">
              Your contribution directly impacts the lives of elderly individuals in our care
            </p>
          </div>
          
          <div className="tw-grid md:tw-grid-cols-3 tw-gap-8">
            <DonationImpact 
              number="1"
              title="Healthcare" 
              description="Provides medical services and health checkups for elderly individuals" 
              color="#ea5507"
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
              color="#e59d76"
            />
          </div>
        </div>
      </section>
      
      {/* Other Ways to Support */}
      <section className="tw-py-20">
        <div className="tw-container tw-mx-auto tw-px-4">
          <div className="tw-text-center tw-mb-16">
            <h2 className="tw-text-3xl tw-font-bold tw-mb-4 tw-font-playfair">Other Ways to Support</h2>
            <div className="tw-h-1 tw-w-24 tw-bg-[#ea5507] tw-mx-auto tw-mb-6"></div>
            <p className="tw-text-gray-600 tw-max-w-3xl tw-mx-auto">
              Beyond financial contributions, there are many ways you can help our cause
            </p>
          </div>
          
          <div className="tw-grid md:tw-grid-cols-2 tw-gap-10">
            <div className="tw-bg-white tw-rounded-2xl tw-shadow-lg tw-p-8 tw-h-full tw-transition-all tw-duration-300 hover:tw-shadow-xl hover:tw-translate-y-[-5px]">
              <div className="tw-bg-[#f5f5f5] tw-rounded-full tw-w-16 tw-h-16 tw-flex tw-items-center tw-justify-center tw-mb-4">
                <svg className="tw-w-8 tw-h-8 tw-text-[#ea5507]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="tw-text-xl tw-font-bold tw-mb-3 tw-font-playfair">Corporate Giving</h3>
              <p className="tw-text-gray-600 tw-mb-6">
                We welcome partnerships with businesses and organizations who share our commitment to elderly care. 
                Corporate donations can make a significant impact on our ability to provide quality services.
              </p>
              <p className="tw-text-gray-600">
                For information about corporate donations, please contact us at info@geriatrichcf.org
              </p>
            </div>
            
            <div className="tw-bg-white tw-rounded-2xl tw-shadow-lg tw-p-8 tw-h-full tw-transition-all tw-duration-300 hover:tw-shadow-xl hover:tw-translate-y-[-5px]">
              <div className="tw-bg-[#f5f5f5] tw-rounded-full tw-w-16 tw-h-16 tw-flex tw-items-center tw-justify-center tw-mb-4">
                <svg className="tw-w-8 tw-h-8 tw-text-[#4CCD99]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="tw-text-xl tw-font-bold tw-mb-3 tw-font-playfair">Volunteer With Us</h3>
              <p className="tw-text-gray-600 tw-mb-6">
                Share your time and skills to make a difference in the lives of elderly individuals. 
                Volunteers play a crucial role in enhancing the quality of life for our seniors through various activities and support.
              </p>
              <Link 
                to="/contact" 
                className="tw-inline-block tw-bg-[#4CCD99] hover:tw-bg-[#3ba57a] tw-text-white tw-font-medium tw-px-6 tw-py-2 tw-rounded-lg tw-shadow tw-transition-all tw-duration-300"
              >
                Contact Us to Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="tw-py-20 tw-bg-gradient-to-br tw-from-[#333] tw-to-[#222] tw-text-white">
        <div className="tw-container tw-mx-auto tw-px-4 tw-text-center">
          <h2 className="tw-text-3xl tw-font-bold tw-mb-6 tw-font-playfair">Ready to Make a Difference?</h2>
          <p className="tw-text-xl tw-max-w-3xl tw-mx-auto tw-mb-10 tw-text-gray-300">
            Join us in our mission to enhance the quality of life for elderly individuals. 
            Your support today creates a better tomorrow for our seniors.
          </p>
          <div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-center tw-gap-6">
            <div 
              className="razorpay-embed-btn" 
              data-url="https://pages.razorpay.com/pl_O0XaJRlaAzn9vB/view" 
              data-text="Donate Now" 
              data-color="#ea5507" 
              data-size="large"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const DonationImpact = ({ number, title, description, color }) => (
  <div className="tw-bg-white tw-p-8 tw-rounded-xl tw-shadow-md tw-text-center tw-transition-all tw-duration-300 hover:tw-transform hover:tw-scale-105 hover:tw-shadow-lg">
    <div 
      className="tw-w-16 tw-h-16 tw-rounded-full tw-text-white tw-flex tw-items-center tw-justify-center tw-font-bold tw-text-2xl tw-mx-auto tw-mb-4"
      style={{ backgroundColor: color }}
    >
      {number}
    </div>
    <h3 className="tw-text-xl tw-font-bold tw-mb-3 tw-font-playfair">{title}</h3>
    <p className="tw-text-gray-600">{description}</p>
  </div>
);

export default Donation;
