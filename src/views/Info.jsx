
import React from "react";
import { Helmet } from "react-helmet";
import Abouter from "../components/abouter";
import { FaUser } from "react-icons/fa";
import { MdNote } from "react-icons/md";
import { FaBuildingColumns } from "react-icons/fa6";
import { MdMedicalServices } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import NGOICON from "./../components/Images/GCAHF.png";

const Info = () => {
  return (
    <div className="tw-py-10 tw-fade-in">
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

      <div className="tw-max-w-6xl tw-mx-auto tw-px-4">
        <div className="tw-text-center tw-mb-12">
          <h1 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-mb-4 tw-font-playfair tw-text-[#e59d76]">
            About Our Foundation
          </h1>
          <p className="tw-text-lg tw-max-w-3xl tw-mx-auto tw-text-neutral-medium">
            Learn more about our organization, vision, services, and impact
          </p>
        </div>
        
        <div className="tw-space-y-10">
          <div className="tw-bg-white tw-rounded-2xl tw-shadow-lg tw-overflow-hidden tw-transform hover:tw-translate-y-[-5px] tw-transition-all tw-duration-300">
            <Abouter
              header={"About Us"}
              content={
                "The Geriatric Care and Health Foundation (GCHF) is a non-profit organization established in November 2018. We strive to provide quality care and health services to elderly people in need. We believe every senior deserves dignity, respect, and compassion in their golden years."
              }
              Icons={<FaUser className="tw-text-[#e59d76] tw-text-2xl" />}
            />
          </div>
          
          <div className="tw-bg-white tw-rounded-2xl tw-shadow-lg tw-overflow-hidden tw-transform hover:tw-translate-y-[-5px] tw-transition-all tw-duration-300">
            <Abouter
              header={"Vision Statement"}
              content={
                "Our vision is to create a society where elderly people are valued, empowered, and integrated. We aim to enhance the well-being of our seniors by addressing their physical, mental, and social needs. We also advocate for their rights and raise awareness about the challenges faced by the elderly population."
              }
              Icons={<MdNote className="tw-text-[#4CCD99] tw-text-2xl" />}
            />
          </div>
          
          <div className="tw-bg-white tw-rounded-2xl tw-shadow-lg tw-overflow-hidden tw-transform hover:tw-translate-y-[-5px] tw-transition-all tw-duration-300">
            <Abouter
              header={"History of Services"}
              content={
                <React.Fragment>
                  <h3 className="tw-text-xl tw-font-bold tw-mb-2">RACSC - The Precursor</h3>
                  <p className="tw-mb-4">
                    GCHF's foundation lies in the Residential Aged Clinical Service
                    Center (RACSC), a nursing home established in 2013 by our
                    founder, Late Shri Vijaykumar S Gaikwad. RACSC provided clinical
                    care and a comfortable environment for elderly people needing
                    medical attention.
                  </p>

                  <p>
                    Due to challenges posed by the COVID-19 pandemic, RACSC
                    transitioned into an old age home. GCHF now offers shelter,
                    food, and basic care to elderly individuals with no family
                    support.
                  </p>
                </React.Fragment>
              }
              Icons={<FaBuildingColumns className="tw-text-[#e59d76] tw-text-2xl" />}
            />
          </div>
          
          <div className="tw-bg-white tw-rounded-2xl tw-shadow-lg tw-overflow-hidden tw-transform hover:tw-translate-y-[-5px] tw-transition-all tw-duration-300">
            <Abouter
              header={"Current Services"}
              content={
                <React.Fragment>
                  <p className="tw-mb-4">
                    GCHF provides a safe and supportive environment for elderly
                    people. Our services include:
                  </p>
                  <ul className="tw-list-disc tw-pl-6 tw-space-y-2">
                    <li>Shelter and nutritious meals</li>
                    <li>Daily care and assistance by trained caregivers</li>
                    <li>Recreational and social activities</li>
                  </ul>
                </React.Fragment>
              }
              Icons={<MdMedicalServices className="tw-text-[#4CCD99] tw-text-2xl" />}
            />
          </div>
          
          <div className="tw-bg-white tw-rounded-2xl tw-shadow-lg tw-overflow-hidden tw-transform hover:tw-translate-y-[-5px] tw-transition-all tw-duration-300">
            <Abouter
              header={"Other Envisioned Possibilities"}
              content={
                <React.Fragment>
                  <p className="tw-mb-4">
                    GCHF aspires to expand its services in the future, including:
                  </p>
                  <ul className="tw-list-disc tw-pl-6 tw-space-y-2">
                    <li>Counseling and emotional support for seniors</li>
                    <li>Health camps and awareness sessions</li>
                    <li>
                      Collaboration for access to transportation, legal, and
                      financial services
                    </li>
                    <li>Volunteer and donor opportunities</li>
                    <li>Creating a network for senior citizens to connect</li>
                  </ul>
                </React.Fragment>
              }
            />
          </div>
          
          <div className="tw-bg-white tw-rounded-2xl tw-shadow-lg tw-overflow-hidden tw-transform hover:tw-translate-y-[-5px] tw-transition-all tw-duration-300">
            <Abouter
              header={"Trustee Board"}
              content={
                <>
                  <p className="tw-mb-4">GCHF is governed by a dedicated management committee:</p>
                  <ul className="tw-list-disc tw-pl-6">
                    <li className="tw-mb-2">
                      <strong>Dr. Pankaj Khangal (Secretary)</strong> - Doctor
                      Specializing in Geriatric Care
                    </li>
                  </ul>
                </>
              }
              Icons={<FaUsers className="tw-text-[#e59d76] tw-text-2xl" />}
            />
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="tw-text-center tw-mt-16 tw-mb-8">
          <h2 className="tw-text-3xl tw-font-bold tw-mb-4 tw-font-playfair">Join Our Mission</h2>
          <p className="tw-text-lg tw-max-w-3xl tw-mx-auto tw-mb-8 tw-text-neutral-medium">
            Support our efforts to enhance the quality of life for elderly individuals through donations, volunteering, or partnerships.
          </p>
          <div className="tw-flex tw-flex-wrap tw-justify-center tw-gap-4">
            <button 
              onClick={() => window.location.href = '/donation'} 
              className="tw-bg-[#e59d76] hover:tw-bg-[#d48a63] tw-text-white tw-font-bold tw-py-3 tw-px-6 tw-rounded-lg tw-shadow-lg tw-transition-all tw-duration-300">
              Donate Now
            </button>
            <button 
              onClick={() => window.location.href = '/contact'} 
              className="tw-bg-[#4CCD99] hover:tw-bg-[#3ba57a] tw-text-white tw-font-bold tw-py-3 tw-px-6 tw-rounded-lg tw-shadow-lg tw-transition-all tw-duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
