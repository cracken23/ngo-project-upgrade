
import { React, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./Styles/contact.css";
import GMap from "../components/GoogleMaps.jsx";
import Contactimage from "./Images/IMG_1696.jpg";
import NGOICON from "./../components/Images/GCAHF.png";
import axios from "../Axios/axios.jsx";

const ButtonMailto = ({ mailto, label }) => {
  return (
    <Link
      className="tw-px-6 tw-py-3 tw-bg-[#4CCD99] tw-text-white tw-rounded-lg hover:tw-bg-[#3ba57a] tw-transition-all tw-duration-300 tw-inline-block tw-text-center tw-font-medium"
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
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Helmet>
        <title>Contact - GCAHF</title>
        <link rel="icon" href={NGOICON} />
        <meta name="description" content="Contact Geriatric Care and Health Foundation. Reach out to us for inquiries, partnerships, or to learn more about our services." />
        <meta name="keywords" content="Contact, Geriatric Care, Health Foundation, Elderly Care, Contact Form" />
      </Helmet>
      
      <div className="contact-container tw-py-10 tw-fade-in">
        {/* Hero Section */}
        <div className="tw-max-w-7xl tw-mx-auto tw-px-4 tw-mb-16">
          <div className="tw-text-center tw-mb-12">
            <h1 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-mb-4 tw-font-playfair">Get In Touch</h1>
            <p className="tw-text-lg tw-max-w-3xl tw-mx-auto tw-text-neutral-medium">
              Have questions about our services or want to get involved? We'd love to hear from you!
            </p>
          </div>
          
          <div className="tw-grid md:tw-grid-cols-2 tw-gap-10">
            <div className="tw-rounded-2xl tw-overflow-hidden tw-shadow-lg tw-h-[400px]">
              <img 
                src={Contactimage} 
                alt="Contact" 
                className="tw-w-full tw-h-full tw-object-cover" 
              />
            </div>
            
            <div className="tw-bg-white tw-rounded-2xl tw-shadow-lg tw-p-8 tw-flex tw-flex-col tw-justify-between">
              <div className="tw-space-y-6">
                <div>
                  <h2 className="tw-text-2xl tw-font-bold tw-mb-2 tw-font-playfair tw-text-[#e59d76]">Contact Us</h2>
                  <p className="tw-text-lg tw-font-medium">+91-9869166157</p>
                </div>
                
                <div>
                  <h2 className="tw-text-2xl tw-font-bold tw-mb-2 tw-font-playfair tw-text-[#4CCD99]">Address</h2>
                  <p className="tw-text-neutral-medium">
                    Fiza Apartment, B-001, Plot No 195, near MSEB OFFICE, Sector
                    12B, Bonkode, Kopar Khairane, Navi Mumbai, Maharashtra 400709
                  </p>
                </div>
                
                <div>
                  <h2 className="tw-text-2xl tw-font-bold tw-mb-2 tw-font-playfair tw-text-[#e59d76]">Email</h2>
                  <p className="tw-text-neutral-medium tw-mb-3">vijaykumarsgaikwad@gmail.com</p>
                  <ButtonMailto
                    label="Write us an Email"
                    mailto="mailto:vijaykumarsgaikwad@gmail.com"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map & Form Section */}
        <div className="tw-max-w-7xl tw-mx-auto tw-px-4 tw-mb-16">
          <div className="tw-grid md:tw-grid-cols-2 tw-gap-10">
            <div className="tw-h-[500px] tw-rounded-2xl tw-overflow-hidden tw-shadow-lg">
              <GMap />
            </div>
            
            <div className="tw-bg-white tw-rounded-2xl tw-shadow-lg tw-p-8">
              {showSuccess && (
                <div className="tw-bg-[#4CCD99]/20 tw-border tw-border-[#4CCD99] tw-text-[#3ba57a] tw-p-4 tw-rounded-lg tw-mb-6 tw-text-center tw-animate-pulse">
                  <p className="tw-font-medium">Thank you! Your inquiry has been received.</p>
                </div>
              )}
              
              <div className="tw-mb-6 tw-text-center">
                <h2 className="tw-text-2xl tw-font-bold tw-mb-2 tw-font-playfair">Send Us a Message</h2>
                <p className="tw-text-neutral-medium">Have a question or inquiry? Fill out the form below.</p>
              </div>
              
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
                className="tw-space-y-6"
              >
                <div>
                  <label className="tw-block tw-mb-2 tw-font-medium">Name</label>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="tw-w-full tw-px-4 tw-py-3 tw-rounded-lg tw-border tw-border-gray-300 focus:tw-border-[#4CCD99] focus:tw-ring-2 focus:tw-ring-[#4CCD99]/20 tw-outline-none tw-transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="tw-block tw-mb-2 tw-font-medium">Phone Number</label>
                  <input
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="number"
                    className="tw-w-full tw-px-4 tw-py-3 tw-rounded-lg tw-border tw-border-gray-300 focus:tw-border-[#4CCD99] focus:tw-ring-2 focus:tw-ring-[#4CCD99]/20 tw-outline-none tw-transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div>
                  <label className="tw-block tw-mb-2 tw-font-medium">Email</label>
                  <input
                    required
                    value={email}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="tw-w-full tw-px-4 tw-py-3 tw-rounded-lg tw-border tw-border-gray-300 focus:tw-border-[#4CCD99] focus:tw-ring-2 focus:tw-ring-[#4CCD99]/20 tw-outline-none tw-transition-all"
                    placeholder="Your email address"
                  />
                </div>
                
                <div>
                  <label className="tw-block tw-mb-2 tw-font-medium">Message</label>
                  <textarea
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="4"
                    className="tw-w-full tw-px-4 tw-py-3 tw-rounded-lg tw-border tw-border-gray-300 focus:tw-border-[#4CCD99] focus:tw-ring-2 focus:tw-ring-[#4CCD99]/20 tw-outline-none tw-transition-all resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="tw-w-full tw-bg-[#e59d76] hover:tw-bg-[#d48a63] tw-text-white tw-font-medium tw-px-6 tw-py-3 tw-rounded-lg tw-shadow tw-transition-all tw-duration-300"
                >
                  Submit Message
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
