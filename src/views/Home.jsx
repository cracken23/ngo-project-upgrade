
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import bkimg from "./Images/test.jpeg";
import giftimg from "./Images/IMG_1698.jpg";
import outimg from "./Images/IMG_1694.jpg";
import gift2 from "./Images/gift2.jpeg";
import NGOICON from "./../components/Images/GCAHF.png";

const Home = () => {
  return (
    <div className="tw-fade-in">
      <Helmet>
        <title>Geriatric Care and Health Foundation</title>
        <link rel="icon" href={NGOICON} />
        <meta name="title" content="Geriatric Care and Health Foundation" />
        <meta
          name="description"
          content="Dedicated to improving the health and well-being of older adults through high-quality, compassionate care."
        />
        <meta
          name="keywords"
          content="Geriatric Care, Health Foundation, Elderly Care, Senior Health"
        />
      </Helmet>
      
      {/* Hero Section */}
      <section className="tw-relative tw-h-[90vh] tw-w-full tw-overflow-hidden">
        <div 
          className="tw-absolute tw-inset-0 tw-bg-cover tw-bg-center tw-bg-no-repeat"
          style={{ backgroundImage: `url(${giftimg})` }}
        ></div>
        <div className="tw-absolute tw-inset-0 tw-bg-black tw-opacity-50"></div>
        
        <div className="tw-absolute tw-inset-0 tw-flex tw-flex-col tw-items-center tw-justify-center tw-text-white tw-px-4 tw-text-center">
          <h1 className="tw-text-4xl md:tw-text-6xl tw-font-bold tw-mb-6 tw-slide-up tw-font-playfair">
            Caring for Our Elderly<br />
            <span className="tw-text-[#4CCD99]">Building Better Lives</span>
          </h1>
          <p className="tw-text-lg md:tw-text-xl tw-max-w-3xl tw-mx-auto tw-mb-10 tw-slide-up tw-opacity-90">
            The Geriatric Care and Health Foundation is dedicated to enhancing the quality of life for elderly individuals through compassionate care and support.
          </p>
          <div className="tw-flex tw-flex-col md:tw-flex-row tw-gap-4 tw-slide-up">
            <Link 
              to="/donation" 
              className="tw-bg-[#ea5507] hover:tw-bg-[#d4480d] tw-text-white tw-font-bold tw-py-3 tw-px-8 tw-rounded-full tw-shadow-lg tw-transition-all tw-duration-300 hover:tw-scale-105"
            >
              Support Our Mission
            </Link>
            <Link 
              to="/about" 
              className="tw-bg-transparent tw-border-2 tw-border-white hover:tw-bg-white/10 tw-text-white tw-font-bold tw-py-3 tw-px-8 tw-rounded-full tw-shadow-lg tw-transition-all tw-duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
        
        <div className="tw-absolute tw-bottom-10 tw-left-0 tw-right-0 tw-flex tw-justify-center">
          <svg 
            className="tw-w-10 tw-h-10 tw-text-white tw-animate-bounce tw-cursor-pointer" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
              });
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="tw-py-20 tw-bg-neutral-light">
        <div className="tw-container tw-mx-auto tw-px-4">
          <div className="tw-text-center tw-mb-16">
            <h2 className="tw-text-4xl tw-font-bold tw-mb-4 tw-font-playfair">Our Mission & Vision</h2>
            <div className="tw-h-1 tw-w-24 tw-bg-[#ea5507] tw-mx-auto"></div>
          </div>
          
          <div className="tw-grid md:tw-grid-cols-2 tw-gap-10">
            <div className="tw-bg-white tw-rounded-2xl tw-shadow-xl tw-overflow-hidden tw-transform hover:tw-scale-[1.02] tw-transition-all tw-duration-300">
              <div className="tw-h-2 tw-bg-[#ea5507]"></div>
              <div className="tw-p-8">
                <h3 className="tw-text-2xl tw-font-bold tw-mb-4 tw-text-[#333] tw-font-playfair">Our Mission</h3>
                <p className="tw-text-gray-600 tw-leading-relaxed">
                  At Geriatric Care and Health Foundation, we are dedicated to enhancing
                  the quality of life for elderly individuals by providing comprehensive
                  healthcare services, promoting healthy aging, and supporting research
                  in geriatrics.
                </p>
                <Link 
                  to="/about" 
                  className="tw-inline-block tw-mt-6 tw-text-[#ea5507] hover:tw-text-[#d4480d] tw-font-medium tw-transition-all tw-duration-300"
                >
                  Learn more →
                </Link>
              </div>
            </div>
            
            <div className="tw-bg-white tw-rounded-2xl tw-shadow-xl tw-overflow-hidden tw-transform hover:tw-scale-[1.02] tw-transition-all tw-duration-300">
              <div className="tw-h-2 tw-bg-[#4CCD99]"></div>
              <div className="tw-p-8">
                <h3 className="tw-text-2xl tw-font-bold tw-mb-4 tw-text-[#333] tw-font-playfair">Vision Statement</h3>
                <p className="tw-text-gray-600 tw-leading-relaxed">
                  Our vision is to create a society where elderly people are valued, empowered, and integrated. 
                  We aim to enhance the well-being of our seniors by addressing their physical, mental, and social needs. 
                  We also advocate for their rights and raise awareness about the challenges faced by the elderly population.
                </p>
                <Link 
                  to="/info" 
                  className="tw-inline-block tw-mt-6 tw-text-[#4CCD99] hover:tw-text-[#3ba57a] tw-font-medium tw-transition-all tw-duration-300"
                >
                  Read more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="tw-py-20 tw-bg-white">
        <div className="tw-container tw-mx-auto tw-px-4">
          <div className="tw-text-center tw-mb-16">
            <h2 className="tw-text-4xl tw-font-bold tw-mb-4 tw-font-playfair">Our Services</h2>
            <div className="tw-h-1 tw-w-24 tw-bg-[#4CCD99] tw-mx-auto"></div>
            <p className="tw-text-gray-600 tw-max-w-3xl tw-mx-auto tw-mt-4">
              We provide a range of services designed to enhance the quality of life for elderly individuals
            </p>
          </div>
          
          <div className="tw-grid md:tw-grid-cols-3 tw-gap-8">
            <ServiceCard 
              icon={
                <svg className="tw-w-10 tw-h-10 tw-text-[#ea5507]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              }
              title="Residential Care"
              description="Providing a safe and nurturing environment for elderly individuals with 24/7 support and assistance."
            />
            
            <ServiceCard 
              icon={
                <svg className="tw-w-10 tw-h-10 tw-text-[#4CCD99]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              }
              title="Health Monitoring"
              description="Regular health checkups and monitoring for elderly residents to ensure their well-being and address health concerns promptly."
            />
            
            <ServiceCard 
              icon={
                <svg className="tw-w-10 tw-h-10 tw-text-[#ea5507]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
              title="Social Activities"
              description="Engaging social activities and programs to promote mental well-being and prevent isolation among elderly residents."
            />
          </div>
        </div>
      </section>
      
      {/* Image Gallery Section */}
      <section className="tw-py-20 tw-bg-neutral-light">
        <div className="tw-container tw-mx-auto tw-px-4">
          <div className="tw-text-center tw-mb-16">
            <h2 className="tw-text-4xl tw-font-bold tw-mb-4 tw-font-playfair">Our Gallery</h2>
            <div className="tw-h-1 tw-w-24 tw-bg-[#ea5507] tw-mx-auto"></div>
            <p className="tw-text-gray-600 tw-max-w-3xl tw-mx-auto tw-mt-4">
              Glimpses of our activities and initiatives
            </p>
          </div>
          
          <div className="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6">
            <GalleryImage image={giftimg} alt="Caring for Seniors" />
            <GalleryImage image={outimg} alt="Community Outreach" />
            <GalleryImage image={gift2} alt="Supporting Health & Wellness" />
            <GalleryImage image={bkimg} alt="Building Stronger Communities" className="md:tw-col-span-2 lg:tw-col-span-1" />
            <GalleryImage image={giftimg} alt="Elderly Care" className="md:tw-col-span-2" />
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="tw-py-20 tw-bg-white">
        <div className="tw-container tw-mx-auto tw-px-4">
          <div className="tw-grid md:tw-grid-cols-2 tw-gap-10">
            <div className="tw-bg-gradient-to-br tw-from-[#4CCD99]/10 tw-to-[#4CCD99]/30 tw-rounded-2xl tw-shadow-lg tw-p-8 tw-text-center tw-transform hover:tw-translate-y-[-8px] tw-transition-transform tw-duration-300">
              <div className="tw-bg-white tw-rounded-full tw-w-20 tw-h-20 tw-flex tw-items-center tw-justify-center tw-mx-auto tw-mb-4 tw-shadow-md">
                <svg className="tw-w-10 tw-h-10 tw-text-[#4CCD99]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="tw-text-2xl tw-font-bold tw-mb-2 tw-text-neutral-dark tw-font-playfair">NGO Members</h3>
              <p className="tw-text-7xl tw-font-light tw-my-6 tw-text-[#4CCD99]">8</p>
              <p className="tw-text-lg tw-text-neutral-medium">Dedicated professionals working together</p>
            </div>
            
            <div className="tw-bg-gradient-to-br tw-from-[#ea5507]/10 tw-to-[#ea5507]/30 tw-rounded-2xl tw-shadow-lg tw-p-8 tw-text-center tw-transform hover:tw-translate-y-[-8px] tw-transition-transform tw-duration-300">
              <div className="tw-bg-white tw-rounded-full tw-w-20 tw-h-20 tw-flex tw-items-center tw-justify-center tw-mx-auto tw-mb-4 tw-shadow-md">
                <svg className="tw-w-10 tw-h-10 tw-text-[#ea5507]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="tw-text-2xl tw-font-bold tw-mb-2 tw-text-neutral-dark tw-font-playfair">Elderly Beneficiaries</h3>
              <p className="tw-text-7xl tw-font-light tw-my-6 tw-text-[#ea5507]">35</p>
              <p className="tw-text-lg tw-text-neutral-medium">Lives improved through our care</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="tw-py-20 tw-bg-gradient-to-br tw-from-[#333] tw-to-[#222] tw-text-white">
        <div className="tw-container tw-mx-auto tw-px-4 tw-text-center">
          <h2 className="tw-text-4xl tw-font-bold tw-mb-6 tw-font-playfair">Join Us in Making a Difference</h2>
          <p className="tw-text-xl tw-max-w-3xl tw-mx-auto tw-mb-10 tw-text-gray-300">
            Your support helps us continue our mission of providing care and support to elderly individuals in need.
            Every contribution makes a significant impact on enhancing their quality of life.
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

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="tw-bg-white tw-rounded-2xl tw-shadow-lg tw-p-8 tw-text-center tw-transition-all tw-duration-300 hover:tw-shadow-xl hover:tw-translate-y-[-5px]">
      <div className="tw-bg-[#f9f9f9] tw-rounded-full tw-w-20 tw-h-20 tw-flex tw-items-center tw-justify-center tw-mx-auto tw-mb-4">
        {icon}
      </div>
      <h3 className="tw-text-xl tw-font-bold tw-mb-3 tw-font-playfair">{title}</h3>
      <p className="tw-text-gray-600">{description}</p>
    </div>
  );
};

const GalleryImage = ({ image, alt, className = "" }) => {
  return (
    <div className={`tw-overflow-hidden tw-rounded-xl tw-shadow-lg ${className}`}>
      <img 
        src={image} 
        alt={alt} 
        className="tw-w-full tw-h-80 tw-object-cover tw-transition-transform tw-duration-500 hover:tw-scale-110" 
      />
    </div>
  );
};

export default Home;
