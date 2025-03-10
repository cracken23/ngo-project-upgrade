import React from "react";

import { Helmet } from "react-helmet";

import TeamBanner from "../components/team-banner";
import "./Styles/about.css";
import inside from "./Images/IMG_1702.jpg";
import NGOICON from "./../components/Images/GCAHF.png";
const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - GCAHF</title>
        
        <link rel="icon" href={NGOICON} />
      </Helmet>
      <div
        className="about-container01"
        style={{ backgroundImage: `url(${inside})` }}
      >
        <span className="about-text">
          {/* <span>BIBEN DUM</span>
          <br></br>
          <span>FRINGI DICTUM, AUGUE PURUS</span> */}
        </span>
      </div>
      <div className="  tw-text-center tw-my-6 tw-bg-[#82ed9b]">
        <span className="about-text04 tw-font-medium">
          Welcome to Geriatric Care and Health Foundation, a non-profit
          organization dedicated to improving the lives of elderly individuals
          and promoting their health and well-being. Our foundation was
          established with a vision to create a society where senior citizens
          receive the care, support, and respect they deserve.
        </span>
      </div>

      <div className=" tw-m-14 about-container02 ">
        <h1 className="about-text05 ">Our Mission</h1>
        <span className="about-text06 tw-font-medium tw-px-2 tw-py-4">
          Our mission is to provide comprehensive care and support services to
          elderly individuals, focusing on their physical, mental, and emotional
          well-being. We aim to enhance their quality of life and empower them
          to live with dignity and independence.
        </span>
      </div>
      {/* <div className="about-container03">
        <h1 className="about-text07">Biben dum fringi dictum, augue purus</h1>
        <span className="about-text08">
          Lmcdfnue frjbr vjvj vjrngrfenfuef leifje ekfneif efkenfe kenfm fwndof
          fif fjebfu fmeffe fewfuef mfbewuidfne
        </span>
      </div> */}

      {/* <div className="about-container04">
        <h1>Mission</h1>
        <div className="about-container05">
          <div className="about-container06">
            <div className="about-container07">
              <h1>Mission</h1>
              <span>Text</span>
            </div>
            <div className="about-container08">
              <h1>Mission</h1>
              <span>Text</span>
            </div>
          </div>
          <div className="about-container09">
            <h1>Mission</h1>
            <span>Text</span>
          </div>
        </div>
      </div> */}
      <div className="about-container10">
        <h1>Our Team</h1>
        <span className="about-text17">
          Our dedicated team comprises healthcare professionals, social workers,
          volunteers, and advocates who are committed to serving the elderly
          community with compassion, empathy, and expertise.
        </span>
        <div className="about-container11">
          <TeamBanner rootClassName="team-banner-root-class-name" heading="Dr. Pankaj Khangal" text="Doctor" Qualification={"MD ANAESTHESIOLOGY"} showSocial={false}></TeamBanner>

          
          
        </div>
      </div>
    </div>
  );
};

export default About;
