import React from 'react'

import { Helmet } from 'react-helmet'

import DonateSLD from '../components/donate-sld'
import './Styles/donation.css'
import NGOICON from './../components/Images/GCAHF.png'
const Donation = (props) => {
  return (
    <div className="donation-container">
      <Helmet>
        <title>Donation - GCAHF</title>
        <meta name="description" content="Support the Geriatric Care and Health Foundation. Your donation helps us provide high-quality care for older adults."/>
  <meta name="keywords" content="Donation, Geriatric Care, Health Foundation, Support"/>
  <meta property="og:title" content="Donation - Geriatric Care and Health Foundation"/>
  <meta property="og:description" content="Support the Geriatric Care and Health Foundation. Your donation helps us provide high-quality care for older adults."/>
  <meta property="og:image" content="URL_TO_IMAGE"/>
  <meta property="og:url" content="https://geriatrichcf.com/donation"/>
  <link rel="icon" href={NGOICON} />
      </Helmet>
      {/* <div className="donation-container1">
        <div
          data-thq="slider"
          data-autoplay="false"
          data-navigation="true"
          data-pagination="true"
          className="donation-slider swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="donation-slider-slide swiper-slide"
            >
              <span>Text</span>
            </div>
            <div
              data-thq="slider-slide"
              className="donation-slider-slide1 swiper-slide"
            >
              <span>Lorem</span>
            </div>
            <div
              data-thq="slider-slide"
              className="donation-slider-slide2 swiper-slide"
            >
              <span className="donation-text2">Text</span>
            </div>
          </div>
          <div
            data-thq="slider-pagination"
            className="donation-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
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
      </div> */}
      <div className="donation-container2">
        <DonateSLD rootClassName="donate-sld-root-class-name"></DonateSLD>
      </div>
    </div>
  )
}

export default Donation