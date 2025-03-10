import { React, useState } from "react";

import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./Styles/contact.css";
import GMap from "../components/GoogleMaps.jsx";
import Contactimage from "./Images/IMG_1696.jpg";
import NGOICON from "./../components/Images/GCAHF.png";
import axios from "./../Axios/axios.js";

const ButtonMailto = ({ mailto, label }) => {
  return (
    <Link
      className="tw-px-4 tw-py-2 lg:tw-self-start  tw-self-center tw-bg-green-200 hover:tw-rounded-lg tw-transition-all tw-duration-300 hover:tw-shadow-2xl tw-break-all hover:-tw-translate-y-3 hover:tw-scale-105"
      to="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};
const Contact = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setshowSuccess] = useState(false);

  const handleSubmit = async () => {
    if (name === "" || phone === "" || email === "" || message === "") {
      return;
    }
    await axios
      .post("/mail", {
        name: name,
        phone: phone,
        email: email,
        message: message,
      })
      .then((res) => {
        setshowSuccess(true);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
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
      <div className="contact-container">
        <Helmet>
          <title>Contact - GCAHF</title>
          <meta
            property="og:title"
            content="Contact - Agitated Brisk Chicken"
          />
        </Helmet>
        <div className="contact-container01 ">
          <div className="contact-container02">
            <img alt="image" src={Contactimage} className="contact-image" />
          </div>
          <div className="contact-container03 tw-shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] tw-p-4 tw-mx-4">
            <div className=" tw-flex tw-flex-col lg:tw-text-left ">
              <h1 className=" tw-font-bold ">Contact Us</h1>
              <span className="contact-text01">+91-9869166157</span>
            </div>
            <div className=" tw-flex tw-flex-col     lg:tw-text-left">
              <h1 className=" tw-font-bold ">Address</h1>
              <span className="contact-text01">
                Fiza Apartment, B-001, Plot No 195, near MSEB OFFICE, Sector
                12B, Bonkode, Kopar Khairane, Navi Mumbai, Maharashtra 400709
              </span>
            </div>
            {/* <div className=" tw-flex tw-flex-col tw-text-center  md:tw-text-center lg:tw-text-left">
            <h1 className=" tw-font-bold ">Call US</h1>
            <span className="contact-text01">
              Erat netus est hendrerit, nullam et quis ad cras porttitor
              iaculis. Bibendum vulputate cras aenean.
            </span>
          </div> */}
            <div className=" tw-flex tw-flex-col group    lg:tw-text-left">
              <h1 className=" tw-font-bold  group-hover:-tw-translate-y-4 tw-transition-all tw-duration-200 ">
                Mail
              </h1>
              <ButtonMailto
                label="Write us an E-Mail"
                mailto="mailto:vijaykumarsgaikwad@gmail.com"
              />
              <span className="contact-text01 tw-break-all">
                vijaykumarsgaikwad@gmail.com
              </span>
            </div>
          </div>
        </div>

        <div className="contact-container08 tw-gap-3 ">
          <div className="contact-container09 hidden ngl:tw-flex">
            <GMap />
          </div>
          <div className="tw-w-4/5 lg:tw-w-2/5">
            {showSuccess&&<div className="tw-bg-[#82ed9b] tw-p-4 tw-text-center tw-mx-4 tw-mb-3 tw-shadow-md tw-w-full tw-animate-[pulse_2s_ease-in-out_2]">
              <p>Enquiry has been recorded.</p>
            </div>}
            <div className="tw-flex tw-flex-col tw-justify-center tw-w-full tw-mx-4 tw-shadow-lg ">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
                enctype="multipart/form-data"
                className="tw-flex tw-flex-col tw-items-center tw-mx-4"
              >
                <span className="contact-text12 lg:tw-self-center">
                  Have a Enquiry? Write to us
                </span>
                <span className="contact-text13"></span>

                <div className="tw-w-full tw-mx-3 tw-my-2">
                  <label className="">Name</label>
                  <input
                    required
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className=" input tw-w-full tw-peer tw-border-b-2 tw-border-0 tw-appearance-none tw-border-gray-300 focus:tw-outline-none focus:tw-border-blue-400"
                  />
                </div>
                <div className="tw-w-full tw-mx-3 tw-my-2">
                  <label className="">Phone Number</label>
                  <input
                    required
                    onChange={(e) => setPhone(e.target.value)}
                    type="number"
                    className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none input tw-w-full tw-peer tw-border-b-2 tw-border-0 tw-appearance-none tw-border-gray-300 focus:tw-outline-none focus:tw-border-blue-400"
                  />
                </div>
                <div className="tw-w-full tw-mx-3 tw-my-2">
                  <label className="">Email</label>
                  <input
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className=" input tw-w-full tw-peer tw-border-b-2 tw-border-0 tw-appearance-none tw-border-gray-300 focus:tw-outline-none focus:tw-border-blue-400"
                  />
                </div>
                <span className="contact-text19">Message</span>
                <textarea
                  required
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  className="tw-block tw-p-2.5 tw-w-full tw-text-sm tw-text-gray-900 tw-bg-gray-50 tw-rounded-lg tw-border tw-border-gray-300 tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-dark:bg-gray-700 tw-dark:border-gray-600 tw-dark:placeholder-gray-400 tw-dark:text-white tw-dark:focus:ring-blue-500 tw-dark:focus:border-blue-500"
                ></textarea>
                <button
                  type="submit"
                  className="tw-bg-[#82ed9b]  tw-w-full tw-px-4 tw-py-2 tw-my-4 tw-rounded-lg hover:tw-scale-105 hover:-tw-translate-y-2 hover:tw-shadow-xl tw-transition-all tw-duration-150"
                >
                  <span>
                    <span>Submit</span>
                    <br></br>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
