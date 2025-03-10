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
      <section className="section tw-py-10 tw-mb-8">
        <div className="container tw-text-center">
          <h1 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-mb-4 gradient-text animate-fade-in">
            Welcome to Geriatric Care and Health Foundation
          </h1>
          <p className="tw-text-lg tw-max-w-2xl tw-mx-auto tw-text-neutral-medium tw-mb-8 animate-fade-in">
            Dedicated to enhancing the quality of life for elderly individuals through compassionate care and support
          </p>
        </div>
      </section>
      
      {/* Image Slider */}
      <div className="home-container01 tw-mb-16">
        <div
          data-thq="slider"
          data-navigation="true"
          data-pagination="true"
          className="home-slider swiper tw-rounded-xl tw-overflow-hidden tw-shadow-lg"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="home-slider-slide swiper-slide"
              style={{ 
                backgroundImage: `url(${giftimg})`,
                backgroundSize: 'cover',
                backgroundPosition: '90% 50%',
                height: '110vh',
              }}
            >
              <div className="glass-effect tw-p-6 tw-absolute tw-bottom-8 tw-left-8 tw-max-w-md tw-rounded-lg animate-slide-in">
                <h2 className="tw-text-white tw-text-2xl tw-font-bold">Caring for Our Seniors</h2>
                <p className="tw-text-white tw-opacity-90">Providing compassionate support to elderly individuals</p>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="home-slider-slide1 swiper-slide"
              style={{ 
                backgroundImage: `url(${outimg})`,
                
                backgroundPosition: 'center',
                height: '110vh',
              }}
            >
              <div className="glass-effect tw-p-6 tw-absolute tw-bottom-8 tw-left-8 tw-max-w-md tw-rounded-lg animate-slide-in">
                <h2 className="tw-text-black tw-text-2xl tw-font-bold">Community Outreach</h2>
                <p className="tw-text-black tw-opacity-90">Connecting with seniors in our community</p>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="home-slider-slide2 swiper-slide"
              style={{ 
                backgroundImage: `url(${gift2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '110vh',
              }}
            >
              <div className="glass-effect tw-p-6 tw-absolute tw-bottom-8 tw-left-8 tw-max-w-md tw-rounded-lg animate-slide-in">
                <h2 className="tw-text-white tw-text-2xl tw-font-bold">Supporting Health & Wellness</h2>
                <p className="tw-text-white tw-opacity-90">Promoting healthy living for older adults</p>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="home-slider-slide2 swiper-slide"
              style={{ 
                backgroundImage: `url(${bkimg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '110vh',
              }}
            >
              <div className="glass-effect tw-p-6 tw-absolute tw-bottom-8 tw-left-8 tw-max-w-md tw-rounded-lg animate-slide-in">
                <h2 className="tw-text-white tw-text-2xl tw-font-bold">Building Stronger Communities</h2>
                <p className="tw-text-white tw-opacity-90">Creating safe and supportive environments for seniors</p>
              </div>
            </div>
          </div>
          <div
            data-thq="slider-pagination"
            className="home-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
          </div>
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
      <div className="container">
        <div className="tw-flex md:tw-flex-row tw-flex-col tw-gap-8 tw-mb-16">
          <div className="card tw-flex-1 tw-bg-gradient-to-br tw-from-[#eaffef] tw-to-[#d9f7e2] tw-border-l-4 tw-border-primary-color animate-fade-in">
            <h2 className="tw-text-2xl tw-font-bold tw-mb-4 tw-text-[#e59d76]">Our Mission</h2>
            <p className="tw-text-lg">
              At Geriatric Care and Health Foundation, we are dedicated to enhancing
              the quality of life for elderly individuals by providing comprehensive
              healthcare services, promoting healthy aging, and supporting research
              in geriatrics.
            </p>
          </div>
          
          <div className="card tw-flex-1 tw-bg-gradient-to-br tw-from-[#eaffef] tw-to-[#d9f7e2] tw-border-l-4 tw-border-primary-color animate-fade-in">
            <h2 className="tw-text-2xl tw-font-bold tw-mb-4 tw-text-[#e59d76]">Vision Statement</h2>
            <p className="tw-text-lg">
              Our vision is to create a society where elderly people are valued, empowered, and integrated. 
              We aim to enhance the well-being of our seniors by addressing their physical, mental, and social needs. 
              We also advocate for their rights and raise awareness about the challenges faced by the elderly population.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="section-colored tw-py-16 tw-mb-16">
        <div className="container">
          <div className="tw-flex md:tw-flex-row tw-flex-col tw-items-center tw-justify-center tw-gap-8">
            <div className="card tw-text-center tw-bg-gradient-to-br tw-from-[#ea5507] tw-to-[#ff7a38] tw-text-white tw-flex-1 tw-max-w-xs animate-fade-in">
              <h2 className="tw-font-bold tw-text-2xl tw-mb-2 tw-text-[#e59d76]">NGO members</h2>
              <p className="tw-text-8xl tw-font-light tw-my-4 tw-text-black">8</p>
              <p className="tw-text-lg tw-opacity-80 tw-text-black">Dedicated professionals</p>
            </div>
            
            <div className="card tw-text-center tw-bg-gradient-to-br tw-from-[#ea5507] tw-to-[#ff7a38] tw-text-white tw-flex-1 tw-max-w-xs animate-fade-in">
              <h2 className="tw-font-bold tw-text-2xl tw-mb-2 tw-text-[#e59d76]">Elderly Beneficiaries</h2>
              <p className="tw-text-8xl tw-font-light tw-my-4 tw-text-black">35</p>
              <p className="tw-text-lg tw-opacity-80 tw-text-black">Lives improved</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container tw-text-center tw-mb-16">
        <h2 className="tw-text-3xl tw-font-bold tw-mb-4 animate-fade-in">Join Us in Making a Difference</h2>
        <p className="tw-text-lg tw-max-w-2xl tw-mx-auto tw-mb-6 animate-fade-in">
          Your support helps us continue our mission of providing care and support to elderly individuals in need.
        </p>
        <button 
          onClick={() => window.location.href = '/donation'} 
          className="button-secondary tw-px-8 tw-py-3 tw-text-lg animate-fade-in">
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default Home;
