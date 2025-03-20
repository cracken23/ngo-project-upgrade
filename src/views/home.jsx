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
      <section className="tw-py-20 tw-text-center">
        <div className="tw-max-w-4xl tw-mx-auto">
          <h1 className="tw-text-5xl md:tw-text-7xl tw-font-extrabold tw-mb-6 gradient-text tw-font-playfair animate-fade-in-slow">
            Geriatric Care and Health Foundation
          </h1>
          <p className="tw-text-xl md:tw-text-2xl tw-text-gray-600 tw-mb-10 animate-fade-in">
            Enhancing the quality of life for the elderly through compassion and care
          </p>
          <div className="tw-flex tw-justify-center tw-gap-4">
            <button 
              onClick={() => window.location.href = '/donation'}
              className="tw-bg-[#e59d76] hover:tw-bg-[#d48a63] tw-text-white tw-font-semibold tw-py-3 tw-px-6 tw-rounded-full tw-shadow-md tw-transition-all">
              Support Our Mission
            </button>
            <button 
              onClick={() => window.location.href = '/contact'} 
              className="tw-border tw-border-[#e59d76] tw-text-[#e59d76] hover:tw-bg-[#fff3ec] tw-font-semibold tw-py-3 tw-px-6 tw-rounded-full tw-shadow-md tw-transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Slider Section */}
      <section className="tw-relative tw-overflow-hidden tw-mb-24">
        <div className="swiper">
          <div className="swiper-wrapper">
            {[giftimg, outimg, gift2, bkimg].map((img, i) => (
              <div
                key={i}
                className="swiper-slide tw-relative"
                style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '80vh' }}>
                <div className="tw-absolute tw-inset-0 tw-bg-black/30"></div>
                <div className="tw-absolute tw-bottom-10 tw-left-10 tw-max-w-md tw-p-6 tw-bg-white/10 tw-backdrop-blur-md tw-rounded-xl">
                  <h2 className="tw-text-white tw-text-3xl tw-font-bold tw-font-playfair tw-mb-2">{["Caring for Our Seniors", "Community Outreach", "Supporting Health & Wellness", "Building Stronger Communities"][i]}</h2>
                  <p className="tw-text-white tw-text-lg">{["Providing compassionate support to elderly individuals", "Connecting with seniors in our community", "Promoting healthy living for older adults", "Creating safe and supportive environments for seniors"][i]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="tw-bg-gray-50 tw-py-20">
        <div className="tw-max-w-6xl tw-mx-auto tw-grid md:tw-grid-cols-2 tw-gap-12 tw-px-6">
          <div className="tw-bg-white tw-p-8 tw-rounded-2xl tw-shadow-md">
            <h2 className="tw-text-3xl tw-font-bold tw-text-[#e59d76] tw-font-playfair tw-mb-4">Our Mission</h2>
            <p className="tw-text-gray-700 tw-text-lg">
              We are committed to enhancing the quality of life for elderly individuals through compassionate healthcare, active support, and healthy aging initiatives.
            </p>
          </div>
          <div className="tw-bg-white tw-p-8 tw-rounded-2xl tw-shadow-md">
            <h2 className="tw-text-3xl tw-font-bold tw-text-[#4CCD99] tw-font-playfair tw-mb-4">Our Vision</h2>
            <p className="tw-text-gray-700 tw-text-lg">
              A world where every senior lives with dignity, purpose, and full integration in society through advocacy, empowerment, and care.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="tw-bg-gradient-to-r tw-from-[#fff2ec] tw-to-[#e7fff5] tw-py-20">
        <div className="tw-max-w-4xl tw-mx-auto tw-grid md:tw-grid-cols-2 tw-gap-10 tw-text-center">
          <div className="tw-bg-white tw-p-10 tw-rounded-2xl tw-shadow-md tw-border-t-4 tw-border-[#e59d76]">
            <h3 className="tw-text-2xl tw-font-bold tw-font-playfair tw-mb-2">NGO Members</h3>
            <p className="tw-text-6xl tw-text-[#e59d76] tw-my-4">8</p>
            <p className="tw-text-gray-600">Dedicated professionals working together</p>
          </div>
          <div className="tw-bg-white tw-p-10 tw-rounded-2xl tw-shadow-md tw-border-t-4 tw-border-[#4CCD99]">
            <h3 className="tw-text-2xl tw-font-bold tw-font-playfair tw-mb-2">Elderly Beneficiaries</h3>
            <p className="tw-text-6xl tw-text-[#4CCD99] tw-my-4">35</p>
            <p className="tw-text-gray-600">Lives improved through our care</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="tw-text-center tw-py-24 tw-bg-white">
        <div className="tw-max-w-3xl tw-mx-auto">
          <h2 className="tw-text-4xl tw-font-bold tw-font-playfair tw-mb-6">Join Us in Making a Difference</h2>
          <p className="tw-text-xl tw-text-gray-600 tw-mb-10">
            Your support ensures continued compassionate care for elderly individuals. Every contribution helps transform lives.
          </p>
          <div className="tw-flex tw-justify-center tw-gap-4">
            <button 
              onClick={() => window.location.href = '/donation'}
              className="tw-bg-[#e59d76] hover:tw-bg-[#d48a63] tw-text-white tw-font-bold tw-py-4 tw-px-8 tw-rounded-full tw-shadow-md tw-transition">
              Donate Now
            </button>
            <button 
              onClick={() => window.location.href = '/contact'}
              className="tw-bg-transparent tw-border tw-border-[#e59d76] tw-text-[#e59d76] hover:tw-bg-[#fff3ec] tw-font-bold tw-py-4 tw-px-8 tw-rounded-full tw-shadow-md tw-transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
