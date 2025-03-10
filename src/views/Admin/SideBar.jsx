import React from "react";
import { CiMenuBurger } from "react-icons/ci";
const SideBar = () => {
  return (
    <>
      <div className=" tw-mr-12 tw-fixed tw-top-0 tw-h-screen tw-w-32 tw-flex tw-flex-col tw-bg-slate-600 tw-text-emerald-50 tw-shadow-md  ">
        <Icons text={<i>Patients</i>} />
        <Icons text={<i>Donations</i>} />
        
      </div>

      
    </>
  );
};
const Icons = ({ text }) => {
  return (
    <div className="tw-relative tw-flex tw-items-center tw-justify-center tw-p-2 tw-h-auto tw-w-auto tw-mt-2 tw-mb-2 tw-mx-auto tw-bg-gray-600 tw-text-black hover:tw-bg-gray-50 tw-rounded-3xl hover:tw-rounded-xl tw-transition-all tw-duration-300 ">
      {text}
    </div>
  );
};

export default SideBar;
