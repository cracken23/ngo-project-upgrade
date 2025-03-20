
import React from "react";
import { Helmet } from "react-helmet";
import axios from "../Axios/axios";
import "./Styles/home.css";
import bkimg from "./Images/test.jpeg";
import giftimg from "./Images/IMG_1698.jpg";
import outimg from "./Images/IMG_1694.jpg";
import gift2 from "./Images/gift2.jpeg";
import NGOICON from "./../components/Images/GCAHF.png";

const Home = (props) => {
  const test = async () => {
    const res = await axios.get("/data");
    console.log(res);
  };
  
  return (
    <div className="home-container fade-in">
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
        <meta
          property="og:title"
          content="Geriatric Care and Health Foundation"
        />
        <meta
          property="og:description"
          content="Dedicated to improving the health and well-being of older adults through high-quality, compassionate care."
        />
        <meta property="og:url" content="https://geriatrichcf.com/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="tw-py-16 tw-mb-12 tw-bg-gradient-to-br tw-from-neutral-light tw-to-white">
        <div className="container tw-text-center">
          <h1 className="tw-text-4xl md:tw-text-6xl tw-font-bold tw-mb-6 gradient-text animate-fade-in tw-font-playfair">
            Geriatric Care and Health Foundation
          </h1>
          <p className="tw-text-lg md:tw-text-xl tw-max-w-3xl tw-mx-auto tw-text-neutral-medium tw-mb-10 animate-fade-in">
            Dedicated to enhancing the quality of life for elderly individuals through compassionate care and support
          </p>
          <button 
            onClick={() => window.location.href = '/donation'} 
            className="button-secondary tw-px-8 tw-py-3 tw-text-lg tw-mt-4 animate-fade-in tw-rounded-full tw-shadow-lg">
            Support Our Mission
          </button>
        </div>
      </section>
      
      {/* Image Slider */}
      <div className="tw-max-w-7xl tw-mx-auto tw-px-4 tw-mb-20">
        <div
          data-thq="slider"
          data-navigation="true"
          data-pagination="true"
          className="swiper tw-rounded-2xl tw-overflow-hidden tw-shadow-xl"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="swiper-slide"
              style={{ 
                backgroundImage: `url(${giftimg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '80vh',
                position: 'relative',
              }}
            >
              <div className="tw-absolute tw-inset-0 tw-bg-black tw-opacity-30"></div>
              <div className="tw-backdrop-blur-sm tw-bg-white/10 tw-p-8 tw-absolute tw-bottom-10 tw-left-10 tw-max-w-md tw-rounded-xl animate-slide-in">
                <h2 className="tw-text-white tw-text-3xl tw-font-bold tw-mb-2 tw-font-playfair">Caring for Our Seniors</h2>
                <p className="tw-text-white tw-text-lg">Providing compassionate support to elderly individuals</p>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="swiper-slide"
              style={{ 
                backgroundImage: `url(${outimg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '80vh',
                position: 'relative',
              }}
            >
              <div className="tw-absolute tw-inset-0 tw-bg-black tw-opacity-20"></div>
              <div className="tw-backdrop-blur-sm tw-bg-white/10 tw-p-8 tw-absolute tw-bottom-10 tw-left-10 tw-max-w-md tw-rounded-xl animate-slide-in">
                <h2 className="tw-text-white tw-text-3xl tw-font-bold tw-mb-2 tw-font-playfair">Community Outreach</h2>
                <p className="tw-text-white tw-text-lg">Connecting with seniors in our community</p>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="swiper-slide"
              style={{ 
                backgroundImage: `url(${gift2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '80vh',
                position: 'relative',
              }}
            >
              <div className="tw-absolute tw-inset-0 tw-bg-black tw-opacity-30"></div>
              <div className="tw-backdrop-blur-sm tw-bg-white/10 tw-p-8 tw-absolute tw-bottom-10 tw-left-10 tw-max-w-md tw-rounded-xl animate-slide-in">
                <h2 className="tw-text-white tw-text-3xl tw-font-bold tw-mb-2 tw-font-playfair">Supporting Health & Wellness</h2>
                <p className="tw-text-white tw-text-lg">Promoting healthy living for older adults</p>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="swiper-slide"
              style={{ 
                backgroundImage: `url(${bkimg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '80vh',
                position: 'relative',
              }}
            >
              <div className="tw-absolute tw-inset-0 tw-bg-black tw-opacity-30"></div>
              <div className="tw-backdrop-blur-sm tw-bg-white/10 tw-p-8 tw-absolute tw-bottom-10 tw-left-10 tw-max-w-md tw-rounded-xl animate-slide-in">
                <h2 className="tw-text-white tw-text-3xl tw-font-bold tw-mb-2 tw-font-playfair">Building Stronger Communities</h2>
                <p className="tw-text-white tw-text-lg">Creating safe and supportive environments for seniors</p>
              </div>
            </div>
          </div>
          <div
            data-thq="slider-pagination"
            className="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          ></div>
          <div
            data-thq="slider-button-prev"
            className="swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="swiper-button-next"
          ></div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="tw-max-w-7xl tw-mx-auto tw-px-4 tw-py-16 tw-mb-20">
        <div className="tw-flex md:tw-flex-row tw-flex-col tw-gap-10">
          <div className="tw-flex-1 tw-p-8 tw-bg-gradient-to-br tw-from-[#fff5ef] tw-to-[#ffe8d9] tw-rounded-2xl tw-shadow-lg tw-transform hover:tw-scale-[1.02] tw-transition-transform tw-duration-300">
            <h2 className="tw-text-3xl tw-font-bold tw-mb-6 tw-text-[#e59d76] tw-font-playfair">Our Mission</h2>
            <p className="tw-text-lg tw-leading-relaxed">
              At Geriatric Care and Health Foundation, we are dedicated to enhancing
              the quality of life for elderly individuals by providing comprehensive
              healthcare services, promoting healthy aging, and supporting research
              in geriatrics.
            </p>
          </div>
          
          <div className="tw-flex-1 tw-p-8 tw-bg-gradient-to-br tw-from-[#f5fff5] tw-to-[#e3ffe3] tw-rounded-2xl tw-shadow-lg tw-transform hover:tw-scale-[1.02] tw-transition-transform tw-duration-300">
            <h2 className="tw-text-3xl tw-font-bold tw-mb-6 tw-text-[#4CCD99] tw-font-playfair">Vision Statement</h2>
            <p className="tw-text-lg tw-leading-relaxed">
              Our vision is to create a society where elderly people are valued, empowered, and integrated. 
              We aim to enhance the well-being of our seniors by addressing their physical, mental, and social needs. 
              We also advocate for their rights and raise awareness about the challenges faced by the elderly population.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="tw-py-20 tw-mb-20 tw-bg-gradient-to-br tw-from-[#ffefe6] tw-to-[#fff5ef]">
        <div className="tw-max-w-5xl tw-mx-auto tw-px-4">
          <div className="tw-grid md:tw-grid-cols-2 tw-gap-10 tw-text-center">
            <div className="tw-p-8 tw-bg-white tw-rounded-2xl tw-shadow-lg tw-border-t-4 tw-border-[#e59d76] tw-transform hover:tw-translate-y-[-8px] tw-transition-transform tw-duration-300">
              <h2 className="tw-text-2xl tw-font-bold tw-mb-2 tw-text-neutral-dark tw-font-playfair">NGO members</h2>
              <p className="tw-text-7xl tw-font-light tw-my-6 tw-text-[#e59d76]">8</p>
              <p className="tw-text-lg tw-text-neutral-medium">Dedicated professionals working together</p>
            </div>
            
            <div className="tw-p-8 tw-bg-white tw-rounded-2xl tw-shadow-lg tw-border-t-4 tw-border-[#4CCD99] tw-transform hover:tw-translate-y-[-8px] tw-transition-transform tw-duration-300">
              <h2 className="tw-text-2xl tw-font-bold tw-mb-2 tw-text-neutral-dark tw-font-playfair">Elderly Beneficiaries</h2>
              <p className="tw-text-7xl tw-font-light tw-my-6 tw-text-[#4CCD99]">35</p>
              <p className="tw-text-lg tw-text-neutral-medium">Lives improved through our care</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="tw-max-w-5xl tw-mx-auto tw-text-center tw-mb-20 tw-px-4">
        <h2 className="tw-text-4xl tw-font-bold tw-mb-6 animate-fade-in tw-font-playfair">Join Us in Making a Difference</h2>
        <p className="tw-text-xl tw-max-w-3xl tw-mx-auto tw-mb-8 animate-fade-in tw-text-neutral-medium">
          Your support helps us continue our mission of providing care and support to elderly individuals in need.
          Every contribution makes a significant impact on enhancing their quality of life.
        </p>
        <div className="tw-flex tw-justify-center tw-gap-6 tw-flex-wrap">
          <button 
            onClick={() => window.location.href = '/donation'} 
            className="tw-bg-[#e59d76] hover:tw-bg-[#d48a63] tw-text-white tw-font-bold tw-py-4 tw-px-8 tw-rounded-full tw-shadow-lg tw-transition-all tw-duration-300 animate-fade-in">
            Donate Now
          </button>
          <button 
            onClick={() => window.location.href = '/contact'} 
            className="tw-bg-white tw-border-2 tw-border-[#e59d76] tw-text-[#e59d76] hover:tw-bg-[#fff5ef] tw-font-bold tw-py-4 tw-px-8 tw-rounded-full tw-shadow-lg tw-transition-all tw-duration-300 animate-fade-in">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
