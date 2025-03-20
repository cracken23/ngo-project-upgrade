
import React from "react";
import { Helmet } from "react-helmet";
import TeamBanner from "../components/team-banner";
import "./Styles/about.css";
import inside from "./Images/IMG_1702.jpg";
import NGOICON from "./../components/Images/GCAHF.png";

const About = (props) => {
  return (
    <div className="about-container tw-fade-in">
      <Helmet>
        <title>About - GCAHF</title>
        <link rel="icon" href={NGOICON} />
        <meta name="description" content="Learn about Geriatric Care and Health Foundation, our mission, vision, and dedicated team." />
      </Helmet>
      
      {/* Hero Banner */}
      <div className="tw-relative tw-w-full tw-h-[500px] tw-overflow-hidden tw-mb-16">
        <div 
          className="tw-absolute tw-inset-0 tw-bg-cover tw-bg-center"
          style={{ backgroundImage: `url(${inside})` }}
        ></div>
        <div className="tw-absolute tw-inset-0 tw-bg-black tw-opacity-30"></div>
        <div className="tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center">
          <h1 className="tw-text-5xl md:tw-text-6xl tw-font-bold tw-text-white tw-font-playfair tw-text-center tw-px-4">
            About Our Foundation
          </h1>
        </div>
      </div>
      
      {/* Introduction */}
      <div className="tw-max-w-4xl tw-mx-auto tw-px-6 tw-py-10 tw-bg-[#eaffef] tw-rounded-2xl tw-shadow-lg tw-mb-16 tw-text-center">
        <p className="tw-text-xl tw-leading-relaxed tw-font-medium">
          Welcome to Geriatric Care and Health Foundation, a non-profit
          organization dedicated to improving the lives of elderly individuals
          and promoting their health and well-being. Our foundation was
          established with a vision to create a society where senior citizens
          receive the care, support, and respect they deserve.
        </p>
      </div>

      {/* Mission Section */}
      <div className="tw-max-w-6xl tw-mx-auto tw-px-6 tw-mb-20">
        <div className="tw-bg-white tw-rounded-2xl tw-shadow-lg tw-overflow-hidden">
          <div className="tw-p-10">
            <h2 className="tw-text-3xl tw-font-bold tw-mb-6 tw-text-[#e59d76] tw-font-playfair">Our Mission</h2>
            <p className="tw-text-lg tw-leading-relaxed">
              Our mission is to provide comprehensive care and support services to
              elderly individuals, focusing on their physical, mental, and emotional
              well-being. We aim to enhance their quality of life and empower them
              to live with dignity and independence.
            </p>
          </div>
          <div className="tw-h-4 tw-bg-gradient-to-r tw-from-[#e59d76] tw-to-[#4CCD99]"></div>
        </div>
      </div>
      
      {/* Team Section */}
      <div className="tw-max-w-6xl tw-mx-auto tw-px-6 tw-mb-20">
        <div className="tw-text-center tw-mb-12">
          <h2 className="tw-text-4xl tw-font-bold tw-mb-4 tw-font-playfair">Our Team</h2>
          <p className="tw-text-lg tw-max-w-3xl tw-mx-auto tw-text-neutral-medium">
            Our dedicated team comprises healthcare professionals, social workers,
            volunteers, and advocates who are committed to serving the elderly
            community with compassion, empathy, and expertise.
          </p>
        </div>
        
        <div className="tw-flex tw-flex-wrap tw-justify-center tw-gap-8">
          <div className="tw-transform hover:tw-scale-105 tw-transition-transform tw-duration-300">
            <TeamBanner 
              rootClassName="team-banner-root-class-name" 
              heading="Dr. Pankaj Khangal" 
              text="Doctor" 
              Qualification={"MD ANAESTHESIOLOGY"} 
              showSocial={false}
            />
          </div>
        </div>
      </div>
      
      {/* Join Us CTA */}
      <div className="tw-bg-gradient-to-r tw-from-[#eaffef] tw-to-[#f5fff5] tw-py-16 tw-px-6 tw-text-center">
        <div className="tw-max-w-4xl tw-mx-auto">
          <h2 className="tw-text-3xl tw-font-bold tw-mb-6 tw-font-playfair">Join Our Mission</h2>
          <p className="tw-text-lg tw-mb-8">
            We are always looking for passionate individuals to join our cause. Whether as a volunteer, 
            donor, or advocate, your contribution can make a significant difference in the lives of elderly individuals.
          </p>
          <button 
            onClick={() => window.location.href = '/contact'} 
            className="tw-bg-[#4CCD99] hover:tw-bg-[#3ba57a] tw-text-white tw-font-bold tw-py-3 tw-px-8 tw-rounded-full tw-shadow-lg tw-transition-all tw-duration-300">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
