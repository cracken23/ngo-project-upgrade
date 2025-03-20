
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import GMap from "../components/GoogleMaps.jsx";
import Contactimage from "./Images/IMG_1696.jpg";
import NGOICON from "./../components/Images/GCAHF.png";
import axios from "./../Axios/axios.jsx";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (name === "" || phone === "" || email === "" || message === "") {
      setError("Please fill all fields");
      return;
    }
    
    setIsSubmitting(true);
    setError("");
    
    try {
      await axios.post("/mail", {
        name,
        phone,
        email,
        message,
      });
      
      setShowSuccess(true);
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (err) {
      console.error(err);
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="tw-fade-in">
      <Helmet>
        <title>Contact - GCAHF</title>
        <link rel="icon" href={NGOICON} />
        <meta name="description" content="Contact Geriatric Care and Health Foundation. Reach out to us for inquiries, partnerships, or to learn more about our services." />
        <meta name="keywords" content="Contact, Geriatric Care, Health Foundation, Elderly Care, Contact Form" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="tw-relative tw-h-[50vh] tw-w-full tw-overflow-hidden">
        <div 
          className="tw-absolute tw-inset-0 tw-bg-cover tw-bg-center tw-bg-no-repeat"
          style={{ backgroundImage: `url(${Contactimage})` }}
        ></div>
        <div className="tw-absolute tw-inset-0 tw-bg-black tw-opacity-50"></div>
        
        <div className="tw-absolute tw-inset-0 tw-flex tw-flex-col tw-items-center tw-justify-center tw-text-white tw-px-4 tw-text-center">
          <h1 className="tw-text-4xl md:tw-text-6xl tw-font-bold tw-mb-6 tw-slide-up tw-font-playfair">
            Get In Touch
          </h1>
          <div className="tw-h-1 tw-w-24 tw-bg-white tw-mx-auto tw-mb-6"></div>
          <p className="tw-text-xl tw-max-w-3xl tw-mx-auto tw-text-gray-100">
            Have questions about our services or want to get involved? We'd love to hear from you!
          </p>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="tw-py-20">
        <div className="tw-container tw-mx-auto tw-px-4">
          <div className="tw-grid md:tw-grid-cols-3 tw-gap-8">
            <ContactCard 
              icon={
                <svg className="tw-w-12 tw-h-12 tw-text-[#ea5507]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              }
              title="Phone"
              content="+91-9869166157"
            />
            
            <ContactCard 
              icon={
                <svg className="tw-w-12 tw-h-12 tw-text-[#4CCD99]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
              title="Email"
              content="vijaykumarsgaikwad@gmail.com"
              action={{
                text: "Send Email",
                href: "mailto:vijaykumarsgaikwad@gmail.com"
              }}
            />
            
            <ContactCard 
              icon={
                <svg className="tw-w-12 tw-h-12 tw-text-[#ea5507]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
              title="Address"
              content="Fiza Apartment, B-001, Plot No 195, near MSEB OFFICE, Sector 12B, Bonkode, Kopar Khairane, Navi Mumbai, Maharashtra 400709"
            />
          </div>
        </div>
      </section>
      
      {/* Map & Contact Form */}
      <section className="tw-py-20 tw-bg-neutral-light">
        <div className="tw-container tw-mx-auto tw-px-4">
          <div className="tw-grid md:tw-grid-cols-2 tw-gap-10">
            <div className="tw-bg-white tw-rounded-2xl tw-shadow-lg tw-overflow-hidden">
              <div className="tw-h-[500px]">
                <GMap />
              </div>
            </div>
            
            <div className="tw-bg-white tw-rounded-2xl tw-shadow-lg tw-p-8">
              <h2 className="tw-text-3xl tw-font-bold tw-mb-6 tw-text-center tw-font-playfair">Send Us a Message</h2>
              <div className="tw-h-1 tw-w-24 tw-bg-[#4CCD99] tw-mx-auto tw-mb-6"></div>
              
              {showSuccess && (
                <div className="tw-mb-6 tw-bg-[#4CCD99]/20 tw-border tw-border-[#4CCD99] tw-text-[#3ba57a] tw-p-4 tw-rounded-lg tw-text-center tw-animate-pulse">
                  <p className="tw-font-medium">Thank you! Your message has been sent successfully.</p>
                </div>
              )}
              
              {error && (
                <div className="tw-mb-6 tw-bg-red-50 tw-border tw-border-red-200 tw-text-red-500 tw-p-4 tw-rounded-lg tw-text-center">
                  <p className="tw-font-medium">{error}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="tw-space-y-6">
                <div>
                  <label className="tw-block tw-mb-2 tw-font-medium tw-text-gray-700">Name</label>
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
                  <label className="tw-block tw-mb-2 tw-font-medium tw-text-gray-700">Phone Number</label>
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
                  <label className="tw-block tw-mb-2 tw-font-medium tw-text-gray-700">Email</label>
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
                  <label className="tw-block tw-mb-2 tw-font-medium tw-text-gray-700">Message</label>
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
                  disabled={isSubmitting}
                  className={`tw-w-full tw-bg-[#ea5507] hover:tw-bg-[#d4480d] tw-text-white tw-font-medium tw-px-6 tw-py-3 tw-rounded-lg tw-shadow tw-transition-all tw-duration-300 ${
                    isSubmitting ? "tw-opacity-70 tw-cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Submit Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Social Media */}
      <section className="tw-py-20">
        <div className="tw-container tw-mx-auto tw-px-4 tw-text-center">
          <h2 className="tw-text-3xl tw-font-bold tw-mb-6 tw-font-playfair">Connect With Us</h2>
          <div className="tw-h-1 tw-w-24 tw-bg-[#ea5507] tw-mx-auto tw-mb-6"></div>
          <p className="tw-text-gray-600 tw-max-w-3xl tw-mx-auto tw-mb-8">
            Follow us on social media to stay updated with our latest news, events, and initiatives
          </p>
          
          <div className="tw-flex tw-justify-center tw-space-x-8">
            <a 
              href="https://www.facebook.com/profile.php?id=100069967083154&sfnsn=wiwspwa&mibextid=RUbZ1f"
              target="_blank"
              rel="noopener noreferrer"
              className="tw-flex tw-flex-col tw-items-center tw-group"
            >
              <div className="tw-w-16 tw-h-16 tw-rounded-full tw-bg-[#f5f5f5] tw-flex tw-items-center tw-justify-center tw-mb-3 tw-transition-all tw-duration-300 group-hover:tw-bg-[#3b5998] group-hover:tw-shadow-lg">
                <svg className="tw-w-8 tw-h-8 tw-text-[#3b5998] group-hover:tw-text-white tw-transition-colors tw-duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3A5 5 0 0 0 10 7v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </div>
              <span className="tw-text-gray-700 tw-font-medium group-hover:tw-text-[#3b5998] tw-transition-colors tw-duration-300">Facebook</span>
            </a>
            
            <a 
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="tw-flex tw-flex-col tw-items-center tw-group"
            >
              <div className="tw-w-16 tw-h-16 tw-rounded-full tw-bg-[#f5f5f5] tw-flex tw-items-center tw-justify-center tw-mb-3 tw-transition-all tw-duration-300 group-hover:tw-bg-[#E1306C] group-hover:tw-shadow-lg">
                <svg className="tw-w-8 tw-h-8 tw-text-[#E1306C] group-hover:tw-text-white tw-transition-colors tw-duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4Z"></path>
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"></path>
                  <path d="M16.5 7.5C16.5 8.05228 16.0523 8.5 15.5 8.5C14.9477 8.5 14.5 8.05228 14.5 7.5C14.5 6.94772 14.9477 6.5 15.5 6.5C16.0523 6.5 16.5 6.94772 16.5 7.5Z"></path>
                </svg>
              </div>
              <span className="tw-text-gray-700 tw-font-medium group-hover:tw-text-[#E1306C] tw-transition-colors tw-duration-300">Instagram</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactCard = ({ icon, title, content, action }) => {
  return (
    <div className="tw-bg-white tw-rounded-2xl tw-shadow-lg tw-p-8 tw-text-center tw-h-full tw-flex tw-flex-col tw-transition-all tw-duration-300 hover:tw-shadow-xl hover:tw-translate-y-[-5px]">
      <div className="tw-bg-gray-50 tw-rounded-full tw-w-20 tw-h-20 tw-flex tw-items-center tw-justify-center tw-mx-auto tw-mb-4">
        {icon}
      </div>
      <h3 className="tw-text-xl tw-font-bold tw-mb-3 tw-font-playfair">{title}</h3>
      <p className="tw-text-gray-600 tw-mb-6 tw-flex-grow">{content}</p>
      
      {action && (
        <a 
          href={action.href}
          className="tw-inline-block tw-bg-[#4CCD99] hover:tw-bg-[#3ba57a] tw-text-white tw-font-medium tw-px-6 tw-py-2 tw-rounded-lg tw-shadow tw-transition-all tw-duration-300 tw-mx-auto"
        >
          {action.text}
        </a>
      )}
    </div>
  );
};

export default Contact;
