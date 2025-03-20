import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Styles/donate-sld.css";
import axios from "../Axios/axios";
import PuffLoader from "react-spinners/PuffLoader";

const DonateSLD = (props) => {
  const [amount, setAmount] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [errmsg, setErrmsg] = useState("");

  const RazorpayButton = () => {
    useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://cdn.razorpay.com/static/embed_btn/bundle.js";
      script.async = true;
      document.body.appendChild(script);
    }, []);

    return (
      <div
        className="razorpay-embed-btn"
        data-url="https://pages.razorpay.com/pl_O0XaJRlaAzn9vB/view"
        data-text="Donate Now"
        data-color="#528FF0"
        data-size="large"
      />
    );
  };

  return (
    <div
      className={`donate-sld-container ${props.rootClassName} tw-max-w-3xl tw-mx-auto tw-p-8 tw-rounded-2xl tw-shadow-xl tw-bg-gradient-to-br tw-from-white tw-to-[#f9fafb]`}
    >
      <div className="tw-text-center">
        <h2 className="tw-text-4xl tw-font-extrabold tw-text-[#1f2937]">
          {props.text2}
        </h2>
        <div className="tw-h-1 tw-w-16 tw-bg-[#ea5507] tw-mx-auto tw-my-3 tw-rounded" />

        <p className="tw-text-lg tw-text-gray-600 tw-mt-4 tw-mb-8 tw-max-w-xl tw-mx-auto">
          Your generous donation helps us provide essential services and care to elderly individuals in need. Every contribution makes a difference.
        </p>

        <div className="tw-bg-white tw-shadow-sm tw-rounded-lg tw-p-6 tw-border tw-border-gray-200">
          <p className="tw-text-gray-700 tw-mb-4">{props.text}</p>

          {spinner ? (
            <div className="tw-flex tw-justify-center tw-my-6">
              <PuffLoader loading={spinner} color="#ea5507" size={50} />
            </div>
          ) : (
            <div className="tw-flex tw-justify-center tw-my-6">
              <RazorpayButton />
            </div>
          )}

          {errmsg && (
            <p className="tw-text-red-600 tw-text-sm tw-mt-2 tw-font-medium">
              {errmsg}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

DonateSLD.defaultProps = {
  button1: "Next",
  button3: "Rs.1000",
  rootClassName: "",
  text1: "All Donations to Geriatric Care and Health Foundation are 50% Tax Exempt under section 80G of IT Act, 1961",
  text: "Minimum Amount should be Rs. 300/-",
  button2: "Rs.500",
  text2: "Donate",
  button: "Rs.250",
};

DonateSLD.propTypes = {
  button1: PropTypes.string,
  button3: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  button2: PropTypes.string,
  text2: PropTypes.string,
  button: PropTypes.string,
};

export default DonateSLD;
