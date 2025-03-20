
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import inside from "./Images/IMG_1702.jpg";
import NGOICON from "./../components/Images/GCAHF.png";

const About = () => {
  return (
    <div className="tw-fade-in">
      <Helmet>
        <title>About - GCAHF</title>
        <link rel="icon" href={NGOICON} />
        <meta name="description" content="Learn about Geriatric Care and Health Foundation, our mission, vision, and dedicated team." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="tw-relative tw-h-[60vh] tw-w-full tw-overflow-hidden">
        <div 
          className="tw-absolute tw-inset-0 tw-bg-cover tw-bg-center tw-bg-no-repeat"
          style={{ backgroundImage: `url(${inside})` }}
        ></div>
        <div className="tw-absolute tw-inset-0 tw-bg-black tw-opacity-50"></div>
        
        <div className="tw-absolute tw-inset-0 tw-flex tw-flex-col tw-items-center tw-justify-center tw-text-white tw-px-4 tw-text-center">
          <h1 className="tw-text-4xl md:tw-text-6xl tw-font-bold tw-mb-6 tw-slide-up tw-font-playfair">
            About Our Foundation
          </h1>
          <div className="tw-h-1 tw-w-24 tw-bg-white tw-mx-auto"></div>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="tw-py-20">
        <div className="tw-container tw-mx-auto tw-px-4">
          <div className="tw-max-w-4xl tw-mx-auto tw-bg-gradient-to-br tw-from-[#f5fff8] tw-to-[#eaffef] tw-rounded-2xl tw-shadow-lg tw-p-10 tw-text-center">
            <h2 className="tw-text-3xl tw-font-bold tw-mb-6 tw-font-playfair tw-text-[#333]">Our Story</h2>
            <p className="tw-text-xl tw-leading-relaxed tw-text-gray-700">
              Welcome to Geriatric Care and Health Foundation, a non-profit
              organization dedicated to improving the lives of elderly individuals
              and promoting their health and well-being. Our foundation was
              established with a vision to create a society where senior citizens
              receive the care, support, and respect they deserve.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="tw-py-20 tw-bg-neutral-light">
        <div className="tw-container tw-mx-auto tw-px-4">
          <div className="tw-text-center tw-mb-16">
            <h2 className="tw-text-4xl tw-font-bold tw-mb-4 tw-font-playfair">Mission & Values</h2>
            <div className="tw-h-1 tw-w-24 tw-bg-[#ea5507] tw-mx-auto"></div>
          </div>
          
          <div className="tw-grid md:tw-grid-cols-3 tw-gap-8">
            <ValueCard 
              icon={
                <svg className="tw-w-10 tw-h-10 tw-text-[#ea5507]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
              title="Our Mission"
              description="Our mission is to provide comprehensive care and support services to elderly individuals, focusing on their physical, mental, and emotional well-being. We aim to enhance their quality of life and empower them to live with dignity and independence."
            />
            
            <ValueCard 
              icon={
                <svg className="tw-w-10 tw-h-10 tw-text-[#4CCD99]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              }
              title="Our Vision"
              description="Our vision is to create a society where elderly people are valued, empowered, and integrated. We aim to enhance the well-being of our seniors by addressing their physical, mental, and social needs, while advocating for their rights."
            />
            
            <ValueCard 
              icon={
                <svg className="tw-w-10 tw-h-10 tw-text-[#ea5507]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              }
              title="Our Values"
              description="We uphold values of compassion, respect, integrity, and quality care. We believe every senior deserves to be treated with dignity and to have access to the best possible care and support services tailored to their needs."
            />
          </div>
        </div>
      </section>
      
      {/* History Section */}
      <section className="tw-py-20">
        <div className="tw-container tw-mx-auto tw-px-4">
          <div className="tw-max-w-5xl tw-mx-auto">
            <div className="tw-text-center tw-mb-16">
              <h2 className="tw-text-4xl tw-font-bold tw-mb-4 tw-font-playfair">Our History</h2>
              <div className="tw-h-1 tw-w-24 tw-bg-[#4CCD99] tw-mx-auto"></div>
            </div>
            
            <div className="tw-bg-white tw-rounded-2xl tw-shadow-lg tw-overflow-hidden">
              <div className="tw-grid md:tw-grid-cols-2">
                <div className="tw-p-10">
                  <h3 className="tw-text-2xl tw-font-bold tw-mb-4 tw-text-[#333] tw-font-playfair">RACSC - The Precursor</h3>
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
                </div>
                <div className="tw-bg-cover tw-bg-center tw-h-full" style={{ backgroundImage: `url(${inside})` }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="tw-py-20 tw-bg-neutral-light">
        <div className="tw-container tw-mx-auto tw-px-4">
          <div className="tw-text-center tw-mb-16">
            <h2 className="tw-text-4xl tw-font-bold tw-mb-4 tw-font-playfair">Our Team</h2>
            <div className="tw-h-1 tw-w-24 tw-bg-[#ea5507] tw-mx-auto"></div>
            <p className="tw-text-gray-600 tw-max-w-3xl tw-mx-auto tw-mt-4">
              Our dedicated team comprises healthcare professionals, social workers,
              volunteers, and advocates who are committed to serving the elderly
              community with compassion, empathy, and expertise.
            </p>
          </div>
          
          <div className="tw-flex tw-justify-center">
            <div className="tw-bg-white tw-rounded-2xl tw-shadow-lg tw-overflow-hidden tw-max-w-md tw-transform hover:tw-translate-y-[-5px] tw-transition-all tw-duration-300">
              <div className="tw-h-2 tw-bg-[#4CCD99]"></div>
              <div className="tw-p-8 tw-text-center">
                <div className="tw-w-24 tw-h-24 tw-rounded-full tw-bg-[#f5f5f5] tw-mx-auto tw-mb-4 tw-flex tw-items-center tw-justify-center">
                  <svg className="tw-w-12 tw-h-12 tw-text-[#4CCD99]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="tw-text-xl tw-font-bold tw-text-[#333] tw-font-playfair">Dr. Pankaj Khangal</h3>
                <p className="tw-text-gray-600 tw-mb-1">Secretary</p>
                <p className="tw-text-gray-500 tw-text-sm tw-mb-4">MD ANAESTHESIOLOGY</p>
                <p className="tw-text-gray-600">
                  Doctor Specializing in Geriatric Care, leading our foundation with expertise and compassion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Us CTA */}
      <section className="tw-py-20 tw-bg-gradient-to-br tw-from-[#333] tw-to-[#222] tw-text-white">
        <div className="tw-container tw-mx-auto tw-px-4 tw-text-center">
          <h2 className="tw-text-4xl tw-font-bold tw-mb-6 tw-font-playfair">Join Our Mission</h2>
          <p className="tw-text-xl tw-max-w-3xl tw-mx-auto tw-mb-10 tw-text-gray-300">
            We are always looking for passionate individuals to join our cause. Whether as a volunteer, 
            donor, or advocate, your contribution can make a significant difference in the lives of elderly individuals.
          </p>
          <div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-center tw-gap-6">
            <Link 
              to="/donation" 
              className="tw-bg-[#ea5507] hover:tw-bg-[#d4480d] tw-text-white tw-font-bold tw-py-4 tw-px-8 tw-rounded-full tw-shadow-lg tw-transition-all tw-duration-300 hover:tw-scale-105"
            >
              Donate Now
            </Link>
            <Link 
              to="/contact" 
              className="tw-bg-transparent tw-border-2 tw-border-white hover:tw-bg-white/10 tw-text-white tw-font-bold tw-py-4 tw-px-8 tw-rounded-full tw-shadow-lg tw-transition-all tw-duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const ValueCard = ({ icon, title, description }) => {
  return (
    <div className="tw-bg-white tw-rounded-2xl tw-shadow-lg tw-p-8 tw-text-center tw-h-full tw-transition-all tw-duration-300 hover:tw-shadow-xl hover:tw-translate-y-[-5px]">
      <div className="tw-bg-[#f9f9f9] tw-rounded-full tw-w-20 tw-h-20 tw-flex tw-items-center tw-justify-center tw-mx-auto tw-mb-4">
        {icon}
      </div>
      <h3 className="tw-text-xl tw-font-bold tw-mb-3 tw-font-playfair">{title}</h3>
      <p className="tw-text-gray-600">{description}</p>
    </div>
  );
};

export default About;
