import React from "react";

const Abouter = ({ header, content, Icons }) => {
  return (
    <>
      <div className="tw-m-4">
        <div className=" tw-flex tw-bg-[#82ed9b] tw-p-4 tw-text-[#ea5507] tw-font-bold tw-items-center tw-justify-center lg:tw-justify-left">
          <div className="tw-mx-4">{Icons}</div>
          <p className="tw-text-xl">{header}</p>
        </div>
        <div className="tw-flex tw-shadow-xl tw-p-4 tw-my-2  tw-text-center lg:tw-text-left">
          <p className="tw-text-xl tw-font-medium">{content}</p>
        </div>
      </div>
    </>
  );
};

export default Abouter;
