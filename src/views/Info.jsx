
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import NGOICON from "./../components/Images/GCAHF.png";

const Info = () => {
  return (
    <div className="tw-fade-in">
      <Helmet>
        <title>Info - GCAHF</title>
        <meta
          name="description"
          content="Detailed information about Geriatric Care and Health Foundation, our services, vision, and history."
        />
        <meta
          name="keywords"
          content="Geriatric Care, Health Foundation, Elderly Care, Senior Health, NGO History"
        />
        <link rel="icon" href={NGOICON} />
      </Helmet>

      {/* Header Section */}
      <section className="tw-py-20 tw-bg-gradient-to-br tw-from-[#f5fff8] tw-to-[#eaffef]">
        <div className="tw-container tw-mx-auto tw-px-4 tw-text-center">
          <h1 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-mb-6 tw-font-playfair tw-text-[#333]">
            About Our Foundation
          </h1>
          <div className="tw-h-1 tw-w-24 tw-bg-[#4CCD99] tw-mx-auto tw-mb-6"></div>
          <p className="tw-text-xl tw-max-w-3xl tw-mx-auto tw-text-gray-600">
            Learn more about our organization, vision, services, and impact
          </p>
        </div>
      </section>
      
      {/* Information Cards */}
      <section className="tw-py-20">
        <div className="tw-container tw-mx-auto tw-px-4">
          <div className="tw-space-y-10">
            <InfoCard 
              title="About Us"
              icon={
                <svg className="tw-w-8 tw-h-8 tw-text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              }
              color="#e59d76"
              content={
                <p className="tw-text-gray-700 tw-leading-relaxed">
                  The Geriatric Care and Health Foundation (GCHF) is a non-profit organization established in November 2018. We strive to provide quality care and health services to elderly people in need. We believe every senior deserves dignity, respect, and compassion in their golden years.
                </p>
              }
            />
            
            <InfoCard 
              title="Vision Statement"
              icon={
                <svg className="tw-w-8 tw-h-8 tw-text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              }
              color="#4CCD99"
              content={
                <p className="tw-text-gray-700 tw-leading-relaxed">
                  Our vision is to create a society where elderly people are valued, empowered, and integrated. We aim to enhance the well-being of our seniors by addressing their physical, mental, and social needs. We also advocate for their rights and raise awareness about the challenges faced by the elderly population.
                </p>
              }
            />
            
            <InfoCard 
              title="History of Services"
              icon={
                <svg className="tw-w-8 tw-h-8 tw-text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              }
              color="#e59d76"
              content={
                <>
                  <h3 className="tw-text-xl tw-font-bold tw-mb-3 tw-text-gray-800">RACSC - The Precursor</h3>
                  <p className="tw-text-gray-700 tw-mb-4">
                    GCHF's foundation lies in the Residential Aged Clinical Service
                    Center (RACSC), a nursing home established in 2013 by our
                    founder, Late Shri Vijaykumar S Gaikwad. RACSC provided clinical
                    care and a comfortable environment for elderly people needing
                    medical attention.
                  </p>

                  <p className="tw-text-gray-700">
                    Due to challenges posed by the COVID-19 pandemic, RACSC
                    transitioned into an old age home. GCHF now offers shelter,
                    food, and basic care to elderly individuals with no family
                    support.
                  </p>
                </>
              }
            />
            
            <InfoCard 
              title="Current Services"
              icon={
                <svg className="tw-w-8 tw-h-8 tw-text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              color="#4CCD99"
              content={
                <>
                  <p className="tw-text-gray-700 tw-mb-4">
                    GCHF provides a safe and supportive environment for elderly
                    people. Our services include:
                  </p>
                  <ul className="tw-list-disc tw-pl-6 tw-space-y-2 tw-text-gray-700">
                    <li>Shelter and nutritious meals</li>
                    <li>Daily care and assistance by trained caregivers</li>
                    <li>Recreational and social activities</li>
                    <li>Regular health check-ups and monitoring</li>
                    <li>Emotional and psychological support</li>
                  </ul>
                </>
              }
            />
            
            <InfoCard 
              title="Other Envisioned Possibilities"
              icon={
                <svg className="tw-w-8 tw-h-8 tw-text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              }
              color="#ea5507"
              content={
                <>
                  <p className="tw-text-gray-700 tw-mb-4">
                    GCHF aspires to expand its services in the future, including:
                  </p>
                  <ul className="tw-list-disc tw-pl-6 tw-space-y-2 tw-text-gray-700">
                    <li>Counseling and emotional support for seniors</li>
                    <li>Health camps and awareness sessions</li>
                    <li>
                      Collaboration for access to transportation, legal, and
                      financial services
                    </li>
                    <li>Volunteer and donor opportunities</li>
                    <li>Creating a network for senior citizens to connect</li>
                  </ul>
                </>
              }
            />
            
            <InfoCard 
              title="Trustee Board"
              icon={
                <svg className="tw-w-8 tw-h-8 tw-text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
              color="#e59d76"
              content={
                <>
                  <p className="tw-text-gray-700 tw-mb-4">GCHF is governed by a dedicated management committee:</p>
                  <ul className="tw-list-disc tw-pl-6 tw-text-gray-700">
                    <li className="tw-mb-2">
                      <strong>Dr. Pankaj Khangal (Secretary)</strong> - Doctor
                      Specializing in Geriatric Care
                    </li>
                  </ul>
                </>
              }
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="tw-py-20 tw-bg-gradient-to-br tw-from-[#f5fff8] tw-to-[#eaffef]">
        <div className="tw-container tw-mx-auto tw-px-4 tw-text-center">
          <h2 className="tw-text-3xl tw-font-bold tw-mb-4 tw-font-playfair">Join Our Mission</h2>
          <p className="tw-text-xl tw-max-w-3xl tw-mx-auto tw-mb-8 tw-text-gray-600">
            Support our efforts to enhance the quality of life for elderly individuals through donations, volunteering, or partnerships.
          </p>
          <div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-center tw-gap-6">
            <Link 
              to="/donation" 
              className="tw-bg-[#ea5507] hover:tw-bg-[#d4480d] tw-text-white tw-font-bold tw-py-3 tw-px-6 tw-rounded-lg tw-shadow-lg tw-transition-all tw-duration-300 hover:tw-scale-105"
            >
              Donate Now
            </Link>
            <Link 
              to="/contact" 
              className="tw-bg-[#4CCD99] hover:tw-bg-[#3ba57a] tw-text-white tw-font-bold tw-py-3 tw-px-6 tw-rounded-lg tw-shadow-lg tw-transition-all tw-duration-300 hover:tw-scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const InfoCard = ({ title, icon, content, color }) => {
  return (
    <div className="tw-bg-white tw-rounded-2xl tw-shadow-lg tw-overflow-hidden tw-transform hover:tw-translate-y-[-5px] tw-transition-all tw-duration-300">
      <div className="tw-flex tw-flex-col md:tw-flex-row">
        <div className="tw-bg-gradient-to-br tw-from-[#f9f9f9] tw-to-[#f2f2f2] tw-p-6 md:tw-w-1/4 tw-flex tw-flex-col tw-items-center tw-justify-center tw-text-center">
          <div className={`tw-rounded-full tw-w-16 tw-h-16 tw-flex tw-items-center tw-justify-center tw-mb-4`} style={{ backgroundColor: color }}>
            {icon}
          </div>
          <h3 className="tw-text-xl tw-font-bold tw-text-gray-800 tw-font-playfair">{title}</h3>
        </div>
        <div className="tw-p-6 md:tw-w-3/4">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Info;
